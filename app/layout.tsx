import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
  description: "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика. Гарантия на работы. Тел: 8 706 660 1500, 8 707 770 0795",
  keywords: "ремонт телевизоров, сервисный центр, Петропавловск, выезд мастера, диагностика телевизоров, теле-ателье, срочный ремонт",
  authors: [{ name: "Сервисный центр Теле-Ателье" }],
  creator: "Сервисный центр Теле-Ателье",
  publisher: "Сервисный центр Теле-Ателье",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL('https://teleatele.kz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
    description: "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика. Гарантия на работы.",
    url: 'https://teleatele.kz',
    siteName: 'Сервисный центр Теле-Ателье',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Сервисный центр Теле-Ателье - Ремонт телевизоров',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Сервисный центр Теле-Ателье - Ремонт телевизоров в Петропавловске",
    description: "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'service',
  classification: 'Business',
  other: {
    'geo.region': 'KZ',
    'geo.placename': 'Петропавловск',
    'geo.position': '54.8758;69.1628',
    'ICBM': '54.8758, 69.1628',
    'contact:phone': '+7 706 660 1500',
    'contact:phone:mobile': '+7 707 770 0795',
    'contact:whatsapp': '+7 706 660 1500',
    'contact:instagram': 'teleatele.kz',
    'business:service_type': 'Ремонт телевизоров',
    'business:opening_hours': 'Пн-Вс 09:00-21:00',
    'business:area_served': 'Петропавловск',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Сервисный центр Теле-Ателье",
              "description": "Срочный ремонт телевизоров в Петропавловске. Выезд мастера на дом в течение часа. Бесплатная диагностика.",
              "url": "https://teleatele.kz",
              "telephone": ["+7 706 660 1500", "+7 707 770 0795"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Петропавловск",
                "addressCountry": "KZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 54.8758,
                "longitude": 69.1628
              },
              "openingHours": "Mo-Su 09:00-21:00",
              "serviceType": "Ремонт телевизоров",
              "areaServed": {
                "@type": "City",
                "name": "Петропавловск"
              },
              "sameAs": [
                "https://instagram.com/teleatele.kz"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "KZT",
              "paymentAccepted": "Cash, Card",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Услуги ремонта",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Диагностика телевизора",
                      "description": "Бесплатная диагностика неисправностей"
                    },
                    "price": "0",
                    "priceCurrency": "KZT"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Выезд мастера на дом",
                      "description": "Выезд мастера в течение часа"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
