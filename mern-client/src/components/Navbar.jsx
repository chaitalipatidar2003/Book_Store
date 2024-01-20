import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-15 ${isSticky ? 'bg-gray-900' : 'bg-gradient-to-b from-06283D via-06283D to-06283D'}`}>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? 'sticky top-0 left-0 right-0' : ''}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* logo */}
          <Link to="/" className={`text-2xl font-bold ${isSticky ? 'text-white' : 'text-blue-700'} mx-2 px-8 lg:px-24`}>
            <FaBlog className="inline-block " />Books
          </Link>
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link key={path} to={path} className={`block text-base ${isSticky ? 'text-white' : 'text-gray-500'} uppercase cursor-pointer hover:${isSticky ? 'text-red-400' : 'text-yellow-400'}`}>
                {link}
              </Link>
            ))}
          </ul>
          {/* btn for large devices */}
          <div className="space-x-2 flex flex-col">
            <span className={`text-sm ${isSticky ? 'text-white' : 'text-black'}`}>{user ? <img src={user.photoURL} className='w-8 h-8 rounded-full'/> : ""}</span>
            <button className={`w-5 hover:${isSticky ? 'text-red-400' : 'text-blue-700'}`}>
              <FaBars className={`space-x-12 hidden lg:flex items-center ${isSticky ? 'text-white' : 'text-black'}`} />
            </button>
            
          </div>

          {/* menu btn for small devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`text-${isSticky ? 'white' : '06283D'} focus:outline-none`}>
              {isMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
            </button>
          </div>

          {/* for small devices */}
          <div className={`space-y-4 px-4 mt-16 py-7 ${isSticky ? 'bg-gradient-to-b from-06283D via-06283D to-06283D' : 'bg-06283D'} ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
            {navItem.map(({ link, path }) => (
              <Link key={path} to={path} className={`block text-base ${isSticky ? 'text-white' : 'text-06283D'} uppercase cursor-pointer hover:${isSticky ? 'text-red-400' : 'text-blue-700'}`}>
                {link}
              </Link>
            ))}
          </div>
        </div>
        <hr className={`mx-2 ${isSticky ? 'mt-0' : 'mt-3'} ${isSticky ? 'border-gray-900' : 'border-gray-600 mt-0 p-0'}`} />

      </nav>
    </header>
  );
};

export default Navbar;
