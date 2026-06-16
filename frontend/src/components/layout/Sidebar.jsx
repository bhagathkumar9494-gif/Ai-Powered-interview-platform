import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Mic, 
  Library, 
  LineChart, 
  History, 
  FileText, 
  User, 
  Settings,
  LogOut
} from 'lucide-react';

export const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Mic, label: 'Mock Interviews', path: '/dashboard/interviews' },
    { icon: Library, label: 'Question Bank', path: '/dashboard/questions' },
    { icon: LineChart, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: History, label: 'History', path: '/dashboard/history' },
    { icon: FileText, label: 'Resume Analyzer', path: '/dashboard/resume' },
  ];

  const bottomItems = [
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="w-64 glass-card h-screen rounded-none border-y-0 border-l-0 flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Mic className="text-primary" />
          AI Prep
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-textSecondary hover:bg-secondary hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 space-y-2 border-t border-gray-800">
        {bottomItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-textSecondary hover:bg-secondary hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 mt-2">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};
