"use client";

import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

const hizmetlerItems: Gallery4Item[] = [
  {
    id: "alarm-sistemleri",
    title: "Alarm Sistemleri",
    description:
      "Akıllı hareket algılama, kapı/pencere sensörleri ve mobil uygulama kontrolü ile tam güvenlik sağlayan alarm sistemleri.",
    href: "#alarm-sistemleri",
    image: "/alarm-system.png",
  },
  {
    id: "kamera-sistemleri",
    title: "HD Kamera Sistemleri",
    description:
      "4K çözünürlüklü, gece görüşlü ve hareket algılama özellikli kamera sistemleri ile mülkünüzü 7/24 izleyin ve kaydedin.",
    href: "#kamera-sistemleri",
    image: "/hd-camera-system.png",
  },
  {
    id: "gecis-kontrol",
    title: "Geçiş Kontrol Sistemleri",
    description:
      "Parmak izi, yüz tanıma, kart ve şifre ile güvenli geçiş kontrol sistemleri kurulumu ve yönetimi.",
    href: "#gecis-kontrol",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cD_25RPQ_V5CxZCfsfPRr-ZIzVXXAerALQ&s",
  },
  {
    id: "video-analiz",
    title: "Yapay Zeka Video Analiz",
    description:
      "Yapay zeka destekli video analiz sistemleri ile şüpheli hareketleri anında tespit eden ve uyarı veren akıllı çözümler.",
    href: "#video-analiz",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGhw28AqBGS6g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1683892178377?e=2147483647&v=beta&t=s-wwje6mymvU_UCC1XQsoRvdkLqAUh3H0b_UjKvN7u8",
  },
  {
    id: "yangin-alarm",
    title: "Yangın Algılama Sistemleri",
    description:
      "Duman, ısı ve gaz sensörleri ile yangın tehlikesini önceden tespit eden ve acil müdahale imkanı sunan sistemler.",
    href: "#yangin-alarm",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/316046601/GD/TZ/MJ/427096/karsan-wireless-fire-detectors.jpg",
  },
  {
    id: "akilli-bina",
    title: "Akıllı Bina Sistemleri",
    description:
      "Mobil uygulama ile uzaktan kontrol edilebilen, enerji tasarrufu sağlayan ve güvenliği artıran akıllı bina çözümleri.",
    href: "#akilli-bina",
    image: "https://green.org/wp-content/uploads/2024/01/smart-intelligent-buildings-in-residential-buildings-1920x960-1.jpeg",
  },
];

export default function Hizmetler() {
  return (
    <section id="hizmetler" className="bg-gray-50">
      <Gallery4
        title="Hizmetlerimiz"
        description="Önem Güvenlik olarak, ihtiyaçlarınıza uygun profesyonel güvenlik çözümleri sunuyoruz. En son teknoloji ürünlerle ev, işyeri ve kurumsal alanlarınız için tam koruma sağlıyoruz."
        items={hizmetlerItems}
      />
    </section>
  );
}
