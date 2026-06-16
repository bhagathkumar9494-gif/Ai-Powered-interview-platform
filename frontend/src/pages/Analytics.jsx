import React from 'react';
import { Card } from '../components/ui/Card';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { TrendingUp, Clock, Activity, Target } from 'lucide-react';

export const Analytics = () => {
  const performanceTrend = [
    { name: 'Week 1', score: 65 },
    { name: 'Week 2', score: 72 },
    { name: 'Week 3', score: 70 },
    { name: 'Week 4', score: 85 },
    { name: 'Week 5', score: 88 },
    { name: 'Week 6', score: 92 },
  ];

  const topicScores = [
    { subject: 'React', score: 95 },
    { subject: 'JavaScript', score: 85 },
    { subject: 'System Design', score: 60 },
    { subject: 'CSS', score: 90 },
    { subject: 'Node.js', score: 75 },
  ];

  const skillDistribution = [
    { name: 'Frontend', value: 45 },
    { name: 'Backend', value: 25 },
    { name: 'DSA', value: 15 },
    { name: 'Behavioral', value: 15 },
  ];
  const COLORS = ['#7C3AED', '#8B5CF6', '#3B82F6', '#10B981'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Performance Analytics</h1>
        <p className="text-textSecondary mt-1">Track your progress and identify areas for improvement over time.</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="flex items-center gap-4 border-l-4 border-l-primary">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textSecondary">Total Practice Time</p>
            <p className="text-2xl font-bold text-white">24h 15m</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 border-l-4 border-l-green-500">
          <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textSecondary">Average Score</p>
            <p className="text-2xl font-bold text-white">82%</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 border-l-4 border-l-blue-500">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textSecondary">Interviews Taken</p>
            <p className="text-2xl font-bold text-white">12</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 border-l-4 border-l-yellow-500">
          <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-textSecondary">Improvement Rate</p>
            <p className="text-2xl font-bold text-white">+15%</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card className="h-96 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-4">Overall Performance Trend</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={12} />
                <YAxis stroke="#94A3B8" fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#334155', color: '#fff' }}
                  itemStyle={{ color: '#7C3AED' }}
                />
                <Line type="monotone" dataKey="score" stroke="#7C3AED" strokeWidth={3} dot={{ r: 4, fill: '#7C3AED' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Topic Bar Chart */}
        <Card className="h-96 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-4">Scores by Topic</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicScores} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
                <XAxis type="number" stroke="#94A3B8" fontSize={12} domain={[0, 100]} />
                <YAxis dataKey="subject" type="category" stroke="#94A3B8" fontSize={12} />
                <Tooltip 
                  cursor={{ fill: '#1E293B' }}
                  contentStyle={{ backgroundColor: '#111827', borderColor: '#334155', color: '#fff' }}
                />
                <Bar dataKey="score" fill="#8B5CF6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Pie Chart */}
        <Card className="h-96 flex flex-col">
          <h2 className="text-lg font-bold text-white mb-4">Practice Distribution</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {skillDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#334155', color: '#fff' }} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: '#94A3B8' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="h-96 overflow-y-auto">
          <h2 className="text-lg font-bold text-white mb-4">AI Recommended Learning Path</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5">
              <h3 className="text-blue-400 font-medium mb-1">Focus on System Design</h3>
              <p className="text-sm text-textSecondary">Your system design scores are lagging (60%). Recommend reviewing microservices architecture and database scaling techniques.</p>
            </div>
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <h3 className="text-yellow-400 font-medium mb-1">Deep Dive: Node.js Streams</h3>
              <p className="text-sm text-textSecondary">You struggled with backend performance questions. Recommend practicing Node.js Streams and Buffer APIs.</p>
            </div>
            <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/5">
              <h3 className="text-green-400 font-medium mb-1">Maintain React Proficiency</h3>
              <p className="text-sm text-textSecondary">Your React scores are excellent. Keep up the good work by taking advanced behavioral interviews to complement your technical skills.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
