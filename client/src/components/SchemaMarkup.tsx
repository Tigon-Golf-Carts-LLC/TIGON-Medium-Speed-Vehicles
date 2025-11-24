import { SITE_URL, getAbsoluteUrl } from "@/lib/utils";

interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TIGON Medium Speed Vehicles",
  "alternateName": "TIGON MSV",
  "description": "Premier medium speed vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": SITE_URL,
  "logo": getAbsoluteUrl("/attached_assets/TIGON Medium Speed Vehicles_1764003013392.png"),
  "image": [
    getAbsoluteUrl("/attached_assets/TIGON Medium Speed Vehicles_1764003013392.png")
  ],
  "telephone": "1-844-844-6638",
  "email": "info@tigonmsv.com",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "Canada"
    },
    {
      "@type": "Country",
      "name": "Mexico"
    }
  ],
  "foundingDate": "2015",
  "numberOfEmployees": "15-25",
  "slogan": "Premium medium speed vehicles delivered nationwide",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/tigonmsv",
    "https://www.instagram.com/tigonmsv"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "TIGON Medium Speed Vehicles",
  "description": "Premier medium speed vehicle dealer specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals across North America.",
  "url": SITE_URL,
  "telephone": "1-844-844-6638",
  "email": "info@tigonmsv.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US",
    "addressLocality": "Ocean County"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.8238,
    "longitude": -74.5889
  },
  "areaServed": [
    "Toms River Township", "Lakewood Township", "Brick Township", "Jackson Township",
    "Point Pleasant", "Seaside Heights", "Beach Haven", "Long Beach Township",
    "Stafford Township", "Barnegat Township", "Manchester Township", "Berkeley Township",
    "Dover Township", "Eagleswood Township", "Little Egg Harbor Township", "Ocean Township",
    "Plumsted Township", "Barnegat Light", "Bay Head", "Beachwood", "Harvey Cedars",
    "Island Heights", "Lavallette", "Mantoloking", "Ocean Gate", "Pine Beach",
    "Point Pleasant Beach", "Seaside Park", "Ship Bottom", "South Toms River",
    "Surf City", "Tuckerton", "Lacey Township", "New Hanover Township"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "name": "TIGON Medium Speed Vehicles",
  "description": "Official website for TIGON MSV - North America's premier medium speed vehicle dealer",
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/inventory?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TIGON Medium Speed Vehicles"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": getAbsoluteUrl(item.url)
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": getAbsoluteUrl(`/vehicles/${vehicle.id}#product`),
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => getAbsoluteUrl(img)) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "TIGON Medium Speed Vehicles"
    },
    "url": getAbsoluteUrl(`/vehicles/${vehicle.id}`)
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Golf Cart Services",
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Ocean County, New Jersey",
  "provider": {
    "@type": "LocalBusiness",
    "name": "TIGON Medium Speed Vehicles"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Medium Speed Vehicle Inventory",
  "description": "Complete inventory of electric medium speed vehicles available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? getAbsoluteUrl(vehicle.images[0]) : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": getAbsoluteUrl(`/vehicles/${vehicle.id}`)
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact TIGON Medium Speed Vehicles",
  "description": "Get in touch with TIGON MSV for sales, service, rentals, and support",
  "url": getAbsoluteUrl("/contact"),
  "mainEntity": {
    "@type": "Organization",
    "name": "TIGON Medium Speed Vehicles",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "1-844-844-6638",
        "contactType": "customer service",
        "areaServed": ["US", "CA", "MX"],
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "info@tigonmsv.com",
        "contactType": "sales",
        "areaServed": ["US", "CA", "MX"]
      }
    ]
  }
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Medium Speed Vehicles in ${townName}`,
  "description": `Professional medium speed vehicle sales, service, and rentals delivered to ${townName}, Pennsylvania`,
  "url": getAbsoluteUrl(`/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`),
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "TIGON Medium Speed Vehicles",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Pennsylvania",
        "containedInPlace": {
          "@type": "State",
          "name": "Pennsylvania"
        }
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Medium Speed Vehicles`,
        "item": getAbsoluteUrl(`/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`)
      }
    ]
  }
});