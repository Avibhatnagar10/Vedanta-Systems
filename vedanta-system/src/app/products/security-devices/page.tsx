"use client";
import { useState } from "react";
import Image from "next/image";

const SecureViewPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleQueryClick = (product: string) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Form Submitted:", data);

    // Close form after submit
    setShowForm(false);
  };

  return (
    <main className="flex-1 px-4 sm:px-10 lg:px-20 py-10">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-center text-white overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* The background image container */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("/camera.jpg")',
              filter: "brightness(0.4)", // Dims the image to make text pop
            }}
          ></div>
          {/* A gradient overlay for a smooth transition to the content below */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111618] via-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center p-4 animate-fadeIn">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-transparent-white bg-clip-text bg-gradient-to-r "
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
          >
            Next-Generation Security Cameras
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Unleash the power of AI-driven security. Our cameras provide
            unmatched clarity, intelligent detection, and proactive monitoring
            to keep your world safe.
          </p>
          {/* <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-12 px-6 bg-[#0570a9] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all glowing-button">
            <span className="truncate">Explore Our Products</span>
            </button> */}
        </div>

        {/* Optional: Animated Scroll-Down Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-8 h-12 border-2 border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-gray-500 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Product Lineup Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tight">
          Our Product Lineup
        </h2>
        <div className="space-y-16">
          {/* Product 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glassmorphism rounded-2xl p-8">
            <div className="product-card relative w-full aspect-video">
              <Image
                alt="4K PTZ Camera"
                src="/PTZ.png"
                fill
                className="rounded-lg shadow-2xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">4K PTZ Camera</h3>
              <p className="text-gray-300 mb-6">
                Experience unparalleled surveillance with our 4K Pan-Tilt-Zoom
                camera. It offers crystal-clear, high-resolution video and
                comprehensive area coverage. Ideal for monitoring large spaces
                with precision, ensuring no detail is missed, day or night.
              </p>
              <button
                onClick={() => handleQueryClick("4K PTZ Camera")}
                className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#0da6f2] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all glowing-button"
              >
                <span className="truncate">Query</span>
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glassmorphism rounded-2xl p-8">
            <div className="md:order-2 product-card relative w-full aspect-video">
              <Image
                alt="Auto Tracking Camera"
                src="/auto.png"
                fill
                className="rounded-lg shadow-2xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-3">Auto Tracking Camera</h3>
              <p className="text-gray-300 mb-6">
                Our Auto Tracking camera intelligently follows moving objects,
                ensuring continuous monitoring without manual intervention.
                Perfect for dynamic environments, it enhances security by
                keeping subjects in frame automatically.
              </p>
              <button
                onClick={() => handleQueryClick("Auto Tracking Camera")}
                className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#0da6f2] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all glowing-button"
              >
                <span className="truncate">Query</span>
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glassmorphism rounded-2xl p-8">
            <div className="product-card relative w-full aspect-video">
              <Image
                alt="Human Tracking Camera"
                src="/human.png"
                fill
                className="rounded-lg shadow-2xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Human Tracking</h3>
              <p className="text-gray-300 mb-6">
                This specialized camera focuses specifically on human movement,
                significantly reducing false alarms from pets or other non-human
                motion. It provides smarter, more accurate security alerts
                tailored to human presence.
              </p>
              <button
                onClick={() => handleQueryClick("Human Tracking")}
                className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#0da6f2] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all glowing-button"
              >
                <span className="truncate">Query</span>
              </button>
            </div>
          </div>

          {/* Product 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center glassmorphism rounded-2xl p-8">
            <div className="md:order-2 product-card relative w-full aspect-video">
              <Image
                alt="Voice Tracking PTZ Camera"
                src="/voice.png"
                fill
                className="rounded-lg shadow-2xl object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-3">Voice Tracking PTZ</h3>
              <p className="text-gray-300 mb-6">
                A cutting-edge camera that responds to your voice. Direct the
                camera&apos;s view with simple commands, allowing for hands-free
                operation and immediate focus on areas of interest. Security
                control has never been this intuitive.
              </p>
              <button
                onClick={() => handleQueryClick("Voice Tracking PTZ")}
                className="flex min-w-[90px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#0da6f2] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all glowing-button"
              >
                <span className="truncate">Query</span>
              </button>
            </div>
          </div>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-[#111618] p-6 rounded-xl w-full max-w-md shadow-2xl relative">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">Send a Query</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Auto-filled Product */}
                <input
                  type="text"
                  name="product"
                  value={selectedProduct}
                  readOnly
                  className="w-full rounded-md bg-gray-800 text-gray-200 p-3 border border-gray-700"
                />

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md bg-gray-800 text-gray-200 p-3 border border-gray-700"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-md bg-gray-800 text-gray-200 p-3 border border-gray-700"
                />

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full rounded-md bg-gray-800 text-gray-200 p-3 border border-gray-700"
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0da6f2] text-white font-bold py-3 hover:bg-[#0c8ed1] transition"
                >
                  Submit Query
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Key Features Section */}
      <section className="py-16 text-white">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight">
          Unleash Powerful Features
        </h2>

        {/* Features */}
        <div className="flex gap-4 justify-center flex-wrap px-4">
          {/* Feature 1 */}
          <div className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm md:text-base font-medium text-gray-200 transition-colors hover:border-gray-500 hover:bg-gray-700/50">
            4K Ultra HD
          </div>

          {/* Feature 2 */}
          <div className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm md:text-base font-medium text-gray-200 transition-colors hover:border-gray-500 hover:bg-gray-700/50">
            Auto Tracking
          </div>

          {/* Feature 3 */}
          <div className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm md:text-base font-medium text-gray-200 transition-colors hover:border-gray-500 hover:bg-gray-700/50">
            Gesture Recognition
          </div>

          {/* Feature 4 */}
          <div className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm md:text-base font-medium text-gray-200 transition-colors hover:border-gray-500 hover:bg-gray-700/50">
            Voice Control
          </div>

          {/* Feature 5 */}
          <div className="rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm md:text-base font-medium text-gray-200 transition-colors hover:border-gray-500 hover:bg-gray-700/50">
            Night Vision
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-16">
        <div className="glassmorphism rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-12 flex-1">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-gray-300 mb-6">
              Safeguard your home or business with cutting-edge security
              technology. Our advanced solutions deliver unmatched protection,
              giving you peace of mind 24/7. Start today and elevate your
              security to the next level.
            </p>
          </div>
          <div className="flex-1 w-full h-64 md:h-auto md:self-stretch relative">
            <Image
              alt="Security camera in a modern setting"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              src="/security1.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecureViewPage;
