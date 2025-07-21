import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Vehicle } from "@shared/schema";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const getStatusBadge = (status: Vehicle["status"]) => {
    switch (status) {
      case "available":
        return <Badge className="bg-emerald-100 text-emerald-800">Available</Badge>;
      case "pre-order":
        return <Badge className="bg-yellow-100 text-yellow-800">Pre-Order</Badge>;
      case "sold":
        return <Badge className="bg-gray-100 text-gray-800">Sold</Badge>;
      default:
        return null;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={vehicle.images[0]}
          alt={vehicle.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          {getStatusBadge(vehicle.status)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {vehicle.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm">{vehicle.description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            {vehicle.driveType.toUpperCase()} • {vehicle.seats} Seats
          </span>
          <span className="text-lg font-bold text-navy">
            {formatPrice(vehicle.price)}
          </span>
        </div>
        
        <Link href={`/vehicle/${vehicle.id}`}>
          <Button className="w-full bg-ocean-blue hover:bg-blue-600 text-white">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
