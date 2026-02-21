import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${isHomePage ? 'bg-white' : 'bg-black'} shadow-lg transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/sglogo.png" alt="Sobetwo Group" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`${
                  isHomePage
                    ? 'text-gray-700 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${
                  isHomePage
                    ? 'text-gray-700 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link
                to="/entities"
                className={`${
                  isHomePage
                    ? 'text-gray-700 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Entities
              </Link>
              <Link
                to="/services"
                className={`${
                  isHomePage
                    ? 'text-gray-700 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`${
                  isHomePage
                    ? 'text-gray-700 hover:text-black'
                    : 'text-gray-300 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
