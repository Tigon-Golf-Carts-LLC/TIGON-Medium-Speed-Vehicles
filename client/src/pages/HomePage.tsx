import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Bolt, Truck } from "lucide-react";
import evolutionD5Ranger4PlusImage from "@assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg";

export default function HomePage() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Top-tier recreational vehicles from trusted manufacturers",
    },
    {
      icon: Bolt,
      title: "Expert Service",
      description: "Professional maintenance and support services",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery throughout Ocean County",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 md:h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.6), rgba(14, 165, 233, 0.6)), url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Premium Golf Carts & Recreational Vehicles
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover DENAGO and EVOLUTION vehicles in 2X4 and 4X4 configurations for every adventure
            </p>
            <Link href="/inventory">
              <Button size="lg" className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-3 text-lg">
                View Inventory
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Brand Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Featured Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our premium selection of DENAGO and EVOLUTION recreational vehicles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* DENAGO Brand Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="DENAGO vehicles"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">DENAGO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Premium recreational vehicles designed for performance and style. Available in both 2X4 and 4X4 configurations.
              </p>
              <Link href="/denago">
                <Button className="bg-navy hover:bg-blue-800 text-white">
                  Explore DENAGO
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* EVOLUTION Brand Card */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-64">
              <img
                src={evolutionD5Ranger4PlusImage}
                alt="EVOLUTION vehicles"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">EVOLUTION</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Advanced recreational vehicles with cutting-edge technology and superior comfort for all terrains.
              </p>
              <Link href="/evolution">
                <Button className="bg-ocean-blue hover:bg-blue-600 text-white">
                  Explore EVOLUTION
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Ocean County Golf Carts?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-ocean-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
