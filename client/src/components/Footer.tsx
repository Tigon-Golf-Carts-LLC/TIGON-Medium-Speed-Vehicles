import { Link } from "wouter";

export default function Footer() {
  const towns = [
    "Warrington Township", "Newtown Township", "Northampton Township", "Lower Makefield Township",
    "Upper Makefield Township", "Middletown Township", "Yardley Borough", "Newtown Borough",
    "Doylestown Township", "Doylestown Borough", "Warwick Township", "Warminster Township",
    "Upper Southampton Township", "Lower Southampton Township", "Bristol Township", "Bristol Borough",
    "Bensalem Township", "Falls Township", "Tullytown Borough", "Levittown",
    "Langhorne Borough", "Langhorne Manor Borough", "Pennsbury Manor", "Morrisville Borough",
    "Buckingham Township", "New Hope Borough", "Solebury Township", "Wrightstown Township",
    "Hilltown Township", "Dublin Borough", "Perkasie Borough", "Quakertown Borough",
    "Richland Township", "Silverdale Borough", "Telford Borough", "West Rockhill Township"
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="space-y-8 mb-8">
          {/* Company Description */}
          <div className="md:hidden">
            <p className="text-gray-600 text-sm leading-relaxed">
              TIGON Medium Speed Vehicles premier MSV dealership serving customers across 
              the region with quality medium speed vehicles and expert service.
            </p>
          </div>

          {/* Mobile: Navigation and Services side by side (50% each) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Navigation Links */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              </ul>
            </div>

            {/* Services - Updated with requested links */}
            <div>
              <ul className="space-y-2">
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">NEW MEDIUM SPEED VEHICLES</Link></li>
                <li><Link href="/denago" className="text-gray-600 hover:text-gray-900 text-sm">DENAGO</Link></li>
                <li><Link href="/evolution" className="text-gray-600 hover:text-gray-900 text-sm">EVOLUTION</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">ABOUT</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">CONTACT</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">PRIVACY POLICY</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">TERMS OF SERVICE</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile: Contact Info */}
          <div className="md:hidden">
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold text-sm">Phone: 267-736-4890</p>
              <p className="text-gray-600 text-sm">Email: info@bucksgolfcarts.com</p>
              <p className="text-gray-600 text-sm">Address: 115 Lincoln Hwy, Fairless Hills, PA 19030</p>
              <div className="text-gray-600 text-sm">
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Desktop: 4 column layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Company Description */}
            <div className="md:col-span-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                TIGON Medium Speed Vehicles premier MSV dealership serving customers across 
                the region with quality medium speed vehicles and expert service.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href="/rentals" className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              </ul>
            </div>

            {/* Services - Updated with requested links */}
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">NEW MEDIUM SPEED VEHICLES</Link></li>
                <li><Link href="/denago" className="text-gray-600 hover:text-gray-900 text-sm">DENAGO</Link></li>
                <li><Link href="/evolution" className="text-gray-600 hover:text-gray-900 text-sm">EVOLUTION</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">ABOUT</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">CONTACT</Link></li>
                <li><Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 text-sm">PRIVACY POLICY</Link></li>
                <li><Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 text-sm">TERMS OF SERVICE</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold text-sm">Phone: 267-736-4890</p>
                <p className="text-gray-600 text-sm">Email: info@bucksgolfcarts.com</p>
                <p className="text-gray-600 text-sm">Address: 115 Lincoln Hwy, Fairless Hills, PA 19030</p>
                <div className="text-gray-600 text-sm">
                  <p>Mon-Fri: 9AM-5PM</p>
                  <p>Sat: 9AM-5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Towns Served - Now with Links */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Bucks County Towns We Serve Medium Speed Vehicles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <Link href="/warrington-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warrington Township MSV
            </Link>
            <Link href="/newtown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Newtown Township MSV
            </Link>
            <Link href="/northampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Northampton Township MSV
            </Link>
            <Link href="/lower-makefield-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lower Makefield MSV
            </Link>
            <Link href="/upper-makefield-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Upper Makefield MSV
            </Link>
            <Link href="/middletown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Middletown Township MSV
            </Link>
            <Link href="/yardley-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Yardley Borough MSV
            </Link>
            <Link href="/newtown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Newtown Borough MSV
            </Link>
            <Link href="/doylestown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Doylestown Township MSV
            </Link>
            <Link href="/doylestown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Doylestown Borough MSV
            </Link>
            <Link href="/warwick-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warwick Township MSV
            </Link>
            <Link href="/warminster-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warminster Township MSV
            </Link>
            <Link href="/upper-southampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Upper Southampton MSV
            </Link>
            <Link href="/lower-southampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lower Southampton MSV
            </Link>
            <Link href="/bristol-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bristol Township MSV
            </Link>
            <Link href="/bristol-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bristol Borough MSV
            </Link>
            <Link href="/bensalem-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bensalem Township MSV
            </Link>
            <Link href="/falls-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Falls Township MSV
            </Link>
            <Link href="/tullytown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Tullytown Borough MSV
            </Link>
            <Link href="/levittown-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Levittown MSV
            </Link>
            <Link href="/langhorne-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Langhorne Borough MSV
            </Link>
            <Link href="/langhorne-manor-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Langhorne Manor MSV
            </Link>
            <Link href="/pennsbury-manor-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Pennsbury Manor MSV
            </Link>
            <Link href="/morrisville-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Morrisville Borough MSV
            </Link>
            <Link href="/buckingham-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Buckingham Township MSV
            </Link>
            <Link href="/new-hope-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              New Hope Borough MSV
            </Link>
            <Link href="/solebury-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Solebury Township MSV
            </Link>
            <Link href="/wrightstown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Wrightstown Township MSV
            </Link>
            <Link href="/hilltown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Hilltown Township MSV
            </Link>
            <Link href="/dublin-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Dublin Borough MSV
            </Link>
            <Link href="/perkasie-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Perkasie Borough MSV
            </Link>
            <Link href="/quakertown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Quakertown Borough MSV
            </Link>
            <Link href="/richland-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Richland Township MSV
            </Link>
            <Link href="/silverdale-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Silverdale Borough MSV
            </Link>
            <Link href="/telford-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Telford Borough MSV
            </Link>
            <Link href="/west-rockhill-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              West Rockhill MSV
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 TIGON Medium Speed Vehicles. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href="/terms-of-service" className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              TIGON Medium Speed Vehicles - Serving all Bucks County towns with premium medium speed vehicles and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}