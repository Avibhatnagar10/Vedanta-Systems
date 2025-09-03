"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card({
  title,
  desc,
  img,
  link, // new optional prop
}: {
  title: string;
  desc: string;
  img: string;
  link?: string; // optional
}) {
  const CardContent = (
    <div className="card-glow group bg-white/5 p-5 rounded-4xl flex flex-col gap-4 border border-white/10 cursor-pointer">
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          priority
        />
      </div>
      <div>
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white/60 text-sm mt-2">{desc}</p>
      </div>
    </div>
  );

  // If a link is provided, wrap the card in Next.js Link
  if (link) {
    return <Link href={link}>{CardContent}</Link>;
  }

  return CardContent;
}
