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
              Bucks County's premier golf cart dealership serving customers across 
              the region with quality carts and expert service.
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
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">NEW GOLF CARTS</Link></li>
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
              <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
              <p className="text-gray-600 text-sm">Email: info@bucksgolfcarts.com</p>
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
                Bucks County's premier golf cart dealership serving customers across 
                the region with quality carts and expert service.
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
                <li><Link href="/inventory" className="text-gray-600 hover:text-gray-900 text-sm">NEW GOLF CARTS</Link></li>
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
                <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
                <p className="text-gray-600 text-sm">Email: info@bucksgolfcarts.com</p>
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
            Bucks County Towns We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <Link href="/warrington-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warrington Township Golf Carts
            </Link>
            <Link href="/newtown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Newtown Township Golf Carts
            </Link>
            <Link href="/northampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Northampton Township Golf Carts
            </Link>
            <Link href="/lower-makefield-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lower Makefield Golf Carts
            </Link>
            <Link href="/upper-makefield-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Upper Makefield Golf Carts
            </Link>
            <Link href="/middletown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Middletown Township Golf Carts
            </Link>
            <Link href="/yardley-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Yardley Borough Golf Carts
            </Link>
            <Link href="/newtown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Newtown Borough Golf Carts
            </Link>
            <Link href="/doylestown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Doylestown Township Golf Carts
            </Link>
            <Link href="/doylestown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Doylestown Borough Golf Carts
            </Link>
            <Link href="/warwick-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warwick Township Golf Carts
            </Link>
            <Link href="/warminster-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Warminster Township Golf Carts
            </Link>
            <Link href="/upper-southampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Upper Southampton Golf Carts
            </Link>
            <Link href="/lower-southampton-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lower Southampton Golf Carts
            </Link>
            <Link href="/bristol-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bristol Township Golf Carts
            </Link>
            <Link href="/bristol-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bristol Borough Golf Carts
            </Link>
            <Link href="/bensalem-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bensalem Township Golf Carts
            </Link>
            <Link href="/falls-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Falls Township Golf Carts
            </Link>
            <Link href="/tullytown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Tullytown Borough Golf Carts
            </Link>
            <Link href="/levittown-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Levittown Golf Carts
            </Link>
            <Link href="/langhorne-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Langhorne Borough Golf Carts
            </Link>
            <Link href="/langhorne-manor-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Langhorne Manor Golf Carts
            </Link>
            <Link href="/pennsbury-manor-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Pennsbury Manor Golf Carts
            </Link>
            <Link href="/morrisville-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Morrisville Borough Golf Carts
            </Link>
            <Link href="/buckingham-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Buckingham Township Golf Carts
            </Link>
            <Link href="/new-hope-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              New Hope Borough Golf Carts
            </Link>
            <Link href="/solebury-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Solebury Township Golf Carts
            </Link>
            <Link href="/wrightstown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Wrightstown Township Golf Carts
            </Link>
            <Link href="/hilltown-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Hilltown Township Golf Carts
            </Link>
            <Link href="/dublin-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Dublin Borough Golf Carts
            </Link>
            <Link href="/perkasie-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Perkasie Borough Golf Carts
            </Link>
            <Link href="/quakertown-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Quakertown Borough Golf Carts
            </Link>
            <Link href="/richland-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Richland Township Golf Carts
            </Link>
            <Link href="/silverdale-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Silverdale Borough Golf Carts
            </Link>
            <Link href="/telford-borough-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Telford Borough Golf Carts
            </Link>
            <Link href="/west-rockhill-township-golf-carts" className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              West Rockhill Golf Carts
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Bucks County Golf Carts. All rights reserved. | 
              <Link href="/privacy-policy" className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href="/terms-of-service" className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              Bucks County Golf Carts - Serving all Bucks County towns with premium golf carts and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}