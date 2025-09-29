import { motion } from "framer-motion";
import { Phone, ShoppingCart, User, LogIn } from "lucide-react";

export default function HomePage() {
  // Fake products
  const products = [
    {
      _id: "1",
      name: "iPhone 12 Pro",
      image: "https://dummyimage.com/300x300/000/fff&text=iPhone+12+Pro",
      price: "39,999",
      battery: "Excellent Battery Health",
    },
    {
      _id: "2",
      name: "Samsung Galaxy S21",
      image: "https://dummyimage.com/300x300/2ecc71/ffffff&text=Galaxy+S21",
      price: "29,499",
      battery: "All-day Performance",
    },
    {
      _id: "3",
      name: "Google Pixel 6",
      image: "https://dummyimage.com/300x300/3498db/ffffff&text=Pixel+6",
      price: "27,999",
      battery: "Adaptive Battery",
    },
    {
      _id: "4",
      name: "OnePlus 9 Pro",
      image: "https://dummyimage.com/300x300/e67e22/ffffff&text=OnePlus+9+Pro",
      price: "25,999",
      battery: "Warp Charge Ready",
    },
    {
      _id: "5",
      name: "iPhone 11",
      image: "https://dummyimage.com/300x300/9b59b6/ffffff&text=iPhone+11",
      price: "22,499",
      battery: "Reliable Battery",
    },
    {
      _id: "6",
      name: "Samsung Note 20",
      image: "https://dummyimage.com/300x300/1abc9c/ffffff&text=Note+20",
      price: "26,999",
      battery: "S-Pen + Strong Battery",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Phone className="w-7 h-7 text-[teal]" />
            <h1 className="text-xl font-bold text-[teal]">Re-Store</h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition">
              <LogIn className="w-5 h-5" />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="relative flex items-center text-gray-700 hover:text-green-600 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-1">Cart</span>
              {/* Cart Badge */}
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-[teal] to-emerald-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Browse All Refurbished Phones
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Affordable. Sustainable. Certified. ✨
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {products && products.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <motion.div
                key={product._id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mb-2">{product.battery}</p>
                <p className="text-[teal] font-bold text-xl mb-4">
                  ₹{product.price}
                </p>
                <button className="bg-[teal] text-[white] px-4 py-2 rounded-xl shadow hover:bg-green-700 cursor-pointer transition">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 py-20">
            <Phone className="mx-auto w-12 h-12 mb-4 text-gray-400" />
            <p className="text-lg">No phones available right now.</p>
          </div>
        )}
      </section>
    </div>
  );
}
