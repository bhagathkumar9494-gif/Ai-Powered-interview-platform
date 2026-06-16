import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, Code, Brain } from 'lucide-react';

export const StartInterview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'Frontend Developer',
    experience: '1-2 Years',
    type: 'Technical',
    duration: '30 mins',
    skills: 'React, JavaScript'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStart = (e) => {
    e.preventDefault();
    navigate('/dashboard/interview-room');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Setup Mock Interview</h1>
        <p className="text-textSecondary mt-1">Configure your AI interviewer based on your target role.</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleStart} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Role */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-textSecondary flex items-center gap-2">
                <Code className="w-4 h-4" /> Role
              </label>
              <select 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>Data Analyst</option>
                <option>ML Engineer</option>
              </select>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-textSecondary flex items-center gap-2">
                <Brain className="w-4 h-4" /> Experience Level
              </label>
              <select 
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option>Fresher</option>
                <option>1-2 Years</option>
                <option>2-5 Years</option>
                <option>5+ Years</option>
              </select>
            </div>

            {/* Interview Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-textSecondary flex items-center gap-2">
                <Brain className="w-4 h-4" /> Interview Type
              </label>
              <select 
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option>Technical</option>
                <option>HR</option>
                <option>Behavioral</option>
              </select>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-textSecondary flex items-center gap-2">
                <Clock className="w-4 h-4" /> Duration
              </label>
              <select 
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option>15 mins</option>
                <option>30 mins</option>
                <option>45 mins</option>
                <option>60 mins</option>
              </select>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-textSecondary">Specific Skills (Comma separated)</label>
            <input 
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., React, Node.js, System Design"
              className="w-full bg-secondary border border-gray-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="pt-6 flex justify-end">
            <Button type="submit" variant="primary" className="flex items-center gap-2 px-8 py-3 text-lg">
              <Play className="w-5 h-5" /> Start Interview
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
