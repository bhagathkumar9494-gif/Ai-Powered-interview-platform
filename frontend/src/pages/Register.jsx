import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Connect to backend
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden py-12">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="mb-8 flex items-center gap-2">
        <BrainCircuit className="w-10 h-10 text-primary" />
        <span className="text-2xl font-bold text-white">AI Interview Prep</span>
      </div>

      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-2">Create an Account</h2>
        <p className="text-textSecondary mb-6">Start your interview preparation journey today.</p>

        <form onSubmit={handleRegister} className="space-y-4">
          <Input 
            label="Full Name" 
            name="name"
            type="text" 
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input 
            label="Email Address" 
            name="email"
            type="email" 
            placeholder="you@example.com" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input 
            label="Password" 
            name="password"
            type="password" 
            placeholder="••••••••" 
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input 
            label="Confirm Password" 
            name="confirmPassword"
            type="password" 
            placeholder="••••••••" 
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Simple Password Strength Indicator */}
          {formData.password && (
            <div className="flex gap-1 mt-1">
              <div className={`h-1 flex-1 rounded-full ${formData.password.length > 3 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
              <div className={`h-1 flex-1 rounded-full ${formData.password.length > 6 ? 'bg-yellow-500' : 'bg-gray-700'}`}></div>
              <div className={`h-1 flex-1 rounded-full ${formData.password.length > 9 ? 'bg-green-500' : 'bg-gray-700'}`}></div>
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full mt-4">
            Create Account
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b border-gray-700 w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-textSecondary uppercase">Or sign up with</span>
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
          Already have an account? <Link to="/login" className="text-primary hover:text-primaryHover transition-colors font-medium">Log in</Link>
        </p>
      </Card>
    </div>
  );
};
