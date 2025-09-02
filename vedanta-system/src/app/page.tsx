"use client";

import { useState } from "react";
import Products from "./components/Products";
import Services from "./components/Services";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "services">(
    "products"
  );

  return (
    <div
    // className="relative min-h-screen flex flex-col overflow-x-hidden text-white"
    // style={{ ["--primary-neon-rgb" as any]: "56, 224, 123" }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap px-10 py-4 bg-black/30 backdrop-blur-md border-b border-solid border-white/10">
        <div className="flex items-center gap-4 text-white">
          <svg
            className="h-8 w-8 text-[var(--primary-neon)]"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fill="currentColor"
              fillRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
            ></path>
          </svg>
          <h2 className="text-white text-xl font-bold tracking-wider">
            Vedanta Systems
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#products"
            className="nav-link text-white/80 text-sm font-medium"
          >
            Products
          </a>
          <a
            href="#services"
            className="nav-link text-white/80 text-sm font-medium"
          >
            Services
          </a>
          <a href="#" className="nav-link text-white/80 text-sm font-medium">
            About
          </a>
          <Link
            href="/contact"
            className="nav-link text-white/80 text-sm font-medium"
          >
            Contact
          </Link>
        </nav>
        {/* <button className="flex min-w-[100px] items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[var(--primary-neon)] text-[#111714] text-sm font-bold tracking-wider hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_var(--primary-neon)]">
          <span className="truncate">Get Started</span>
        </button> */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="flex items-center justify-center w-10 h-10 text-white/80"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden border-t border-white/10">
            <a
              href="#products"
              className="text-white/80 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a
              href="#services"
              className="text-white/80 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-white/80 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <Link
              href="/contact"
              className="text-white/80 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* <button className="mt-4 w-[90%] max-w-xs rounded-full h-10 bg-[var(--primary-neon)] text-[#111714] font-bold tracking-wider hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_var(--primary-neon)]">
            Get Started
          </button> */}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Futuristic_Tech.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0e17]/70"></div>
          <div className="relative z-10 p-4 fade-in">
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              Vedanta Systems
            </h1>
            <p className="text-white/90 text-lg md:text-2xl mt-4 font-light tracking-wide drop-shadow-[0_0_10px_rgba(147,112,219,0.3)]">
              Powering Your Digital Experience
            </p>
          </div>
        </section>

        {/* Toggle */}
        <section className="py-16 md:px-10 bg-[#0a0e17]" id="content-section">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <div
                className={`toggle-button ${
                  activeTab === "products"
                    ? "products-active"
                    : "services-active"
                }`}
              >
                <div className="toggle-slider"></div>
                <button
                  className="products-btn rounded-full py-4  text-xl font-bold "
                  onClick={() => setActiveTab("products")}
                >
                  Products
                </button>
                <button
                  className="services-btn rounded-full py-2 text-white/70 text-sm font-bold"
                  onClick={() => setActiveTab("services")}
                >
                  Services
                </button>
              </div>
            </div>

            {activeTab === "products" && <Products />}
            {activeTab === "services" && <Services />}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 text-center py-8 px-4 md:py-10 md:px-6 relative">
        {/* Horizontal footer line */}
        <div className="footer-line mx-auto mb-6 md:mb-8 w-3/4 md:w-1/2 h-[1px]"></div>

        {/* Footer text */}
        <p className="text-white/40 text-xs sm:text-sm md:text-base font-normal">
          © 2025 Vedanta Systems. All rights reserved.
        </p>

        {/* Optional: vertical glow accent on mobile */}
        <div className="footer-line-vertical hidden sm:block absolute right-4 top-1/2 h-20 md:h-24 w-[1px]"></div>
      </footer>
    </div>
  );
}
