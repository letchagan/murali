
import React from 'react';
import { CheckCircle, Phone, Mail, MapPin, Clock, Truck, DollarSign } from 'lucide-react';

const Wholesale = () => {
  const benefits = [
    "Competitive wholesale pricing with bulk discounts",
    "Wide variety of flavors and seasonal specials", 
    "Reliable cold chain delivery system",
    "Dedicated account manager for your business",
    "Flexible payment terms for established partners",
    "Marketing support and promotional materials",
    "Custom packaging options available",
    "24/7 customer support for urgent requirements"
  ];

  const packages = [
    {
      name: "Starter Package",
      minOrder: "50 Units",
      discount: "15%",
      delivery: "Free above ₹3000",
      features: ["Basic flavor selection", "Standard packaging", "Weekly delivery"]
    },
    {
      name: "Business Package", 
      minOrder: "100 Units",
      discount: "20%",
      delivery: "Free above ₹2000",
      features: ["Extended flavor range", "Custom branding", "Bi-weekly delivery", "Account manager"],
      popular: true
    },
    {
      name: "Enterprise Package",
      minOrder: "200 Units", 
      discount: "25%",
      delivery: "Always Free",
      features: ["Full flavor catalog", "Premium packaging", "Daily delivery", "Priority support", "Marketing materials"]
    }
  ];

  return (
    <section id="wholesale" className="py-20 bg-gradient-to-br from-[#FFF5F6] to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="murali-text-gradient">Wholesale</span> Partnership
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing network of retail partners and offer your customers 
            the finest ice cream experience with attractive wholesale pricing and support.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Partnership Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[#A30015] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Wholesale Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${pkg.popular ? 'ring-2 ring-[#A30015] transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#A30015] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-[#A30015] mb-4">{pkg.discount}</div>
                  <div className="text-gray-600">Discount on all products</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Min Order:</span>
                    <span className="font-semibold">{pkg.minOrder}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Free Delivery:</span>
                    <span className="font-semibold">{pkg.delivery}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#A30015]" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  pkg.popular 
                    ? 'bg-[#A30015] text-white hover:bg-[#7D0011]' 
                    : 'border-2 border-[#A30015] text-[#A30015] hover:bg-[#A30015] hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-[#FFE5E8] rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A30015] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Apply</h4>
              <p className="text-gray-600 text-sm">Submit your wholesale application with business details</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A30015] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Review</h4>
              <p className="text-gray-600 text-sm">Our team reviews your application within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A30015] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Approve</h4>
              <p className="text-gray-600 text-sm">Get approved and receive your wholesale pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A30015] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Order</h4>
              <p className="text-gray-600 text-sm">Place your first order and start selling</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Ready to Partner with <span className="murali-text-gradient">MURALI</span>?
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form and our wholesale team will contact you within 24 hours 
                to discuss partnership opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#A30015]" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#A30015]" />
                  <span className="text-gray-700">wholesale@murali.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#A30015]" />
                  <span className="text-gray-700">Mon-Sat: 9AM-7PM</span>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Business Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Contact Person"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent"
                />
              </div>
              <textarea 
                placeholder="Business Address"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent"
              ></textarea>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent">
                <option>Expected Monthly Volume</option>
                <option>50-100 units</option>
                <option>100-200 units</option>
                <option>200-500 units</option>
                <option>500+ units</option>
              </select>
              <button 
                type="submit" 
                className="w-full bg-[#A30015] text-white py-4 rounded-xl hover:bg-[#7D0011] transition-colors font-semibold"
              >
                Submit Wholesale Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
