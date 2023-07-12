import type { Metadata } from 'next'

import { noto } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'RSS Reader',
  description: 'Your Web-based, Hassle-Free News Aggregator!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-amber-100 text-amber-950">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
