import type { Vehicle } from "@shared/schema";

export const vehicleData: Vehicle[] = [
  {
    id: "evolution-d5-maverick-4-plus",
    name: "Evolution D5 Maverick 4 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 12995,
    description: "Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Premium Seating", "LED Lighting", "USB Charging", "All-Terrain Tires"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-gt4",
    name: "Evolution D6 Max GT4",
    brand: "EVOLUTION",
    category: "D-MAX Series",
    price: 16995,
    description: "High-performance 4-passenger golf cart with cutting-edge technology and sporty design.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg"],
    specifications: {
      topSpeed: "25+ mph",
      range: "40-55 miles",
      seatingCapacity: 4,
      batteryType: "High Performance Lithium",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["Sport Performance", "Premium Interior", "Advanced Suspension", "Digital Dashboard"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-city",
    name: "Denago EV City",
    brand: "DENAGO",
    category: "Urban Series",
    price: 11995,
    description: "Urban mobility solution with street-legal capabilities and modern design for city transportation.",
    images: ["/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40-50 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["Street Legal", "DOT Approved", "Modern Design", "City Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6-plus",
    name: "Evolution D5 Maverick 6 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 14995,
    description: "Six-passenger luxury golf cart with premium amenities and extended range for larger groups.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6PLUS_1751893115781_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger Seating", "Premium Comfort", "Extended Range", "Family Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4",
    name: "Evolution D5 Maverick 4",
    brand: "EVOLUTION",
    category: "Maverick Series", 
    price: 11995,
    description: "Standard 4-passenger version of the popular Maverick series with reliable performance.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4_1751893115780_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles",
      seatingCapacity: 4,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Reliable Performance", "Standard Features", "Comfortable Seating", "Proven Design"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-6",
    name: "Evolution D5 Maverick 6",
    brand: "EVOLUTION", 
    category: "Maverick Series",
    price: 13995,
    description: "Six-passenger golf cart perfect for family outings and group transportation.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK6_1751893115781_1753135350621.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles", 
      seatingCapacity: 6,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger Capacity", "Group Transportation", "Reliable Performance", "Family Friendly"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-4-plus",
    name: "Evolution Forester 4 Plus",
    brand: "EVOLUTION",
    category: "Utility Series",
    price: 13995,
    description: "Premium utility golf cart with heavy-duty features and rugged construction for work applications.",
    images: ["/attached_assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-50 miles",
      seatingCapacity: 4,
      batteryType: "Deep Cycle",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Utility Bed", "Heavy Duty", "Work Ready", "Rugged Construction"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-1000",
    name: "Evolution Turfman 1000", 
    brand: "EVOLUTION",
    category: "Commercial Series",
    price: 15995,
    description: "Heavy-duty commercial utility vehicle for landscaping and maintenance work with superior durability.",
    images: ["/attached_assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg"],
    specifications: {
      topSpeed: "15 mph",
      range: "40-60 miles",
      seatingCapacity: 2,
      batteryType: "Commercial Grade",
      chargingTime: "8-10 hours",
      payload: "1000 lbs"
    },
    features: ["Commercial Grade", "Heavy Duty", "Landscaping Ready", "Professional Use"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-nomad",
    name: "Denago EV Nomad",
    brand: "DENAGO",
    category: "Adventure Series",
    price: 14995,
    description: "Adventure-ready electric vehicle designed for off-road capability and outdoor exploration.",
    images: ["/attached_assets/DENAGONEVNOMAD_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "45-60 miles",
      seatingCapacity: 4,
      batteryType: "All-Terrain Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["Off-Road Ready", "Adventure Features", "All-Terrain", "Outdoor Equipment"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl",
    name: "Denago EV Rover XL", 
    brand: "DENAGO",
    category: "Luxury Series",
    price: 17995,
    description: "Extended range luxury electric vehicle with premium amenities and superior comfort for discerning customers.",
    images: ["/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "50-65 miles",
      seatingCapacity: 6,
      batteryType: "Premium Lithium",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Extended Range", "Luxury Features", "Premium Comfort", "Executive Class"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-plus",
    name: "Evolution Classic 4 Plus",
    brand: "EVOLUTION",
    category: "Classic Series",
    price: 12995,
    description: "Timeless design meets modern performance in this classic 4-passenger golf cart with premium features.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PLUS_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "19 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Classic Design", "Premium Seating", "Traditional Styling", "Comfortable Ride"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6-plus", 
    name: "Evolution D5 Ranger 6 Plus",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 15995,
    description: "Premium 6-passenger Ranger with advanced features and superior performance for larger groups.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40-55 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["6-Passenger", "Premium Features", "Extended Range", "Group Ready"],
    inStock: true,
    isNew: true
  },

  {
    id: "denago-ev-nomad-xl",
    name: "Denago EV Nomad XL",
    brand: "DENAGO",
    category: "Adventure Series",
    price: 15995,
    description: "Extended version of the popular Nomad with enhanced storage and seating capacity for larger adventures.",
    images: ["/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "45-55 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Extended Seating", "Adventure Ready", "Enhanced Storage", "Group Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xl6",
    name: "Denago EV Rover XL6",
    brand: "DENAGO",
    category: "Luxury Series",
    price: 18995,
    description: "Six-passenger luxury rover with premium features and extended range for ultimate comfort and performance.",
    images: ["/attached_assets/DENAGONEVROVERXL6_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "50-65 miles",
      seatingCapacity: 6,
      batteryType: "Premium Lithium",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Luxury Features", "Extended Range", "6-Passenger", "Premium Comfort"],
    inStock: true,
    isNew: true
  },
  {
    id: "denago-ev-rover-xxl",
    name: "Denago EV Rover XXL",
    brand: "DENAGO",
    category: "Luxury Series",
    price: 19995,
    description: "Our largest luxury model with maximum seating and cargo capacity for ultimate group transportation.",
    images: ["/attached_assets/DENAGONEVROVERXXL_1751893047473_1753135231313.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "50-65 miles",
      seatingCapacity: 8,
      batteryType: "Premium Lithium",
      chargingTime: "8-10 hours",
      payload: "1400 lbs"
    },
    features: ["Maximum Capacity", "Luxury Features", "Extended Range", "Large Group Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-6-plus",
    name: "Evolution Carrier 6 Plus",
    brand: "EVOLUTION",
    category: "Carrier Series",
    price: 13995,
    description: "Six-passenger carrier with enhanced cargo capacity and utility features for work and recreation.",
    images: ["/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "30-40 miles",
      seatingCapacity: 6,
      batteryType: "Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "1200 lbs"
    },
    features: ["Cargo Ready", "6-Passenger", "Utility Features", "Work Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-carrier-8-plus",
    name: "Evolution Carrier 8 Plus",
    brand: "EVOLUTION",
    category: "Carrier Series",
    price: 15995,
    description: "Eight-passenger carrier with maximum seating and cargo capacity for large group transportation.",
    images: ["/attached_assets/EVOLUTIONCARRIER8PLUS_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "20 mph",
      range: "30-40 miles",
      seatingCapacity: 8,
      batteryType: "Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "1400 lbs"
    },
    features: ["8-Passenger", "Maximum Capacity", "Cargo Ready", "Large Group"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-plus",
    name: "Evolution Classic 2 Plus",
    brand: "EVOLUTION",
    category: "Classic Series",
    price: 9995,
    description: "Compact two-passenger classic golf cart with timeless design and reliable performance.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PLUS_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "19 mph",
      range: "25-35 miles",
      seatingCapacity: 2,
      batteryType: "Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "400 lbs"
    },
    features: ["Classic Design", "Compact Size", "Traditional Styling", "Entry Level"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-2-pro",
    name: "Evolution Classic 2 Pro",
    brand: "EVOLUTION",
    category: "Classic Series",
    price: 11995,
    description: "Professional grade two-passenger classic with enhanced features and performance.",
    images: ["/attached_assets/EVOLUTIONCLASSIC2PRO_1751893115779_1753135231314.jpg"],
    specifications: {
      topSpeed: "19 mph",
      range: "30-40 miles",
      seatingCapacity: 2,
      batteryType: "Enhanced Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "500 lbs"
    },
    features: ["Professional Grade", "Enhanced Performance", "Premium Features", "Reliable"],
    inStock: true,
    isNew: true
  },


  {
    id: "evolution-d6-max-gt6",
    name: "Evolution D6 Max GT6",
    brand: "EVOLUTION",
    category: "D-MAX Series",
    price: 18995,
    description: "Six-passenger high-performance golf cart with maximum power and luxury features.",
    images: ["/attached_assets/EVOLUTIOND6MAXGT6_1751893159004_1753135350620.jpg"],
    specifications: {
      topSpeed: "25+ mph",
      range: "45-60 miles",
      seatingCapacity: 6,
      batteryType: "High Performance Lithium",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["High Performance", "6-Passenger", "Luxury Features", "Maximum Power"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt4",
    name: "Evolution D6 Max XT4",
    brand: "EVOLUTION",
    category: "D-MAX Series",
    price: 17995,
    description: "Four-passenger extreme terrain model with enhanced off-road capabilities and rugged design.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25+ mph",
      range: "40-55 miles",
      seatingCapacity: 4,
      batteryType: "High Performance Lithium",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["Extreme Terrain", "Off-Road Ready", "Rugged Design", "High Performance"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d6-max-xt6",
    name: "Evolution D6 Max XT6",
    brand: "EVOLUTION",
    category: "D-MAX Series",
    price: 19995,
    description: "Six-passenger extreme terrain model with maximum off-road capability and adventure features.",
    images: ["/attached_assets/EVOLUTIOND6MAXXT6_1751893159005_1753135437836.jpg"],
    specifications: {
      topSpeed: "25+ mph",
      range: "40-55 miles",
      seatingCapacity: 6,
      batteryType: "High Performance Lithium",
      chargingTime: "6-8 hours",
      payload: "1200 lbs"
    },
    features: ["Extreme Terrain", "6-Passenger", "Adventure Ready", "Maximum Capability"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-classic-4-pro",
    name: "Evolution Classic 4 Pro",
    brand: "EVOLUTION",
    category: "Classic Series",
    price: 13995,
    description: "Professional grade 4-passenger classic with enhanced performance features and premium appointments.",
    images: ["/attached_assets/EVOLUTIONCLASSIC4PRO_1751893115780_1753135231314.jpg"],
    specifications: {
      topSpeed: "19 mph",
      range: "40-50 miles",
      seatingCapacity: 4,
      batteryType: "Enhanced Deep Cycle",
      chargingTime: "8-10 hours",
      payload: "900 lbs"
    },
    features: ["Professional Grade", "Enhanced Performance", "Premium Features", "Classic Styling"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-2-2",
    name: "Evolution D5 Maverick 2+2",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 11495,
    description: "Versatile 2+2 configuration for flexible passenger and cargo arrangements.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2_1751893115780_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles",
      seatingCapacity: 4,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["2+2 Configuration", "Flexible Seating", "Cargo Versatility", "Compact Design"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-2-2-plus",
    name: "Evolution D5 Maverick 2+2 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 12495,
    description: "Premium 2+2 configuration with enhanced features and extended range capability.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK2+2PLUS_1751893115780_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "800 lbs"
    },
    features: ["Premium 2+2", "Extended Range", "Enhanced Features", "Lithium Power"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-maverick-4-2-plus",
    name: "Evolution D5 Maverick 4+2 Plus",
    brand: "EVOLUTION",
    category: "Maverick Series",
    price: 14495,
    description: "Premium 4+2 configuration offering 6 passengers with flexible rear seating options.",
    images: ["/attached_assets/EVOLUTIOND5MAVERICK4+2PLUS_1751893115780_1753135231312.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "1000 lbs"
    },
    features: ["4+2 Configuration", "Flexible Seating", "Extended Range", "Premium Features"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-2-2",
    name: "Evolution D5 Ranger 2+2",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 12995,
    description: "Versatile Ranger with 2+2 seating configuration for flexible passenger arrangements.",
    images: ["/attached_assets/EVOLUTIOND5RANGER2+2_1751893115781_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["2+2 Configuration", "Ranger Performance", "Flexible Seating", "Premium Build"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4",
    name: "Evolution D5 Ranger 4",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 12495,
    description: "Standard 4-passenger Ranger with reliable performance and essential features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4_1751893115782_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles",
      seatingCapacity: 4,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Standard Features", "Reliable Performance", "4-Passenger", "Proven Design"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-2-plus",
    name: "Evolution D5 Ranger 4+2 Plus",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 15495,
    description: "Premium 4+2 Ranger configuration with 6-passenger capacity and advanced features.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4+2PLUS(9)_1751893115782_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "40-50 miles",
      seatingCapacity: 6,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "1100 lbs"
    },
    features: ["4+2 Configuration", "Premium Features", "Extended Range", "6-Passenger"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-4-plus",
    name: "Evolution D5 Ranger 4 Plus",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 13995,
    description: "Premium 4-passenger Ranger with enhanced features and superior performance.",
    images: ["/attached_assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-45 miles",
      seatingCapacity: 4,
      batteryType: "Lithium Ion",
      chargingTime: "6-8 hours",
      payload: "900 lbs"
    },
    features: ["Premium Features", "Enhanced Performance", "4-Passenger", "Extended Range"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-d5-ranger-6",
    name: "Evolution D5 Ranger 6",
    brand: "EVOLUTION",
    category: "Ranger Series",
    price: 14495,
    description: "Standard 6-passenger Ranger perfect for larger groups and family transportation.",
    images: ["/attached_assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "30-40 miles",
      seatingCapacity: 6,
      batteryType: "Lead Acid",
      chargingTime: "8-10 hours",
      payload: "1100 lbs"
    },
    features: ["6-Passenger", "Group Ready", "Reliable Performance", "Family Transportation"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-forester-6-plus",
    name: "Evolution Forester 6 Plus",
    brand: "EVOLUTION",
    category: "Utility Series",
    price: 15995,
    description: "Premium 6-passenger utility vehicle with heavy-duty features for work and recreation.",
    images: ["/attached_assets/EVOLUTIONFORESTER6PLUS_1751893159005_1753135437837.jpg"],
    specifications: {
      topSpeed: "25 mph",
      range: "35-50 miles",
      seatingCapacity: 6,
      batteryType: "Deep Cycle",
      chargingTime: "6-8 hours",
      payload: "1400 lbs"
    },
    features: ["6-Passenger", "Heavy Duty", "Utility Features", "Work Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-200",
    name: "Evolution Turfman 200",
    brand: "EVOLUTION",
    category: "Commercial Series",
    price: 12995,
    description: "Compact commercial utility vehicle for light-duty maintenance and landscaping work.",
    images: ["/attached_assets/EVOLUTIONTURFMAN200_1751893159006_1753135437837.jpg"],
    specifications: {
      topSpeed: "15 mph",
      range: "35-50 miles",
      seatingCapacity: 2,
      batteryType: "Commercial Grade",
      chargingTime: "6-8 hours",
      payload: "200 lbs"
    },
    features: ["Compact Design", "Light Duty", "Commercial Grade", "Maintenance Ready"],
    inStock: true,
    isNew: true
  },
  {
    id: "evolution-turfman-800",
    name: "Evolution Turfman 800",
    brand: "EVOLUTION",
    category: "Commercial Series",
    price: 14995,
    description: "Mid-range commercial utility vehicle with versatile payload capacity for various work applications.",
    images: ["/attached_assets/EVOLUTIONTURFMAN800_1751893159006_1753135437836.jpg"],
    specifications: {
      topSpeed: "15 mph",
      range: "40-55 miles",
      seatingCapacity: 2,
      batteryType: "Commercial Grade",
      chargingTime: "8-10 hours",
      payload: "800 lbs"
    },
    features: ["Mid-Range Capacity", "Versatile Payload", "Commercial Grade", "Professional Use"],
    inStock: true,
    isNew: true
  }
];