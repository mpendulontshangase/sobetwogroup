function Services() {
  const services = [
    {
      title: "Business Consulting",
      description: "Strategic guidance to help your business grow and succeed in today's competitive market.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital solutions to modernize your business operations and improve efficiency.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      title: "Project Management",
      description: "Professional project management services to ensure successful delivery of your initiatives.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to optimize your business performance and maximize returns.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1711&q=80"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F5EFE7] rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4A3B32]">{service.title}</h3>
                  <p className="mt-4 text-[#6B5446]">{service.description}</p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#967969] hover:bg-[#7D6557]">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Why Choose Sobetwo Group?
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-[#F5EFE7] p-6 rounded-lg shadow">
              <div className="h-32 rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Expertise"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#4A3B32]">Expertise</h4>
              <p className="mt-2 text-[#6B5446]">
                Years of industry experience and professional expertise
              </p>
            </div>
            <div className="bg-[#F5EFE7] p-6 rounded-lg shadow">
              <div className="h-32 rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Customization"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#4A3B32]">Customization</h4>
              <p className="mt-2 text-[#6B5446]">
                Tailored solutions designed for your specific needs
              </p>
            </div>
            <div className="bg-[#F5EFE7] p-6 rounded-lg shadow">
              <div className="h-32 rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Results"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#4A3B32]">Results</h4>
              <p className="mt-2 text-[#6B5446]">
                Proven track record of delivering successful outcomes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services; 