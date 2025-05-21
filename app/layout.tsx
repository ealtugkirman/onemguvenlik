import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Önem Güvenlik ve Kamera Sistemleri A.Ş. | Profesyonel Güvenlik Çözümleri",
  description:
    "15 yıllık tecrübemizle ev, işyeri ve kurumsal alanlar için profesyonel güvenlik ve kamera sistemleri çözümleri sunuyoruz. 7/24 teknik destek ve izleme hizmeti.",
  keywords:
    "güvenlik sistemleri, kamera sistemleri, alarm sistemleri, geçiş kontrol, yangın algılama, akıllı ev, istanbul güvenlik",
  authors: [{ name: "Önem Güvenlik" }],
  creator: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
  publisher: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.onemguvenlik.com.tr",
    title: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
    description:
      "15 yıllık tecrübemizle ev, işyeri ve kurumsal alanlar için profesyonel güvenlik ve kamera sistemleri çözümleri sunuyoruz.",
    siteName: "Önem Güvenlik",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%CC%88nem-gu%CC%88venlik-logo.jpg-Vif4tmzMGatq9wnOfP1AGT3DM45gFd.jpeg",
        width: 1200,
        height: 630,
        alt: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
    description: "15 yıllık tecrübemizle profesyonel güvenlik ve kamera sistemleri çözümleri",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%CC%88nem-gu%CC%88venlik-logo.jpg-Vif4tmzMGatq9wnOfP1AGT3DM45gFd.jpeg",
    ],
  },
  alternates: {
    canonical: "https://www.onemguvenlik.com.tr",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <StructuredData />
        <Header />
        <main className="flex-1 pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
