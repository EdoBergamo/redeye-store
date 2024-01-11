import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { getServerSession } from 'next-auth'
import SessionProvider from '@/utils/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedEye | Cheats Reinvented',
  description: 'Discover cutting-edge cheats and enhancements for an unparalleled gaming experience with RedEye.',
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  keywords: "RedEye, Cheats, Gaming, Reinvented, Game Enhancements",
  authors: [
    {
      name: 'amtriix',
      url: 'https://redeyes.vip',
    },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <head>
        <script async src="https://embed.sellpass.io/embed.js"></script>
        <script async src="https://cdn.sellix.io/static/js/embed.js"></script>
        <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
