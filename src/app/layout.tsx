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
  title: "Anujith VK | Software Engineer | Thalassery | Kerala | India",
  description: "Portfolio of Anujith VK — Software Engineer based in Thalassery, Kannur. Specializing in modern web development, full-stack engineering, and creative digital solutions.",
  icons: {
    icon: "/favicon.ico",  
    apple: "/favicon.ico", 
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
  authors: [{ name: "Anujith VK",url:'https://anujith-vk-portfolio.vercel.app/' }],
  creator: "Anujith VK",
  metadataBase: new URL("https://anujith-vk-portfolio.vercel.app/"),
   openGraph: {
    title: "Anujith VK | Software Engineer",
    description: "Explore the portfolio of Anujith VK — Full Stack Developer from Kerala, India.",
    url: "https://anujith-vk-portfolio.vercel.app",
    siteName: "Anujith VK Portfolio",
    locale: "en_US",
    type: "website",
  },
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
