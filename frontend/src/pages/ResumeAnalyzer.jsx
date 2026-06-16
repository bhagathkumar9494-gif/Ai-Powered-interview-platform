import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export const ResumeAnalyzer = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setIsAnalyzed(true);
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">Resume Analyzer</h1>
        <p className="text-textSecondary mt-2">Upload your resume to get an ATS score and AI-driven recommendations based on your target role.</p>
      </div>

      {!isAnalyzed ? (
        <Card className="p-12 border-dashed border-2 border-gray-700 hover:border-primary/50 transition-colors flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
            {isUploading ? (
              <RefreshCw className="w-10 h-10 text-primary animate-spin" />
            ) : (
              <UploadCloud className="w-10 h-10 text-primary" />
            )}
          </div>
          <h2 className="text-xl font-medium text-white mb-2">
            {isUploading ? 'Analyzing Resume...' : 'Drag & Drop your Resume'}
          </h2>
          <p className="text-textSecondary mb-8">Supports PDF, DOCX (Max 5MB)</p>
          <div className="flex gap-4">
            <Button variant="secondary">Browse Files</Button>
            <Button variant="primary" onClick={handleUpload} disabled={isUploading}>
              Analyze Now
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-6 flex flex-col items-center">
          {/* Result Card */}
          <Card className="w-full">
            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-white">Alex_Frontend_Resume.pdf</h2>
              </div>
              <Button variant="secondary" onClick={() => setIsAnalyzed(false)} className="text-sm">
                Upload New
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ATS Score */}
              <div className="flex flex-col items-center justify-center border-r border-gray-800 pr-0 md:pr-8">
                <h3 className="text-textSecondary font-medium mb-4">Overall ATS Score</h3>
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1E293B" strokeWidth="10" />
                    <circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="10"
                      strokeDasharray="283" strokeDashoffset="56" strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-white">80<span className="text-xl text-textSecondary">%</span></span>
                  </div>
                </div>
                <p className="text-green-400 font-medium mt-4">Good Match</p>
              </div>

              {/* Progress Bars */}
              <div className="md:col-span-2 space-y-6">
                {[
                  { label: 'Skill Match', value: 85, color: 'bg-primary' },
                  { label: 'Experience Match', value: 70, color: 'bg-yellow-500' },
                  { label: 'Education Match', value: 95, color: 'bg-green-500' },
                  { label: 'Keyword Optimization', value: 65, color: 'bg-blue-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-textSecondary font-medium">{item.label}</span>
                      <span className="text-white font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.value}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Card className="bg-red-500/5 border border-red-500/20">
              <h3 className="text-red-400 font-medium mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Missing Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'GraphQL', 'Redux Toolkit', 'Jest', 'CI/CD'].map((kw, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-sm bg-red-500/10 text-red-300 border border-red-500/20">
                    {kw}
                  </span>
                ))}
              </div>
              <p className="text-sm text-textSecondary mt-4">Adding these keywords can boost your ATS score significantly for Frontend roles.</p>
            </Card>

            <Card className="bg-green-500/5 border border-green-500/20">
              <h3 className="text-green-400 font-medium mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Resume Strengths
              </h3>
              <ul className="space-y-2 text-sm text-green-100/80 list-disc list-inside">
                <li>Strong emphasis on measurable impact (e.g., "Increased performance by 20%").</li>
                <li>Clear and professional formatting.</li>
                <li>Good alignment of previous titles with target roles.</li>
              </ul>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
