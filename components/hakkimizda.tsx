"use client"

import { About3 } from "@/components/ui/about-3"

export default function Hakkimizda() {
  return (
    <section id="hakkimizda">
      <About3
        title="Hakkımızda"
        description="Önem Güvenlik ve Kamera Sistemleri A.Ş. olarak, sektör tecrübemizle Türkiye genelinde güvenlik sektöründe hizmet vermekteyiz. Kurulduğumuz günden bu yana 100'den fazla kurumsal müşteriye ve 500'den fazla bireysel müşteriye hizmet verdik."
        mainImage={{
          src: "/security-team-meeting.png",
          alt: "Önem Güvenlik Ekibi Toplantı Halinde",
        }}
        secondaryImage={{
          src: "/professional-security-team-meeting.png",
          alt: "Profesyonel Güvenlik Ekibi",
        }}
        breakout={{
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/o%CC%88nem-gu%CC%88venlik-logo.jpg-Vif4tmzMGatq9wnOfP1AGT3DM45gFd.jpeg",
          alt: "Önem Güvenlik Logo",
          title: "Profesyonel Güvenlik Çözümleri",
          description:
            "Uzman mühendis kadromuz ve teknik ekibimizle, en son teknoloji ürünleri kullanarak ev, işyeri, fabrika, okul, AVM ve kamu kurumları için özel güvenlik çözümleri sunuyoruz.",
          buttonText: "Hizmetlerimiz",
          buttonUrl: "#hizmetler",
        }}
        companiesTitle="Güvendiğiniz Markalar Bizi Tercih Ediyor"
        companies={[
          {
            src: "/client-logo-bank.png",
            alt: "Türkiye İş Bankası",
          },
          {
            src: "/client-logo-market.png",
            alt: "Migros",
          },
          {
            src: "/client-logo-municipality.png",
            alt: "İstanbul Büyükşehir Belediyesi",
          },
          {
            src: "/client-logo-mall.png",
            alt: "Marmara Park AVM",
          },
          {
            src: "/client-logo-hotel.png",
            alt: "Hilton Oteller Zinciri",
          },
          {
            src: "/client-logo-factory.png",
            alt: "Arçelik Fabrikası",
          },
        ]}
        achievementsTitle="Rakamlarla Önem Güvenlik"
        achievementsDescription="Profesyonel hizmet anlayışımız ve kaliteli çözümlerimizle güvenlik sektöründe öncü konuma geldik. Müşteri memnuniyeti odaklı yaklaşımımızla sektörde fark yaratıyoruz."
        achievements={[
          { label: "Kurumsal Müşteri", value: "100+" },
          { label: "Tamamlanan Proje", value: "500+" },
          { label: "Memnun Müşteri", value: "%98" },
          { label: "Teknik Uzman", value: "10+" },
        ]}
      />
    </section>
  )
}
