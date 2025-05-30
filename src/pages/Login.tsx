
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // TODO: Implement actual login with Supabase
    console.log('Login:', { email, password });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F6] to-[#FFE5E8] flex items-center justify-center px-4">
      <div className="max-w-sm sm:max-w-md w-full space-y-6 lg:space-y-8">
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold murali-text-gradient">MURALI</h1>
          <p className="text-xs lg:text-sm text-gray-600 mb-6 lg:mb-8">Premium Ice Cream</p>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600 text-sm lg:text-base">Sign in to your account</p>
        </div>

        <form className="mt-6 lg:mt-8 space-y-4 lg:space-y-6" onSubmit={handleLogin}>
          <div className="space-y-3 lg:space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm lg:text-base">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-sm lg:text-base">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#880808] focus:ring-[#880808] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-[#880808] hover:text-[#660606]">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#880808] hover:bg-[#660606] text-white"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <LogIn size={16} />
                <span>Sign In</span>
              </div>
            )}
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-[#880808] hover:text-[#660606]">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
