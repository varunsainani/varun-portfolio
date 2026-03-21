import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Sainani — Full-Stack Web Developer",
  description:
    "CS student at SZABIST Karachi building scalable web applications with React, Next.js, TypeScript & Node.js. Open to internships and client projects.",
  keywords: [
    "Varun Sainani",
    "varcipher",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "SZABIST",
    "Karachi",
  ],
  authors: [{ name: "Varun Sainani", url: "https://github.com/varunsainani" }],
  openGraph: {
    title: "Varun Sainani — Full-Stack Web Developer",
    description:
      "CS student at SZABIST Karachi. React, Next.js, TypeScript & Node.js. Open to internships and client projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
