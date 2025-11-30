import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useProducts } from '../App'
import { Product } from '../types'
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Filter,
  ChevronDown,
  Home
} from 'lucide-react'

const AdminDashboard = () => {
  const { products, deleteProduct } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  // Calculate dashboard stats
  const stats = useMemo(() => {
    const categories: Record<string, number> = {}
    const lowStockItems: Product[] = []
    let featuredCount = 0

    products.forEach(product => {
      // Count categories
      categories[product.category] = (categories[product.category] || 0) + 1

      // Check low stock
      if (product.stock < 10) {
        lowStockItems.push(product)
      }

      // Count featured products
      if (product.featured) {
        featuredCount++
      }
    })

    return {
      totalProducts: products.length,
      categories,
      lowStockItems,
      featuredCount
    }
  }, [products])

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
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
  }, [products, searchTerm, selectedCategory, sortBy, sortOrder])

  const handleDelete = (id: number, productName: string) => {
    if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
      deleteProduct(id)
    }
  }

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900">
      {/* Header */}
      <div className="bg-white dark:bg-secondary-800 shadow-sm border-b border-secondary-200 dark:border-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <Home size={20} />
                <span className="text-sm">Back to Store</span>
              </Link>
              <div className="h-6 w-px bg-secondary-300 dark:bg-secondary-600"></div>
              <h1 className="text-2xl font-bold text-secondary-900 dark:text-white">Admin Dashboard</h1>
            </div>
            
            <Link
              to="/admin/add-product"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              <Plus size={20} />
              <span>Add Product</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Total Products</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-white">{stats.totalProducts}</p>
              </div>
              <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                <Package className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Categories</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-white">
                  {Object.keys(stats.categories).length}
                </p>
              </div>
              <div className="p-3 bg-secondary-100 dark:bg-secondary-700 rounded-lg">
                <Filter className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Featured Products</p>
                <p className="text-3xl font-bold text-secondary-900 dark:text-white">{stats.featuredCount}</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl p-6 shadow-sm border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Low Stock Items</p>
                <p className="text-3xl font-bold text-red-600">{stats.lowStockItems.length}</p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Low Stock Alert */}
        {stats.lowStockItems.length > 0 && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-8">
            <div className="flex items-center space-x-2 text-red-800 dark:text-red-300">
              <AlertTriangle size={20} />
              <span className="font-medium">Low Stock Alert</span>
            </div>
            <p className="text-red-700 dark:text-red-400 mt-1">
              {stats.lowStockItems.length} product{stats.lowStockItems.length > 1 ? 's' : ''} running low on stock
            </p>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700">
          {/* Table Header */}
          <div className="p-6 border-b border-secondary-200 dark:border-secondary-700">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <h2 className="text-xl font-semibold text-secondary-900 dark:text-white">Products</h2>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white pr-10"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 pointer-events-none" size={20} />
                </div>

                {/* Sort */}
                <div className="flex space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                    <option value="category">Category</option>
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-200"
                  >
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50 dark:bg-secondary-700">
                <tr>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Product</th>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Category</th>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Price</th>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Stock</th>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Featured</th>
                  <th className="text-left py-3 px-6 font-medium text-secondary-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-200 dark:divide-secondary-700">
                {filteredAndSortedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-secondary-50 dark:hover:bg-secondary-700/50">
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium text-secondary-900 dark:text-white">{product.name}</p>
                          <p className="text-sm text-secondary-600 dark:text-secondary-400 line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-secondary-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`font-medium ${
                        product.stock < 10 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-secondary-900 dark:text-white'
                      }`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      {product.featured && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/admin/edit/${product.id}`}
                          className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200"
                          title="Edit"
                        >
                          <Edit size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          className="p-2 text-secondary-600 dark:text-secondary-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors duration-200"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto w-12 h-12 text-secondary-400 mb-4" />
              <p className="text-secondary-600 dark:text-secondary-400">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard