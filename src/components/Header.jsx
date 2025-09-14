import Cart from "../assets/svg/Cart";
import Search from "../assets/svg/Search";
import User from "../assets/svg/User";
import NavLinks from "./NavLinks";

export default function Header({onSearch}) {
  const navLinks = [
    { title: "shop", route: "#" },
    { title: "On Sale", route: "#" },
    { title: "New Arrivals", route: "#" },
    { title: "Brands", route: "#" },
  ];

  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Fit And Fabric
        </a>

        <nav>
          <NavLinks navLinks={navLinks}></NavLinks>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
              // value={searchText}
              onChange={(e) => onSearch(e.target.value)}
            />
            <span className="absolute right-3 top-2">
              <Search></Search>
            </span>
          </div>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <Cart></Cart>
          </a>

          <a href="#" className="hover:text-gray-500 transition-colors">
            <User></User>
          </a>
        </div>
      </div>
    </header>
  );
}
