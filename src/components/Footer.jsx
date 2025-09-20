import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer class="bg-white text-gray-700 py-12 px-6 md:px-12">
      <div class="container mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* <!-- Brand Column --> */}
          <div>
            <a href="#" class="text-2xl font-bold tracking-wide mb-4 block text-gray-900">
              Fit And Fabric
            </a>
            <p class="text-gray-600 mb-6">
              Clothes that suit your style & make you proud. Fashion for everyone — women, men &
              beyond.
            </p>
            <div className="flex space-x-4">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-900 hover:text-white transition">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          </div>

          {/* <!-- Shop Column --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gray-900">Shop</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Men’s Fashion
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Women’s Fashion
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Support Column --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Company Column --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4 text-gray-900">Company</h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Press
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom --> */}
        <div class="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 Fit And Fabric. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
