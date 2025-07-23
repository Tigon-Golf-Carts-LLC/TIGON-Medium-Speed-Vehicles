import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import InventorySection from "@/components/InventorySection";
import BrandsSection from "@/components/BrandsSection";
import SchemaMarkup, { 
  generateOrganizationSchema, 
  generateLocalBusinessSchema, 
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateOfferCatalogSchema
} from "@/components/SchemaMarkup";

export default function HomePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateWebsiteSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      {vehicles && <SchemaMarkup schema={generateOfferCatalogSchema(vehicles)} />}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(59, 130, 246, 0.8), rgba(14, 46, 85, 0.8)), url('/attached_assets/0f46bdfb-c558-4e28-9473-6c85686c5a80 (1)_1753279436268.png')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
Bucks County Golf Carts Premier Dealership
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Discover our extensive selection of new electric golf carts from Evolution and Denago with professional services. 
                Serving Bucks County, and all surrounding towns, townships, and Pennsylvania communities In Bucks County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    View Inventory
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                  Call Now 1-844-844-6638
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png" 
                alt="Golf Cart" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose Bucks County Golf Carts?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're more than just a dealership - we're your partner in golf cart ownership 
            with comprehensive services and unmatched expertise.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated brands including Yamaha, Club Car, EZGO, and Evolution with rigorous quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance, repairs, and customization by certified technicians.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible payment options with 0% financing available on select models.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Electric golf carts for sustainable, quiet, and efficient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Bucks County Golf Carts - Top Golf Cart and LSV Brands
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We carry the most trusted names in Golf Carts and Low Speed Vehicles
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Club Car</h3>
              <p className="text-sm text-gray-600">Premium golf carts with advanced technology</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">EZ-GO</h3>
              <p className="text-sm text-gray-600">Reliable and efficient golf cart solutions</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Denago</h3>
              <p className="text-sm text-gray-600">High-quality performance golf carts</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Evolution</h3>
              <p className="text-sm text-gray-600">Luxury golf carts with premium features</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Tomberlin</h3>
              <p className="text-sm text-gray-600">Street-legal LSV and golf cart options</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Swift EV</h3>
              <p className="text-sm text-gray-600">Electric vehicle innovation</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-green-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Factory Warranties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Certified Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Golf Carts
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Check out some of our most popular models
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Evolution D5 Maverick 4 Plus */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg" 
                  alt="Evolution D5 Maverick 4 Plus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D5 Maverick 4 Plus</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $12,995
                  </span>
                  <Link href="/vehicles/evolution-d5-maverick-4-plus">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Evolution D6 Max GT4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg" 
                  alt="Evolution D6 Max GT4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D6 Max GT4</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  High-performance 4-passenger golf cart with cutting-edge technology and sporty design.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $16,995
                  </span>
                  <Link href="/vehicles/evolution-d6-max-gt4">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Denago EV City */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg" 
                  alt="Denago EV City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Denago EV City</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Urban mobility solution with street-legal capabilities and modern design for city transportation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $11,995
                  </span>
                  <Link href="/vehicles/denago-ev-city">
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Link href="/inventory">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View Full Inventory
            </Button>
          </Link>
        </div>
      </section>

      {/* About NJ Golf Carts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About Bucks County Golf Carts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the golf cart industry, we've built our reputation on providing exceptional service and quality products to customers throughout Bucks County and surrounding areas.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Learn More
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196374.88346238618!2d-75.31682624999999!3d40.3059285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sBucks%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1753213632988!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bucks County, PA Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bucks County Towns Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Carts for Every Bucks County Township
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional golf cart services delivered to your township
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <Link href="/warrington-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Warrington Township</div>
            </Link>
            <Link href="/newtown-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Newtown Township</div>
            </Link>
            <Link href="/northampton-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Northampton Township</div>
            </Link>
            <Link href="/lower-makefield-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lower Makefield Township</div>
            </Link>
            <Link href="/upper-makefield-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Makefield Township</div>
            </Link>
            <Link href="/middletown-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Middletown Township</div>
            </Link>
            <Link href="/yardley-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Yardley Borough</div>
            </Link>
            <Link href="/newtown-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Newtown Borough</div>
            </Link>
            <Link href="/doylestown-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Doylestown Township</div>
            </Link>
            <Link href="/doylestown-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Doylestown Borough</div>
            </Link>
            <Link href="/warwick-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Warwick Township</div>
            </Link>
            <Link href="/warminster-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Warminster Township</div>
            </Link>
            <Link href="/upper-southampton-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Upper Southampton</div>
            </Link>
            <Link href="/lower-southampton-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lower Southampton</div>
            </Link>
            <Link href="/bristol-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bristol Township</div>
            </Link>
            <Link href="/bristol-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bristol Borough</div>
            </Link>
            <Link href="/bensalem-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bensalem Township</div>
            </Link>
            <Link href="/falls-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Falls Township</div>
            </Link>
            <Link href="/tullytown-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Tullytown Borough</div>
            </Link>
            <Link href="/levittown-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Levittown</div>
            </Link>
            <Link href="/langhorne-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Langhorne Borough</div>
            </Link>
            <Link href="/langhorne-manor-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Langhorne Manor</div>
            </Link>
            <Link href="/pennsbury-manor-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Pennsbury Manor</div>
            </Link>
            <Link href="/morrisville-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Morrisville Borough</div>
            </Link>
            <Link href="/buckingham-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Buckingham Township</div>
            </Link>
            <Link href="/new-hope-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">New Hope Borough</div>
            </Link>
            <Link href="/solebury-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Solebury Township</div>
            </Link>
            <Link href="/wrightstown-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Wrightstown Township</div>
            </Link>
            <Link href="/hilltown-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Hilltown Township</div>
            </Link>
            <Link href="/dublin-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Dublin Borough</div>
            </Link>
            <Link href="/perkasie-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Perkasie Borough</div>
            </Link>
            <Link href="/quakertown-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Quakertown Borough</div>
            </Link>
            <Link href="/richland-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Richland Township</div>
            </Link>
            <Link href="/silverdale-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Silverdale Borough</div>
            </Link>
            <Link href="/telford-borough-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Telford Borough</div>
            </Link>
            <Link href="/west-rockhill-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">West Rockhill</div>
            </Link>
            <Link href="/east-rockhill-township-golf-carts" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">East Rockhill</div>
            </Link>
          </div>
          
          <p className="text-gray-600 mb-8">
            Serving all Bucks County municipalities! Professional golf cart sales, service, and rentals delivered throughout the region.
          </p>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact us today for personalized service and expert advice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ocean View</h3>
              <p className="text-sm text-gray-600 mb-2">101 NJ 50, Ocean View, NJ 08230</p>
              <p className="text-blue-600 font-semibold">609-840-0404</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bayville</h3>
              <p className="text-sm text-gray-600 mb-2">155 Atlantic City Blvd, Bayville, NJ 08721</p>
              <p className="text-blue-600 font-semibold">(732) 908-7166</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Waretown</h3>
              <p className="text-sm text-gray-600 mb-2">526 US 9, Waretown, NJ 08758</p>
              <p className="text-blue-600 font-semibold">(732) 998-8146</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Pleasantville</h3>
              <p className="text-sm text-gray-600 mb-2">7000 Black Horse Pike, Pleasantville, NJ 08232</p>
              <p className="text-blue-600 font-semibold">640-444-3094</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ocean County Golf Carts</h3>
              <p className="text-sm text-gray-600 mb-2">Ocean County</p>
              <p className="text-blue-600 font-semibold">1-844-844-6638</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">1-844-844-6638</span>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
