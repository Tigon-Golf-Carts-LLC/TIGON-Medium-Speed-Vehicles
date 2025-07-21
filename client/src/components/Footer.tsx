import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ocean County Golf Carts</h3>
            <p className="text-gray-300">
              Your premier destination for DENAGO and EVOLUTION recreational vehicles in Ocean County, New Jersey.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/inventory" className="hover:text-white transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/denago" className="hover:text-white transition-colors">
                  DENAGO
                </Link>
              </li>
              <li>
                <Link href="/evolution" className="hover:text-white transition-colors">
                  EVOLUTION
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Sales</li>
              <li>Service & Maintenance</li>
              <li>Parts & Accessories</li>
              <li>Financing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ocean County, NJ</p>
              <p>Phone: Contact for current number</p>
              <a
                href="https://oceancountygolfcarts.com"
                className="text-ocean-blue hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                oceancountygolfcarts.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ocean County Golf Carts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
