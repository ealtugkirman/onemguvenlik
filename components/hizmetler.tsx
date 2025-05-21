"use client"

import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4"

const hizmetlerItems: Gallery4Item[] = [
  {
    id: "kamera-sistemleri",
    title: "HD Kamera Sistemleri",
    description:
      "4K çözünürlüklü, gece görüşlü ve hareket algılama özellikli kamera sistemleri ile mülkünüzü 7/24 izleyin ve kaydedin.",
    href: "#kamera-sistemleri",
    image: "/hd-camera-system.png",
  },
  {
    id: "alarm-sistemleri",
    title: "Alarm Sistemleri",
    description:
      "Akıllı hareket algılama, kapı/pencere sensörleri ve mobil uygulama kontrolü ile tam güvenlik sağlayan alarm sistemleri.",
    href: "#alarm-sistemleri",
    image: "/alarm-system.png",
  },
  {
    id: "gecis-kontrol",
    title: "Geçiş Kontrol Sistemleri",
    description: "Parmak izi, yüz tanıma, kart ve şifre ile güvenli geçiş kontrol sistemleri kurulumu ve yönetimi.",
    href: "#gecis-kontrol",
    image: "/access-control.png",
  },
  {
    id: "video-analiz",
    title: "Yapay Zeka Video Analiz",
    description:
      "Yapay zeka destekli video analiz sistemleri ile şüpheli hareketleri anında tespit eden ve uyarı veren akıllı çözümler.",
    href: "#video-analiz",
    image: "/ai-video-analysis.png",
  },
  {
    id: "yangin-alarm",
    title: "Yangın Algılama Sistemleri",
    description:
      "Duman, ısı ve gaz sensörleri ile yangın tehlikesini önceden tespit eden ve acil müdahale imkanı sunan sistemler.",
    href: "#yangin-alarm",
    image: "/fire-detection.png",
  },
  {
    id: "akilli-bina",
    title: "Akıllı Bina Sistemleri",
    description:
      "Mobil uygulama ile uzaktan kontrol edilebilen, enerji tasarrufu sağlayan ve güvenliği artıran akıllı bina çözümleri.",
    href: "#akilli-bina",
    image: "/smart-building.png",
  },
]

export default function Hizmetler() {
  return (
    <section id="hizmetler" className="bg-gray-50">
      <Gallery4
        title="Hizmetlerimiz"
        description="Önem Güvenlik olarak, ihtiyaçlarınıza uygun profesyonel güvenlik çözümleri sunuyoruz. En son teknoloji ürünlerle ev, işyeri ve kurumsal alanlarınız için tam koruma sağlıyoruz."
        items={hizmetlerItems}
      />
    </section>
  )
}
