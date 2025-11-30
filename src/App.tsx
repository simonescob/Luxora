import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import HeroPrototypePage from './pages/HeroPrototypePage'
import ErrorBoundary from './components/ErrorBoundary'
import { AuthProvider } from './contexts/AuthContext'
import { Product, ProductFormData } from './types'

// Product Context
const ProductContext = createContext<{
  products: Product[]
  addProduct: (product: ProductFormData) => void
  updateProduct: (id: number, product: ProductFormData) => void
  deleteProduct: (id: number) => void
} | null>(null)

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

// Dark Mode Context
const DarkModeContext = createContext<{
  isDarkMode: boolean
  toggleDarkMode: () => void
} | null>(null)

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

interface AppProps {
  children?: ReactNode
}

function App({ children }: AppProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('luxora-products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Initialize with mock data
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Emerald Velvet Cushion",
          description: "Luxurious emerald velvet cushion with gold embroidered details. Perfect statement piece for modern living spaces.",
          price: 89.99,
          category: "Textiles",
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 15,
          featured: true
        },
        {
          id: 2,
          name: "Minimalist Ceramic Vase",
          description: "Handcrafted ceramic vase with matte finish in slate gray. Perfect for fresh flowers or as decorative centerpiece.",
          price: 65.00,
          category: "Decor",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 8,
          featured: true
        },
        {
          id: 3,
          name: "Marble Coasters Set",
          description: "Set of 4 natural marble coasters with cork backing. Each piece unique with beautiful natural veining.",
          price: 45.99,
          category: "Kitchen",
          image: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 20,
          featured: false
        },
        {
          id: 4,
          name: "Brass Floor Lamp",
          description: "Elegant brass floor lamp with adjustable height. Creates warm ambient lighting for any room.",
          price: 299.99,
          category: "Lighting",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 5,
          featured: true
        },
        {
          id: 5,
          name: "Organic Cotton Throw",
          description: "Soft organic cotton throw blanket in sage green. Perfect for cozy evenings and meditation spaces.",
          price: 125.00,
          category: "Textiles",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 12,
          featured: true
        },
        {
          id: 6,
          name: "Wooden Serving Board",
          description: "Handcrafted acacia wood serving board with natural oil finish. Ideal for entertaining and charcuterie.",
          price: 78.50,
          category: "Kitchen",
          image: "https://images.unsplash.com/photo-1603189838371-d57dc0530ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 18,
          featured: false
        },
        {
          id: 7,
          name: "Glass Pendant Light",
          description: "Modern glass pendant light with adjustable cord. Adds contemporary elegance to any space.",
          price: 189.99,
          category: "Lighting",
          image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 7,
          featured: true
        },
        {
          id: 8,
          name: "Leather Bookmark",
          description: "Premium leather bookmark with brass detailing. A sophisticated gift for book lovers.",
          price: 24.99,
          category: "Accessories",
          image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 25,
          featured: false
        },
        {
          id: 9,
          name: "Succulent Plant Collection",
          description: "Collection of 3 rare succulent plants in designer ceramic pots. Low maintenance and beautiful.",
          price: 95.00,
          category: "Plants",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 10,
          featured: true
        },
        {
          id: 10,
          name: "Copper Watering Can",
          description: "Hand-hammered copper watering can with ergonomic design. Beautiful and functional for plant care.",
          price: 82.99,
          category: "Garden",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          stock: 6,
          featured: false
        }
      ]
      setProducts(mockProducts)
      localStorage.setItem('luxora-products', JSON.stringify(mockProducts))
    }
  }, [])

  // Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('luxora-products', JSON.stringify(products))
  }, [products])

  // Dark mode effects
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const addProduct = (newProduct: ProductFormData) => {
    const product: Product = {
      ...newProduct,
      id: Date.now(),
      featured: newProduct.featured || false
    }
    setProducts(prev => [...prev, product])
  }

  const updateProduct = (id: number, updatedProduct: ProductFormData) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...updatedProduct } : product
    ))
  }

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id))
  }

  const productValue = {
    products,
    addProduct,
    updateProduct,
    deleteProduct
  }

  const darkModeValue = {
    isDarkMode,
    toggleDarkMode: () => setIsDarkMode(prev => !prev)
  }

  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProductContext.Provider value={productValue}>
          <DarkModeContext.Provider value={darkModeValue}>
            <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
              {children || (
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/add-product" element={<AddProduct />} />
                    <Route path="/admin/edit/:id" element={<EditProduct />} />
                    <Route path="/prototype" element={<HeroPrototypePage />} />
                  </Routes>
                </ErrorBoundary>
              )}
            </div>
          </DarkModeContext.Provider>
        </ProductContext.Provider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App