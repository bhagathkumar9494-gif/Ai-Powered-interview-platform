import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Connect to backend
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="mb-8 flex items-center gap-2">
        <BrainCircuit className="w-10 h-10 text-primary" />
        <span className="text-2xl font-bold text-white">AI Interview Prep</span>
      </div>

      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-textSecondary mb-6">Log in to continue your preparation.</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="you@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-textSecondary">Password</label>
              <Link to="/forgot-password" className="text-sm text-primary hover:text-primaryHover transition-colors">Forgot Password?</Link>
            </div>
            <input
              type="password"
              className="input-field"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" variant="primary" className="w-full mt-2">
            Login
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b border-gray-700 w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-textSecondary uppercase">Or continue with</span>
          <span className="border-b border-gray-700 w-1/5 lg:w-1/4"></span>
        </div>

        <div className="flex gap-4 mt-6">
          <Button variant="secondary" className="w-full flex justify-center items-center gap-2">
            Google
          </Button>
          <Button variant="secondary" className="w-full flex justify-center items-center gap-2">
            GitHub
          </Button>
        </div>

        <p className="text-center text-sm text-textSecondary mt-8">
          Don't have an account? <Link to="/register" className="text-primary hover:text-primaryHover transition-colors font-medium">Sign up</Link>
        </p>
      </Card>
    </div>
  );
};
