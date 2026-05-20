export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sun-blue text-white border-t-4 border-sun-yellow">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="/images/sunair-logo.png" 
              alt="SUN AIR Heating & A/C Supply"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed text-sm">
              Heating & A/C Supply - Quality, affordable solutions for all your climate control needs.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-sun-yellow">Contact Info</h4>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">Hours: Mon-Fri 8am-5pm EST</p>
              <a
                href="mailto:info@sunair-usa.com"
                className="text-white hover:text-sun-yellow transition block font-semibold text-sm"
              >
                Email: info@sunair-usa.com
              </a>
              <a href="tel:+18134430757" className="text-white hover:text-sun-yellow transition block font-semibold text-sm">
                Phone: +1 (813) 443-0757
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-sun-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-sun-yellow transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/catalog" className="text-gray-300 hover:text-sun-yellow transition text-sm">
                  Catalog
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-gray-300 hover:text-sun-yellow transition text-sm">
                  Warranty
                </a>
              </li>
              <li>
                <a href="/distributors" className="text-gray-300 hover:text-sun-yellow transition text-sm">
                  Distributors/Contractors
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-sun-yellow transition text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sun Air. All rights reserved.
          </p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sun-yellow hover:text-white transition font-semibold text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
