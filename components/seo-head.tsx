import Head from "next/head"

interface SeoHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  structuredData?: object
}

export default function SEOHead({
  title = "Mindscape Global Formations - Start Your U.S. LLC in 1 Day | $50 + State Fee",
  description = "Fast, affordable, and reliable LLC formation service by Mindscape Analytics. Get a U.S. bank account, PayPal setup, and free business consultation. Starting at $50 + state fees.",
  keywords = "LLC Formation, Start U.S. Business, Open PayPal Account, Amazon Seller LLC, Business Formation, Mindscape Analytics, Wyoming LLC, Delaware LLC, Business Registration",
  ogImage = "/og-image.jpg",
  ogUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ll.mindscapeanalytics.com",
  structuredData
}: SeoHeadProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mindscape Global Formations",
    "description": description,
    "url": ogUrl,
    "logo": `${ogUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-307-210-6155",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 N Gould St Ste N",
      "addressLocality": "Sheridan",
      "addressRegion": "WY",
      "postalCode": "82801",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://wa.link/6f9du7",
      "https://whatsapp.com/channel/0029Vb77sub5fM5b8NJKup12"
    ],
    "offers": {
      "@type": "Offer",
      "name": "LLC Formation Service",
      "description": "Complete LLC formation with all required documentation",
      "price": "50",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mindscape Analytics" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="Mindscape Global Formations" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={ogUrl} />
      <meta name="theme-color" content="#0A2540" />
      <meta name="msapplication-TileColor" content="#0A2540" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
    </Head>
  )
}
