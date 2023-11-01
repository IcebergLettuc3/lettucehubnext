import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Lettuce Hub</title>
        <link rel="icon" href='/images/icebergLettuce.ico' sizes='any'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
