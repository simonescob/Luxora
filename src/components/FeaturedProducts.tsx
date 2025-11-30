import { useState } from 'react'
import { Eye, ShoppingBag, Star } from 'lucide-react'
import { Product } from '../types'
import { useProducts } from '../App'
const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.featured);
  return (
    <section id="products" className="py-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
            Featured Collection
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium home decor pieces that bring 
            elegance and sophistication to every space.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-secondary-800 rounded-xl shadow-sm border border-secondary-200 dark:border-secondary-700 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 bg-white rounded-full text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                      title="Quick View"
                    >
                      <Eye size={20} />
                    </button>
                    <button
                      onClick={() => console.log('Add to cart:', product.id)}
                      className="p-2 bg-white rounded-full text-secondary-700 hover:bg-primary-500 hover:text-white transition-colors duration-200"
                      title="Add to Bag"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Low Stock Badge */}
                {product.stock < 10 && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                      Low Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price and Stock */}
                <div className="flex items-center justify-between mt-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-secondary-900 dark:text-white">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400">
                      Stock: {product.stock}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => console.log('Add to cart:', product.id)}
                    className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-secondary-100 dark:bg-secondary-700 hover:bg-primary-500 hover:text-white text-secondary-700 dark:text-secondary-300 dark:hover:text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            View All Products
          </a>
        </div>
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

                  <button
                    onClick={() => console.log('Add to cart:', selectedProduct.id)}
                    className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default FeaturedProducts