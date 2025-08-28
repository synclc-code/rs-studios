import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'River City Studios | Premier Recording Studio in Grand Rapids, Michigan',
  description: 'Michigan\'s longest-running recording and production studio. Professional recording, mixing, mastering, and new media production in Grand Rapids since 1977.',
  keywords: 'recording studio, Grand Rapids, Michigan, audio production, mixing, mastering, music recording, ADR, voice over',
  authors: [{ name: 'River City Studios' }],
  creator: 'River City Studios',
  publisher: 'River City Studios',
  openGraph: {
    title: 'River City Studios | Premier Recording Studio',
    description: 'Michigan\'s longest-running recording and production studio since 1977',
    url: 'https://rivercitystudios.com',
    siteName: 'River City Studios',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'River City Studios | Premier Recording Studio',
    description: 'Michigan\'s longest-running recording and production studio since 1977',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
