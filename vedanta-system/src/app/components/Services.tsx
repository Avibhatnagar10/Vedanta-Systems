"use client";

import Card from "./Card";

export default function Services() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      id="services"
    >
      <Card
  title="Digital Transformation"
  desc="Modernize your workflows with AI, automation, and cloud-first strategies."
  img="/Digital.jpg"
/>
<Card
  title="Cloud & Infrastructure"
  desc="Seamless migration, scalable cloud solutions, and 24/7 infrastructure support."
  img="/Cloud.jpeg"
/>
<Card
  title="Cybersecurity"
  desc="Protect your data with next-gen security, monitoring, and compliance solutions."
  img="/Cyber.jpg"
/>
    </div>
  );
}
