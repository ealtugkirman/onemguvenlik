"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Testimonials } from "@/components/ui/testimonials"
import type { TestimonialItem } from "@/components/ui/testimonials"

const referanslar = [
  { name: "Türkiye İş Bankası", image: "/client-logo-bank.png" },
  { name: "Migros", image: "/client-logo-market.png" },
  { name: "İstanbul Büyükşehir Belediyesi", image: "/client-logo-municipality.png" },
  { name: "Marmara Park AVM", image: "/client-logo-mall.png" },
  { name: "Hilton Oteller Zinciri", image: "/client-logo-hotel.png" },
  { name: "Arçelik Fabrikası", image: "/client-logo-factory.png" },
  { name: "Bahçeşehir Koleji", image: "/client-logo-school.png" },
  { name: "Sağlık Bakanlığı", image: "/client-logo-ministry.png" },
]

const testimonials: TestimonialItem[] = [
  {
    title: "Güvenilir ve Profesyonel",
    content:
      "Bankamızın 120 şubesinde Önem Güvenlik'in kamera ve alarm sistemlerini kullanıyoruz. Teknik destek ekipleri sorunlara anında müdahale ediyor ve sistemlerimiz 5 yıldır sorunsuz çalışıyor.",
    author: {
      name: "Ahmet Yılmaz",
      title: "Türkiye İş Bankası Güvenlik Müdürü",
      image: "/testimonial-1.png",
      initials: "AY",
    },
  },
  {
    title: "Müşteri Memnuniyeti Arttı",
    content:
      "AVM'mizin tüm güvenlik altyapısını Önem Güvenlik ile yeniledik. Yapay zeka destekli kamera sistemleri sayesinde güvenlik olaylarına müdahale süremiz %60 azaldı ve müşteri memnuniyetimiz arttı.",
    author: {
      name: "Ayşe Kaya",
      title: "Marmara Park AVM Operasyon Direktörü",
      image: "/testimonial-2.png",
      initials: "AK",
    },
  },
  {
    title: "Öğrencilerimiz Güvende",
    content:
      "Okullarımızın güvenliği bizim için en önemli konu. Önem Güvenlik'in geçiş kontrol ve kamera sistemleri sayesinde 15 kampüsümüzde öğrencilerimize güvenli bir eğitim ortamı sunabiliyoruz.",
    author: {
      name: "Mehmet Demir",
      title: "Bahçeşehir Koleji Genel Müdürü",
      image: "/testimonial-3.png",
      initials: "MD",
    },
  },
  {
    title: "7/24 Teknik Destek",
    content:
      "Fabrikamızın güvenlik sistemlerini Önem Güvenlik'e emanet ettik. 7/24 teknik destek ve izleme hizmetleri sayesinde üretim süreçlerimiz kesintisiz devam ediyor ve çalışanlarımız güvende hissediyor.",
    author: {
      name: "Hakan Şahin",
      title: "Arçelik Fabrikası Güvenlik Koordinatörü",
      image: "/testimonial-4.png",
      initials: "HŞ",
    },
  },
  {
    title: "Kaliteli Ürünler",
    content:
      "Otellerimizin güvenlik sistemlerini Önem Güvenlik ile yeniledik. Kullanılan ürünlerin kalitesi ve montaj işçiliği gerçekten üst düzey. Misafirlerimiz kendilerini daha güvende hissediyor.",
    author: {
      name: "Zeynep Yıldız",
      title: "Hilton Oteller Zinciri Operasyon Müdürü",
      image: "/testimonial-5.png",
      initials: "ZY",
    },
  },
]

export default function Referanslar() {
  return (
    <section id="referanslar" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Referanslarımız</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Türkiye'nin önde gelen kurum ve kuruluşları Önem Güvenlik'i tercih ediyor.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {referanslar.map((referans, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-center h-24 md:h-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={referans.image || "/placeholder.svg"}
                alt={referans.name}
                width={150}
                height={75}
                className="max-h-12 md:max-h-16 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        <Testimonials items={testimonials} />
      </div>
    </section>
  )
}
