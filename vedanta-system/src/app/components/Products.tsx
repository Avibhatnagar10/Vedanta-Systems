"use client";

import { link } from "fs";
import Card from "./Card";
import Link from "next/link";

export default function Products() {
  const productList = [
    { title: "Smart Automation", slug: "smart-automation", desc: "Smart automation for lights, appliances, and energy management.", img: "/Home.jpg", link: "/products/smart-automation" },
    { title: "Smart Class", slug: "smart-class", desc: "Transform classrooms with interactive smart boards, projectors, and digital tools.", img: "/Panel.png",link: "/products/smart-class" },
    { title: "Security Devices", slug: "security-devices", desc: "Advanced CCTV, biometric systems, and surveillance solutions.", img: "/Security.jpg",link: "/products/security-devices" },
    { title: "Laptops", slug: "laptops", desc: "High-performance laptops tailored for business, education, and personal use.", img: "/Laptop.jpg",link: "/products/laptops" },
    { title: "Desktops", slug: "desktops", desc: "Reliable desktop systems designed for productivity, gaming, and enterprise needs.", img: "/Desktop.jpg",link: "/products/desktops" },
    { title: "EPABX", slug: "epabx", desc: "Seamless office communication with enterprise-grade EPABX systems.", img: "/EPABX.png",link: "/products/epabx" },
    { title: "Power Solutions", slug: "power-solutions", desc: "Reliable UPS and power backup solutions to keep your business running.", img: "/Power.jpg",link: "/products/power-solutions" },
    { title: "Networking", slug: "networking", desc: "Fast and secure networking infrastructure for offices and enterprises.", img: "/Network.png",link: "/products/networking" },
    { title: "Software", slug: "software", desc: "Custom-built and licensed software tailored to your requirements.", img: "/Software.jpg",link: "/products/software" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="products">
      {productList.map((product) => (
        <Link key={product.slug} href={`/products/${product.slug}`}>
          <Card title={product.title} desc={product.desc} img={product.img} />
        </Link>
      ))}
    </div>
  );
}
