"use client"

import { CTASection } from "@/components/ui/cta-with-rectangle"

export default function CTA() {
  return (
    <section className="bg-blue-700 text-white">
      <CTASection
        badge={{
          text: "15 Yıllık Deneyim",
        }}
        title="Güvenliğinizi Profesyonellere Emanet Edin"
        description="Uzman ekibimiz ve en son teknoloji ürünlerimizle ev, işyeri ve kurumsal alanlarınız için özel güvenlik çözümleri sunuyoruz. Hemen ücretsiz keşif randevusu alın, size özel teklifimizi sunalım."
        action={{
          text: "Ücretsiz Keşif Randevusu Alın",
          href: "#iletisim",
          variant: "default",
        }}
        className="bg-blue-700 text-white"
      />
    </section>
  )
}
