import { useEffect } from "react";

interface OrganizationSchemaProps {
  pageType?: "home" | "about" | "contact" | "services";
}

export default function OrganizationSchema({ pageType = "home" }: OrganizationSchemaProps) {
  useEffect(() => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TIGON Medium Speed Vehicles",
      "description": "Premier medium speed vehicle dealership specializing in electric MSV sales, service, rentals, and financing across North America.",
      "url": "https://bucksgolfcarts.com",
      "logo": "https://bucksgolfcarts.com/attached_assets/Pennsylvania Golf Carts (3)_1753284044185.png",
      "image": "https://bucksgolfcarts.com/attached_assets/Pennsylvania Golf Carts (3)_1753284044185.png",
      "telephone": "1-844-844-6638",
      "email": "info@bucksgolfcarts.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "115 Lincoln Hwy",
        "addressLocality": "Fairless Hills",
        "addressRegion": "PA",
        "postalCode": "19030",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.1734",
        "longitude": "-74.8521"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-17:00"
      ],
      "serviceArea": [
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Medium Speed Vehicle Services & Products",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Denago Electric Medium Speed Vehicles",
              "category": "Electric Medium Speed Vehicles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Evolution Electric Medium Speed Vehicles",
              "category": "Electric Medium Speed Vehicles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium Speed Vehicle Sales",
              "category": "Sales Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium Speed Vehicle Rentals",
              "category": "Rental Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium Speed Vehicle Maintenance & Repair",
              "category": "Maintenance Service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medium Speed Vehicle Financing",
              "category": "Financial Service"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/bucksgolfcarts",
        "https://www.instagram.com/bucksgolfcarts",
        "https://www.linkedin.com/company/bucksgolfcarts"
      ]
    };

    // Add page-specific schema
    let structuredData = baseStructuredData;
    
    if (pageType === "about") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "foundingDate": "2015",
        "numberOfEmployees": "15-25"
      } as any;
    } else if (pageType === "contact") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "1-844-844-6638",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      } as any;
    } else if (pageType === "services") {
      structuredData = {
        ...baseStructuredData,
        "@type": "Organization",
        "provider": {
          "@type": "Organization",
          "name": "TIGON Medium Speed Vehicles"
        }
      } as any;
    }
    
    const existingScript = document.querySelector('script[type="application/ld+json"][data-organization]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-organization", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-organization]');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, [pageType]);

  return null;
}