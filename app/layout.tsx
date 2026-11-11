import type { Metadata } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { CookieBanner } from "@/components/site/cookie-banner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: "Forge — Software a medida, hecho pieza por pieza",
    template: "%s · Forge",
  },
  description:
    "Desarrollamos sistemas, apps, inteligencia artificial y equipos conectados para tu empresa. Empezamos por una pieza y seguimos desde ahí.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={cn("h-full", geistSans.variable, geistMono.variable, instrumentSerif.variable)}>
      <body style={{ minHeight: "100%" }}>
        <div
          style={{
            minHeight: "100%",
            background: "#fafafa",
            fontFamily: "var(--font-geist-sans), 'Geist', system-ui, sans-serif",
            color: "#14171c",
          }}
        >
          <div style={{ background: "#fafafa" }}>
            <SiteNav />
            <main>{children}</main>
            <div style={{ height: "8px" }} />
          </div>
          <SiteFooter />
        </div>
        <CookieBanner />
      </body>
    </html>
  )
}
