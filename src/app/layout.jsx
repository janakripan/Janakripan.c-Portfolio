import "./globals.css";
import SmoothScrolling from "../Components/SmoothScrolling";

export const metadata = {
  title: "Janakripan | Software Developer | Full Stack Developer | Portfolio",
  description: "Janakripan - Software Developer & Full Stack Developer from Thalassery, Kerala. Expert in React, Next.js, Node.js, MERN Stack. Building modern web applications with clean code. Hire a skilled software developer.",
  metadataBase: new URL("https://janakripan-portfolio.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Janakripan",
    "Software Developer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer", 
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Software Developer Portfolio",
    "Developer Portfolio",
    "Janakripan Portfolio",
    "HTML",
    "CSS",
    "Express.js",
    "MongoDB",
    "REST API",
    "Thalassery Developer",
    "Kerala Software Developer",
    "India Software Developer",
    "Kannur",
    "Modern Web Development",
    "Responsive Design",
    "Clean Code",
    "SEO Optimized",
    "Tailwind CSS",
    "Hire Software Developer",
    "Freelance Developer"
  ],
  authors: [{ name: "Janakripan", url: "https://janakripan-portfolio.vercel.app/" }],
  creator: "Janakripan",
  publisher: "Janakripan",
  alternates: {
    canonical: "https://janakripan-portfolio.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Janakripan | Software Developer & Full Stack Developer Portfolio",
    description: "Janakripan - Software Developer & Full Stack Developer from Thalassery, Kerala. Expert in React, Next.js, Node.js, MERN Stack. Building modern web applications with clean code.",
    url: "https://janakripan-portfolio.vercel.app/",
    siteName: "Janakripan - Software Developer Portfolio",
    images: [
      {
        url: "https://janakripan-portfolio.vercel.app/Assets/black2.png",
        width: 1200,
        height: 630,
        alt: "Janakripan - Software Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Janakripan | Software Developer & Full Stack Developer",
    description: "Software Developer from Kerala specializing in React, Next.js, Node.js & MERN Stack development.",
    images: ["https://janakripan-portfolio.vercel.app/Assets/black2.png"],
    creator: "@janakripan",
  },
  verification: {
    google: "googled08e147ee7ec2235",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://janakripan-portfolio.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Janakripan" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Janakripan",
              "url": "https://janakripan-portfolio.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/janakripan",
                "https://github.com/janakripan",
                "https://www.instagram.com/janakripan"
              ],
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thalassery",
                "addressRegion": "Kerala",
                "addressCountry": "India"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "St. Thomas College of Engineering and Technology"
              },
              "knowsAbout": [
                "Software Development",
                "Web Development",
                "Full Stack Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "MERN Stack"
              ]
            })
          }}
        />
      </head>
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}