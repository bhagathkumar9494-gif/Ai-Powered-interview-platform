import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mic, Square, Pause, Play, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AIInterviewRoom = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleFinish = () => {
    navigate('/dashboard/interview-results');
  };

  return (
    <div className="h-full flex flex-col gap-6">
      {/* Header Info */}
      <div className="flex justify-between items-center bg-secondary p-4 rounded-xl border border-gray-800">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-primary font-bold">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            Interview in Progress
          </div>
          <span className="text-gray-600">|</span>
          <span className="text-white font-medium">Frontend Developer</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-xs text-textSecondary uppercase tracking-wider">Time Remaining</p>
            <p className="text-xl font-mono text-white font-bold">{formatTime(timeLeft)}</p>
          </div>
          <Button variant="secondary" onClick={handleFinish} className="border-red-500/50 text-red-400 hover:bg-red-500/10">
            End Interview
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        {/* Left Panel: Question Display */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-textSecondary bg-gray-800 px-3 py-1 rounded-full">Question 1 of 10</span>
            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Technical</span>
          </div>
          
          <div className="flex-1 flex flex-col justify-center py-10">
            <h2 className="text-3xl font-medium text-white leading-relaxed">
              "Can you explain the difference between <span className="text-primary">Server-side rendering (SSR)</span> and <span className="text-accent">Static Site Generation (SSG)</span> in Next.js? When would you choose one over the other?"
            </h2>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-800 flex items-start gap-3 text-textSecondary text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-yellow-500" />
            <p>Take your time. The AI is listening for key concepts related to hydration, build times, and SEO.</p>
          </div>
        </Card>

        {/* Right Panel: Voice Recording UI */}
        <Card className="flex flex-col items-center justify-center relative overflow-hidden">
          {/* Animated background waves if recording */}
          {isRecording && (
            <>
              <div className="absolute inset-0 bg-primary/5 animate-pulse"></div>
              <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-ping opacity-50"></div>
            </>
          )}

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 text-center">
              <p className="text-white font-medium mb-1">
                {isRecording ? 'Listening...' : 'AI is waiting for your response'}
              </p>
              <p className="text-sm text-textSecondary">
                {isRecording ? 'Speak clearly into your microphone' : 'Click start to begin answering'}
              </p>
            </div>

            {/* Audio Visualizer Mock */}
            <div className="h-24 flex items-center gap-1 mb-12">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 rounded-full ${isRecording ? 'bg-primary animate-bounce' : 'bg-gray-700 h-2'}`}
                  style={{
                    height: isRecording ? `${Math.max(20, Math.random() * 100)}%` : '8px',
                    animationDelay: `${i * 0.1}s`,
                    transition: 'height 0.2s ease'
                  }}
                ></div>
              ))}
            </div>

            <div className="flex gap-4">
              {!isRecording ? (
                <Button 
                  onClick={() => setIsRecording(true)}
                  className="bg-primary hover:bg-primaryHover text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-105"
                >
                  <Mic className="w-8 h-8" />
                </Button>
              ) : (
                <>
                  <Button 
                    variant="secondary"
                    className="rounded-full w-14 h-14 flex items-center justify-center"
                  >
                    <Pause className="w-6 h-6" />
                  </Button>
                  <Button 
                    onClick={() => setIsRecording(false)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-red-500/30 transition-transform hover:scale-105"
                  >
                    <Square className="w-6 h-6" />
                  </Button>
                </>
              )}
            </div>
            
            <div className="mt-12 w-full">
               <p className="text-xs text-textSecondary uppercase tracking-wider mb-2 font-medium">Live Transcript</p>
               <div className="bg-secondary/50 p-4 rounded-xl border border-gray-800 h-32 overflow-y-auto">
                 {isRecording ? (
                   <p className="text-gray-300 italic">"Server side rendering means the HTML is generated on each request, whereas static site..." <span className="animate-pulse">|</span></p>
                 ) : (
                   <p className="text-gray-600 italic text-center mt-8">Transcript will appear here...</p>
                 )}
               </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
