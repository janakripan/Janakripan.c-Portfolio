import "./globals.css";

export const metadata = {
  title: "Anujith VK | Software Engineer | Full Stack Developer | Portfolio",
  description: "Anujith VK - Software Engineer & Full Stack Developer from Thalassery, Kerala. Expert in React, Next.js, Node.js, MERN Stack. Building modern web applications with clean code. Hire a skilled software developer.",
  metadataBase: new URL("https://anujith-vk-portfolio.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "Anujith VK",
    "Anujith",
    "Software Engineer",
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
    "Software Engineer Portfolio",
    "Developer Portfolio",
    "Anujith VK Portfolio",
    "HTML",
    "CSS",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API",
    "Thalassery Developer",
    "Kerala Software Engineer", 
    "India Software Developer",
    "Kannur",
    "St. Thomas College Engineering",
    "Modern Web Development",
    "Responsive Design",
    "Clean Code",
    "SEO Optimized",
    "Tailwind CSS",
    "Sanity CMS",
    "Hire Software Developer",
    "Freelance Developer"
  ],
  authors: [{ name: "Anujith VK", url: "https://anujith-vk-portfolio.vercel.app/" }],
  creator: "Anujith VK",
  publisher: "Anujith VK",
  alternates: {
    canonical: "https://anujith-vk-portfolio.vercel.app/",
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
    title: "Anujith VK | Software Engineer & Full Stack Developer Portfolio",
    description: "Anujith VK - Software Engineer & Full Stack Developer from Thalassery, Kerala. Expert in React, Next.js, Node.js, MERN Stack. Building modern web applications with clean code.",
    url: "https://anujith-vk-portfolio.vercel.app/",
    siteName: "Anujith VK - Software Engineer Portfolio",
    images: [
      {
        url: "https://anujith-vk-portfolio.vercel.app/Assets/black2.png",
        width: 1200,
        height: 630,
        alt: "Anujith VK - Software Engineer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anujith VK | Software Engineer & Full Stack Developer",
    description: "Software Engineer from Kerala specializing in React, Next.js, Node.js & MERN Stack development.",
    images: ["https://anujith-vk-portfolio.vercel.app/Assets/black2.png"],
    creator: "@anujithvk",
  },
  verification: {
    google: "googled08e147ee7ec2235",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://anujith-vk-portfolio.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Anujith VK" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anujith VK",
              "url": "https://anujith-vk-portfolio.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/anujithvk",
                "https://github.com/Anujith-vk",
                "https://www.instagram.com/anujith.__/"
              ],
              "jobTitle": "Software Engineer",
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
      <body>{children}</body>
    </html>
  );
}