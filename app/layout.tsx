import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Loving True - Love Calculator and Relationship Insights",
  description: "Discover your love compatibility and get relationship insights with Loving True.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5447932698884598" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-rose-50 to-white">
          <Header />
          <main className="flex-1">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'