export default function Announcement() {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white py-3 px-6 text-center text-sm relative font-medium shadow-md">
      <p>
        Sign up and get <span className="font-bold">20% off</span> on your first order.{" "}
        <a href="#" className="underline hover:text-gray-900 transition-colors">
          Sign Up Now
        </a>
      </p>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-900 font-bold">
        ×
      </button>
    </div>
  );
}
