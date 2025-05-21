"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form data:", formData)
    toast({
      title: "Form gönderildi",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section id="iletisim" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">İletişim</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız için bize ulaşın. En kısa sürede size dönüş yapacağız.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <motion.div
            className="mx-auto flex max-w-sm flex-col justify-between gap-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="mb-2 text-2xl font-semibold lg:mb-1 lg:text-3xl">Bize Ulaşın</h3>
              <p className="text-gray-600">
                Güvenlik çözümleri, teknik destek veya fiyat teklifi için bizimle iletişime geçin.
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-xl font-semibold lg:text-left">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-blue-700" />
                  <div>
                    <span className="font-bold">Adres: </span>
                    <p>Mustafa Kemal Mahallesi, 2100.sokak No:2/2 Çankaya/Ankara</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-blue-700" />
                  <div>
                    <span className="font-bold">Telefon: </span>
                    <p>+90 (530) 971 19 62</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-blue-700" />
                  <div>
                    <span className="font-bold">E-posta: </span>
                    <a href="onemguvenlik@gmail.com" className="hover:underline">
                      onemguvenlik@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-blue-700" />
                  <div>
                    <span className="font-bold">Çalışma Saatleri: </span>
                    <p>Pazartesi - Cuma: 09:00 - 17:00</p>
                    <p>Cumartesi: 09:00 - 14:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-8 bg-white shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-4">
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="firstname" className="text-sm font-medium">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Adınız"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label htmlFor="lastname" className="text-sm font-medium">
                    Soyadınız
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Soyadınız"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5 mb-4">
                <label htmlFor="email" className="text-sm font-medium">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-posta Adresiniz"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5 mb-4">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Telefon Numaranız"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <div className="grid w-full gap-1.5 mb-6">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın..."
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-700 text-white hover:bg-blue-800 h-10 px-4 py-2 w-full"
              >
                Mesaj Gönder
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=mustafa%20kemal%20mah.%202100.sokak%20No:2&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Önem Güvenlik Harita"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
