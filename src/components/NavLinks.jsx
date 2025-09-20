export default function NavLinks({ navLinks }) {
  return (
    <div className="hidden md:flex space-x-8">
      {navLinks.map((nav, index) => (
        <a
          key={index}
          href={nav.route}
          className="relative group text-white font-medium transition-colors duration-300 hover:text-pink-400"
        >
          {nav.title}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ))}
    </div>
  );
}
