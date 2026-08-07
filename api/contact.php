<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');

function respond(int $statusCode, array $payload): never
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function logMailError(string $message): void
{
    $logDirectory = __DIR__ . '/logs';

    if (!is_dir($logDirectory)) {
        mkdir($logDirectory, 0755, true);
    }

    error_log(
        '[' . date('Y-m-d H:i:s') . '] ' . $message . PHP_EOL,
        3,
        $logDirectory . '/mail.log'
    );
}

function sanitizeText(mixed $value, int $maxLength): string
{
    $text = is_string($value) ? $value : '';
    $text = str_replace(["\r", "\n", "\0"], ' ', $text);
    $text = strip_tags($text);
    $text = trim(preg_replace('/[\x00-\x1F\x7F]/u', '', $text) ?? '');

    return mb_substr($text, 0, $maxLength);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false]);
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    respond(400, ['success' => false]);
}

$honeypot = sanitizeText($data['website'] ?? '', 120);

if ($honeypot !== '') {
    respond(400, ['success' => false]);
}

$name = sanitizeText($data['name'] ?? '', 120);
$institution = sanitizeText($data['institution'] ?? '', 180);
$email = sanitizeText($data['email'] ?? '', 254);
$phone = sanitizeText($data['phone'] ?? '', 50);
$message = sanitizeText($data['message'] ?? '', 5000);

if ($name === '' || $email === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['success' => false]);
}

$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '';
$ipAddress = filter_var($ipAddress, FILTER_VALIDATE_IP) ? $ipAddress : 'brak danych';

/*
 * Uzupełnij poniższe dane SMTP w środowisku produkcyjnym.
 * Nie umieszczaj haseł SMTP w repozytorium.
 */
$SMTP_HOST = ''; // Adres serwera SMTP OVH.
$SMTP_PORT = 587; // Port SMTP OVH.
$SMTP_USERNAME = ''; // Nazwa użytkownika SMTP.
$SMTP_PASSWORD = ''; // Hasło SMTP.
$SMTP_FROM = ''; // Adres nadawcy.
$SMTP_FROM_NAME = 'InGEN Systems'; // Nazwa nadawcy.
$SMTP_TO = ''; // Adres odbiorcy wiadomości.

if ($SMTP_HOST === '' || $SMTP_USERNAME === '' || $SMTP_PASSWORD === '' || $SMTP_FROM === '' || $SMTP_TO === '') {
    logMailError('Nie uzupełniono konfiguracji SMTP.');
    respond(500, ['success' => false]);
}

try {
    require_once __DIR__ . '/PHPMailer/Exception.php';
    require_once __DIR__ . '/PHPMailer/SMTP.php';
    require_once __DIR__ . '/PHPMailer/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $SMTP_HOST;
    $mail->Port = $SMTP_PORT;
    $mail->SMTPAuth = true;
    $mail->Username = $SMTP_USERNAME;
    $mail->Password = $SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isHTML(false);

    $mail->setFrom($SMTP_FROM, $SMTP_FROM_NAME);
    $mail->addAddress($SMTP_TO);
    $mail->addReplyTo($email, $name);
    $mail->Subject = 'Nowe zapytanie ze strony InGEN Systems';
    $mail->Body = "Imię i nazwisko: {$name}\n"
        . "Placówka: {$institution}\n"
        . "Telefon: {$phone}\n"
        . "E-mail: {$email}\n\n"
        . "Treść wiadomości:\n{$message}\n\n"
        . 'Data wysłania: ' . date('Y-m-d H:i:s') . "\n"
        . "Adres IP: {$ipAddress}";

    $mail->send();
    respond(200, ['success' => true]);
} catch (Exception $exception) {
    logMailError('Błąd SMTP: ' . $exception->getMessage());
    respond(500, ['success' => false]);
} catch (Throwable $exception) {
    logMailError('Błąd formularza: ' . $exception->getMessage());
    respond(500, ['success' => false]);
}
