import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif, Playfair_Display } from 'next/font/google'

export const noto = Noto_Serif({ subsets: ['latin'], display: 'swap' })
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap'
})

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
