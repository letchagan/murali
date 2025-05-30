
import React from 'react';
import { Award, Users, Heart, Truck, Shield, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Made with finest natural ingredients and traditional recipes"
    },
    {
      icon: Users,
      title: "Family Business",
      description: "Three generations of ice cream craftsmanship and passion"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every batch is carefully crafted with attention to detail"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Cold chain delivery ensures freshness from our store to yours"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "FSSAI certified with strict quality control measures"
    },
    {
      icon: Clock,
      title: "25+ Years",
      description: "Over two decades of serving happiness in every scoop"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
                The Story Behind <span className="murali-text-gradient">MURALI</span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                Founded in 1995 by Mr. Murali with a simple dream - to bring the finest, 
                most delicious ice cream to every household. What started as a small family 
                business has grown into a trusted brand serving both retail customers and 
                wholesale partners across the region.
              </p>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Our commitment to quality, natural ingredients, and traditional recipes 
                has made MURALI a household name. We believe that ice cream is not just 
                a dessert, it's a moment of joy, a celebration of life's sweet moments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-md mx-auto lg:max-w-none">
              <div className="text-center p-4 lg:p-6 bg-[#FFF5F6] rounded-xl">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808] mb-2">50+</div>
                <div className="text-gray-700 text-sm lg:text-base">Unique Flavors</div>
              </div>
              <div className="text-center p-4 lg:p-6 bg-[#FFF5F6] rounded-xl">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808] mb-2">1000+</div>
                <div className="text-gray-700 text-sm lg:text-base">Happy Customers</div>
              </div>
            </div>

            <blockquote className="border-l-4 border-[#880808] pl-4 lg:pl-6 italic text-lg lg:text-xl text-gray-700">
              "Sweetness that Melts Hearts, Quality that Builds Trust - this isn't just our 
              tagline, it's our promise to every customer who chooses MURALI."
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80" 
              alt="MURALI Ice Cream Shop" 
              className="w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl p-4 lg:p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#880808] mb-2">25+</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 lg:mb-12">
            Why Choose <span className="murali-text-gradient">MURALI</span>?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl hover-lift">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#FFE5E8] rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#880808]" />
                </div>
                <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm lg:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
