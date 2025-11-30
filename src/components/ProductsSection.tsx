import React, { useState, useMemo } from 'react'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Eye, 
  ShoppingBag, 
  Star,
  Heart,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Product } from '../types'
import { useProducts } from '../App'
import LoadingSpinner from './LoadingSpinner'

interface ProductsSectionProps {
  showFilters?: boolean
  featured?: boolean
  title?: string
  subtitle?: string
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  showFilters = true, 
  featured = false,
  title = "Our Collection",
  subtitle = "Discover our carefully curated selection of premium home decor pieces"
}) => {
  const { products } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)
  const [favorites, setFavorites] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Filter products based on props
  const filteredProducts = useMemo(() => {
    let filtered = featured 
      ? products.filter(product => product.featured)
      : products

    return filtered
  }, [products, featured])

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(filteredProducts.map(p => p.category)))]

  // Apply search, category filter, and sorting
  const processedProducts = useMemo(() => {
    let filtered = filteredProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof Product]
      let bValue: any = b[sortBy as keyof Product]

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }

      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })

    return filtered
  }, [filteredProducts, searchTerm, selectedCategory, sortBy, sortOrder])

  // Handle loading state for filters
  React.useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [searchTerm, selectedCategory, sortBy, sortOrder])

  // Pagination
  const totalPages = Math.ceil(processedProducts.length / itemsPerPage)
  const paginatedProducts = processedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', product)
  }

  return (
    <section id="products" className="py-20 bg-white dark:bg-secondary-900" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 id="products-heading" className="text-4xl font-bold text-secondary-900 dark:text-white">
            {title}
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {showFilters && (
          <>
            {/* Search and Filters */}
            <div className="bg-secondary-50 dark:bg-secondary-800 rounded-2xl p-6 mb-8" role="search" aria-label="Product search and filters">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="w-full pl-10 pr-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                    aria-label="Search products by name or description"
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} aria-hidden="true" />
                    <label htmlFor="category-filter" className="sr-only">Filter by category</label>
                    <select
                      id="category-filter"
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value)
                        setCurrentPage(1)
                      }}
                      className="appearance-none pl-10 pr-10 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white min-w-[150px]"
                      aria-label="Filter products by category"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 pointer-events-none" size={20} aria-hidden="true" />
                  </div>

                  {/* Sort */}
                  <div className="flex space-x-2">
                    <label htmlFor="sort-select" className="sr-only">Sort products by</label>
                    <select
                      id="sort-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                      aria-label="Sort products by"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="stock">Stock</option>
                      <option value="category">Category</option>
                    </select>

                    {/* Sort Order */}
                    <button
                      onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                      className="px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl hover:bg-secondary-100 dark:hover:bg-secondary-600 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200 text-secondary-700 dark:text-secondary-300"
                      aria-label={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                      title={`Sort ${sortOrder === 'asc' ? 'descending' : 'ascending'}`}
                    >
                      {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                  </div>

                  {/* View Mode */}
                  <div className="flex border border-secondary-300 dark:border-secondary-600 rounded-xl overflow-hidden" role="radiogroup" aria-label="Select view mode">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      role="radio"
                      aria-checked={viewMode === 'grid'}
                      aria-label="Grid view"
                      title="Grid view"
                    >
                      <Grid size={20} aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-white dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300'} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      role="radio"
                      aria-checked={viewMode === 'list'}
                      aria-label="List view"
                      title="List view"
                    >
                      <List size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-secondary-600 dark:text-secondary-400" role="status" aria-live="polite">
                Showing {paginatedProducts.length} of {processedProducts.length} products
                {searchTerm && ` matching "${searchTerm}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory} category`}
              </p>
            </div>
          </>
        )}

        {/* Products Grid/List */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" text="Loading products..." />
          </div>
        ) : paginatedProducts.length > 0 ? (
          <div 
            className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
            role="list"
            aria-label="Product results"
          >
            {paginatedProducts.map((product) => (
              <article
                key={product.id}
                className={`group bg-white dark:bg-secondary-800 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                role="listitem"
                aria-labelledby={`product-${product.id}-name`}
              >
                {/* Product Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-110 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                    }`}
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="p-3 bg-white rounded-full text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                        title="Quick View"
                      >
                        <Eye size={20} />
                      </button>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="p-3 bg-white rounded-full text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                        title="Add to Cart"
                      >
                        <ShoppingBag size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 space-y-2">
                    {product.featured && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </span>
                    )}
                    {product.stock < 10 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        Low Stock
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Heart 
                      size={16} 
                      className={`${
                        favorites.includes(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-secondary-600'
                      }`} 
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="space-y-2">
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      {product.category}
                    </p>
                    <h3 className={`font-semibold text-secondary-900 dark:text-white line-clamp-2 ${
                      viewMode === 'list' ? 'text-lg' : 'text-base'
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`text-secondary-600 dark:text-secondary-300 line-clamp-2 ${
                      viewMode === 'list' ? 'text-sm' : 'text-sm'
                    }`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Actions */}
                  <div className={`flex items-center ${viewMode === 'list' ? 'justify-between' : 'justify-between'} mt-4`}>
                    <div className="space-y-1">
                      <p className={`font-bold text-secondary-900 dark:text-white ${
                        viewMode === 'list' ? 'text-2xl' : 'text-xl'
                      }`}>
                        ${product.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">
                        Stock: {product.stock}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors duration-200 text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-secondary-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav 
            className="flex items-center justify-center space-x-2 mt-12" 
            aria-label="Product pagination"
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-secondary-300 dark:border-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            
            <span className="sr-only" aria-live="polite">
              Page {currentPage} of {totalPages}
            </span>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  currentPage === page
                    ? 'bg-primary-500 text-white'
                    : 'border border-secondary-300 dark:border-secondary-600 hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 text-secondary-700 dark:text-secondary-300'
                }`}
                aria-label={`Go to page ${page}${currentPage === page ? ' (current page)' : ''}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-secondary-300 dark:border-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary-100 dark:hover:bg-secondary-700 focus:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
              aria-label="Next page"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-secondary-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-secondary-700 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Product Image */}
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-cover rounded-t-2xl"
              />

              {/* Product Details */}
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                      {selectedProduct.category}
                    </p>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      {selectedProduct.name}
                    </h3>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-300">
                    {selectedProduct.description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <p className="text-3xl font-bold text-secondary-900 dark:text-white">
                      ${selectedProduct.price.toFixed(2)}
                    </p>
                    <span className="text-sm text-secondary-500 dark:text-secondary-400">
                      Stock: {selectedProduct.stock}
                    </span>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAddToCart(selectedProduct)}
                      className="flex-1 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-xl hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors duration-200"
                    >
                      <Heart 
                        size={20} 
                        className={`${
                          favorites.includes(selectedProduct.id) 
                            ? 'text-red-500 fill-current' 
                            : 'text-secondary-600'
                        }`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductsSection