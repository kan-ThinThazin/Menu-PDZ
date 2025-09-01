import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import menuData from "./data/menuData.json";
import bgImage from "./assets/f4.png";
import AboutUs from "./AboutUs";
import Special from "./Special";
import "./Home.css";

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Object.keys(menuData)];

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : { [activeCategory]: menuData[activeCategory] };

  return (
    <main className="relative container mx-auto px-8 py-12 min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Title Section */}
      <div className="flex items-center justify-center gap-6 mb-10 relative z-10">
<div className="flex justify-center">
  <img
    src="/src/assets/pann3.jpg"
    alt="Left Decoration"
    className="w-32 md:w-30 rounded-xl"
  />
</div>

  {/* Center Text */}
  <div className="text-center">
    <h1 className="font-myanmar text-6xl md:text-10xl mb-2 gradient-text leading-normal">
      ရရှိနိုင်သော အစားအစာများ
    </h1>
    <p className="font-myanmar text-gray-200 text-lg leading-relaxed">
      Discover our finest tea selections and delicacies
    </p>
  </div>

  {/* Right Image */}
<div className="flex justify-center">
  <img
    src="/src/assets/teacup.png"
    alt="Right Decoration"
    className="w-16 md:w-24 rounded-xl"
  />
</div>
</div>

{/* Category filters */}
<div className="flex flex-wrap justify-center gap-6 mb-12 relative z-10">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`relative px-6 py-2 font-myanmar text-sm md:text-base rounded-full transition-all duration-500
        ${
          activeCategory === category
            ? "bg-gradient-to-r from-emerald-500 to-green-400 text-white shadow-xl transform scale-105"
            : "bg-white text-emerald-800 border border-emerald-300 hover:shadow-lg hover:text-emerald-600 hover:-translate-y-1"
        }`}
    >
      <span className="relative z-10">{category}</span>

      {/* Animated underline */}
      <span
        className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-green-300 to-emerald-500 rounded-full transition-all duration-300 ${
          activeCategory === category ? "w-full left-0" : "group-hover:w-full group-hover:left-0"
        }`}
      ></span>
    </button>
  ))}
</div>

   {/* Menu sections - Creative Design */}
<div className="relative z-10">
  {Object.entries(filteredMenu).map(([section, items], secIdx) => (
    <section
      key={section}
      className={`relative py-16 px-6 overflow-hidden ${
        secIdx % 2 === 0 ? "bg-gradient-to-r from-emerald-50 to-white" : "bg-gradient-to-r from-white to-emerald-50"
      }`}
    >
      {/* Decorative wave overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#10B981" fillOpacity="0.1" d="M0,64L1440,128L1440,320L0,320Z"></path>
        </svg>
      </div>

      {/* Section title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-16 text-center relative z-10">
        {section}
        <span className="block w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-2 rounded-full"></span>
      </h2>

      <ul className="space-y-12 relative z-10">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 p-6 rounded-3xl bg-white/40 backdrop-blur-md shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative"
          >
            {/* Item icon and name */}
            <div className="flex items-center gap-4 md:w-1/2 animate-fadeInLeft">
              <img src="/src/assets/tea.png" alt="icon" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
              <span className="text-2xl font-myanmar text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                {item.name}
              </span>
            </div>

            {/* Prices with floating effect */}
            <div className="flex gap-3 md:w-1/2 justify-end animate-fadeInRight">
              {[item.price, item.price2, item.price3].filter(Boolean).map((p, i) => (
                <span
                  key={i}
                  className="px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
                >
                  {p}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  ))}
</div>



    </main>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white text-emerald-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md container mx-auto px-4 py-4 flex justify-between items-center rounded-b-xl">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/PHSlogo.png"
              alt="Food Center Logo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <span className="text-x font-thin text-emerald-400">
              ပြည်ထောင်စု Food Center
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium text-emerald-800">
            <Link to="/" className="hover:text-emerald-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-emerald-600">
              About Us
            </Link>
            <Link to="/special" className="hover:text-emerald-600">
              Special
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col px-4 py-4 space-y-3">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/special" onClick={() => setIsMobileMenuOpen(false)}>
                Special
              </Link>
            </nav>
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/special" element={<Special />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-emerald-50 text-emerald-900 py-12 mt-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-2">
              <p>🕒 Open daily: 8:00 AM - 10:00 PM</p>
              <p>📍 123 Organic Street, Greenville</p>
              <p>📞 (555) 123-4567</p>
            </div>
            <div className="flex gap-4 text-2xl">
              <a href="#">👍</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-emerald-700">
            &copy; {new Date().getFullYear()} ပြည်ထောင်စု Food Center. All rights
            reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}
