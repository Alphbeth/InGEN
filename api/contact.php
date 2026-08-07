<?php

declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');
error_reporting(E_ALL);
ini_set('error_log', __DIR__ . '/logs/php-error.log');

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
$SMTP_SECURE = ''; // Opcjonalny typ szyfrowania dla niestandardowego portu SMTP.
$SMTP_USER = ''; // Nazwa użytkownika SMTP.
$SMTP_PASS = ''; // Hasło SMTP.
$SMTP_FROM = ''; // Adres nadawcy.
$SMTP_FROM_NAME = 'InGEN Systems'; // Nazwa nadawcy.
$SMTP_TO = ''; // Adres odbiorcy wiadomości.

if ($SMTP_HOST === '' || $SMTP_USER === '' || $SMTP_PASS === '' || $SMTP_FROM === '' || $SMTP_TO === '') {
    logMailError('Nie uzupełniono konfiguracji SMTP.');
    respond(500, ['success' => false]);
}

try {
    $phpMailerFiles = [
        __DIR__ . '/PHPMailer/Exception.php',
        __DIR__ . '/PHPMailer/SMTP.php',
        __DIR__ . '/PHPMailer/PHPMailer.php',
    ];

    foreach ($phpMailerFiles as $phpMailerFile) {
        if (!file_exists($phpMailerFile)) {
            logMailError('Brakuje pliku PHPMailer: ' . basename($phpMailerFile));
            respond(500, ['success' => false, 'error' => 'Brakuje pliku biblioteki wysyłki.']);
        }
    }

    logMailError('Starting mail send...');

    foreach ($phpMailerFiles as $phpMailerFile) {
        require_once $phpMailerFile;
    }

    logMailError('Załadowano biblioteki PHPMailer.');

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $SMTP_HOST;
    $mail->Port = $SMTP_PORT;
    $mail->SMTPAuth = true;
    $mail->Username = $SMTP_USER;
    $mail->Password = $SMTP_PASS;

    if ($SMTP_PORT === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($SMTP_PORT === 587) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    } elseif ($SMTP_SECURE !== '') {
        $mail->SMTPSecure = $SMTP_SECURE;
    } else {
        throw new Exception('Nieprawidłowa konfiguracja szyfrowania SMTP.');
    }
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->isHTML(false);

    logMailError('Skonfigurowano SMTP.');

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

    logMailError('Rozpoczynanie wysyłki wiadomości.');
    $mail->send();
    logMailError('Wiadomość została wysłana.');
    respond(200, ['success' => true]);
} catch (Exception $exception) {
    logMailError('Błąd SMTP: ' . $exception->getMessage());
    respond(500, ['success' => false]);
} catch (Throwable $exception) {
    logMailError('Błąd formularza: ' . $exception->getMessage());
    respond(500, ['success' => false]);
}
