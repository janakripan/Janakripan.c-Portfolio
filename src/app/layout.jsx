import "./globals.css";

export const metadata = {
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
    "Web Developer",
  ],
  authors: [{ name: "Anujith VK", url: "https://anujith-vk-portfolio.vercel.app/" }],
  creator: "Anujith VK",
  metadataBase: new URL("https://anujith-vk-portfolio.vercel.app/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
