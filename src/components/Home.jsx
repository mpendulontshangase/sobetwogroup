function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Modern office building"
          />
          <div className="absolute inset-0 bg-black mix-blend-multiply opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Welcome to Sobetwo Group
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your trusted partner in innovative business solutions
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
                  alt="Innovation"
                />
              </div>
              <h3 className="text-lg font-medium text-black">Innovation</h3>
              <p className="mt-2 text-gray-600">
                Leading the way in technological advancement and creative solutions
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                  alt="Excellence"
                />
              </div>
              <h3 className="text-lg font-medium text-black">Excellence</h3>
              <p className="mt-2 text-gray-600">
                Delivering exceptional quality in every project we undertake
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Partnership"
                />
              </div>
              <h3 className="text-lg font-medium text-black">Partnership</h3>
              <p className="mt-2 text-gray-600">
                Building lasting relationships with our clients and partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
