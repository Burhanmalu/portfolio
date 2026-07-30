import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})
const _syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "TransitOps Fleet Intelligence",
  description: "TransitOps is a modern fleet intelligence platform featuring GIS mapping, fleet management, analytics, driver monitoring, risk assessment, real-time operational dashboards, and intelligent reporting.",
  keywords: [
    "Fleet Management",
    "GIS",
    "TransitOps",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "JWT",
    "Developer Portfolio",
    "Fleet Intelligence",
    "Analytics Dashboard",
    "Risk Radar",
    "GIS Mapping",
    "Transportation",
    "Logistics"
  ],
  authors: [{ name: "Burhanuddin Mulla" }],
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "TransitOps Fleet Intelligence",
    description: "TransitOps is a modern fleet intelligence platform featuring GIS mapping, fleet management, analytics, driver monitoring, risk assessment, real-time operational dashboards, and intelligent reporting.",
    url: "https://burhanuddin-protfolio.vercel.app",
    siteName: "TransitOps",
    images: [
      {
        url: "/Profilephoto.jpeg",
        width: 600,
        height: 600,
        alt: "TransitOps Fleet Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TransitOps Fleet Intelligence",
    description: "TransitOps is a modern fleet intelligence platform featuring GIS mapping, fleet management, analytics, driver monitoring, risk assessment, real-time operational dashboards, and intelligent reporting.",
    images: ["/Profilephoto.jpeg"],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://burhanuddin-protfolio.vercel.app",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_spaceMono.variable} ${_syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
