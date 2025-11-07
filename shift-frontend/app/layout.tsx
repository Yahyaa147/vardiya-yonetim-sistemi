import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vardiya Sistemi',
  description: 'Vardiya Yönetim Sistemi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
