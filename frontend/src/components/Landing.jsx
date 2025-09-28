import { motion } from "framer-motion";
import { Phone, ShieldCheck, Truck, RefreshCcw, Star } from "lucide-react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  { id: 1, name: "iPhone 12", price: "$499", image: "https://images-cdn.ubuy.co.in/66292c9d2df83775d679582f-pre-owned-apple-iphone-12-carrier.jpg" },
  { id: 2, name: "Samsung Galaxy S21", price: "$399", image: "https://i.blogs.es/d9faf7/samsung-galaxy-s21-ultra-00-02/450_1000.jpg" },
 { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" },
 { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" },
 { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" },
 { id: 3, name: "Google Pixel 6", price: "$349", image: "https://5.imimg.com/data5/IOS/Default/2022/10/YA/JP/DH/43819962/product-jpeg-500x500.png" }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="img_p relative text-white">
        <div className="max-w-6xl mr-5 py-20 text-right">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bigtextonlandingpage text-4xl md:text-6xl font-bold mb-6"
          >
            Sustainable Tech, <br /> Smarter Prices
          </motion.h1>
          <p className="text-lg bigtextonlandingpage md:text-xl mb-8 opacity-90">
            Save money & the planet 🌍 — shop certified refurbished phones.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-2xl shadow-lg"
          >
            Shop Now
          </motion.button>
        </div>
      </section>
      <hr/>
      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <ShieldCheck className="w-10 h-10 mx-auto text-[#5d7b4f] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
          <p className="text-gray-600">Every phone is rigorously tested & certified.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <RefreshCcw className="w-10 h-10 mx-auto text-[#5d7b4f] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">Reduce e-waste while saving big on your phone.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <Truck className="w-10 h-10 mx-auto text-[#5d7b4f] mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick & secure shipping to your doorstep.</p>
        </div>
      </section>

      {/* Featured Phones */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        slidesPerView={1} // Adjust for responsive design
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full mt-10 mb-10 p-2"
      >
        {products && products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="p-4 bg-white rounded-lg shadow-lg text-center mb-3">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded" />
              <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#5d7b4f]">Happy Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Amazing quality!", "Eco + affordable!", "Feels brand new!"].map(
            (review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <Star className="w-6 h-6 text-yellow-500 mx-auto mb-3" />
                <p className="text-gray-700 italic mb-4">"{review}"</p>
                <p className="font-semibold">— Customer {i + 1}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5d7b4f] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Green Tech Movement</h2>
        <p className="mb-8 opacity-90">
          Shop refurbished & help reduce e-waste while saving money.
        </p>
        <button className="bg-white text-[#5d7b4f] font-semibold px-6 py-3 rounded-2xl shadow-lg">
          Browse Phones
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>&copy; {new Date().getFullYear()} GreenPhone Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
