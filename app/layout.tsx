import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
  description:
    "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика. Гарантия на работы. Тел: 8 706 660 1500, 8 707 770 0795",
  keywords:
    "ремонт телевизоров, сервисный центр, Петропавловск, выезд мастера, диагностика телевизоров, теле-ателье, срочный ремонт",
  authors: [{ name: "Сервисный центр Теле-Ателье" }],
  creator: "Сервисный центр Теле-Ателье",
  publisher: "Сервисный центр Теле-Ателье",
  robots: "index, follow",
  openGraph: {
    title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
    description:
      "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика. Гарантия на работы.",
    url: "https://teleatele.kz",
    siteName: "Сервисный центр Теле-Ателье",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://teleatele.kz/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Сервисный центр Теле-Ателье - Ремонт телевизоров",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
    description:
      "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика.",
    images: "https://teleatele.kz/hero.jpg",
  },
  alternates: {
    canonical: "https://teleatele.kz",
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Google Tag Manager (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-452999335"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-452999335');
          `,
          }}
        />
        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Сервисный центр Теле-Ателье",
              description:
                "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика.",
              url: "https://teleatele.kz",
              telephone: ["+7 706 660 1500", "+7 707 770 0795"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Петропавловск",
                addressCountry: "KZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 54.8758,
                longitude: 69.1628,
              },
              openingHours: "Mo-Su 09:00-21:00",
              serviceType: "Ремонт телевизоров",
              areaServed: { "@type": "City", name: "Петропавловск" },
              sameAs: ["https://instagram.com/teleatele.kz"],
              priceRange: "$$",
              currenciesAccepted: "KZT",
              paymentAccepted: "Cash, Card",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Услуги ремонта",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Диагностика телевизора",
                      description: "Бесплатная диагностика неисправностей",
                    },
                    price: "0",
                    priceCurrency: "KZT",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Выезд мастера на дом",
                      description: "Выезд мастера в течение часа",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Дополнительные meta-теги, не поддерживаемые в metadata */}
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta name="author" content="Сервисный центр Теле-Ателье" />
        <meta name="category" content="service" />
        <meta name="classification" content="Business" />
        <meta name="geo.region" content="KZ" />
        <meta name="geo.placename" content="Петропавловск" />
        <meta name="geo.position" content="54.8758;69.1628" />
        <meta name="ICBM" content="54.8758, 69.1628" />
        <meta name="contact:phone" content="+7 706 660 1500" />
        <meta name="contact:phone:mobile" content="+7 707 770 0795" />
        <meta name="contact:whatsapp" content="+7 706 660 1500" />
        <meta name="contact:instagram" content="teleatele.kz" />
        <meta name="business:service_type" content="Ремонт телевизоров" />
        <meta name="business:opening_hours" content="Пн-Вс 09:00-21:00" />
        <meta name="business:area_served" content="Петропавловск" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <link rel="icon" href="https://teleatele.kz/favicon.ico" type="image/x-icon" sizes="163x164" />
      </head>
      <body>{children}</body>
    </html>
  )
}
