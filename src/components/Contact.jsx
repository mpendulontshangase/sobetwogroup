function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('The contact form is currently under development. Please email us directly at sobetwogroup@gmail.com');
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#4A3B32] sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-[#6B5446]">
            Get in touch with our team of experts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-800 text-sm">
                ⚠️ The contact form is currently under development. Please email us directly at sobetwogroup@gmail.com
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  disabled
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled
                className="w-full bg-gray-400 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-[#4A3B32]">Our Office</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#967969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3 text-[#6B5446]">
                  130 South Street<br />
                  Centurion, Pretoria 0163
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#967969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3 text-[#6B5446]">
                  sobetwogroup@gmail.com
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-[#967969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3 text-[#6B5446]">
                  +27 83 456 7890
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-[#4A3B32]">Business Hours</h3>
              <div className="mt-3 text-[#6B5446]">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 