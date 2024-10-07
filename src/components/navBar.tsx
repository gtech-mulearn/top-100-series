import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-transparent p-6 md:px-12 absolute w-full top-0 left-0">
      <div className="flex items-center">
        <img src="/mu_logo.svg" alt="logo" className="h-10" />
      </div>
      <div className="flex items-center space-x-16 text-xl max-sm:hidden">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-white hover:underline transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-white hover:underline transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          to="tml"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-white hover:underline transition-all cursor-pointer"
        >
          Timeline
        </Link>
      </div>
      <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
        Register Now
      </button>
    </nav>
  );
};

export default Navbar;
