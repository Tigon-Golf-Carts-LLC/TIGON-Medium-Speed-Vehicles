import { Link } from "wouter";

export default function Footer() {
  // Featured states and countries for footer links
  const locations = [
    { name: "Pennsylvania", slug: "pennsylvania" },
    { name: "California", slug: "california" },
    { name: "Texas", slug: "texas" },
    { name: "Florida", slug: "florida" },
    { name: "New York", slug: "new-york" },
    { name: "Illinois", slug: "illinois" },
    { name: "Ohio", slug: "ohio" },
    { name: "Georgia", slug: "georgia" },
    { name: "North Carolina", slug: "north-carolina" },
    { name: "Michigan", slug: "michigan" },
    { name: "New Jersey", slug: "new-jersey" },
    { name: "Virginia", slug: "virginia" },
    { name: "Washington", slug: "washington" },
    { name: "Arizona", slug: "arizona" },
    { name: "Massachusetts", slug: "massachusetts" },
    { name: "Tennessee", slug: "tennessee" },
    { name: "Indiana", slug: "indiana" },
    { name: "Missouri", slug: "missouri" },
    { name: "Maryland", slug: "maryland" },
    { name: "Wisconsin", slug: "wisconsin" },
    { name: "Colorado", slug: "colorado" },
    { name: "Minnesota", slug: "minnesota" },
    { name: "United States", slug: "united-states" },
    { name: "Canada", slug: "canada" },
    { name: "Mexico", slug: "mexico" }
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
              <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
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
                <p className="text-gray-900 font-semibold text-sm">Phone: 1-844-844-6638</p>
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

        {/* Locations Served - States and Countries */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Areas We Serve Medium Speed Vehicles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            {locations.map((location) => (
              <Link 
                key={location.slug}
                href={`/${location.slug}`} 
                className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
              >
                {location.name} MSV
              </Link>
            ))}
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
              TIGON Medium Speed Vehicles - Serving customers across the United States, Canada, and Mexico with premium medium speed vehicles and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}