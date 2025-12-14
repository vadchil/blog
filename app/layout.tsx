import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mas Satria',
    template: '%s | Mas Satria',
  },
  description: 'Sebuah blog modern dan minimalis dengan desain yang bersih serta konten yang dibuat dengan penuh pemikiran.',
  keywords: ['blog', 'minimalis', 'desain', 'menulis'],
  authors: [{ name: 'Satria Fadhil Muhammad' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Mas Satria',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

