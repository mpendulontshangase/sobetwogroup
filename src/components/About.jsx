function About() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#4A3B32] sm:text-4xl">
            About Sobetwo Group
          </h2>
          <p className="mt-4 text-lg text-[#6B5446]">
            Innovating Africa through AI and Technology
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Modern AI and Technology Office"
              />
              <div className="absolute inset-0 bg-[#4A3B32] opacity-10"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#4A3B32]">Our Story</h3>
              <p className="mt-4 text-lg text-[#6B5446]">
                Founded in 2019, Sobetwo Group emerged with a powerful vision: to revolutionize Africa through artificial intelligence and innovative technology. We recognized the immense potential of AI to create opportunities and advance lives across the continent.
              </p>
              <p className="mt-4 text-lg text-[#6B5446]">
                Our mission extends beyond traditional business consulting – we are committed to harnessing the power of AI to solve complex challenges, create meaningful employment opportunities, and drive sustainable development throughout Africa. Through our expertise in AI innovation, we're helping businesses and communities embrace the digital future.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-[#4A3B32] text-center">Our Values</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-[#F5EFE7] p-6 rounded-lg">
                <div className="h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Integrity"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#4A3B32]">Integrity</h4>
                <p className="mt-2 text-[#6B5446]">
                  We conduct our business with the highest standards of professional ethics and transparency.
                </p>
              </div>
              <div className="bg-[#F5EFE7] p-6 rounded-lg">
                <div className="h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Innovation"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#4A3B32]">Innovation</h4>
                <p className="mt-2 text-[#6B5446]">
                  We continuously strive to develop creative solutions that address complex business challenges.
                </p>
              </div>
              <div className="bg-[#F5EFE7] p-6 rounded-lg">
                <div className="h-40 rounded-lg overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Excellence"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#4A3B32]">Excellence</h4>
                <p className="mt-2 text-[#6B5446]">
                  We are committed to delivering exceptional quality in everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Owner Section */}
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  alt="Founder and CEO"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#4A3B32]">Meet Our Founder</h3>
                <h4 className="mt-2 text-xl text-[#967969]">Mr M Ntshangase</h4>
                <p className="mt-4 text-lg text-[#6B5446]">
                  As a young entrepreneur from South Africa, Mr Ntshangase saw an opportunity to leverage artificial intelligence to transform the African business landscape. His vision was to create a company that harnesses the power of AI and innovative technology to drive growth and create opportunities across the continent.
                </p>
                <p className="mt-4 text-lg text-[#6B5446]">
                  With a strong background in technology and AI solutions, Mr Ntshangase has led Sobetwo Group since its founding in 2019 to become a pioneering force in AI-driven business solutions. His deep understanding of both technological innovation and African market dynamics has positioned the company at the forefront of digital transformation in the region.
                </p>
                <div className="mt-6">
                  <blockquote className="italic text-[#967969] border-l-4 border-[#967969] pl-4">
                    "Through AI innovation, we're not just building businesses – we're creating opportunities and advancing lives across Africa. This is our commitment to the future of our continent."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 