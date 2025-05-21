"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"
import ThemeToggle from "@/components/ui/theme-toggle"

const navigation = {
  categories: [
    {
      id: "main",
      name: "Ana Menü",
      sections: [
        {
          id: "company",
          name: "Şirket",
          items: [
            { name: "Ana Sayfa", href: "/" },
            { name: "Hizmetlerimiz", href: "#hizmetler" },
            { name: "Hakkımızda", href: "#hakkimizda" },
            { name: "İletişim", href: "#iletisim" },
          ],
        },
        {
          id: "services",
          name: "Hizmetlerimiz",
          items: [
            { name: "HD Kamera Sistemleri", href: "#kamera-sistemleri" },
            { name: "Alarm Sistemleri", href: "#alarm-sistemleri" },
            { name: "Geçiş Kontrol Sistemleri", href: "#gecis-kontrol" },
            { name: "Yapay Zeka Video Analiz", href: "#video-analiz" },
            { name: "Yangın Algılama Sistemleri", href: "#yangin-alarm" },
            { name: "Akıllı Bina Sistemleri", href: "#akilli-bina" },
          ],
        },
        {
          id: "contact",
          name: "İletişim",
          items: [
            { name: "Adres", href: "#iletisim", icon: MapPin },
            { name: "Telefon", href: "tel:+902124567890", icon: Phone },
            { name: "E-posta", href: "mailto:info@onemguvenlik.com.tr", icon: Mail },
            { name: "Çalışma Saatleri", href: "#iletisim", icon: Clock },
          ],
        },
        {
          id: "legal",
          name: "Yasal",
          items: [
            { name: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
            { name: "Kullanım Şartları", href: "/kullanim-sartlari" },
            { name: "Çerez Politikası", href: "/cerez-politikasi" },
            { name: "KVKK", href: "/kvkk" },
          ],
        },
      ],
    },
  ],
}

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform`

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 pb-0 md:flex">
        <Link href="/" className="flex justify-center md:justify-start">
          <Image
            src="onem-logo-white-text.png"
            alt="Önem Güvenlik Logo"
            width={300}
            height={120}
            className="h-52 w-auto"
          />
        </Link>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-gray-800 border-dotted"></div>
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 md:grid-cols-4 flex-row justify-between gap-6 leading-6"
            >
              {category.sections.map((section) => (
                <div key={section.name} className="mb-8">
                  <h3 className="text-sm font-semibold text-white mb-4">{section.name}</h3>
                  <ul role="list" className="flex flex-col space-y-3">
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
                        >
                          {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="border-b border-gray-800 border-dotted"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="E-posta"
            href="mailto:info@onemguvenlik.com.tr"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Twitter"
            href="https://twitter.com/onemguvenlik"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/onemguvenlik/"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/onemguvenlik"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            aria-label="YouTube"
            href="https://www.youtube.com/onemguvenlik"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-gray-400">
          <span>© {new Date().getFullYear()} Önem Güvenlik ve Kamera Sistemleri A.Ş. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  )
}
