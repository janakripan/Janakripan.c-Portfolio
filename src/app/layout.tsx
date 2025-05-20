import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anujith VK | Software Engineer",
  description: "Portfolio of Anujith VK — Software Engineer based in Thalassery, Kannur. Specializing in modern web development, full-stack engineering, and creative digital solutions.",
  icons: {
    icon: "/favicon.ico",  
    apple: "/apple-touch-icon.png", 
  },
  keywords: [
    "Anujith VK",
    "Software Engineer",
    "Full Stack Developer",
    "Thalassery",
    "Kannur",
    "Portfolio",
    "Web Developer"
  ],
  authors: [{ name: "Anujith VK" }],
  creator: "Anujith VK",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
