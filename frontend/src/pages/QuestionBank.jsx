import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, Filter, Bookmark, PlayCircle } from 'lucide-react';

export const QuestionBank = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'React', 'JavaScript', 'DSA', 'SQL', 'System Design', 'Node.js'];

  const questions = [
    { id: 1, text: 'Explain the Virtual DOM and how React reconciliation works.', category: 'React', difficulty: 'Hard', bookmarked: true },
    { id: 2, text: 'What are closures in JavaScript? Provide a real-world use case.', category: 'JavaScript', difficulty: 'Medium', bookmarked: false },
    { id: 3, text: 'Design a URL shortener like bit.ly. What database would you choose and why?', category: 'System Design', difficulty: 'Hard', bookmarked: false },
    { id: 4, text: 'Reverse a linked list in O(n) time and O(1) space.', category: 'DSA', difficulty: 'Medium', bookmarked: true },
    { id: 5, text: 'Explain event loop, microtasks, and macrotasks in Node.js.', category: 'Node.js', difficulty: 'Hard', bookmarked: false },
    { id: 6, text: 'Write a SQL query to find the second highest salary in an Employee table.', category: 'SQL', difficulty: 'Easy', bookmarked: false },
  ];

  const filteredQuestions = activeCategory === 'All' 
    ? questions 
    : questions.filter(q => q.category === activeCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Question Bank</h1>
        <p className="text-textSecondary mt-1">Browse, bookmark, and practice specific interview questions.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-96 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input 
            type="text"
            placeholder="Search questions..."
            className="w-full bg-secondary border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Button variant="secondary" className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4" /> Difficulty
          </Button>
          <Button variant="secondary" className="flex items-center gap-2 shrink-0">
            <Bookmark className="w-4 h-4" /> Bookmarked
          </Button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-white shadow-md shadow-primary/20' 
                : 'bg-secondary text-textSecondary hover:text-white hover:bg-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Question Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredQuestions.map((q) => (
          <Card key={q.id} className="flex flex-col h-full hover:border-primary/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                q.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400' :
                q.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-red-500/10 text-red-400'
              }`}>
                {q.difficulty}
              </span>
              <button className={`p-1.5 rounded-lg transition-colors ${
                q.bookmarked ? 'text-primary bg-primary/10' : 'text-gray-500 hover:text-white hover:bg-secondary'
              }`}>
                <Bookmark className="w-4 h-4" fill={q.bookmarked ? "currentColor" : "none"} />
              </button>
            </div>
            
            <h3 className="text-lg font-medium text-white mb-4 flex-1">{q.text}</h3>
            
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
              <span className="text-sm text-textSecondary">{q.category}</span>
              <Button variant="ghost" className="text-primary p-0 hover:bg-transparent hover:text-primaryHover flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> Practice
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
