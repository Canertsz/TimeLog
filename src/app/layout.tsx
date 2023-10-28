import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TimeLog",
  description: "Track your hours with TimeLog",
  icons: "public/icon.svg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="public/icon.svg" />
        </head>
        <body
          className={`${inter.className} dark:bg-zinc-900 subpixel-antialiased transition-all`}
        >
          <main className="max-w-6xl mx-auto min-h-screen">
            {children}
            <Toaster />
          </main>
        </body>
      </html>
    </ThemeProvider>
  )
}
