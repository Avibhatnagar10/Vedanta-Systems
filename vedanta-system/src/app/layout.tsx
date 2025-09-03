import type { Metadata } from "next";
import { Geist } from "next/font/google"; // Geist_Mono is not used in the UI, can be removed if not needed elsewhere
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Removed geistMono as it wasn't being used in the provided component code.
// const geistMono = Geist_Mono({ ... });

export const metadata: Metadata = {
  title: "Smart Automation",
  description: "Control your environment with smart solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add this link for the 'menu' icon to render correctly */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
          rel="stylesheet" 
        />
      </head>
      <body
        // The font variable is now the primary way to apply the font via tailwind.config.ts
        // The base bg and text colors are now in globals.css, so they can be removed from here.
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
