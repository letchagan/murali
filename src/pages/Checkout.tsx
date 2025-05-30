
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Shield, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  const [cartItems] = useState([
    { id: 1, name: 'Vanilla Premium', quantity: 2, price: 12.99, image: '/placeholder.svg' },
    { id: 2, name: 'Chocolate Deluxe', quantity: 1, price: 14.99, image: '/placeholder.svg' },
    { id: 3, name: 'Strawberry Supreme', quantity: 1, price: 13.99, image: '/placeholder.svg' }
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // TODO: Implement actual payment with Stripe
    console.log('Processing payment...');
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-[#A30015]">
              <ArrowLeft size={20} />
              <span>Back to Shop</span>
            </Link>
            <h1 className="text-2xl font-bold murali-text-gradient">MURALI</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 pb-4 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-[#A30015]">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Payment & Delivery</h2>

            <form className="space-y-6">
              {/* Delivery Information */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Truck className="mr-2" size={20} />
                  Delivery Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main Street" className="mt-1" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" placeholder="NY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" placeholder="10001" className="mt-1" />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <CreditCard className="mr-2" size={20} />
                  Payment Information
                </h3>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    className="mt-1" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="mt-1" />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" className="mt-1" />
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <Shield className="text-green-600 mr-2" size={20} />
                  <div>
                    <p className="text-sm font-medium text-green-800">Secure Payment</p>
                    <p className="text-sm text-green-700">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>

              <Button
                type="button"
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-[#A30015] hover:bg-[#7D0011] text-white text-lg py-3"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  <span>Complete Order - ${total.toFixed(2)}</span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
