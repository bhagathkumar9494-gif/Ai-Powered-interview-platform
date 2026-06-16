import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  MessageSquare, 
  Brain,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';

export const InterviewCompletion = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-4">
          <Trophy className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold text-white">Interview Completed!</h1>
        <p className="text-xl text-textSecondary">Great job! Here is your AI performance analysis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Overall Score */}
        <Card className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-card to-secondary border-primary/20">
          <h2 className="text-lg font-medium text-textSecondary mb-6">Overall Score</h2>
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* SVG Circle for Score */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#1E293B" strokeWidth="10" />
              <circle 
                cx="50" cy="50" r="45" fill="none" stroke="#7C3AED" strokeWidth="10"
                strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" 
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">85<span className="text-xl text-textSecondary">%</span></span>
              <span className="text-sm text-green-400 font-medium mt-1">Excellent</span>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <Card className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-textSecondary font-medium">Accuracy</span>
            </div>
            <p className="text-3xl font-bold text-white">92%</p>
          </Card>
          <Card className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-green-400" />
              <span className="text-textSecondary font-medium">Communication</span>
            </div>
            <p className="text-3xl font-bold text-white">88%</p>
          </Card>
          <Card className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-5 h-5 text-accent" />
              <span className="text-textSecondary font-medium">Problem Solving</span>
            </div>
            <p className="text-3xl font-bold text-white">76%</p>
          </Card>
          <Card className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              <span className="text-textSecondary font-medium">Confidence</span>
            </div>
            <p className="text-3xl font-bold text-white">82%</p>
          </Card>
        </div>
      </div>

      {/* AI Feedback Breakdown */}
      <Card>
        <h2 className="text-xl font-bold text-white mb-6">AI Feedback Breakdown</h2>
        
        <div className="space-y-6">
          {/* Strengths */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-green-400 font-medium mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> Key Strengths
            </h3>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>Excellent understanding of React lifecycle methods and hooks.</li>
              <li>Clear and concise communication when explaining complex architectural decisions.</li>
              <li>Good use of modern JavaScript ES6+ features in coding answers.</li>
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
            <h3 className="text-yellow-400 font-medium mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Areas for Improvement
            </h3>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>Review Next.js data fetching methods (SSR vs SSG vs ISR) in more depth.</li>
              <li>Try to provide more concrete examples when discussing performance optimization.</li>
              <li>Slight hesitation when discussing backend integration paradigms.</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="flex justify-center gap-4 pt-4">
        <Link to="/dashboard">
          <Button variant="secondary" className="px-8 py-3">Return to Dashboard</Button>
        </Link>
        <Button variant="primary" className="px-8 py-3 flex items-center gap-2">
          View Detailed Question Analysis <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
