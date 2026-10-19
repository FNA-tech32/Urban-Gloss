/**
 * Server-rendered JSON-LD structured data for Urban Gloss.
 * LocalBusiness (HairSalon subtype) schema for SEO, Google Maps, and rich snippets.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://urbangloss.ie"

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${SITE_URL}/#salon`,
  name: "Urban Gloss",
  alternateName: "Colour & Finish Atelier",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero_hair_studio.jpg`,
  logo: `${SITE_URL}/images/hero_hair_studio.jpg`,
  description:
    "Dublin's colour and finish atelier on Wicklow Street. Bespoke precision cutting, French balayage, Olaplex bond therapy, and couture bridal styling.",
  telephone: "+353 1 555 0142",
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Wicklow Street",
    addressLocality: "Dublin",
    addressRegion: "Dublin",
    postalCode: "D02 YH68",
    addressCountry: "IE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.3426,
    longitude: -6.2608,
  },
  hasMap: `${SITE_URL}/#location`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday"],
      opens: "09:00",
      closes: "19:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/urbangloss",
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Hair Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Signature Precision Cut & Blowdry" },
        price: "65",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "French Freehand Balayage & Gloss Melt" },
        price: "165",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Olaplex Bond Intense Scalp & Hair Therapy" },
        price: "55",
        priceCurrency: "EUR",
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/booking`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    name: "Book a hair appointment",
  },
}

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Urban Gloss",
  publisher: { "@id": `${SITE_URL}/#salon` },
}

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
