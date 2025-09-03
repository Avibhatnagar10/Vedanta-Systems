"use client"; // This is a client component because it uses state and interactivity.

import React, { useState } from "react";

// Data for our feature cards. Using an array makes the code cleaner.
const featureData = [
  {
    id: 1,
    title: "Smart Access Control",
    description: "Biometrics, Smart Locks",
    imageUrl: "/bio.png",
  },
  {
    id: 2,
    title: "Glass Breaker Sensor",
    description: "Advanced glass break detection",
    imageUrl: "/Glass.png",
  },
  {
    id: 3,
    title: "Motorized Monitor Lift",
    description: "Hidden Display",
    imageUrl: "/lift.png",
  },
  {
    id: 4,
    title: "Boom Barriers",
    description: "Intuitive control interfaces",
    imageUrl: "/boom.png",
  },
  {
    id: 5,
    title: "Motorized Doors",
    description: "Intuitive control interfaces",
    imageUrl: "/door.png",
  },
  {
    id: 6,
    title: "Metal Detectors Doorway",
    description: "Intuitive control interfaces",
    imageUrl: "/metal.png",
  },
  {
    id: 7,
    title: "Fire Detection System",
    description: "Intuitive control interfaces",
    imageUrl: "/fire.png",
  },
];

// The main component for the page
const HomePage = () => {
  // State variables to manage the page's interactivity
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  // const [submittedQueries, setSubmittedQueries] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
  });

  // Toggles a feature in the selection list
  const handleToggleFeature = (title: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  // Opens the query modal if at least one feature is selected
  const handleOpenModal = () => {
    if (selectedFeatures.length > 0) {
      setIsModalOpen(true);
    } else {
      alert("Please select at least one feature to query.");
    }
  };

  // Updates form data as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles the final submission of the query
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuery = {
      ...formData,
      features: selectedFeatures,
      submittedAt: new Date().toLocaleString(),
    };
    // setSubmittedQueries((prev) => [newQuery, ...prev]);
    setIsModalOpen(false);
    setSelectedFeatures([]);
    setFormData({ name: "", email: "", company: "", location: "" });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Header */}

      <main className="flex-1 ">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-10"
          style={{
            backgroundImage: `url('/smartbg.png')`, // 👈 put your image in /public
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <h1 className="text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl">
                Smart Automation
              </h1>
              <p className="text-lg text-white/70 sm:text-xl">
                Control your environment with smart access, security, and
                interactive solutions
              </p>
              <a href="#features">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[var(--primary-600)] text-[#e7e1e1] text-base font-bold shadow-[0_0_15px_rgba(56,224,123,0.5)] transition-all hover:shadow-[0_0_25px_rgba(56,224,123,0.8)]">
                  <span className="truncate">Get Started</span>
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="mb-4 text-4xl font-bold">Key Features</h2>
              <p className="mb-12 text-white/70">
                Select one or more features you are interested in.
              </p>
            </div>
            {/* Dynamically rendered feature cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {featureData.map((feature) => {
                const isSelected = selectedFeatures.includes(feature.title);
                return (
                  <div
                    key={feature.id}
                    className="group flex flex-col gap-4 rounded-xl p-6 glassmorphic transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--primary-500)]"
                  >
                    <div
                      className="w-full aspect-square rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url("${feature.imageUrl}")` }}
                    ></div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-sm text-white/70">
                        {feature.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggleFeature(feature.title)}
                      className={`mt-auto w-full rounded-lg h-10 font-bold transition-colors ${
                        isSelected
                          ? "bg-[var(--primary-500)] text-[#faf6f6]"
                          : "border-y-gray-300 text-white hover:bg-white/60"
                      }`}
                    >
                      {isSelected ? "✓ Selected" : "Select"}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Submit Query Button */}
            {selectedFeatures.length > 0 && (
              <div className="text-center mt-12">
                <button
                  onClick={handleOpenModal}
                  className="min-w-[240px] cursor-pointer rounded-lg h-12 px-6 bg-[var(--primary-600)] text-[#edebeb] text-base font-bold shadow-[0_0_15px_rgba(56,224,123,0.5)] transition-all hover:shadow-[0_0_25px_rgba(56,224,123,0.8)]"
                >
                  Submit Query for {selectedFeatures.length} Feature(s)
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-solid border-white/10 bg-[#111111]/80 px-10 py-8">
        {/* Footer content remains the same */}
      </footer>

      {/* Query Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg p-8 m-4 rounded-2xl glassmorphic border border-white/20">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2">Submit Your Query</h2>
            <p className="text-sm text-white/60 mb-6">
              You&apos;re interested in:{" "}
              <strong>{selectedFeatures.join(", ")}</strong>
            </p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-[var(--primary-500)] focus:border-[var(--primary-500)] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-[var(--primary-500)] focus:border-[var(--primary-500)] outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-[var(--primary-500)] focus:border-[var(--primary-500)] outline-none"
              />
              <input
                type="text"
                name="location"
                placeholder="Your Location (e.g., City, Country)"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="bg-white/10 border-white/20 rounded-lg p-3 focus:ring-2 focus:ring-[var(--primary-500)] focus:border-[var(--primary-500)] outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full cursor-pointer rounded-lg h-12 px-6 bg-[var(--primary-200)] text-[#fdf9f9] text-base font-bold shadow-[0_0_15px_rgba(56,224,123,0.5)] transition-all hover:shadow-[0_0_25px_rgba(56,224,123,0.8)]"
              >
                Confirm & Submit Query
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

