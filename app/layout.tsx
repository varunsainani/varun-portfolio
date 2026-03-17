import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Varun Sainani — Full-Stack Web Developer',
  description: 'Full-Stack Web Developer building complete web applications in React, Next.js, and Node.js. CS student at SZABIST Karachi. Available for internships and freelance.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Node.js', 'Web Developer', 'Karachi', 'Freelance'],
  authors: [{ name: 'Varun Sainani' }],
  openGraph: {
    title: 'Varun Sainani — Full-Stack Web Developer',
    description: 'Building complete web applications from interface to backend.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}