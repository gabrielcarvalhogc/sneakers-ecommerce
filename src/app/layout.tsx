import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

const kumbh = Kumbh_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Sneakers',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={kumbh.className}>{children}</body>
    </html>
  )
}
