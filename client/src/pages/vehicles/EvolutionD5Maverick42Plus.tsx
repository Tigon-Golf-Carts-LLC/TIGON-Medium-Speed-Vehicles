import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import vehicleImage from "@assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135231312.jpg";

export default function EvolutionD5Maverick42Plus() {
  return (
    <>
      <SEOHead 
        title="EVOLUTION D5 MAVERICK 4+2 PLUS Medium Speed Vehicle"
        description="Premium 4+2 configuration offering 6 passengers with flexible rear seating options. Extended range with premium features. Call 1-844-844-6638."
        keywords="EVOLUTION D5 MAVERICK 4+2 PLUS, premium medium speed vehicle, 4+2 configuration, 6-passenger, flexible seating, EVOLUTION dealer nationwide"
        canonicalUrl="https://tigonmsv.com/vehicles/evolution-d5-maverick-4-2-plus"
        image="/attached_assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135231312.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="text-theme-primary hover:text-blue-800">Home</a>
              <span>→</span>
              <a href="/inventory" className="text-theme-primary hover:text-blue-800">Vehicles</a>
              <span>→</span>
              <a href="/evolution" className="text-theme-primary hover:text-blue-800">EVOLUTION</a>
              <span>→</span>
              <span className="drop-shadow-lg">D5 Maverick 4+2 Plus</span>
            </div>
          </div>
        </nav>

        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: "url('/attached_assets/TIGON - Medium Speed Vehicles 2_1763150117019.jpeg')"}}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8))' }}></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 text-white">
                <div className="mb-4">
                  <Badge className="bg-theme-orange text-white px-4 py-2 text-sm font-semibold shadow-lg">
                    EVOLUTION® D5 MAVERICK
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
                  Maverick 4+2 Plus
                </h1>
                <p className="text-xl drop-shadow-md mb-8 leading-relaxed">
                  Premium 4+2 configuration offering 6 passengers with flexible rear seating options. Extended range capability with lithium power and premium features.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <div className="font-semibold text-theme-orange">4+2 Configuration</div>
                    <div className="drop-shadow-lg">Flexible Seating</div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <div className="font-semibold text-theme-orange">Range</div>
                    <div className="drop-shadow-lg">35-45 miles</div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <div className="font-semibold text-theme-orange">Extended Range</div>
                    <div className="drop-shadow-lg">Premium Features</div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
                    <div className="font-semibold text-theme-orange">Seating</div>
                    <div className="drop-shadow-lg">6 Passengers</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
                      Get Quote
                    </Button>
                  </Link>
                  <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-theme-primary hover:bg-gray-100 shadow-lg">
                      Finance Options
                    </Button>
                  </a>
                  <a href="https://tigongolfcarts.com/evolution/d5-maverick/4-2-plus/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
                      View More Details
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={vehicleImage} 
                    alt="EVOLUTION D5 Maverick 4+2 Plus Premium Medium Speed Vehicle"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-theme-primary text-white px-3 py-1 text-sm font-semibold">
                      NEW
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-theme-primary mb-2">$14,495</div>
                <div className="text-gray-600">MSRP • Financing Available</div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Availability</div>
                  <div className="font-semibold text-theme-orange">In Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Delivery</div>
                  <div className="font-semibold drop-shadow-lg">1-2 Weeks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 drop-shadow-lg">Premium Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">4+2 Configuration</h3>
                      <p className="text-gray-600">Innovative seating arrangement provides 6 passenger capacity with flexible rear options.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Flexible Seating</h3>
                      <p className="text-gray-600">Rear seating area converts for passengers or cargo as needed.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Extended Range</h3>
                      <p className="text-gray-600">Advanced lithium battery technology provides extended driving range.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Premium Features</h3>
                      <p className="text-gray-600">Comprehensive premium feature set for enhanced comfort and convenience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 drop-shadow-lg">Specifications</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Gauge className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Top Speed</span>
                        </div>
                        <span className="drop-shadow-lg">25 mph</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Range</span>
                        </div>
                        <span className="drop-shadow-lg">35-45 miles</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Seating Capacity</span>
                        </div>
                        <span className="drop-shadow-lg">6 passengers</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Car className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Battery Type</span>
                        </div>
                        <span className="drop-shadow-lg">Lithium Ion</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Charging Time</span>
                        </div>
                        <span className="drop-shadow-lg">6-8 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <Settings className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Payload</span>
                        </div>
                        <span className="drop-shadow-lg">1000 lbs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maximum Capacity, Premium Performance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact TIGON Medium Speed Vehicles today for your EVOLUTION D5 Maverick 4+2 Plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-primary hover:bg-theme-primary text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Today
                </Button>
              </Link>
              <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:drop-shadow-lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Showroom
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
