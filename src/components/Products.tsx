
import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';

const Products = () => {
  const [activeTab, setActiveTab] = useState('retail');

  const products = [
    {
      id: 1,
      name: "Vanilla Supreme",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 299,
      wholesalePrice: 220,
      rating: 4.8,
      description: "Rich and creamy vanilla ice cream made with Madagascar vanilla beans"
    },
    {
      id: 2,
      name: "Chocolate Delight",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 349,
      wholesalePrice: 260,
      rating: 4.9,
      description: "Decadent chocolate ice cream with rich cocoa and chocolate chips"
    },
    {
      id: 3,
      name: "Strawberry Bliss",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 329,
      wholesalePrice: 245,
      rating: 4.7,
      description: "Fresh strawberry ice cream with real fruit pieces"
    },
    {
      id: 4,
      name: "Mango Tango",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 359,
      wholesalePrice: 270,
      rating: 4.8,
      description: "Tropical mango ice cream with authentic Alphonso mango"
    },
    {
      id: 5,
      name: "Pistachio Paradise",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 399,
      wholesalePrice: 300,
      rating: 4.9,
      description: "Premium pistachio ice cream with roasted nuts"
    },
    {
      id: 6,
      name: "Cookies & Cream",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
      retailPrice: 379,
      wholesalePrice: 285,
      rating: 4.8,
      description: "Classic cookies and cream with crunchy chocolate cookie pieces"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#A30015] hover:text-white transition-colors">
            <Heart size={14} />
          </button>
          <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#A30015] hover:text-white transition-colors">
            <Eye size={14} />
          </button>
        </div>
        <div className="absolute top-3 left-3">
          <div className="bg-[#A30015] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold">
            {activeTab === 'wholesale' ? 'Wholesale' : 'Retail'}
          </div>
        </div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
            />
          ))}
          <span className="text-xs text-gray-600 ml-2">({product.rating})</span>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-[#A30015]">
              ₹{activeTab === 'wholesale' ? product.wholesalePrice : product.retailPrice}
            </span>
            {activeTab === 'wholesale' && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">₹{product.retailPrice}</span>
            )}
          </div>
          <button className="w-full sm:w-auto bg-[#A30015] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-[#7D0011] transition-colors flex items-center justify-center space-x-2 text-sm">
            <ShoppingCart size={14} />
            <span>Add to Cart</span>
          </button>
        </div>
        
        {activeTab === 'wholesale' && (
          <div className="mt-3 text-xs sm:text-sm text-gray-600">
            <span className="font-medium">Min. Order:</span> 50 units
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="murali-text-gradient">Premium</span> Collection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Discover our range of artisan ice creams, crafted with the finest ingredients 
            and love in every batch.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 lg:mb-12 px-4">
          <div className="bg-white rounded-xl p-1 sm:p-2 shadow-lg w-full max-w-md">
            <button
              onClick={() => setActiveTab('retail')}
              className={`w-1/2 px-4 py-3 lg:px-8 lg:py-3 rounded-lg font-semibold transition-all duration-300 text-sm lg:text-base ${
                activeTab === 'retail'
                  ? 'bg-[#A30015] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#A30015]'
              }`}
            >
              Retail Store
            </button>
            <button
              onClick={() => setActiveTab('wholesale')}
              className={`w-1/2 px-4 py-3 lg:px-8 lg:py-3 rounded-lg font-semibold transition-all duration-300 text-sm lg:text-base ${
                activeTab === 'wholesale'
                  ? 'bg-[#A30015] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#A30015]'
              }`}
            >
              Wholesale Business
            </button>
          </div>
        </div>

        {/* Wholesale Benefits */}
        {activeTab === 'wholesale' && (
          <div className="bg-[#FFE5E8] rounded-2xl p-6 lg:p-8 mb-8 lg:mb-12 mx-4 sm:mx-0">
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#A30015] mb-2">20%</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base">Bulk Discount</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#A30015] mb-2">24/7</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base">Business Support</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#A30015] mb-2">Free</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base">Delivery Over ₹5000</div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16 px-4">
          <button className="bg-[#A30015] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:bg-[#7D0011] transition-all duration-300 font-semibold text-sm lg:text-lg hover-lift">
            {activeTab === 'wholesale' ? 'Request Wholesale Catalog' : 'View All Products'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
