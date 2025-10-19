import Head from "next/head"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export default function SEO({
  title = "Mindscape Global Formations - Start Your U.S. LLC in 1 Day | $50 + State Fee",
  description = "Fast, affordable, and reliable LLC formation service by Mindscape Analytics. Get a U.S. bank account, PayPal setup, and free business consultation. Starting at $50 + state fees.",
  keywords = "LLC Formation, Start U.S. Business, Open PayPal Account, Amazon Seller LLC, Business Formation, Mindscape Analytics",
  image = "/placeholder-logo.png",
  url = "https://ll.mindscapeanalytics.com",
  type = "website"
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Mindscape Global Formations" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional */}
      <meta name="author" content="Mindscape Analytics" />
      <meta name="theme-color" content="#00B589" />
      <link rel="canonical" href={url} />
    </Head>
  )
}
