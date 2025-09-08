import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IR</span>
              </div>
              <span className="font-bold text-white">
                Industrial Roofing & Gutters
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Professional industrial roofing and gutter services with over 20 years of experience. 
              Licensed, insured, and committed to quality.
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">License:</span> #CR123456789</p>
              <p><span className="font-medium">Insurance:</span> $2M Liability</p>
              <p><span className="font-medium">Bonded:</span> $500K Surety Bond</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/roofing" className="hover:text-blue-400 transition-colors">
                  Industrial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/gutters" className="hover:text-blue-400 transition-colors">
                  Gutter Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Emergency Repairs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Maintenance Plans
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Waterproofing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-blue-400 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="tel:+1-555-ROOFING" className="hover:text-blue-400 transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-blue-400 mt-1">📍</span>
                <div>
                  <p>1234 Industrial Drive</p>
                  <p>Construction City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📞</span>
                <a href="tel:+1-555-ROOFING" className="hover:text-blue-400 transition-colors">
                  (555) ROOFING
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">📧</span>
                <a href="mailto:info@industrialroofing.com" className="hover:text-blue-400 transition-colors">
                  info@industrialroofing.com
                </a>
              </div>
              <div className="pt-2">
                <p className="font-medium text-red-400">24/7 Emergency Service</p>
                <a href="tel:+1-555-EMERGENCY" className="text-red-300 hover:text-red-200 transition-colors">
                  (555) EMERGENCY
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {currentYear} Industrial Roofing & Gutters. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/safety" className="hover:text-blue-400 transition-colors">
                Safety Standards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}