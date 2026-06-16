import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-x-0 border-t-0 rounded-none px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
        <BrainCircuit className="w-8 h-8 text-primary" />
        AI Interview Prep
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textSecondary">
        <Link to="#features" className="hover:text-white transition-colors">Features</Link>
        <Link to="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
        <Link to="#pricing" className="hover:text-white transition-colors">Pricing</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="primary">Get Started</Button>
        </Link>
      </div>
    </nav>
  );
};
