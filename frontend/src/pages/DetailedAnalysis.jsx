import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { Download, ChevronLeft, CheckCircle, XCircle } from 'lucide-react';

export const DetailedAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const radarData = [
    { subject: 'Technical', A: 85, fullMark: 100 },
    { subject: 'Communication', A: 88, fullMark: 100 },
    { subject: 'Confidence', A: 82, fullMark: 100 },
    { subject: 'Problem Solving', A: 76, fullMark: 100 },
    { subject: 'Knowledge', A: 90, fullMark: 100 },
  ];

  const questionsData = [
    {
      q: "Explain Server-side rendering (SSR) vs Static Site Generation (SSG) in Next.js.",
      userAnswer: "SSR generates HTML on each request, which is good for dynamic data. SSG generates it at build time.",
      aiEvaluation: "Good answer, but could be more detailed regarding ISR (Incremental Static Regeneration).",
      betterAnswer: "SSR (Server-Side Rendering) generates the HTML for a page on each request, ensuring data is always fresh but potentially slower. SSG (Static Site Generation) generates HTML at build time, resulting in extremely fast loads. You choose SSR for highly dynamic, user-specific data, and SSG for content that changes infrequently (like blogs).",
      score: "8.5/10"
    },
    {
      q: "How do you handle state management in large React applications?",
      userAnswer: "I usually use Context API for small things and Redux for larger things.",
      aiEvaluation: "Acceptable, but lacks mention of modern alternatives like Zustand, Jotai, or React Query.",
      betterAnswer: "For global UI state, lightweight libraries like Zustand or Jotai are preferable over Redux due to less boilerplate. For server state and caching, React Query is the industry standard. Context API is best reserved for simple, infrequent updates like theme or auth state.",
      score: "7.0/10"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/dashboard/interview-results">
            <Button variant="ghost" className="p-2">
              <ChevronLeft className="w-6 h-6 text-textSecondary hover:text-white" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Detailed Analysis</h1>
            <p className="text-textSecondary mt-1">Frontend Developer Role • Oct 24, 2023</p>
          </div>
        </div>
        <Button variant="secondary" className="flex items-center gap-2">
          <Download className="w-4 h-4" /> Download PDF Report
        </Button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 pb-2">
        {['overview', 'questions', 'transcript'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize transition-colors ${
              activeTab === tab 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-textSecondary hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-white mb-6">Skill Radar</h2>
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94A3B8', fontSize: 12 }} />
                  <Radar name="Score" dataKey="A" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.5} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', color: '#fff' }}
                    itemStyle={{ color: '#7C3AED' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-white mb-6">AI Insights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-green-400 font-medium mb-2">Strengths Highlight</h3>
                <p className="text-textSecondary leading-relaxed">
                  You demonstrated a strong grasp of core React concepts, particularly around component lifecycles and basic hooks. Your communication was clear, and you projected confidence when discussing topics you were familiar with.
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 font-medium mb-2">Focus Areas</h3>
                <p className="text-textSecondary leading-relaxed">
                  Your knowledge of modern state management ecosystems (e.g., React Query, Zustand) could be improved. You also tended to provide brief answers for architectural questions rather than elaborating on trade-offs.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'questions' && (
        <div className="space-y-6">
          {questionsData.map((q, idx) => (
            <Card key={idx} className="space-y-4">
              <div className="flex justify-between items-start gap-4 border-b border-gray-800 pb-4">
                <div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider mb-1 block">Question {idx + 1}</span>
                  <h3 className="text-lg font-medium text-white leading-relaxed">{q.q}</h3>
                </div>
                <span className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-white shrink-0">
                  {q.score}
                </span>
              </div>
              
              <div>
                <p className="text-sm font-medium text-textSecondary mb-1">Your Answer</p>
                <p className="text-gray-300 italic">"{q.userAnswer}"</p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 border border-gray-800">
                <p className="text-sm font-medium text-accent mb-1">AI Evaluation</p>
                <p className="text-gray-300">{q.aiEvaluation}</p>
              </div>

              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-sm font-medium text-green-400 mb-1">Suggested Better Answer</p>
                <p className="text-green-100/80">{q.betterAnswer}</p>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'transcript' && (
        <Card>
          <div className="space-y-6 p-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="text-primary text-xs font-bold">AI</span>
              </div>
              <div className="flex-1">
                <p className="text-textSecondary text-sm mb-1">Interviewer (00:00)</p>
                <p className="text-white leading-relaxed">Can you explain the difference between Server-side rendering (SSR) and Static Site Generation (SSG) in Next.js?</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent text-xs font-bold">You</span>
              </div>
              <div className="flex-1">
                <p className="text-textSecondary text-sm mb-1">You (00:15)</p>
                <p className="text-white leading-relaxed">Yes, SSR generates HTML on each request, which is good for dynamic data. SSG generates it at build time.</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
