import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHome, FaInfoCircle, FaCogs, FaEnvelopeOpen } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Quick Links */}
          <div className="flex-grow max-w-sm">
            <h4 className="text-white text-sm font-semibold mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <FaHome className="text-gray-400 flex-shrink-0" />
                <a href="/" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Home
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaInfoCircle className="text-gray-400 flex-shrink-0" />
                <a href="/about" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  About Us
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaCogs className="text-gray-400 flex-shrink-0" />
                <a href="/services" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Services
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelopeOpen className="text-gray-400 flex-shrink-0" />
                <a href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-grow max-w-sm">
            <h4 className="text-white text-sm font-semibold mb-3">Contact Us</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">130 South Street, Centurion</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400 flex-shrink-0" />
                <a href="mailto:sobetwogroup@gmail.com" className="text-gray-300 text-sm hover:text-white">
                  sobetwogroup@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-400 flex-shrink-0" />
                <a href="tel:+27832594665" className="text-gray-300 text-sm hover:text-white">
                  083 259 4665
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex-shrink-0">
            <h4 className="text-white text-sm font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 flex flex-col items-center gap-3">
          <img src="/sglogo.png" alt="Sobetwo Group" className="h-10 w-auto" />
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Sobetwo Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
