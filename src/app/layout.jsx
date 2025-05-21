import "./globals.css";

export const metadata = {
  title: "Anujith VK | Software Engineer | Thalassery | Kerala | India",
  description: "Portfolio of Anujith VK — Software Engineer based in Thalassery, Kannur. Specializing in modern web development, full-stack engineering, and creative digital solutions.",
  metadataBase: new URL("https://anujith-vk-portfolio.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
keywords: [
  "Anujith VK",
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "JavaScript Developer",
  "TypeScript Developer",
  "HTML",
  "CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API Developer",
  "Portfolio Website",
  "Thalassery",
  "Kannur",
  "Kerala",
  "India",
  "Software Portfolio",
  "St. Thomas College of Engineering and Technology",
  "Modern Web Development",
  "Responsive Design",
  "Clean UI",
  "SEO Optimized Website",
  "Personal Portfolio",
  "Tech Resume Website",
  "Next js",
  "Tailwind css",
  "sanity",
  "PostgreSql"
],
  authors: [{ name: "Anujith VK", url: "https://anujith-vk-portfolio.vercel.app/" }],
  creator: "Anujith VK",
  alternates: {
    canonical: "https://anujith-vk-portfolio.vercel.app/",
  },
  openGraph: {
    title: "Anujith VK | Software Engineer",
    description: "Portfolio of Anujith VK — Software Engineer based in Thalassery, Kannur...",
    url: "https://anujith-vk-portfolio.vercel.app/",
    siteName: "Anujith VK Portfolio",
    images: [
      {
        url: "https://anujith-vk-portfolio.vercel.app/Assets/black2.jpg",
        width: 1200,
        height: 630,
        alt: "Anujith VK Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
