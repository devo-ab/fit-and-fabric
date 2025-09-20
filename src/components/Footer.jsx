import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-12 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-wide mb-4 block text-white"
            >
              Fit And Fabric
            </a>
            <p className="text-gray-400 mb-6">
              Clothes that suit your style & make you proud. Fashion for
              everyone — women, men & beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Men’s Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Women’s Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Fit And Fabric. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
