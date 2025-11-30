import React from 'react'
import Hero from '../components/Hero'
import ProductsSection from '../components/ProductsSection'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <ProductsSection 
          title="Our Premium Collection"
          subtitle="Discover our carefully curated selection of premium home decor pieces that bring elegance and sophistication to every space."
          featured={false}
          showFilters={true}
        />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage