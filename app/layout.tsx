import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'

import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700', '900'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Olivia Nail Lounge | Premium Nail Care',
  description: 'Elegant nail salon offering premium manicures, pedicures, gel polish, and custom nail art in a luxurious setting.',
  keywords: 'nail salon, manicure, pedicure, gel polish, nail art, luxury nails',
  generator: 'v0.app',
  openGraph: {
    title: 'Olivia Nail Lounge | Premium Nail Care',
    description: 'Experience luxury nail care at Olivia Nail Lounge',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#F7DADA',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
