"use client"

import { useState } from "react"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

const navItems = [
  { name: "Ana Sayfa", link: "/" },
  { name: "Hizmetlerimiz", link: "#hizmetler" },
  { name: "Hakkımızda", link: "#hakkimizda" },
  { name: "Referanslar", link: "#referanslar" },
  { name: "İletişim", link: "#iletisim" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo
            logo="/onem-sade-logo-siyah.png"
            name="Önem Güvenlik"
          />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="#iletisim" className="bg-blue-700 text-white hover:bg-blue-800">
              Ücretsiz Keşif
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo
              logo="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%CC%88nem-gu%CC%88venlik-logo.jpg-Vif4tmzMGatq9wnOfP1AGT3DM45gFd.jpeg"
              name="Önem Güvenlik"
            />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 w-full py-3 border-b border-gray-100"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                href="#iletisim"
              >
                Bize Ulaşın
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-blue-700 text-white hover:bg-blue-800"
                href="#iletisim"
              >
                Ücretsiz Keşif
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
