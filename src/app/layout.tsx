import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'VoterData Insights - Assembly-Constituency Voter Database',
    template: '%s | VoterData Insights'
  },
  description: 'Access pure-random sampling frames from India\'s electoral data for market research, political analysis, and outreach campaigns.',
  keywords: ['voter data', 'electoral database', 'constituency data', 'market research', 'political analysis', 'India elections'],
  authors: [{ name: 'VoterData Insights' }],
  creator: 'VoterData Insights',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://voterdatainsights.com',
    siteName: 'VoterData Insights',
    title: 'VoterData Insights - Assembly-Constituency Voter Database',
    description: 'Access pure-random sampling frames from India\'s electoral data for market research, political analysis, and outreach campaigns.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VoterData Insights'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoterData Insights - Assembly-Constituency Voter Database',
    description: 'Access pure-random sampling frames from India\'s electoral data for market research, political analysis, and outreach campaigns.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
