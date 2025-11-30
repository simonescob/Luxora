import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import About from '../components/About'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorBoundary from '../components/ErrorBoundary'

const AboutPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-secondary-900 flex items-center justify-center">
        <LoadingSpinner 
          size="lg" 
          text="Loading About Page..." 
        />
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <Helmet>
        <title>About Luxora - Premium Sustainable Home Decor</title>
        <meta name="description" content="Learn about Luxora's mission to provide premium, sustainable home decor. Discover our story, team, and commitment to environmental responsibility." />
        <meta name="keywords" content="luxora, about, sustainable home decor, premium furniture, eco-friendly design" />
        <meta property="og:title" content="About Luxora - Premium Sustainable Home Decor" />
        <meta property="og:description" content="Transforming living spaces with sustainable luxury and timeless design since 2018" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxora.com/about" />
        <meta property="og:image" content="https://luxora.com/images/about-hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Luxora - Premium Sustainable Home Decor" />
        <meta name="twitter:description" content="Transforming living spaces with sustainable luxury and timeless design since 2018" />
        <meta name="twitter:image" content="https://luxora.com/images/about-hero.jpg" />
        <link rel="canonical" href="https://luxora.com/about" />
      </Helmet>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Luxora",
          "description": "Premium sustainable home decor company transforming living spaces since 2018",
          "url": "https://luxora.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "Luxora",
            "description": "Premium sustainable home decor company",
            "foundingDate": "2018",
            "founder": {
              "@type": "Person",
              "name": "Elena Rodriguez"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Design Avenue",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "email": "hello@luxora.com",
              "contactType": "customer service"
            }
          }
        })}
      </script>

      <main id="main-content" role="main">
        <About />
      </main>
    </ErrorBoundary>
  )
}

export default AboutPage