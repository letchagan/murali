
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Phone, LogIn, LogOut } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Replace with actual auth state

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // TODO: Implement logout with Supabase
      setIsLoggedIn(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold murali-text-gradient">MURALI</h1>
            <p className="text-xs text-gray-600">Premium Ice Cream</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#880808] transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-[#880808] transition-colors">Products</a>
            <a href="#wholesale" className="text-gray-700 hover:text-[#880808] transition-colors">Wholesale</a>
            <a href="#about" className="text-gray-700 hover:text-[#880808] transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-[#880808] transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button 
                  onClick={handleAuthAction}
                  className="p-2 text-gray-700 hover:text-[#880808] transition-colors"
                  title="Account"
                >
                  <User size={20} />
                </button>
                <button 
                  onClick={handleAuthAction}
                  className="p-2 text-gray-700 hover:text-[#880808] transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="p-2 text-gray-700 hover:text-[#880808] transition-colors"
                title="Login"
              >
                <LogIn size={20} />
              </Link>
            )}
            
            <Link 
              to="/checkout"
              className="p-2 text-gray-700 hover:text-[#880808] transition-colors relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#880808] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>
            <a 
              href="tel:+1234567890" 
              className="bg-[#880808] text-white px-4 py-2 rounded-lg hover:bg-[#660606] transition-colors flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-gray-700 hover:text-[#880808] transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-[#880808] transition-colors">Products</a>
              <a href="#wholesale" className="text-gray-700 hover:text-[#880808] transition-colors">Wholesale</a>
              <a href="#about" className="text-gray-700 hover:text-[#880808] transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-[#880808] transition-colors">Contact</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <button className="p-2 text-gray-700">
                      <User size={20} />
                    </button>
                    <button 
                      onClick={handleAuthAction}
                      className="p-2 text-gray-700"
                    >
                      <LogOut size={20} />
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="p-2 text-gray-700">
                    <LogIn size={20} />
                  </Link>
                )}
                <Link to="/checkout" className="p-2 text-gray-700 relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-[#880808] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </Link>
                <a 
                  href="tel:+1234567890" 
                  className="bg-[#880808] text-white px-4 py-2 rounded-lg hover:bg-[#660606] transition-colors flex items-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
