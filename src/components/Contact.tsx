
import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
            Get in <span className="murali-text-gradient">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 lg:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-6 lg:mb-8">
                Whether you're a retail customer looking for the perfect ice cream 
                or a business interested in wholesale partnership, we're here to help.
              </p>
            </div>

            <div className="grid gap-4 lg:gap-6">
              <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-lg">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FFE5E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-[#A30015]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm lg:text-base">Phone</h4>
                  <p className="text-gray-600 mb-1 text-sm lg:text-base">Retail Store: +91 98765 43210</p>
                  <p className="text-gray-600 text-sm lg:text-base">Wholesale: +91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-lg">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FFE5E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-[#A30015]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm lg:text-base">Email</h4>
                  <p className="text-gray-600 mb-1 text-sm lg:text-base">General: info@murali.com</p>
                  <p className="text-gray-600 text-sm lg:text-base">Wholesale: wholesale@murali.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-lg">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FFE5E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-[#A30015]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm lg:text-base">Address</h4>
                  <p className="text-gray-600 text-sm lg:text-base">
                    123 Sweet Street, Ice Cream District<br />
                    Flavor Town, FT 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 lg:space-x-4 p-4 lg:p-6 bg-white rounded-xl shadow-lg">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FFE5E8] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-[#A30015]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm lg:text-base">Business Hours</h4>
                  <p className="text-gray-600 mb-1 text-sm lg:text-base">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p className="text-gray-600 text-sm lg:text-base">Sunday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <button className="flex-1 bg-[#A30015] text-white px-4 py-3 lg:px-6 lg:py-3 rounded-xl hover:bg-[#7D0011] transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base">
                <Phone size={16} />
                <span>Call Now</span>
              </button>
              <button className="flex-1 bg-green-600 text-white px-4 py-3 lg:px-6 lg:py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm lg:text-base">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
            <form className="space-y-4 lg:space-y-6">
              <div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Send us a Message</h4>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Subject</label>
                <select className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base">
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Wholesale Partnership</option>
                  <option>Customer Support</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm lg:text-base">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A30015] focus:border-transparent text-sm lg:text-base"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#A30015] text-white py-3 lg:py-4 rounded-xl hover:bg-[#7D0011] transition-colors font-semibold flex items-center justify-center space-x-2 text-sm lg:text-base"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 text-center">Visit Our Store</h3>
            <div className="bg-gray-200 rounded-2xl h-48 lg:h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-base lg:text-lg font-medium">Interactive Map Coming Soon</p>
                <p className="text-sm lg:text-base">123 Sweet Street, Ice Cream District, Flavor Town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
