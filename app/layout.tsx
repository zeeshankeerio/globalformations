import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import ErrorBoundary from "@/components/error-boundary"
import AccessibilityImprovements from "@/components/accessibility-improvements"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Mindscape Global Formations — Form a U.S. LLC Fast | $50 + State Fee",
  description:
    "Professional, USA‑based LLC formation. Expert filing, EIN, U.S. banking, and payment processing. Transparent pricing: $50 + state fee.",
  generator: "Next.js",
  keywords:
    "LLC Formation, Start U.S. Business, Open PayPal Account, Amazon Seller LLC, Business Formation, EIN, Registered Agent, Mindscape Analytics",
  authors: [{ name: "Mindscape Analytics" }],
  creator: "Mindscape Analytics",
  publisher: "Mindscape Analytics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ll.mindscapeanalytics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Mindscape Global Formations — Form a U.S. LLC Fast',
    description: 'Professional, USA‑based LLC formation with expert filing and banking setup.',
    siteName: 'Mindscape Global Formations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mindscape Global Formations — Form a U.S. LLC Fast',
    description: 'Professional, USA‑based LLC formation with expert filing and banking setup.',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <head>
        {/* Visual/branding meta */}
        <meta name="theme-color" content="#0a1a2b" />
        <meta name="color-scheme" content="dark light" />
        {/* Performance: preconnect for analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}');
            `,
          }}
        />
      </head>
      {/*
        Visual addition: establish a navy/white base with subtle gold accents via Tailwind tokens.
        We keep theme tokens in CSS; this body class ensures consistent backdrop and legibility.
      */}
      <body className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 font-sans" suppressHydrationWarning={true}>
        {/* Accessibility: Skip link to jump to main content */}
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ErrorBoundary>
          <AccessibilityImprovements />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
