// File: app/laptop/page.tsx
"use client";

import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

// Query Form Modal
function QueryForm({
  category,
  onClose,
}: {
  category: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("📩 Query Submitted:", { ...form, category });
    alert("✅ Query sent successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] p-6 rounded-xl w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">
          Send Query – {category}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black/30 text-white border border-purple-500 focus:border-pink-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black/30 text-white border border-purple-500 focus:border-pink-500 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Requirements"
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black/60 text-white border border-purple-500 focus:border-pink-500 outline-none h-24"
            required
          />
          <button
            type="submit"
            className="w-full h-12 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.7)] hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.9)] transition"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LaptopPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      title: "Gaming Laptops",
      desc: "Power-packed machines for ultimate performance and immersive gameplay. Experience blazing speeds and stunning graphics.",
      imageUrl: "/gaming.jpg",
      reverse: false,
    },
    {
      title: "Professional Laptops",
      desc: "Reliable and efficient for business tasks. Secure, manageable, and built for productivity on the go.",
      img: "/prof.jpg",
      reverse: true,
    },
    {
      title: "Creator Laptops",
      desc: "High-performance for creative professionals. Edit videos, design graphics, and bring your visions to life with powerful hardware.",
      img: "/creator.jpg",
      reverse: false,
    },
    {
      title: "Student Laptops",
      desc: "Lightweight and affordable for students. Perfect for notes, research, and staying connected on campus.",
      img: "/student.jpg",
      reverse: true,
    },
    {
      title: "Commercial Laptops",
      desc: "Durable and versatile for everyday use. A balance of performance and reliability for any user.",
      img: "/com.jpg",
      reverse: false,
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overfl-hidden bg-[#0D0D0D] text-white font-['Space_Grotesk','Noto_Sans',sans-serif]">
      <main className="flex-grow">
        {/* Hero Section */}
        
        <section className="relative flex h-screen items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDG3igmvpBSmRDZa8MnKvZl5NJ7we5tGpJjlI_7tuEO_8W4gW0pM2J7X8o6RA3hfnM_f6hDgwemtKFiqqrxJ8csO2FW-kjjGZRR84kQUMbRMDzlNXDrXSQ86G2aXxjY8-A4b5GCTG8VMhuSr5Vo-u5A1PRe64Jg_RTGjSd8Xi3NYA0xGGMgmj-fjyG9nywS5TAZAz2h6rx9XZp_0kyGU6YBBRVWGWM_A_H_z5rLorNdTU3yhHfVgtJl63-nEITR7XV5j0oIC8YbtI"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#0D0D0D]" />

          {/* Content */}
          <div className="fade-in relative z-10 max-w-4xl space-y-6">
            <h2 className="text-5xl font-black tracking-tighter md:text-6xl">
              Find the{" "}
              <span className="text-pink-500">
                <Typewriter
                  words={["Right Laptop", "Perfect Match", "Dream Machine"]}
                  loop={0} // infinite loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={60} // smoother typing
                  deleteSpeed={40} // natural deletion
                  delaySpeed={2000} // pause before switching
                />
              </span>{" "}
              for You
            </h2>

            <p className="text-lg text-gray-300 md:text-xl">
              Explore our curated categories and send a query for personalized
              deals.
            </p>

            <div className="flex items-center justify-center w-full py-10">
              <a href="#categories">
                <button
                  className="relative flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
          text-white text-lg font-bold shadow-[0_0_15px_rgba(168,85,247,0.7)] 
          transition-all duration-500 ease-out 
          hover:scale-110 hover:shadow-[0_0_35px_rgba(236,72,153,0.9)]"
                >
                  <span className="truncate z-10">Get Started</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section id="categories" className="bg-[#0D0D0D]">
          <div className="container mx-auto">
            {categories.map((cat, i) => (
              <div
                key={i}
                className={`category-section group fade-in flex flex-col items-center justify-between gap-12 px-6 py-20 lg:px-20 ${
                  cat.reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              >
                {/* Text Content */}
                <div className="md:w-1/2 lg:w-2/5 relative order-2 md:order-1">
                  <div className="category-content p-8 rounded-lg transition-all duration-300">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300">
                      {cat.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-lg">{cat.desc}</p>
                    <button
                      onClick={() => {
                        setSelectedCategory(cat.title);
                        setShowForm(true);
                      }}
                      className="relative flex cursor-pointer items-center justify-center rounded-md h-10 px-6
             border border-pink-500 text-pink-500 text-sm font-bold
             shadow-[0_0_10px_rgba(236,72,153,0.7)] overflow-hidden
             transition-all duration-500 ease-out
             hover:scale-110 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.9)]"
                    >
                      <span className="relative z-10">Send Query</span>
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 lg:w-3/5 order-1 md:order-2">
                  <div className="w-full aspect-[16/10] overflow-hidden flex items-center justify-center rounded-lg">
                    <img
                      src={cat.imageUrl || cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {showForm && (
        <QueryForm
          category={selectedCategory}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
