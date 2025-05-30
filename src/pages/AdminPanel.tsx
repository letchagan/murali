
import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data
  const stats = [
    { name: 'Total Revenue', value: '$12,456', change: '+12%', icon: DollarSign },
    { name: 'Orders', value: '1,234', change: '+8%', icon: ShoppingCart },
    { name: 'Products', value: '87', change: '+3%', icon: Package },
    { name: 'Customers', value: '456', change: '+15%', icon: Users },
  ];

  const recentOrders = [
    { id: '#001', customer: 'John Doe', total: '$45.99', status: 'Completed', date: '2024-01-15' },
    { id: '#002', customer: 'Jane Smith', total: '$78.50', status: 'Processing', date: '2024-01-15' },
    { id: '#003', customer: 'Bob Johnson', total: '$125.00', status: 'Shipped', date: '2024-01-14' },
  ];

  const products = [
    { id: 1, name: 'Vanilla Premium', category: 'Ice Cream', price: '$12.99', stock: 45, status: 'Active' },
    { id: 2, name: 'Chocolate Deluxe', category: 'Ice Cream', price: '$14.99', stock: 32, status: 'Active' },
    { id: 3, name: 'Strawberry Supreme', category: 'Ice Cream', price: '$13.99', stock: 0, status: 'Out of Stock' },
  ];

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
              <stat.icon className="h-8 w-8 text-[#A30015]" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium">Recent Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Products</h2>
        <Button className="bg-[#A30015] hover:bg-[#7D0011]">
          <Plus size={16} className="mr-2" />
          Add Product
        </Button>
      </div>

      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter size={16} className="mr-2" />
          Filter
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit size={14} />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 size={14} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold murali-text-gradient">MURALI Admin</h1>
              <p className="text-sm text-gray-600">Manage your ice cream business</p>
            </div>
            <Button 
              onClick={refreshData}
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#A30015]"></div>
              ) : (
                'Refresh Data'
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-md p-6">
            <nav className="space-y-2">
              {[
                { id: 'dashboard', name: 'Dashboard', icon: TrendingUp },
                { id: 'products', name: 'Products', icon: Package },
                { id: 'orders', name: 'Orders', icon: ShoppingCart },
                { id: 'customers', name: 'Customers', icon: Users },
                { id: 'settings', name: 'Settings', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#A30015] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'products' && renderProducts()}
            {activeTab === 'orders' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">Orders Management</h3>
                <p className="text-gray-600">Order management functionality will be implemented here.</p>
              </div>
            )}
            {activeTab === 'customers' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">Customer Management</h3>
                <p className="text-gray-600">Customer management functionality will be implemented here.</p>
              </div>
            )}
            {activeTab === 'settings' && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900">Settings</h3>
                <p className="text-gray-600">Settings panel will be implemented here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
