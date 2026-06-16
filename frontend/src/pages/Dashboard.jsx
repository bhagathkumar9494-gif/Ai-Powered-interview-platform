import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Trophy, 
  Clock, 
  Target, 
  Activity,
  PlayCircle,
  FileText,
  Plus
} from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    { label: 'Total Interviews', value: '12', icon: Activity, color: 'text-blue-400' },
    { label: 'Average Score', value: '78%', icon: Target, color: 'text-primary' },
    { label: 'Best Score', value: '92%', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Practice Hours', value: '14.5', icon: Clock, color: 'text-green-400' },
  ];

  const recentInterviews = [
    { id: 1, role: 'Frontend Developer', date: 'Oct 24, 2023', score: '85%', status: 'Completed' },
    { id: 2, role: 'React Engineer', date: 'Oct 22, 2023', score: '92%', status: 'Completed' },
    { id: 3, role: 'Full Stack Dev', date: 'Oct 18, 2023', score: '74%', status: 'Completed' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, Alex!</h1>
          <p className="text-textSecondary mt-1">Here's your interview preparation progress.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" className="flex items-center gap-2">
            <FileText className="w-4 h-4" /> Analyze Resume
          </Button>
          <Button variant="primary" className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4" /> Start Interview
          </Button>
        </div>
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="flex items-center gap-4">
            <div className={`p-4 rounded-xl bg-secondary ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-textSecondary">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Interviews Table */}
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Interviews</h2>
            <Button variant="ghost" className="text-sm text-primary">View All</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-textSecondary border-b border-gray-800">
                  <th className="pb-3 font-medium">Interview Role</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {recentInterviews.map((interview) => (
                  <tr key={interview.id} className="text-white hover:bg-secondary/50 transition-colors">
                    <td className="py-4 font-medium">{interview.role}</td>
                    <td className="py-4 text-textSecondary">{interview.date}</td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        parseInt(interview.score) >= 80 ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {interview.score}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="text-textSecondary text-sm">{interview.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-800 hover:border-primary hover:bg-primary/5 transition-all text-left group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Start New Interview</p>
                  <p className="text-xs text-textSecondary">AI-powered mock session</p>
                </div>
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-800 hover:border-accent hover:bg-accent/5 transition-all text-left group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Upload Resume</p>
                  <p className="text-xs text-textSecondary">Get ATS score & feedback</p>
                </div>
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-800 hover:border-blue-500 hover:bg-blue-500/5 transition-all text-left group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Practice Questions</p>
                  <p className="text-xs text-textSecondary">Browse question bank</p>
                </div>
              </div>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
