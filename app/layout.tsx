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
  metadataBase: new URL("https://burhanuddin-protfolio.vercel.app"),

  title: {
    default: "Burhanuddin Malu | Full Stack Developer",
    template: "%s | Burhanuddin",
  },

  description:
    "Full Stack Developer specializing in .NET, Next.js, GIS Mapping, AI-powered applications, and modern web experiences.",

  keywords: [
    "Burhanuddin Mulla",
    "Full Stack Developer",
    ".NET Developer",
    "ASP.NET Core",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "C#",
    "Node.js",
    "PostgreSQL",
    "SQL Server",
    "REST API",
    "Tailwind CSS",
    "GIS Mapping",
    "OpenStreetMap",
    "Artificial Intelligence",
    "Enterprise Software",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "GitHub",
    "India"
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
    title: "Burhanuddin Malu | Full Stack Developer",
    description:
      "Explore the portfolio of Burhanuddin Mulla, a Full Stack Developer specializing in .NET, Next.js, React, GIS Mapping, AI-powered applications, and scalable enterprise solutions.",
    url: "https://burhanuddin-protfolio.vercel.app",
    siteName: "Burhanuddin Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Burhanuddin Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Burhanuddin Malu | Portfolio",
    description:
      "Full Stack Developer | .NET | Next.js | GIS | AI",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
