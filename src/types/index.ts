export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  featured: boolean
}

export interface ProductFormData {
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  featured: boolean
}

export interface Category {
  id: string
  name: string
  count: number
}

export interface DashboardStats {
  totalProducts: number
  categories: Record<string, number>
  lowStockItems: Product[]
  featuredProducts: number
}