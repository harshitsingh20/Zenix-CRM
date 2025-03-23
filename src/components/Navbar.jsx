
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import Button from './Button';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navbarClasses = cn(
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-3'
  );
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    // { name: 'How It Works', path: '/how-it-works' },
    // { name: 'About', path: '/about' },
    // { name: 'Contact', path: '/contact' },
    // { 
    //   name: 'Others', 
    //   path: '#',
    //   dropdown: true,
    //   children: [
    //     { name: 'Blog', path: '/blog' },
    //     { name: 'FAQ', path: '/faq' },
    //     { name: 'Careers', path: '/careers' },
    //   ]
    // },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  const handleLoginClick = () => {
    navigate('/login');
  };
  
  const handleSignupClick = () => {
    navigate('/signup');
  };
  
  return (
    <nav className={navbarClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          {/* Updated logo */}
          <img 
            src="https://cdn.ucraft.com/fs/user_files/15696/media/images/fully-online.webp" 
            alt="Zenix Logo"
            className="h-8 mr-2"
          />
          <span className="text-xl font-bold tracking-tight">Zenix</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link 
                to={link.dropdown ? '#' : link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-green-500 flex items-center',
                  isActive(link.path) ? 'text-green-500' : 'text-gray-700'
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="h-4 w-4 ml-1" />}
              </Link>
              
              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex md:items-center md:space-x-3">
          <button 
            onClick={handleLoginClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 text-gray-700 hover:text-green-500 hover:bg-accent hover:text-accent-foreground"
          >
            <User className="h-4 w-4 mr-1" />
            Login
          </button>
          <button 
            onClick={handleSignupClick}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-3 bg-green-500 text-white hover:bg-green-600"
          >
            Get Started
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[60px] inset-x-0 bg-white border-t border-gray-200 animate-slide-down">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link 
                  to={link.dropdown ? '#' : link.path}
                  className={cn(
                    'text-base py-2 font-medium transition-colors hover:text-green-500 flex items-center justify-between',
                    isActive(link.path) ? 'text-green-500' : 'text-gray-700'
                  )}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      // Toggle dropdown logic here if needed
                    }
                  }}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block py-2 text-sm text-gray-600 hover:text-green-500"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <button 
                onClick={handleLoginClick}
                className="inline-flex items-center justify-start gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
              >
                <User className="h-4 w-4 mr-1" />
                Login
              </button>
              <button 
                onClick={handleSignupClick}
                className="inline-flex items-center justify-start gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 bg-green-500 text-white hover:bg-green-600"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
