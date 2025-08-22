import './App.css'
import { Header } from './components/Header'

function App() {
  const categories = [
    { name: "Bakery", url: "https://www.choicefinefoods.com/shop-1", count: "150+" },
    { name: "Candy", url: "https://www.choicefinefoods.com/shop-2", count: "70+" },
    { name: "Cheeses", url: "https://www.choicefinefoods.com/shop-4", count: "75+" },
    { name: "Cookies", url: "https://www.choicefinefoods.com/shop-5", count: "55+" },
    { name: "Dates", url: "https://www.choicefinefoods.com/shop-6", count: "45+" },
    { name: "Dessert Mixes", url: "https://www.choicefinefoods.com/shop-7", count: "40+" },
    { name: "Drinks", url: "https://www.choicefinefoods.com/shop-8", count: "120+" },
    { name: "Fillo Products", url: "https://www.choicefinefoods.com/shop-10", count: "25+" },
    { name: "Food Service", url: "https://www.choicefinefoods.com/shop-11", count: "200+" },
    { name: "Frozen Products", url: "https://www.choicefinefoods.com/shop-12", count: "130+" },
    { name: "Grains", url: "https://www.choicefinefoods.com/shop-13", count: "85+" },
    { name: "Grocery", url: "https://www.choicefinefoods.com/shop-14", count: "300+" },
    { name: "Honey & Tahini", url: "https://www.choicefinefoods.com/shop-16", count: "35+" },
    { name: "Kitchen", url: "https://www.choicefinefoods.com/shop-17", count: "50+" },
    { name: "Meat Products", url: "https://www.choicefinefoods.com/shop-18", count: "90+" },
    { name: "Misc Products", url: "https://www.choicefinefoods.com/shop-19", count: "60+" },
    { name: "Nuts & Seeds", url: "https://www.choicefinefoods.com/shop-20", count: "65+" },
    { name: "Olives & Olive Oils", url: "https://www.choicefinefoods.com/shop-21", count: "85+" },
    { name: "Pasta", url: "https://www.choicefinefoods.com/shop-22", count: "110+" },
    { name: "Pickles", url: "https://www.choicefinefoods.com/shop-23", count: "45+" },
    { name: "Snacks", url: "https://www.choicefinefoods.com/shop-27", count: "95+" },
    { name: "Spices", url: "https://www.choicefinefoods.com/shop-28", count: "120+" },
    { name: "Sweets", url: "https://www.choicefinefoods.com/shop-29", count: "140+" },
    { name: "Tea & Coffee", url: "https://www.choicefinefoods.com/shop-30", count: "90+" },
    { name: "Yogurt Products", url: "https://www.choicefinefoods.com/shop-31", count: "35+" }
  ];

  const handleCategoryClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-24">
        {/* Minimal Hero Section */}
        <section className="bg-white border-b border-slate-200 h-24 sm:h-32 flex items-end justify-center pb-1 sm:pb-2">
          <div className="text-center px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
              Shop Categories
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Browse our product categories
            </p>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* All Products Button - Featured at top */}
            <div className="mb-6 sm:mb-8 flex justify-center px-4">
              <button
                onClick={() => window.location.href = "https://www.choicefinefoods.com/shop"}
                className="group relative overflow-hidden bg-white text-slate-900 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-primaryBlue/20 hover:shadow-2xl hover:shadow-slate-900/10 shadow-lg transition-all duration-500 text-center w-full max-w-sm sm:max-w-md lg:min-w-[300px]"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-primaryBlue to-transparent rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-primaryBlue transition-colors duration-300 text-center leading-tight">
                    All Products
                  </h3>
                </div>
              </button>
            </div>
            
            {/* Other Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 px-2 sm:px-0">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.url)}
                  className="group relative overflow-hidden bg-white text-slate-900 border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:border-primaryBlue/20 hover:shadow-xl hover:shadow-slate-900/10 shadow-lg transition-all duration-500 text-left touch-target"
                  style={{
                    animationDelay: `${index * 30}ms`
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-bl from-primaryBlue to-transparent rounded-full transform translate-x-10 sm:translate-x-12 -translate-y-10 sm:-translate-y-12"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-primaryBlue transition-colors duration-300 text-center leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Notice */}
        <footer className="bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <p className="text-center text-xs sm:text-sm text-slate-600">
              Prices are subject to change without prior notice
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App