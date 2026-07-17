import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Priyadarshi | Software Engineer",
  description:
  "Portfolio of Aditya Priyadarshi — Software Engineer passionate about building scalable applications, solving complex problems, and continuously exploring new technologies.",
  keywords: [
    "Aditya Priyadarshi",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Priyadarshi" }],
  openGraph: {
    title: "Aditya Priyadarshi | Software Engineer",
  description:
  "Portfolio of Aditya Priyadarshi — Software Engineer passionate about building scalable applications, solving complex problems, and continuously exploring new technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="noise-overlay antialiased">{children}</body>
    </html>
  );
}
