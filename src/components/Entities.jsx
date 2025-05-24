function Entities() {
  const entities = [
    {
      name: "Faith Innit",
      description: "A faith-inspired clothing brand rooted in Christian values, offering contemporary fashion that reflects spiritual identity and modern style.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      category: "Fashion"
    },
    {
      name: "Zanotha Solutions",
      description: "An innovative tech company specializing in web development, digital transformation, and comprehensive technology services for modern businesses.",
      image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      category: "Technology"
    },
    {
      name: "GetJob",
      description: "A dynamic job advertising platform connecting talented professionals with opportunities across Africa, revolutionizing the recruitment landscape.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      category: "Recruitment"
    },
    {
      name: "Sobetwo Films",
      description: "A creative powerhouse in content creation, producing compelling visual stories and innovative digital content for modern audiences.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Media"
    },
    {
      name: "Sobhethu",
      description: "An exclusive luxury clothing brand blending African heritage with contemporary fashion, creating sophisticated and distinctive designs.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80",
      category: "Luxury Fashion"
    },
    {
      name: "Sobetwo Properties",
      description: "A forward-thinking property investment company focused on developing and managing premium real estate portfolios across strategic locations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Real Estate"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#4A3B32] sm:text-4xl">
            Our Entities
          </h2>
          <p className="mt-4 text-lg text-[#6B5446]">
            Diverse companies united under the Sobetwo Group umbrella, each driving innovation in their respective fields
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {entities.map((entity, index) => (
            <div 
              key={index} 
              className="bg-[#F5EFE7] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={entity.image}
                  alt={entity.name}
                />
              </div>
              <div className="p-6">
                <span className="text-[#967969] text-sm font-semibold">
                  {entity.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-[#4A3B32]">
                  {entity.name}
                </h3>
                <p className="mt-3 text-[#6B5446]">
                  {entity.description}
                </p>
                <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#967969] hover:bg-[#7D6557] transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Entities; 