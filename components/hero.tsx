"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Improved gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <span className="inline-block text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2">
              Profesyonel Güvenlik Çözümleri
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Güvenliğiniz Bizim Önceliğimiz
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mt-6 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Önem Güvenlik olarak uzman kadromuzla ev, işyeri ve kurumsal alanlarınız için en gelişmiş güvenlik ve
            kamera sistemleri çözümlerini sunuyoruz. 7/24 izleme ve teknik destek hizmetimizle her zaman yanınızdayız.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              asChild
            >
              <a href="#hizmetler">Hizmetlerimiz</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black hover:text-white duration-500 hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition-colors"
              asChild
            >
              <a href="#iletisim">Bize Ulaşın</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-[2]"></div>
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl z-[1]"></div>
    </section>
  )
}
