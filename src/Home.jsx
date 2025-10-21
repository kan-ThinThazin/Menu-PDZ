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
      {/* ✨ Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-green-100 animate-gradient-slow -z-20"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />
      <div className="absolute inset-0 bg-texture opacity-30 -z-10"></div>

      {/* 🌸 Title Section */}
      <div className="flex items-center justify-center gap-4 mb-8 mt-10 relative z-10">
        <img
          src={pannImage}
          alt="Traditional decoration"
          className="w-16 md:w-24 rounded-xl shadow-lg"
        />
        <div className="text-center">
          <h1 className="font-myanmar text-3xl md:text-5xl mb-2 gradient-text leading-tight">
            ရရှိနိုင်သော အစားအစာများ
          </h1>
          <p className="font-myanmar text-green-900 text-sm md:text-lg opacity-90">
            Discover our finest tea selections and delicacies
          </p>
        </div>
        <img
          src={teacupImage}
          alt="Tea cup"
          className="w-12 md:w-20 rounded-xl shadow-lg"
        />
      </div>

      {/* 🍃 Category Filter Bar (Glass style) */}
      <div className="sticky top-[60px] z-40 glass-bar border-b border-green-100 shadow-sm px-3 py-2 rounded-b-2xl backdrop-blur-md">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide px-3 py-3 md:flex-wrap md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 text-sm md:text-base font-myanmar rounded-full border transition-all duration-500
                ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-yellow-400 via-red-400 to-green-500 text-green-900 border-yellow-600 shadow-lg scale-105"
                    : "bg-white/70 text-green-800 border-green-200 hover:shadow-md hover:text-yellow-600 hover:-translate-y-1 backdrop-blur-sm"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 🍵 Menu Sections */}
      <div className="relative z-10 space-y-10 md:space-y-16 mt-8">
        {Object.entries(filteredMenu).map(([section, items], secIdx) => (
          <section
            key={section}
            className="relative py-6 px-3 md:py-12 md:px-6 rounded-3xl bg-white/70 backdrop-blur-md shadow-sm md:shadow-lg border border-white/40 transition-all duration-500 hover:shadow-xl"
          >
            {/* Section Title */}
            <h2 className="text-2xl md:text-4xl font-extrabold gradient-text mb-6 md:mb-10 text-center">
              {section}
            </h2>

            {/* Menu Items */}
            <ul className="space-y-3 md:space-y-4">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-3 md:gap-6 p-4 md:p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Item Left */}
                  <div className="flex items-center gap-3 md:gap-4 w-2/3">
                    <img
                      src={teaIcon}
                      alt="Tea icon"
                      className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                    />
                    <span className="text-base md:text-xl font-myanmar text-green-900">
                      {item.name}
                    </span>
                  </div>

                  {/* Prices Right */}
                  <div className="flex flex-wrap gap-2 justify-end w-1/3">
                    {[item.price, item.price2, item.price3]
                      .filter(Boolean)
                      .map((p, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-white font-semibold shadow hover:shadow-md transition-transform hover:-translate-y-0.5"
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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50 text-green-900 relative overflow-hidden">

        {/* 🌈 Background Motion Layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/40 via-red-100/40 to-green-200/40 animate-gradient-slow mix-blend-multiply -z-10" />

        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-to-r from-yellow-300 via-red-200 to-green-200 shadow-md backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              />
              <span className="text-base md:text-lg font-semibold text-green-800">
                ပြည်ထောင်စု Food Center
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 font-medium">
              <Link to="/" className="hover:text-yellow-600">
                Home
              </Link>
              <Link to="/about" className="hover:text-yellow-600">
                About Us
              </Link>
              <Link to="/special" className="hover:text-yellow-600">
                Special
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl text-green-800"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[56px] left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-yellow-200 rounded-b-xl">
            <nav className="flex flex-col px-6 py-4 gap-4 text-green-800 font-medium">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-yellow-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-yellow-600"
              >
                About Us
              </Link>
              <Link
                to="/special"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-yellow-600"
              >
                Special
              </Link>
            </nav>
          </div>
        )}

        {/* Pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/special" element={<Special />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-yellow-100 via-green-100 to-yellow-200 text-green-900 py-8 mt-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-1 text-sm md:text-base">
              <p>🕒 Open daily: 8:00 AM - 10:00 PM</p>
              <p>📍 123 Organic Street, Greenville</p>
              <p>📞 (555) 123-4567</p>
            </div>
            <div className="flex gap-4 text-xl text-green-700">
              <a href="#" aria-label="Facebook">👍</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          <div className="mt-4 text-center text-xs md:text-sm text-green-700">
            &copy; {new Date().getFullYear()} ပြည်ထောင်စု Food Center. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}
