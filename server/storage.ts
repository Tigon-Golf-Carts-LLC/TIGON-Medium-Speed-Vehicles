import { Vehicle, InsertVehicle, ContactForm } from "@shared/schema";

export interface IStorage {
  // Vehicle operations
  getVehicles(): Promise<Vehicle[]>;
  getVehicleById(id: string): Promise<Vehicle | null>;
  getVehiclesByBrand(brand: "denago" | "evolution"): Promise<Vehicle[]>;
  createVehicle(vehicle: InsertVehicle): Promise<Vehicle>;
  updateVehicle(id: string, updates: Partial<InsertVehicle>): Promise<Vehicle | null>;
  deleteVehicle(id: string): Promise<boolean>;
  
  // Contact form operations
  submitContactForm(form: ContactForm): Promise<boolean>;
}

class MemStorage implements IStorage {
  private vehicles: Vehicle[] = [];
  private nextId = 1;

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Initialize with Evolution vehicles from the assets
    const evolutionVehicles: InsertVehicle[] = [
      {
        name: "Evolution D5 Ranger 4 Plus",
        brand: "evolution",
        driveType: "4x4",
        seats: 4,
        category: "Ranger",
        price: 18999,
        status: "available",
        images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
        description: "Premium 4-seater with LED lighting and advanced features",
        features: [
          "LED Lighting Package",
          "Premium Comfort Seats",
          "Bluetooth Audio System",
          "All-Terrain Tires",
          "Lifted Suspension"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "50 miles",
          "Battery": "48V Lithium",
          "Charging Time": "4-6 hours",
          "Ground Clearance": "8 inches"
        }
      },
      {
        name: "Evolution D5 Ranger 6",
        brand: "evolution",
        driveType: "4x4",
        seats: 6,
        category: "Ranger",
        price: 21999,
        status: "available",
        images: ["/attached_assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg"],
        description: "Spacious 6-seater with premium comfort and styling",
        features: [
          "LED Lighting Package",
          "Premium Comfort Seats",
          "Extended Wheelbase",
          "Rear Facing Seats",
          "Premium Sound System"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "45 miles",
          "Battery": "48V Lithium",
          "Charging Time": "4-6 hours",
          "Ground Clearance": "8 inches"
        }
      },
      {
        name: "Evolution Turfman 800",
        brand: "evolution",
        driveType: "4x4",
        seats: 2,
        category: "Turfman",
        price: 16499,
        status: "available",
        images: ["/attached_assets/EVOLUTIONTURFMAN800_1751893159006_1753135437836.jpg"],
        description: "Heavy-duty utility vehicle for tough terrain",
        features: [
          "Heavy-Duty Bed",
          "All-Terrain Capability",
          "Dump Bed Option",
          "Work Light Package",
          "Tow Hitch Ready"
        ],
        specifications: {
          "Top Speed": "20 mph",
          "Range": "40 miles",
          "Payload": "1,200 lbs",
          "Towing Capacity": "2,000 lbs",
          "Ground Clearance": "10 inches"
        }
      },
      {
        name: "Evolution D6 MaxXT 4",
        brand: "evolution",
        driveType: "4x4",
        seats: 4,
        category: "MaxXT",
        price: 24999,
        status: "pre-order",
        images: ["/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg"],
        description: "Futuristic design with advanced technology features",
        features: [
          "Advanced LED Accents",
          "Premium Technology Package",
          "Luxury Interior",
          "Performance Suspension",
          "Smart Connectivity"
        ],
        specifications: {
          "Top Speed": "28 mph",
          "Range": "60 miles",
          "Battery": "72V Lithium",
          "Charging Time": "3-4 hours",
          "Ground Clearance": "9 inches"
        }
      },
      {
        name: "Evolution Forester 4 Plus",
        brand: "evolution",
        driveType: "4x4",
        seats: 4,
        category: "Forester",
        price: 19999,
        status: "available",
        images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
        description: "Lifted recreational vehicle for off-road adventures",
        features: [
          "Lifted Suspension",
          "Off-Road Tires",
          "Brush Guards",
          "LED Light Bar",
          "Heavy-Duty Bumpers"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "45 miles",
          "Battery": "48V Lithium",
          "Charging Time": "4-6 hours",
          "Ground Clearance": "12 inches"
        }
      },
      {
        name: "Evolution Turfman 200",
        brand: "evolution",
        driveType: "2x4",
        seats: 2,
        category: "Turfman",
        price: 12999,
        status: "available",
        images: ["/attached_assets/EVOLUTIONTURFMAN200_1751893159006_1753135437837.jpg"],
        description: "Classic golf cart perfect for course and neighborhood use",
        features: [
          "Classic Styling",
          "Comfortable Seating",
          "Basic Lighting",
          "Weather Protection",
          "Storage Compartment"
        ],
        specifications: {
          "Top Speed": "19 mph",
          "Range": "35 miles",
          "Battery": "36V Lead Acid",
          "Charging Time": "6-8 hours",
          "Ground Clearance": "6 inches"
        }
      },
      {
        name: "Evolution D6 MaxXT 6",
        brand: "evolution",
        driveType: "4x4",
        seats: 6,
        category: "MaxXT",
        price: 27999,
        status: "pre-order",
        images: ["/attached_assets/EVOLUTIOND6MAXXT6_1751893159005_1753135437836.jpg"],
        description: "Premium 6-seater with futuristic design and luxury features",
        features: [
          "Advanced LED Lighting",
          "Premium Luxury Seating",
          "Smart Technology Integration",
          "Performance Suspension",
          "Extended Wheelbase"
        ],
        specifications: {
          "Top Speed": "28 mph",
          "Range": "65 miles",
          "Battery": "72V Lithium",
          "Charging Time": "3-4 hours",
          "Ground Clearance": "9 inches"
        }
      },
      {
        name: "Evolution Forester 6 Plus",
        brand: "evolution",
        driveType: "4x4",
        seats: 6,
        category: "Forester",
        price: 22999,
        status: "available",
        images: ["/attached_assets/EVOLUTIONFORESTER6PLUS_1751893159005_1753135437837.jpg"],
        description: "Spacious 6-seater lifted vehicle for group adventures",
        features: [
          "High Lift Kit",
          "All-Terrain Tires",
          "Extended Seating",
          "Heavy-Duty Frame",
          "LED Light Package"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "50 miles",
          "Battery": "48V Lithium",
          "Charging Time": "4-6 hours",
          "Ground Clearance": "12 inches"
        }
      },
      {
        name: "Evolution Turfman 1000",
        brand: "evolution",
        driveType: "4x4",
        seats: 2,
        category: "Turfman",
        price: 18999,
        status: "available",
        images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
        description: "Extended utility vehicle with maximum cargo capacity",
        features: [
          "Extended Cargo Bed",
          "Heavy-Duty Suspension",
          "Work Light Package",
          "Towing Package",
          "Professional Grade"
        ],
        specifications: {
          "Top Speed": "20 mph",
          "Range": "45 miles",
          "Payload": "1,500 lbs",
          "Towing Capacity": "2,500 lbs",
          "Ground Clearance": "10 inches"
        }
      }
    ];

