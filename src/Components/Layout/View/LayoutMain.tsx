'use client'

import { twMerge } from 'tailwind-merge'

export default function LayoutMain({ children, className }: { children: React.ReactNode; className?: string }) {
  return <main className={twMerge('w-full overflow-x-auto', className)}>{children}</main>
}
