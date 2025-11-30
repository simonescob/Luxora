# Luxora E-Commerce Showcase

A premium home decor and lifestyle e-commerce showcase built with React, TypeScript, and Tailwind CSS. This project features a stunning landing page and a fully functional admin dashboard to manage products.

## 🌟 Features

### Landing Page
- **Hero Section**: Eye-catching headline with brand tagline, hero image, and call-to-action buttons
- **Featured Products**: Grid layout showcasing 6-8 products with hover effects and quick view modal
- **About Section**: Brand story, value propositions, and customer testimonials
- **Footer**: Navigation links, social media icons, newsletter signup, and contact information
- **Dark Mode Toggle**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices

### Admin Dashboard
- **Product Management**: Complete CRUD operations for products
- **Dashboard Stats**: Visual cards showing total products, categories, featured items, and low stock alerts
- **Advanced Filtering**: Search by name/description, filter by category, and sort by multiple criteria
- **Add/Edit Forms**: Comprehensive product forms with validation and image preview
- **Real-time Updates**: Changes reflected immediately with localStorage persistence
- **Data Validation**: Client-side validation with error messaging
- **Loading States**: Smooth loading indicators and form submission feedback

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite.js
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **State Management**: React Hooks (useState, useContext)
- **Package Manager**: npm

## 🎨 Design System

### Color Palette
- **Primary**: Emerald Green (#10b981)
- **Secondary**: Slate Gray (#1e293b)
- **Dark Mode**: Full dark theme support with proper contrast ratios

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive**: Fluid typography with proper heading hierarchy

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header with dark mode toggle
│   ├── Hero.tsx         # Landing page hero section
│   ├── FeaturedProducts.tsx # Product showcase with quick view
│   ├── About.tsx        # About section with testimonials
│   └── Footer.tsx       # Footer with newsletter signup
├── pages/               # Route-based page components
│   ├── LandingPage.tsx  # Main landing page
│   ├── AdminDashboard.tsx # Admin dashboard with stats
│   ├── AddProduct.tsx   # Product creation form
│   └── EditProduct.tsx  # Product editing form
├── types/               # TypeScript type definitions
│   └── index.ts         # Product, Category, and Dashboard types
├── App.tsx              # Main app component with context providers
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind utilities
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd luxora-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 User Flows

### Customer Experience
1. **Browse**: Users land on homepage and explore featured products
2. **View Details**: Quick view modal provides product details
3. **Navigate**: Smooth scrolling navigation between sections

### Admin Experience
1. **Access Dashboard**: Navigate to `/admin` for product management
2. **View Stats**: Dashboard displays key metrics and low stock alerts
3. **Manage Products**: Add, edit, or delete products with real-time updates
4. **Filter/Search**: Advanced filtering and search capabilities
5. **Navigate Back**: Easy return to main website

## 🔧 Key Features Implementation

### State Management
- **Product Context**: Global product state with CRUD operations
- **Dark Mode Context**: Theme persistence with system preference detection
- **Local Storage**: Automatic data persistence across browser sessions

### Data Structure
```typescript
interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  stock: number
  featured: boolean
}
```

### Mock Data
The application comes pre-populated with 10 sample products across various categories including:
- Textiles (cushions, throws)
- Decor (vases, decorative items)
- Kitchen (serving boards, coasters)
- Lighting (lamps, pendants)
- Accessories (bookmarks)
- Plants & Garden items

## 🎯 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images with proper fallbacks
- **Lazy Loading**: Components loaded on demand
- **Bundle Optimization**: Tree shaking and minification
- **Responsive Images**: Appropriate image sizes for different devices

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG AA compliant color combinations
- **Alternative Text**: Descriptive alt text for all images

## 🌙 Dark Mode Implementation

- **System Preference**: Respects user's system theme preference
- **Manual Toggle**: User can switch themes manually
- **Persistent Choice**: Theme preference saved to localStorage
- **Smooth Transitions**: Animated theme switching
- **Full Coverage**: All components support both light and dark themes

## 📊 Dashboard Statistics

- **Total Products**: Real-time count of all products
- **Categories Breakdown**: Distribution of products by category
- **Featured Products**: Count of products marked as featured
- **Low Stock Alerts**: Automatic detection of products with stock < 10

## 🔍 Advanced Search & Filtering

- **Text Search**: Search across product names and descriptions
- **Category Filter**: Filter by specific product categories
- **Multi-sort**: Sort by name, price, stock, or category
- **Sort Direction**: Ascending/descending sort order
- **Real-time Results**: Instant filtering as you type

## 💾 Data Persistence

- **Local Storage**: All product data persisted locally
- **Auto-save**: Changes saved immediately
- **Data Recovery**: Automatic restoration on app restart
- **Mock Data Initialization**: First-time users get sample products

## 🧪 Testing & Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting for consistent style
- **Error Boundaries**: Graceful error handling
- **Form Validation**: Comprehensive client-side validation
- **Loading States**: Proper UX during async operations

## 📈 Future Enhancements

Potential features for future development:
- Real backend integration with REST API
- User authentication and authorization
- Shopping cart functionality
- Order management system
- Advanced analytics and reporting
- Product image upload with CDN integration
- Email notifications for low stock
- Bulk product operations
- Product categories management
- Inventory tracking with history

## 🤝 Contributing

This is a showcase project demonstrating modern React development practices. Feel free to fork and adapt for your own projects.

## 📄 License

This project is for demonstration purposes. Feel free to use as a template for your own projects.

---

**Luxora** - *Elevate Your Space* 🏠✨