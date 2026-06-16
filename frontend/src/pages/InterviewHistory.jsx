import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Search, Filter, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InterviewHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const historyData = [
    { id: 1, role: 'Frontend Developer', date: 'Oct 24, 2023', score: '85%', duration: '30 mins', status: 'Completed' },
    { id: 2, role: 'React Engineer', date: 'Oct 22, 2023', score: '92%', duration: '45 mins', status: 'Completed' },
    { id: 3, role: 'Full Stack Dev', date: 'Oct 18, 2023', score: '74%', duration: '30 mins', status: 'Completed' },
    { id: 4, role: 'Backend Developer', date: 'Oct 15, 2023', score: '88%', duration: '60 mins', status: 'Completed' },
    { id: 5, role: 'Frontend Developer', date: 'Oct 10, 2023', score: '-', duration: '-', status: 'Incomplete' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Interview History</h1>
          <p className="text-textSecondary mt-1">Review your past mock interviews and track progress.</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 border-b border-gray-800 pb-6">
          <div className="w-full md:w-96 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text"
              placeholder="Search by role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-secondary border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <Button variant="secondary" className="flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-textSecondary border-b border-gray-800">
                <th className="pb-3 font-medium">Interview Role</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Duration</th>
                <th className="pb-3 font-medium">Score</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {historyData.map((item) => (
                <tr key={item.id} className="text-white hover:bg-secondary/30 transition-colors">
                  <td className="py-4 font-medium">{item.role}</td>
                  <td className="py-4 text-textSecondary">{item.date}</td>
                  <td className="py-4 text-textSecondary">{item.duration}</td>
                  <td className="py-4">
                    {item.score !== '-' ? (
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        parseInt(item.score) >= 80 ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {item.score}
                      </span>
                    ) : (
                      <span className="text-textSecondary">-</span>
                    )}
                  </td>
                  <td className="py-4">
                    <span className={`text-sm ${item.status === 'Completed' ? 'text-green-400' : 'text-gray-500'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-end gap-2">
                      <Link to={`/dashboard/analysis/${item.id}`}>
                        <Button variant="ghost" className="p-2 hover:bg-secondary text-primary" disabled={item.status !== 'Completed'}>
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" className="p-2 hover:bg-secondary text-textSecondary" disabled={item.status !== 'Completed'}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-between items-center text-sm text-textSecondary border-t border-gray-800 pt-4">
          <span>Showing 1 to 5 of 5 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-md bg-secondary border border-gray-700 hover:text-white transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 rounded-md bg-secondary border border-gray-700 hover:text-white transition-colors disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
