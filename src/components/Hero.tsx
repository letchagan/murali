
import React from 'react';
import { ArrowRight, Star, Award, Truck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#FFF5F6] via-white to-[#FFE5E8] pt-16">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fadeInUp text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#FFE5E8] px-3 py-2 lg:px-4 lg:py-2 rounded-full">
                <Award className="w-3 h-3 lg:w-4 lg:h-4 text-[#880808]" />
                <span className="text-xs lg:text-sm font-medium text-[#880808]">Premium Quality Since 1995</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="murali-text-gradient">MURALI</span>
                <br />
                <span className="text-gray-800">Ice Cream</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium">
                "Sweetness that Melts Hearts, Quality that Builds Trust"
              </p>
              
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience the finest ice cream crafted with love and premium ingredients. 
                From wholesale to retail, we serve happiness in every scoop.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-md mx-auto lg:max-w-none">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808]">50+</div>
                <div className="text-xs lg:text-sm text-gray-600">Flavors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808]">1000+</div>
                <div className="text-xs lg:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808]">25+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto lg:max-w-none">
              <button className="bg-[#880808] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:bg-[#660606] transition-all duration-300 flex items-center justify-center space-x-2 hover-lift">
                <span className="font-semibold text-sm lg:text-base">Shop Now</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
              <button className="border-2 border-[#880808] text-[#880808] px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:bg-[#880808] hover:text-white transition-all duration-300 font-semibold text-sm lg:text-base">
                Wholesale Inquiry
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 lg:pt-6 max-w-2xl mx-auto lg:max-w-none">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FFE5E8] rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 text-[#880808]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm lg:text-base">Premium Quality</div>
                  <div className="text-xs lg:text-sm text-gray-600">100% Natural Ingredients</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#FFE5E8] rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 lg:w-5 lg:h-5 text-[#880808]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm lg:text-base">Fast Delivery</div>
                  <div className="text-xs lg:text-sm text-gray-600">Same Day Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80" 
                alt="MURALI Premium Ice Cream" 
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-2xl p-3 lg:p-4 shadow-xl animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#880808] rounded-full"></div>
                <span className="text-xs lg:text-sm font-semibold">Fresh Daily</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl p-3 lg:p-4 shadow-xl animate-float" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-[#880808]">₹199</div>
                <div className="text-xs text-gray-600">Starting from</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
