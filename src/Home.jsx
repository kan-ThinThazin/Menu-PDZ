import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import menuData from "./data/menuData.json";
import bgImage from "./assets/f4.png";
import teaIcon from "./assets/tea.png";
import pannImage from "./assets/pann3.jpg";
import teacupImage from "./assets/teacup.png";
import logo from "./assets/PHSlogo.png";
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
    <main className="relative container mx-auto px-4 pb-16 min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40 -z-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Title Section */}
      <div className="flex items-center justify-center gap-4 mb-6 mt-6 md:mb-12 relative z-10">
        <img
          src={pannImage}
          alt="Traditional food decoration"
          className="w-16 md:w-28 rounded-xl"
        />
        <div className="text-center">
          <h1 className="font-myanmar text-3xl md:text-6xl mb-2 gradient-text leading-tight">
            ရရှိနိုင်သော အစားအစာများ
          </h1>
          <p className="font-myanmar text-gray-200 text-sm md:text-lg">
            Discover our finest tea selections and delicacies
          </p>
        </div>
        <img
          src={teacupImage}
          alt="Tea cup decoration"
          className="w-12 md:w-20 rounded-xl"
        />
      </div>

      {/* Category filters - sticky on mobile */}
      <div className="sticky top-[56px] z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 px-3 py-2 md:static md:bg-transparent md:backdrop-blur-none md:border-0 md:px-0 md:py-0">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center md:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-3 py-1.5 text-xs md:text-base font-myanmar rounded-full border transition-all duration-500
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-green-400 text-emerald-900 border-emerald-600 shadow-lg scale-105" : 
                    "bg-white text-emerald-800 border-emerald-300 hover:shadow-md hover:text-emerald-600 hover:-translate-y-1"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="relative z-10 space-y-10 md:space-y-16 mt-6">
        {Object.entries(filteredMenu).map(([section, items], secIdx) => (
          <section
            key={section}
            className={`relative py-6 px-3 md:py-12 md:px-6 rounded-2xl md:rounded-3xl ${
              secIdx % 2 === 0
                ? "bg-gradient-to-r from-emerald-50 to-white"
                : "bg-gradient-to-r from-white to-emerald-50"
            }`}
          >
            {/* Section title */}
            <h2 className="text-xl md:text-3xl font-extrabold text-emerald-900 mb-6 md:mb-12 text-center">
              {section}
              <span className="block w-12 md:w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto mt-2 rounded-full" />
            </h2>
            <ul className="space-y-4 md:space-y-8">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-md shadow-sm md:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                >
                  {/* Item */}
                  <div className="flex items-center gap-3 md:gap-4 w-full md:w-1/2">
                    <img
                      src={teaIcon}
                      alt="Tea icon"
                      className="w-8 h-8 md:w-14 md:h-14 rounded-full"
                    />
                    <span className="text-base md:text-xl font-myanmar text-emerald-900">
                      {item.name}
                    </span>
                  </div>

                  {/* Prices */}
                  <div className="flex flex-wrap gap-2 justify-end w-full md:w-1/2">
                    {[item.price, item.price2, item.price3]
                      .filter(Boolean)
                      .map((p, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-green-500 font-semibold shadow hover:shadow-md transition-transform hover:-translate-y-0.5"
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
      <div className="flex flex-col min-h-screen bg-white text-emerald-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Food Center Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <span className="text-base md:text-lg font-semibold text-emerald-600">
                ပြည်ထောင်စု Food Center
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 font-medium">
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
              className="md:hidden text-2xl"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </header>

        {/* Mobile Nav (overlay, absolute under header) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[56px] left-0 w-full bg-white shadow-md z-40">
            <nav className="flex flex-col px-6 py-4 gap-3">
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
        <footer className="bg-emerald-50 text-emerald-900 py-8 mt-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1 text-sm md:text-base">
              <p>🕒 Open daily: 8:00 AM - 10:00 PM</p>
              <p>📍 123 Organic Street, Greenville</p>
              <p>📞 (555) 123-4567</p>
            </div>
            <div className="flex gap-4 text-xl">
              <a href="#" aria-label="Facebook">👍</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs md:text-sm text-emerald-700">
            &copy; {new Date().getFullYear()} ပြည်ထောင်စု Food Center. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}
