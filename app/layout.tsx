import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AnalysisProvider } from "@/context/analysis-context";
import { ThemeProvider } from "@/context/theme-provider";
import "./fonts.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  // Basic Meta Tags
  title: {
    default: "CodeSight | Analyze any public GitHub repository with AI",
    template: "%s | CodeSight",
  },
  description:
    "Analyze GitHub repositories with AI to uncover code quality issues, architecture insights, dependencies, and security vulnerabilities in seconds.",
  applicationName: "CodeSight",
  authors: [{ name: "Suryanshu Nabheet", url: "https://github.com/Suryanshu-Nabheet" }],
  generator: "Next.js",
  keywords: [
    "GitHub",
    "repository analysis",
    "code quality",
    "AI analysis",
    "code review",
    "developer tools",
    "open source",
    "software architecture",
    "dependency analysis",
    "security scanning",
    "code metrics",
    "technical debt",
    "repository insights",
    "GitHub automation",
    "code health",
    "CodeSight",
    "github repo analyzer",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Suryanshu Nabheet",
  publisher: "Suryanshu Nabheet",
  category: "Developer Tools",

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CodeSight",
    title: "CodeSight - Analyze any public GitHub repository with AI",
    description:
      "Analyze any GitHub repository with AI. Get instant insights on code quality, architecture, dependencies, and security vulnerabilities.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CodeSight - Analyze any public GitHub repository with AI",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@SuryanshuXDev",
    creator: "@SuryanshuXDev",
    title: "CodeSight - Analyze any public GitHub repository with AI",
    description:
      "Analyze any GitHub repository with AI. Get instant insights on code quality, architecture, and security.",
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: "CodeSight - Analyze any public GitHub repository with AI",
    },
  },

  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CodeSight",
  },

  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Other
  other: {
    "msapplication-TileColor": "#0a0a0a",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "CodeSight",
  description:
    "AI-powered GitHub repository analysis tool for developers. Get instant insights on code quality, architecture, dependencies, and security vulnerabilities.",
  url: siteUrl,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Suryanshu Nabheet",
    url: "https://github.com/Suryanshu-Nabheet",
    sameAs: [
      "https://github.com/Suryanshu-Nabheet",
      "https://github.com/Suryanshu-Nabheet/CodeSight",
      "https://x.com/SuryanshuXDev/"
    ],
  },
  creator: {
    "@type": "Person",
    name: "Suryanshu Nabheet",
    url: "https://github.com/Suryanshu-Nabheet",
  },
  screenshot: `${siteUrl}/og-image.png`,
  featureList: [
    "AI-powered code analysis",
    "Repository structure visualization",
    "Dependency analysis",
    "Security vulnerability detection",
    "Code quality metrics",
    "Actionable improvement suggestions",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          geistSans.variable,
          geistMono.variable,
          jetBrainsMono.variable,
          instrumentSerif.variable,
          "antialiased overflow-x-hidden"
        )}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnalysisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AnalysisProvider>
      </body>
    </html>
  );
}
