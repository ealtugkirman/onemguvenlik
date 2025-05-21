import Hero from "@/components/hero"
import Hizmetler from "@/components/hizmetler"
import Hakkimizda from "@/components/hakkimizda"
import Iletisim from "@/components/iletisim"
import CTA from "@/components/cta"
import StructuredData from "@/components/structured-data"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <StructuredData />
      <Hero />
      <Hizmetler />
      <Hakkimizda />
      <CTA />
      <Iletisim />
    </div>
  )
}
