import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NasikSquare.com - Premium Real Estate in Nasik | Buy, Sell, Rent Properties",
  description:
    "Find your dream property in Nasik with NasikSquare.com. Browse verified flats, plots, bungalows, and commercial properties. Trusted by thousands of property seekers.",
  keywords:
    "Nasik real estate, properties in Nasik, flats for sale Nasik, plots in Nasik, bungalows Nasik, commercial properties Nasik",
  authors: [{ name: "NasikSquare.com" }],
  creator: "NasikSquare.com",
  publisher: "NasikSquare.com",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nasiksquare.com",
    title: "NasikSquare.com - Premium Real Estate in Nasik",
    description: "Find your dream property in Nasik with verified listings and trusted dealers.",
    siteName: "NasikSquare.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "NasikSquare.com - Premium Real Estate in Nasik",
    description: "Find your dream property in Nasik with verified listings and trusted dealers.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-brand-cream`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
