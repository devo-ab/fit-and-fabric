export default function NavLinks({ navLinks }) {
  return (
    <div className="hidden md:flex space-x-6">
      {navLinks.map((nav, index) => (
        <a key={index} href={nav.route} className="hover:text-gray-500 transition-colors">
          {nav.title}
        </a>
      ))}
    </div>
  );
}
