
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:space-y-6 text-center sm:text-left">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold murali-text-gradient mb-2">MURALI</h3>
              <p className="text-gray-400 text-sm lg:text-base">Premium Ice Cream</p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              "Sweetness that Melts Hearts, Quality that Builds Trust"
              <br /><br />
              Serving happiness in every scoop since 1995. From our family to yours, 
              experience the finest ice cream crafted with love and premium ingredients.
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A30015] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A30015] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A30015] transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 lg:w-10 lg:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#A30015] transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
              <li><a href="#home" className="text-gray-300 hover:text-[#A30015] transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-[#A30015] transition-colors">Our Products</a></li>
              <li><a href="#wholesale" className="text-gray-300 hover:text-[#A30015] transition-colors">Wholesale</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#A30015] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#A30015] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Franchise</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Popular Flavors</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Vanilla Supreme</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Chocolate Delight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Strawberry Bliss</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Mango Tango</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Pistachio Paradise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">Cookies & Cream</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#A30015] transition-colors">View All Flavors</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-[#A30015] flex-shrink-0 mt-1" />
                <div className="text-sm lg:text-base">
                  <p className="text-gray-300">123 Sweet Street</p>
                  <p className="text-gray-300">Ice Cream District</p>
                  <p className="text-gray-300">Flavor Town, FT 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#A30015]" />
                <div className="text-sm lg:text-base">
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Retail Store</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-[#A30015]" />
                <div className="text-sm lg:text-base">
                  <p className="text-gray-300">+91 98765 43211</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Wholesale</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-[#A30015]" />
                <p className="text-gray-300 text-sm lg:text-base">info@murali.com</p>
              </div>
            </div>

            <div className="mt-4 lg:mt-6 p-3 lg:p-4 bg-gray-800 rounded-xl">
              <h5 className="font-bold mb-2 text-sm lg:text-base">Business Hours</h5>
              <p className="text-gray-300 text-xs lg:text-sm">Mon-Sat: 9:00 AM - 9:00 PM</p>
              <p className="text-gray-300 text-xs lg:text-sm">Sunday: 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 lg:mt-16 pt-6 lg:pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-center md:text-left">
              <h4 className="text-xl lg:text-2xl font-bold mb-2">Stay Sweet with MURALI</h4>
              <p className="text-gray-300 text-sm lg:text-base">Subscribe to get updates on new flavors, offers, and sweet surprises!</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 lg:px-4 lg:py-3 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-white text-sm lg:text-base"
              />
              <button 
                type="submit"
                className="bg-[#A30015] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl hover:bg-[#7D0011] transition-colors font-semibold text-sm lg:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm lg:text-base text-center">
              <span>© 2024 MURALI Ice Cream. Made with</span>
              <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-[#A30015] fill-current" />
              <span>in India. All rights reserved.</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300 text-xs lg:text-sm">
              <a href="#" className="hover:text-[#A30015] transition-colors text-center">Privacy Policy</a>
              <a href="#" className="hover:text-[#A30015] transition-colors text-center">Terms of Service</a>
              <a href="#" className="hover:text-[#A30015] transition-colors text-center">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
