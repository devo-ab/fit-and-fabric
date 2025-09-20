export default function Newsletter() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16 px-6 md:px-12 mt-12 overflow-hidden">
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Stay Up To Date ✨</h2>
        <p className="text-gray-300 text-lg mb-8">
          Join our newsletter and be the first to know about new arrivals, exclusive deals, and the
          latest trends.
        </p>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow px-4 py-4 text-gray-900 focus:outline-none"
          />
          <button className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-4 hover:opacity-90 transition">
            Subscribe
          </button>
        </div>

        {/* Small note */}
        <p className="text-sm text-gray-400 mt-4">
          We care about your data. Read our{" "}
          <a href="#" className="underline hover:text-white">
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Background accent (decoration) */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
    </section>
  );
}
