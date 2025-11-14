import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Facebook, ExternalLink, Youtube } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function ShowroomPage() {
  const locations = [
    {
      name: "TIGON Medium Speed Vehicles",
      address: "115 Lincoln Hwy, Fairless Hills, PA 19030",
      phone: "267-736-4890",
      coordinates: "40.1734,-74.8521",
      googleMapsUrl: "https://www.google.com/maps/place/115+Lincoln+Hwy,+Fairless+Hills,+PA+19030",
      facebookUrl: "https://www.facebook.com/bucksgolfcarts",
      youtubeUrl: "https://www.youtube.com/@bucksgolfcarts",
      websiteUrl: "https://bucksgolfcarts.com",
      reviewUrl: "https://g.page/bucksgolfcarts/review",
      city: "Fairless Hills",
      type: "physical"
    },
    {
      name: "TIGON Golf Carts Pennsylvania",
      address: "Online Store - Serving All of Pennsylvania",
      phone: "267-736-4890",
      coordinates: "41.1169824,-77.6047047",
      googleMapsUrl: "https://www.google.com/maps?cid=13935683838976847185",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsPennsylvania",
      websiteUrl: "https://tigongolfcarts.com/pennsylvania/",
      reviewUrl: "https://g.page/r/CVHtXfydfmXBEBM/review",
      city: "Pennsylvania",
      type: "online"
    },
    {
      name: "TIGON Golf Cart Philadelphia",
      address: "Online Store - Serving Philadelphia Area",
      phone: "267-736-4890",
      coordinates: "40.0024979,-75.1180146",
      googleMapsUrl: "https://www.google.com/maps?cid=6103352888615501339",
      websiteUrl: "https://tigongolfcarts.com/philadelphia/",
      reviewUrl: "https://g.page/r/CRv-x4Add7NUEBM/review",
      city: "Philadelphia",
      type: "online"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Golf Cart Showroom"
        description="Visit our golf cart dealership locations in Bucks County, Pennsylvania. Experience our full lineup of Denago and Evolution electric vehicles in person or online. Call 1-844-844-6638."
        keywords="golf cart showroom, Bucks County dealership, Denago Evolution dealer, golf cart locations"
        canonicalUrl="https://bucksgolfcarts.com/showroom"
        image="https://bucksgolfcarts.com/attached_assets/0f46bdfb-c558-4e28-9473-6c85686c5a80 (1)_1753279436268.png"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('https://bucksgolfcarts.com/attached_assets/0f46bdfb-c558-4e28-9473-6c85686c5a80 (1)_1753279436268.png')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Cart Showroom
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our TIGON Golf Cart dealership locations serving Bucks County, Pennsylvania. 
            Experience our full lineup of DENAGO and EVOLUTION electric vehicles in person or online.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Our Locations</h2>
            <p className="text-xl text-gray-600">Three convenient locations serving Bucks County and all of Pennsylvania</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-theme-orange">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-theme-primary mb-2">
                        <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-theme-orange transition-colors cursor-pointer">
                          {location.name}
                        </a>
                      </CardTitle>
                      <Badge className="bg-theme-orange text-white">
                        {location.city} Location
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-theme-orange mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-theme-orange flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="font-medium text-theme-primary hover:text-theme-orange transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-theme-orange mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        {location.type === "physical" ? (
                          <>
                            <p className="text-gray-600 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
                            <p className="text-gray-600 text-sm">Sat: 9:00 AM - 5:00 PM</p>
                            <p className="text-gray-600 text-sm">Sun: CLOSED</p>
                          </>
                        ) : (
                          <p className="text-gray-600 text-sm">24 Hours - Online Store</p>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                          <MapPin className="w-4 h-4 mr-2" />
                          Directions
                        </Button>
                      </a>
                      <a href={`tel:${location.phone}`}>
                        <Button variant="outline" className="w-full border-theme-orange text-theme-orange hover:bg-orange-50">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      {location.facebookUrl && (
                        <a href={location.facebookUrl} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-600 hover:text-blue-600 transition-colors">
                          <Facebook className="w-5 h-5" />
                        </a>
                      )}
                      {location.youtubeUrl && (
                        <a href={location.youtubeUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-red-600 transition-colors">
                          <Youtube className="w-5 h-5" />
                        </a>
                      )}
                      <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-theme-orange transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-yellow-500 transition-colors">
                        <Star className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Showroom Services</h2>
            <p className="text-xl text-gray-600">Everything you need for your golf cart experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Test Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience our golf carts firsthand with comprehensive test drives on our demonstration courses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Expert Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our knowledgeable staff will help you choose the perfect golf cart for your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible financing solutions to make your golf cart purchase affordable and convenient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit Our Showroom?
          </h2>
          <p className="text-xl mb-8">
            Visit our showroom locations in Bucks County or shop online to see our full inventory of DENAGO and EVOLUTION golf carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Visit
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}