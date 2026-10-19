import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/json-ld"
import { DemoBadge } from "@/components/demo-badge"
import "./globals.css"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://urbangloss.ie"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Urban Gloss | Luxury Hair Salon & Balayage in Dublin",
    template: "%s | Urban Gloss",
  },
  description:
    "Dublin's colour and finish atelier on Wicklow Street. 24/7 online booking for precision haircuts, French balayage, Olaplex treatments, and bridal styling.",
  keywords: [
    "Urban Gloss",
    "Colour & Finish Atelier",
    "hair salon Dublin",
    "balayage Dublin",
    "hairdresser Wicklow Street",
    "haircut Dublin 2",
    "luxury hair salon Ireland",
    "bridal hair Dublin",
  ],
  authors: [{ name: "Urban Gloss" }],
  creator: "Urban Gloss",
  publisher: "Urban Gloss",
  applicationName: "Urban Gloss",
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "beauty",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: "Urban Gloss",
    title: "Urban Gloss | Luxury Hair Salon & Balayage in Dublin",
    description:
      "Dublin's colour and finish atelier on Wicklow Street. Precision cuts, bespoke color, and restorative hair therapies.",
    images: [
      {
        url: "/images/hero_hair_studio.jpg",
        width: 1200,
        height: 630,
        alt: "Urban Gloss interior on Wicklow Street, Dublin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Gloss | Luxury Hair Salon in Dublin",
    description:
      "Bespoke precision haircuts, French balayage, and restorative hair therapies at Urban Gloss on Wicklow Street.",
    images: ["/images/hero_hair_studio.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0b0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <DemoBadge />
        </ThemeProvider>
        <JsonLd />
      </body>
    </html>
  )
}
