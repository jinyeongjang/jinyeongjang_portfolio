import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] animate-gradient',
        className
      )}
    >
      {children}
    </span>
  );
}
