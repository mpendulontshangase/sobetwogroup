import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHome, FaInfoCircle, FaCogs, FaEnvelopeOpen } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#4A3B32] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Quick Links */}
          <div className="flex-grow max-w-sm">
            <h4 className="text-[#E8DCD1] text-sm font-semibold mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <FaHome className="text-[#967969] flex-shrink-0" />
                <a href="/" className="text-[#D4C3B5] hover:text-[#E8DCD1] text-sm transition-colors duration-200">
                  Home
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaInfoCircle className="text-[#967969] flex-shrink-0" />
                <a href="/about" className="text-[#D4C3B5] hover:text-[#E8DCD1] text-sm transition-colors duration-200">
                  About Us
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaCogs className="text-[#967969] flex-shrink-0" />
                <a href="/services" className="text-[#D4C3B5] hover:text-[#E8DCD1] text-sm transition-colors duration-200">
                  Services
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelopeOpen className="text-[#967969] flex-shrink-0" />
                <a href="/contact" className="text-[#D4C3B5] hover:text-[#E8DCD1] text-sm transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-grow max-w-sm">
            <h4 className="text-[#E8DCD1] text-sm font-semibold mb-3">Contact Us</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-[#967969] flex-shrink-0" />
                <span className="text-[#D4C3B5] text-sm">130 South Street, Centurion</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-[#967969] flex-shrink-0" />
                <a href="mailto:sobetwogroup@gmail.com" className="text-[#D4C3B5] text-sm hover:text-[#E8DCD1]">
                  sobetwogroup@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-[#967969] flex-shrink-0" />
                <a href="tel:+27834567890" className="text-[#D4C3B5] text-sm hover:text-[#E8DCD1]">
                  +27 83 456 7890
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaClock className="text-[#967969] flex-shrink-0" />
                <span className="text-[#D4C3B5] text-sm">Mon-Fri: 9AM-6PM</span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex-shrink-0">
            <h4 className="text-[#E8DCD1] text-sm font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D4C3B5] hover:text-[#E8DCD1] transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-[#D4C3B5] hover:text-[#E8DCD1] transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#D4C3B5] hover:text-[#E8DCD1] transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#D4C3B5] hover:text-[#E8DCD1] transition-colors duration-200">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#967969]">
          <p className="text-[#D4C3B5] text-sm text-center">
            © {new Date().getFullYear()} Sobetwo Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 