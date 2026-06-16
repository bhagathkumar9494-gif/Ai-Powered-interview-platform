import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Brain, Mic, TrendingUp, Settings } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Crack Your Dream Interview with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI-Powered</span> Practice
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            Practice mock interviews, receive AI feedback, and improve communication skills in a professional, distraction-free environment.
          </p>
          
          <div className="flex justify-center gap-4 pt-4">
            <Link to="/register">
              <Button variant="primary" className="px-8 py-4 text-lg">Get Started</Button>
            </Link>
            <Button variant="secondary" className="px-8 py-4 text-lg">Watch Demo</Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-32">
          {[
            { icon: Brain, title: "AI Questions", desc: "Dynamic, role-specific questions tailored to your experience." },
            { icon: Mic, title: "Voice Interviews", desc: "Real-time speech-to-text with conversational AI." },
            { icon: TrendingUp, title: "Smart Feedback", desc: "Actionable insights on your technical & communication skills." },
            { icon: Settings, title: "Performance Analytics", desc: "Track progress across different skills and domains." },
          ].map((feature, i) => (
            <div key={i} className="glass-card flex flex-col items-center text-center p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-textSecondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
