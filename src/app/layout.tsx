import "@/styles/globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { AssetsProvider } from "@/components/assets-provider"
import { fetchAssets } from "@/components/assets-provider/fetch-assets"
import Contact from "@/components/contact/contact"
import { InspectableProvider } from "@/components/inspectables/context"
import { ContentWrapper } from "@/components/layout/content-wrapper"
import { Navbar } from "@/components/layout/navbar"
import AppLoadingHandler from "@/components/loading/app-loading-handler"
import { NavigationHandler } from "@/components/navigation-handler"
import { Transitions } from "@/components/transitions"
import { HtmlTunnelOut } from "@/components/tunnel"
import { PathnameProvider } from "@/hooks/use-watch-pathname"
import LenisScrollProvider from "@/providers/lenis-provider"
import { AppHooks } from "@/utils/app-hooks-init"
import { cn } from "@/utils/cn"
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: {
    template: "%s | basement.studio",
    default: "basement.studio | We make cool shit that performs."
  },
  description:
    "basement is a boutique studio that brings what brands envision to life, through branding, visual design & development of the highest quality.",
  twitter: {
    creator: "@basementstudio",
    site: "@basementstudio",
    card: "summary_large_image",
    title: "basement.studio | We make cool shit that performs.",
    description:
      "basement is a boutique studio that brings what brands envision to life, through branding, visual design & development of the highest quality."
  }
}

// TODO: find a way to load font-feature-settings
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

const flauta = localFont({
  src: "../../public/fonts/flauta.ttf",
  variable: "--font-flauta"
})

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const assets = await fetchAssets()

  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <SpeedInsights />
      <Transitions />
      <AssetsProvider assets={assets}>
        <InspectableProvider>
          <body
            className={cn(
              geistSans.variable,
              geistMono.variable,
              flauta.variable,
              "font-sans"
            )}
            suppressHydrationWarning
          >
            <AppLoadingHandler />
            <LenisScrollProvider>
              <HtmlTunnelOut />
              <PathnameProvider>
                <Navbar />

                <NavigationHandler />

                <ContentWrapper>{children}</ContentWrapper>
                <AppHooks assets={assets} />
                <Contact />
              </PathnameProvider>
            </LenisScrollProvider>
          </body>
        </InspectableProvider>
      </AssetsProvider>
    </html>
  )
}

export default RootLayout
