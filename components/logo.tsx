import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  inverted = false,
  priority = false,
}: {
  className?: string
  inverted?: boolean
  priority?: boolean
}) {
  return (
    <Image
      src="/images/ingen-logo.png"
      alt="InGEN Systems"
      width={640}
      height={214}
      priority={priority}
      className={cn('h-auto w-auto select-none', inverted && 'invert', className)}
    />
  )
}
