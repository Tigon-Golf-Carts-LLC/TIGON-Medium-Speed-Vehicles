import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import heroImage from "@assets/a-photograph-of-a-modern-golf-cart-deale_c_kG6NR-SA6qC8Vzl1iBww_ILJUjQXFQCGLKMSveOjbrA_1753283141121.png";

export default function NewAboutPage() {
  const teamMembers = [
    {
      name: "Michael Thompson",
      role: "Owner & General Manager",
      experience: "15+ years in recreational vehicle sales",
      description: "Passionate about providing Bucks County with the best golf cart experience."
    },
    {
      name: "Sarah Martinez",
      role: "Service Manager",
      experience: "10+ years certified technician",
      description: "Expert in DENAGO and EVOLUTION service and maintenance."
    },
    {
      name: "David Chen",
      role: "Sales Specialist",
      experience: "8+ years in golf cart sales",
      description: "Helping customers find their perfect electric vehicle match."
    },
    {
      name: "Lisa Johnson",
      role: "Parts & Accessories",
      experience: "12+ years parts expertise",
      description: "Ensuring you get genuine parts and quality accessories."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction first."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We partner with premium brands and maintain the highest service standards."
    },
    {
      icon: Target,
      title: "Local Focus",
      description: "Proud to serve Bucks County with personalized, community-focused service."
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "We treat every customer like family and build lasting relationships."
    }
  ];

  return (
    <>
      <SEOHead 
        title="About Bucks County Golf Carts"
        description="Pennsylvania's trusted golf cart dealer serving all 56 municipalities with premium DENAGO and EVOLUTION vehicles since 2010. Call 1-844-844-6638."
        keywords="Bucks County golf carts, about us, golf cart dealer Pennsylvania, DENAGO dealer, EVOLUTION dealer"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              About Bucks County Golf Carts
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              Since 2010, we've been Bucks County's premier destination for premium golf carts, 
              exceptional service, and unmatched customer care. Serving all 56 municipalities 
              with pride and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white shadow-lg">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/inventory">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100 shadow-lg">
                  View Our Inventory
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2010, Bucks County Golf Carts began with a simple mission: to provide 
                    the residents and businesses of Bucks County with the highest quality golf carts 
                    and unparalleled customer service.
                  </p>
                  <p>
                    What started as a small family business has grown into Bucks County's most trusted 
                    golf cart dealer, serving all 56 municipalities from Warrington to New Hope, 
                    Doylestown to Bristol, and everywhere in between.
                  </p>
                  <p>
                    Bucks County itself has a rich history dating back to 1682, when William Penn founded 
                    the county and named it in honor of Buckinghamshire, England - his family's ancestral 
                    home. Just as Penn brought tradition and excellence from England to Pennsylvania, we 
                    continue that legacy by bringing the finest golf cart technology and service to this 
                    historic region.
                  </p>
                  <p>
                    Today, we're proud to be authorized dealers for premium brands like DENAGO and 
                    EVOLUTION, offering our customers access to the latest in electric vehicle 
                    technology and innovation.
                  </p>
                  <p>
                    Our commitment to quality, service, and community has made us the go-to choice 
                    for golf enthusiasts, resort operators, and anyone seeking reliable electric 
                    transportation solutions.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">13+</div>
                    <div className="text-sm text-gray-600">Years Serving Bucks County</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">5000+</div>
                    <div className="text-sm text-gray-600">Satisfied Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-theme-orange">56</div>
                    <div className="text-sm text-gray-600">Municipalities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196231.73527331748!2d-75.23646718906256!3d40.31447647158467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b0e7e7b1e8b5%3A0x7a1b1b1b1b1b1b1b!2sBucks%20County%2C%20PA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bucks County Service Area Map"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">TIGON Golf Carts Locations</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-theme-orange">Hatfield Showroom</h4>
                      <p className="text-gray-600">Physical Location</p>
                      <p className="text-gray-700">(215) 595-8736</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-theme-orange">Pennsylvania Online</h4>
                      <p className="text-gray-600">24/7 Service</p>
                      <p className="text-gray-700">1-844-844-6638</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h4 className="font-semibold text-theme-orange">Philadelphia Online</h4>
                      <p className="text-gray-600">24/7 Service</p>
                      <p className="text-gray-700">1-844-844-6638</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-4 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-theme-orange" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">Experienced professionals dedicated to your satisfaction</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-theme-orange font-medium mb-2">{member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
              <p className="text-lg text-gray-600">Proudly serving customers across North America</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>United States</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Premium medium speed vehicles delivered across all 50 states</p>
                  <Badge variant="secondary">50 States</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Canada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Serving Canadian customers with quality electric MSVs and expert service</p>
                  <Badge variant="secondary">International</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Expanding our reach to serve Mexican customers nationwide</p>
                  <Badge variant="secondary">International</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Nationwide & International Coverage</h3>
              <p className="text-center text-gray-600 mb-8">View our medium speed vehicle services by location</p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-600">
                {[
                  { name: "Alabama", path: "/alabama" },
                  { name: "Alaska", path: "/alaska" },
                  { name: "Arizona", path: "/arizona" },
                  { name: "Arkansas", path: "/arkansas" },
                  { name: "California", path: "/california" },
                  { name: "Colorado", path: "/colorado" },
                  { name: "Connecticut", path: "/connecticut" },
                  { name: "Delaware", path: "/delaware" },
                  { name: "Florida", path: "/florida" },
                  { name: "Georgia", path: "/georgia" },
                  { name: "Hawaii", path: "/hawaii" },
                  { name: "Idaho", path: "/idaho" },
                  { name: "Illinois", path: "/illinois" },
                  { name: "Indiana", path: "/indiana" },
                  { name: "Iowa", path: "/iowa" },
                  { name: "Kansas", path: "/kansas" },
                  { name: "Kentucky", path: "/kentucky" },
                  { name: "Louisiana", path: "/louisiana" },
                  { name: "Maine", path: "/maine" },
                  { name: "Maryland", path: "/maryland" },
                  { name: "Massachusetts", path: "/massachusetts" },
                  { name: "Michigan", path: "/michigan" },
                  { name: "Minnesota", path: "/minnesota" },
                  { name: "Mississippi", path: "/mississippi" },
                  { name: "Missouri", path: "/missouri" },
                  { name: "Montana", path: "/montana" },
                  { name: "Nebraska", path: "/nebraska" },
                  { name: "Nevada", path: "/nevada" },
                  { name: "New Hampshire", path: "/new-hampshire" },
                  { name: "New Jersey", path: "/new-jersey" },
                  { name: "New Mexico", path: "/new-mexico" },
                  { name: "New York", path: "/new-york" },
                  { name: "North Carolina", path: "/north-carolina" },
                  { name: "North Dakota", path: "/north-dakota" },
                  { name: "Ohio", path: "/ohio" },
                  { name: "Oklahoma", path: "/oklahoma" },
                  { name: "Oregon", path: "/oregon" },
                  { name: "Pennsylvania", path: "/pennsylvania" },
                  { name: "Rhode Island", path: "/rhode-island" },
                  { name: "South Carolina", path: "/south-carolina" },
                  { name: "South Dakota", path: "/south-dakota" },
                  { name: "Tennessee", path: "/tennessee" },
                  { name: "Texas", path: "/texas" },
                  { name: "Utah", path: "/utah" },
                  { name: "Vermont", path: "/vermont" },
                  { name: "Virginia", path: "/virginia" },
                  { name: "Washington", path: "/washington" },
                  { name: "West Virginia", path: "/west-virginia" },
                  { name: "Wisconsin", path: "/wisconsin" },
                  { name: "Wyoming", path: "/wyoming" },
                  { name: "Canada", path: "/canada" },
                  { name: "Mexico", path: "/mexico" },
                  { name: "United States", path: "/united-states" }
                ].map((location, index) => (
                  <div key={index} className="text-center py-2">
                    <Link href={location.path}>
                      <span className="text-theme-orange font-medium hover:text-orange-600 cursor-pointer transition-colors">
                        {location.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the TIGON Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who trust us for their medium speed vehicle needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:1-844-844-6638">
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Call 1-844-844-6638
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-orange mb-2">1-844-844-6638</p>
                  <p className="text-gray-600">Available 7 days a week</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-theme-orange mb-2">info@bucksgolfcarts.com</p>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 text-sm">
                    <p>Mon-Fri: 9AM-5PM</p>
                    <p>Sat: 9AM-5PM</p>
                    <p>Sun: By Appointment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                  <CardTitle>Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All 56 Bucks County municipalities plus delivery service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}