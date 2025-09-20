import Cart from "../assets/svg/Cart";
import Search from "../assets/svg/Search";
import User from "../assets/svg/User";
import NavLinks from "./NavLinks";

export default function Header({ onSearch }) {
  const navLinks = [
    { title: "shop", route: "#" },
    { title: "On Sale", route: "#" },
    { title: "New Arrivals", route: "#" },
    { title: "Brands", route: "#" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          Fit And Fabric
        </a>

        {/* Nav */}
        <nav>
          <NavLinks navLinks={navLinks}></NavLinks>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-800 text-white placeholder-gray-400 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              onChange={(e) => onSearch(e.target.value)}
            />
            <span className="absolute right-3 top-2 text-gray-400">
              <Search />
            </span>
          </div>

          {/* Cart */}
          <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
            <Cart />
          </a>

          {/* User */}
          <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
            <User />
          </a>
        </div>
      </div>
    </header>
  );
}
