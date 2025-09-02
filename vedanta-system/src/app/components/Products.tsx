"use client";

import Card from "./Card";

export default function Products() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      id="products"
    >
      <Card
        title="Laptops"
        desc="High-performance laptops tailored for business, education, and personal use."
        img="/Laptop.jpg"
      />

      <Card
        title="Desktops"
        desc="Reliable desktop systems designed for productivity, gaming, and enterprise needs."
        img="/Desktop.jpg"
      />
      <Card
        title="Smart Class"
        desc="Transform classrooms with interactive smart boards, projectors, and digital tools."
        img="/Panel.png"
      />
      <Card
        title="EPABX"
        desc="Seamless office communication with enterprise-grade EPABX systems."
        img="/EPABX.png"
      />
      <Card
        title="Power Solutions"
        desc="Reliable UPS and power backup solutions to keep your business running."
        img="/Power.jpg"
      />
      <Card
        title="Home Automation"
        desc="Smart automation for lights, appliances, and energy management."
        img="/Home.jpg"
      />
      <Card
        title="Security Devices"
        desc="Advanced CCTV, biometric systems, and surveillance solutions."
        img="/Security.jpg"
      />
      <Card
        title="Networking"
        desc="Fast and secure networking infrastructure for offices and enterprises."
        img="/Network.png"
      />
      <Card
        title="Software"
        desc="Custom-built and licensed software tailored to your requirements."
        img="/Software.jpg"
      />
    </div>
  );
}
