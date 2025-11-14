import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import InventorySection from "@/components/InventorySection";
import BrandsSection from "@/components/BrandsSection";
import OrganizationSchema from "@/components/OrganizationSchema";
import SEOHead from "@/components/SEOHead";

export default function HomePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      {/* SEO and Schema Markup */}
      <SEOHead 
        title="TIGON Medium Speed Vehicles Premier MSV Dealership"
        description="Transform your outdoor experience with premium medium speed vehicles from Pennsylvania's trusted MSV dealership. Expert sales, service, rentals, and financing for Denago and Evolution medium speed vehicles. Call 267-736-4890."
        keywords="medium speed vehicles Bucks County PA, MSV Pennsylvania, Denago MSV, Evolution MSV, medium speed vehicle sales service rentals, TIGON"
        canonicalUrl="https://bucksgolfcarts.com/"
        image="https://bucksgolfcarts.com/attached_assets/a-photograph-of-a-bright-and-airy-modern_cSGtJe7oTWCsurFpyhqrJg_CXQ9jYUGRP2_wh-uk2Htkg_1753199147926.png"
      />
      <OrganizationSchema pageType="home" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(59, 130, 246, 0.8), rgba(14, 46, 85, 0.8)), url('https://bucksgolfcarts.com/attached_assets/a-photograph-of-a-bright-and-airy-modern_cSGtJe7oTWCsurFpyhqrJg_CXQ9jYUGRP2_wh-uk2Htkg_1753199147926.png')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
TIGON Medium Speed Vehicles Premier MSV Dealership
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Discover our extensive selection of new medium speed vehicles from Evolution and Denago with professional services. 
                Serving Bucks County, and all surrounding towns, townships, and Pennsylvania communities In Bucks County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/inventory" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    View Inventory
                  </Button>
                </Link>
                <a href="tel:2677364890">
                  <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                    Call Now 267-736-4890
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://bucksgolfcarts.com/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png" 
                alt="Medium Speed Vehicle" 
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
            Why Choose TIGON Medium Speed Vehicles?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're more than just a dealership - we're your partner in medium speed vehicle ownership 
            with comprehensive services and unmatched expertise.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated MSV brands including Evolution and Denago with rigorous quality standards.
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
                Electric medium speed vehicles for sustainable, quiet, and efficient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            TIGON Medium Speed Vehicles - Top MSV and LSV Brands
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We carry the most trusted names in Medium Speed Vehicles and Low Speed Vehicles
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Club Car</h3>
              <p className="text-sm text-gray-600">Premium MSV with advanced technology</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">EZ-GO</h3>
              <p className="text-sm text-gray-600">Reliable and efficient MSV solutions</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Denago</h3>
              <p className="text-sm text-gray-600">High-quality performance medium speed vehicles</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Evolution</h3>
              <p className="text-sm text-gray-600">Luxury medium speed vehicles with premium features</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Tomberlin</h3>
              <p className="text-sm text-gray-600">Street-legal LSV and MSV options</p>
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

      {/* Featured MSV Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Medium Speed Vehicles
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Check out some of our most popular MSV models
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Evolution D5 Maverick 4 Plus */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://bucksgolfcarts.com/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg" 
                  alt="Evolution D5 Maverick 4 Plus"
                  className="w-full h-full object-cover"
                  width="640"
                  height="360"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D5 Maverick 4 Plus</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Premium electric medium speed vehicle with advanced features and superior performance. Seats 4 passengers with extended range capability.
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
                  src="https://bucksgolfcarts.com/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg" 
                  alt="Evolution D6 Max GT4"
                  className="w-full h-full object-cover"
                  width="640"
                  height="360"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D6 Max GT4</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  High-performance 4-passenger medium speed vehicle with cutting-edge technology and sporty design.
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
                  src="https://bucksgolfcarts.com/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg" 
                  alt="Denago EV City"
                  className="w-full h-full object-cover"
                  width="640"
                  height="360"
                  loading="lazy"
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

      {/* About TIGON MSV Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About TIGON Medium Speed Vehicles
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the medium speed vehicle industry, we've built our reputation on providing exceptional service and quality products to customers throughout Bucks County and surrounding areas.
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
              <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461818.9281408625!2d-75.43232612584566!3d40.32864320181612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c446ceb7670e1f%3A0x9e1be4fefb5ca713!2sBucks%20County%2C%20PA!5e1!3m2!1sen!2sus!4v1753280933619!5m2!1sen!2sus" 
                  className="w-full h-full"
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TIGON Medium Speed Vehicles Bucks County, PA Map"
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
            Medium Speed Vehicles for Every Bucks County Township
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional MSV services delivered to your township
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Main Location</h3>
              <p className="text-sm text-gray-600 mb-2">115 Lincoln Hwy, Fairless Hills, PA 19030</p>
              <p className="text-blue-600 font-semibold">267-736-4890</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-sm text-gray-600 mb-2">All of Bucks County, PA</p>
              <p className="text-blue-600 font-semibold">267-736-4890</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600 mb-2">Email: info@bucksgolfcarts.com</p>
              <p className="text-blue-600 font-semibold">267-736-4890</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <div className="flex justify-center items-center gap-4">
              <a href="tel:2677364890" className="text-2xl font-bold text-blue-600 hover:underline">267-736-4890</a>
              <Link href="/contact">
                <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