    // Add DENAGO vehicles
    const denagoVehicles: InsertVehicle[] = [
      {
        name: "DENAGO NEV City",
        brand: "denago",
        driveType: "2x4",
        seats: 2,
        category: "NEV",
        price: 15999,
        status: "available",
        images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
        description: "Compact neighborhood electric vehicle perfect for city driving",
        features: [
          "Street Legal NEV",
          "Compact Design",
          "Energy Efficient",
          "Low Maintenance",
          "Quiet Operation"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "40 miles",
          "Battery": "48V Lithium",
          "Charging Time": "6-8 hours",
          "Ground Clearance": "6 inches"
        }
      },
      {
        name: "DENAGO NEV Nomad",
        brand: "denago",
        driveType: "4x4",
        seats: 2,
        category: "NEV",
        price: 18999,
        status: "available",
        images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
        description: "Rugged all-terrain NEV for adventurous driving",
        features: [
          "All-Terrain Capability",
          "Enhanced Suspension",
          "Weather Protection",
          "Storage Solutions",
          "Durable Construction"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "45 miles",
          "Battery": "48V Lithium",
          "Charging Time": "5-7 hours",
          "Ground Clearance": "8 inches"
        }
      },
      {
        name: "DENAGO NEV Rover XL",
        brand: "denago",
        driveType: "4x4",
        seats: 4,
        category: "NEV",
        price: 21999,
        status: "pre-order",
        images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
        description: "Extended 4-seater with premium features and performance",
        features: [
          "Extended Wheelbase",
          "Premium Seating",
          "Advanced Electronics",
          "All-Weather Capability",
          "Enhanced Safety Features"
        ],
        specifications: {
          "Top Speed": "25 mph",
          "Range": "50 miles",
          "Battery": "48V Lithium",
          "Charging Time": "5-7 hours",
          "Ground Clearance": "8 inches"
        }
      }
    ];

    [...evolutionVehicles, ...denagoVehicles].forEach(vehicle => {
      this.createVehicle(vehicle);
    });
  }

  async getVehicles(): Promise<Vehicle[]> {
    return [...this.vehicles];
  }

  async getVehicleById(id: string): Promise<Vehicle | null> {
    return this.vehicles.find(v => v.id === id) || null;
  }

  async getVehiclesByBrand(brand: "denago" | "evolution"): Promise<Vehicle[]> {
    return this.vehicles.filter(v => v.brand === brand);
  }

  async createVehicle(vehicleData: InsertVehicle): Promise<Vehicle> {
    const now = new Date();
    const vehicle: Vehicle = {
      id: (this.nextId++).toString(),
      ...vehicleData,
      createdAt: now,
      updatedAt: now,
    };
    
    this.vehicles.push(vehicle);
    return vehicle;
  }

  async updateVehicle(id: string, updates: Partial<InsertVehicle>): Promise<Vehicle | null> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return null;

    const updatedVehicle = {
      ...this.vehicles[index],
      ...updates,
      updatedAt: new Date(),
    };

    this.vehicles[index] = updatedVehicle;
    return updatedVehicle;
  }

  async deleteVehicle(id: string): Promise<boolean> {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return false;

    this.vehicles.splice(index, 1);
    return true;
  }

  async submitContactForm(form: ContactForm): Promise<boolean> {
    // In a real application, this would send an email or store in database
    console.log("Contact form submitted:", form);
    return true;
  }
}

const storage = new MemStorage();
export default storage;
