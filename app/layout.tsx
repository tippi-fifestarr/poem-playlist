import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://poem-playlist.vercel.app'),
  title: 'Poem Playlist: Family',
  description: 'A curated playlist that tells a story through music - from self-possession to surrender and back again. 18 tracks woven into a poetic journey.',
  keywords: 'playlist, music, poetry, curated, indie, electronic, soul, family, mom',
  authors: [{ name: 'Playlist Poet' }],
  openGraph: {
    title: 'Poem Playlist: Family',
    description: 'A curated playlist that tells a story through music - from self-possession to surrender and back again.',
    type: 'website',
    url: 'https://poem-playlist.vercel.app',
    siteName: 'Poem Playlist',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Poem Playlist: Family - A curated musical journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Poem Playlist: Family',
    description: 'A curated playlist that tells a story through music - from self-possession to surrender and back again.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f2937',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 