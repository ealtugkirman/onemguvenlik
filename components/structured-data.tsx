export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Önem Güvenlik ve Kamera Sistemleri A.Ş.",
    url: "https://www.onemguvenlik.com.tr",
    logo: "https://www.onemguvenlik.com.tr/logo.png",
    description:
      "15 yıllık tecrübemizle ev, işyeri ve kurumsal alanlar için profesyonel güvenlik ve kamera sistemleri çözümleri sunuyoruz.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Büyükdere Caddesi, No: 128, Esentepe İş Merkezi, Kat: 5",
      addressLocality: "Şişli",
      addressRegion: "İstanbul",
      postalCode: "34394",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-212-456-7890",
      contactType: "customer service",
      availableLanguage: "Turkish",
    },
    sameAs: [
      "https://www.facebook.com/onemguvenlik",
      "https://www.twitter.com/onemguvenlik",
      "https://www.instagram.com/onemguvenlik",
      "https://www.linkedin.com/company/onemguvenlik",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
