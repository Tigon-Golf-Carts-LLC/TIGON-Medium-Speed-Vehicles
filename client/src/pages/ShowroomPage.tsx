import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Facebook, ExternalLink, Youtube } from "lucide-react";
import { SiPinterest } from "react-icons/si";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function ShowroomPage() {
  const locations = [
    {
      name: "TIGON Hatfield PA",
      address: "2333 Bethlehem Pike, Hatfield, PA 19440",
      phone: "215-595-8736",
      city: "Hatfield",
      state: "PA",
      googleMapsUrl: "https://www.google.com/maps?cid=8221925612164093496",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsHatfield/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsHatfieldPA",
      websiteUrl: "https://tigongolfcarts.com/hatfield/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/hatfield-pennsylvania/",
      reviewUrl: "https://g.page/r/CTgWulrIJRpyEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Ocean View NJ",
      address: "101 NJ-50, Ocean View, NJ 08230",
      phone: "609-840-0404",
      city: "Ocean View",
      state: "NJ",
      googleMapsUrl: "https://www.google.com/maps?cid=6446924254429489274",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsOceanView/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsOceanViewNJ",
      websiteUrl: "https://tigongolfcarts.com/ocean-view/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/ocean-view-new-jersey/",
      reviewUrl: "https://g.page/r/CXqoHr9zE3hZEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Pocono PA",
      address: "1712 Pennsylvania 940, Pocono Pines, PA 18350",
      phone: "570-643-0152",
      city: "Pocono Pines",
      state: "PA",
      googleMapsUrl: "https://www.google.com/maps?cid=17137841834562046914",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsPoconos/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsPoconosPA",
      websiteUrl: "https://tigongolfcarts.com/pocono/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/pocono-pines-pennsylvania/",
      reviewUrl: "https://g.page/r/CcJL5i1Z2NXtEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Dover DE",
      address: "5158 N Dupont Hwy, Dover, DE 19901",
      phone: "302-546-0010",
      city: "Dover",
      state: "DE",
      googleMapsUrl: "https://www.google.com/maps?cid=12843447677705895190",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsDover/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsDoverDE",
      websiteUrl: "https://tigongolfcarts.com/dover/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/dover-delaware/",
      reviewUrl: "https://g.page/r/CRa9-YidFz2yEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Scranton-Wilkes-Barre PA",
      address: "1225 N Keyser Ave #2, Scranton, PA 18504",
      phone: "570-344-4443",
      city: "Scranton",
      state: "PA",
      googleMapsUrl: "https://www.google.com/maps?cid=13243686786001524416",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsScranton/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsScrantonWilkesPA",
      websiteUrl: "https://tigongolfcarts.com/scranton-wilkes-barre/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/scranton-pennsylvania/",
      reviewUrl: "https://g.page/r/CcDWJ7z2Bsu3EBM/review",
      type: "physical"
    },
    {
      name: "TIGON Raleigh NC",
      address: "2700 S Wilmington St, Raleigh, NC 27603",
      phone: "984-489-0296",
      city: "Raleigh",
      state: "NC",
      googleMapsUrl: "https://www.google.com/maps?cid=14570072271497929915",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsRaleigh/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsRaleighNC",
      websiteUrl: "https://tigongolfcarts.com/raleigh/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/raleigh-north-carolina/",
      reviewUrl: "https://g.page/r/CbskZw6JSzPKEBM/review",
      type: "physical"
    },
    {
      name: "TIGON South Bend IN",
      address: "52129 State Road 933, South Bend, IN 46637",
      phone: "574-703-0456",
      city: "South Bend",
      state: "IN",
      googleMapsUrl: "https://www.google.com/maps?cid=17532455648086849827",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsSouthBend/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsSouthBendIN",
      websiteUrl: "https://tigongolfcarts.com/south-bend/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/south-bend-indiana/",
      reviewUrl: "https://g.page/r/CSP5gWCFy0_zEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Gloucester Point VA",
      address: "2810 George Washington Memorial Hwy, Gloucester Point, VA 23072",
      phone: "804-792-0234",
      city: "Gloucester Point",
      state: "VA",
      googleMapsUrl: "https://www.google.com/maps?cid=16682967888503617377",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsGloucesterPoint/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsGloucesterPoint",
      websiteUrl: "https://tigongolfcarts.com/gloucester-point/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/gloucester-point-virginia/",
      type: "physical"
    },
    {
      name: "TIGON Bayville NJ",
      address: "155 Atlantic City Blvd, Bayville, NJ 08721",
      phone: "732-908-7166",
      city: "Bayville",
      state: "NJ",
      googleMapsUrl: "https://www.google.com/maps?cid=16812778070531162551",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsBayville/",
      websiteUrl: "https://tigongolfcarts.com/bayville/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/bayville-new-jersey/",
      reviewUrl: "https://g.page/r/CbfBfMWT_FLpEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Waretown NJ",
      address: "526 US-9, Waretown, NJ 08758",
      phone: "732-998-8146",
      city: "Waretown",
      state: "NJ",
      googleMapsUrl: "https://www.google.com/maps?cid=11595558320608622005",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsWaretown/",
      websiteUrl: "https://tigongolfcarts.com/waretown/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/waretown-new-jersey/",
      reviewUrl: "https://g.page/r/CbW1M1DbsuugEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Orangeburg SC",
      address: "4166 North Rd, Orangeburg, SC 29118",
      phone: "803-596-0246",
      city: "Orangeburg",
      state: "SC",
      googleMapsUrl: "https://www.google.com/maps?cid=17192321019507936230",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsOrangeburg/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsOrangeburgSC",
      websiteUrl: "https://tigongolfcarts.com/orangeburg/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/orangeburg-south-carolina/",
      type: "physical"
    },
    {
      name: "TIGON Swanton OH",
      address: "10420 Airport Hwy, Swanton, OH 43558",
      phone: "419-402-8400",
      city: "Swanton",
      state: "OH",
      googleMapsUrl: "https://www.google.com/maps?cid=16517552730289967239",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsSwanton/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsSwantonOH",
      websiteUrl: "https://tigongolfcarts.com/swanton/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/swanton-ohio/",
      reviewUrl: "https://g.page/r/CYeQt8exIjrlEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Lecanto FL",
      address: "299 E. Gulf to Lake Hwy, Lecanto, FL 34461",
      phone: "352-453-0345",
      city: "Lecanto",
      state: "FL",
      googleMapsUrl: "https://www.google.com/maps?cid=4773802157529013859",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsLecanto/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsLecantoFL",
      websiteUrl: "https://tigongolfcarts.com/lecanto/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/lecanto-florida/",
      reviewUrl: "https://g.page/r/CWOeggPF8z9CEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Long Pond PA",
      address: "4738 PA-115, Long Pond, PA 18334",
      phone: "570-580-0567",
      city: "Long Pond",
      state: "PA",
      googleMapsUrl: "https://www.google.com/maps?cid=11714838830522733253",
      websiteUrl: "https://tigongolfcarts.com/long-pond/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/long-pond-pennsylvania/",
      type: "physical"
    },
    {
      name: "TIGON Pleasantville NJ",
      address: "7000 Black Horse Pike, Pleasantville, NJ 08232",
      phone: "640-444-3094",
      city: "Pleasantville",
      state: "NJ",
      googleMapsUrl: "https://www.google.com/maps?cid=7635149767591436869",
      facebookUrl: "https://www.facebook.com/TigonGolfCartPleasantville",
      websiteUrl: "https://tigongolfcarts.com/pleasantville/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/pleasantville-new-jersey/",
      reviewUrl: "https://g.page/r/CUWiMchCgPVpEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Portsmouth VA",
      address: "2008 Portsmouth Blvd, Portsmouth, VA 23704",
      phone: "757-977-0146",
      city: "Portsmouth",
      state: "VA",
      googleMapsUrl: "https://www.google.com/maps?cid=5113923461119431468",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsPortsmouthVA/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsPortsmouthVA",
      websiteUrl: "https://tigongolfcarts.com/portsmouth/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/portsmouth-virginia/",
      reviewUrl: "https://g.page/r/CSxTjwxLTvhGEBM/review",
      type: "physical"
    },
    {
      name: "TIGON Virginia Beach VA",
      address: "1101 Virginia Beach Blvd, Virginia Beach, VA 23451",
      phone: "1-844-844-6638",
      city: "Virginia Beach",
      state: "VA",
      googleMapsUrl: "https://www.google.com/maps?cid=17806490138133315425",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsVirginiaBeach/",
      youtubeUrl: "https://www.youtube.com/@TIGONGolfCartsVirginiaBeachVA",
      websiteUrl: "https://tigongolfcarts.com/virginia-beach/",
      pinterestUrl: "https://www.pinterest.com/tigongolfcarts/virginia-beach-virginia/",
      type: "physical"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Medium Speed Vehicle Showroom"
        description="Visit our medium speed vehicle dealership locations in nationwide, Pennsylvania. Experience our full lineup of Denago and Evolution electric vehicles in person or online. Call 1-844-844-6638."
        keywords="medium speed vehicle showroom, nationwide dealership, Denago Evolution dealer, medium speed vehicle locations"
        canonicalUrl="https://tigonmsv.com/showroom"
        image="/attached_assets/0f46bdfb-c558-4e28-9473-6c85686c5a80 (1)_1753279436268.png"
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('/attached_assets/TIGON%20-%20Medium%20Speed%20Vehicles%204_1763146957907.jpeg')"}}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8))' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Medium Speed Vehicle Showroom
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Visit any of our 17 TIGON Medium Speed Vehicle dealership locations across the East Coast. 
            Experience our full lineup of DENAGO and EVOLUTION electric vehicles in person.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
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
            <p className="text-xl text-gray-600">17 convenient dealership locations serving PA, NJ, DE, VA, NC, SC, OH, IN, and FL</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                        {location.city}, {location.state}
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
                      {location.pinterestUrl && (
                        <a href={location.pinterestUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-red-700 transition-colors">
                          <SiPinterest className="w-5 h-5" />
                        </a>
                      )}
                      <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-theme-orange transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      {location.reviewUrl && (
                        <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-yellow-500 transition-colors">
                          <Star className="w-5 h-5" />
                        </a>
                      )}
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
            <p className="text-xl text-gray-600">Everything you need for your medium speed vehicle experience</p>
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
                  Experience our medium speed vehicles firsthand with comprehensive test drives on our demonstration courses.
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
                  Our knowledgeable staff will help you choose the perfect medium speed vehicle for your specific needs and budget.
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
                  Flexible financing solutions to make your medium speed vehicle purchase affordable and convenient.
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
            Visit any of our 17 showroom locations across 9 states to see our full inventory of DENAGO and EVOLUTION medium speed vehicles.
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