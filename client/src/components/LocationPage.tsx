import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Truck, Star, Users, Wrench, Battery } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import VehicleCard from "@/components/VehicleCard";
import { LocationConfig } from "@/data/locations";

interface Vehicle {
  description: string;
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  images: string[];
  specifications: {
    topSpeed: string;
    range: string;
    seatingCapacity: number;
    batteryType: string;
    chargingTime: string;
    payload: string;
  };
  features: string[];
  inStock: boolean;
  isNew: boolean;
}

interface LocationPageProps {
  location: LocationConfig;
}

// Function to generate Google Maps embed URL
const getGoogleMapsEmbedUrl = (mapQuery: string) => {
  const encodedLocation = encodeURIComponent(mapQuery);
  return `https://maps.google.com/maps?q=${encodedLocation}&t=&z=6&ie=UTF8&iwloc=&output=embed`;
};

export default function LocationPage({ location }: LocationPageProps) {
  const { slug, name, type, seoTitle, seoDescription, heroTitle, heroSubtitle, mapQuery } = location;

  // Fetch vehicles data
  const { data: vehicles, isLoading } = useQuery<Vehicle[]>({
    queryKey: ['/api/vehicles'],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const mapEmbedUrl = getGoogleMapsEmbedUrl(mapQuery);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={`medium speed vehicles, MSV, ${name}, TIGON, electric vehicles, ${type === 'state' ? 'state' : 'country'}`}
        canonicalUrl={`https://bucksgolfcarts.com/${slug}`}
        image="https://bucksgolfcarts.com/attached_assets/Bucks County Golf Carts (3)_1753284044185.png"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" data-testid="location-hero-title">
            {heroTitle}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="location-hero-subtitle">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2677364890">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="button-call">
                <Phone className="mr-2 h-5 w-5" />
                Call 267-736-4890
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100" data-testid="button-contact">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas & Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery Available</h3>
              <p className="text-gray-600">
                Professional delivery and setup throughout {name}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Service</h3>
              <p className="text-gray-600">
                Factory-trained technicians for all MSV brands
              </p>
            </div>

            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Battery className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Electric MSVs</h3>
              <p className="text-gray-600">
                Premium electric medium speed vehicles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Medium Speed Vehicles</h2>
            <p className="text-xl text-gray-600">
              Premium electric MSVs available in {name}
            </p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading vehicles...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/inventory">
              <Button size="lg" className="bg-theme-primary hover:bg-blue-800" data-testid="button-view-inventory">
                View Full Inventory
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
            Serving {name}
          </h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${name}`}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services in {name}</h2>
            <p className="text-xl text-gray-600">
              Comprehensive MSV solutions for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  New and certified pre-owned medium speed vehicles from top brands
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Service & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional maintenance and repair by certified technicians
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Daily, weekly, and monthly MSV rental options available
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible financing options to fit your budget
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started in {name}?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our medium speed vehicles and services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2677364890">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white" data-testid="button-call-cta">
                <Phone className="mr-2 h-5 w-5" />
                Call 267-736-4890
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-white text-theme-primary hover:bg-gray-100" data-testid="button-contact-cta">
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>115 Lincoln Hwy, Fairless Hills, PA 19030</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              <span>Mon-Fri 9AM-6PM, Sat 9AM-5PM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
