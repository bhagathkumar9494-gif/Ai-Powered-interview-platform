import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Bell, Shield, AlertTriangle } from 'lucide-react';

export const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    weeklyReport: true,
    interviewReminders: false,
  });

  const toggleNotification = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-textSecondary mt-1">Manage your account preferences and security.</p>
      </div>

      <div className="space-y-6">
        {/* Notifications */}
        <Card>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
            <Bell className="w-5 h-5 text-primary" /> Notifications
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Email Notifications</h3>
                <p className="text-sm text-textSecondary">Receive updates about your account activity.</p>
              </div>
              <button 
                onClick={() => toggleNotification('email')}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications.email ? 'bg-primary' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${notifications.email ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Weekly Progress Report</h3>
                <p className="text-sm text-textSecondary">Get a weekly summary of your performance.</p>
              </div>
              <button 
                onClick={() => toggleNotification('weeklyReport')}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications.weeklyReport ? 'bg-primary' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${notifications.weeklyReport ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Interview Reminders</h3>
                <p className="text-sm text-textSecondary">Receive reminders for scheduled mock interviews.</p>
              </div>
              <button 
                onClick={() => toggleNotification('interviewReminders')}
                className={`w-12 h-6 rounded-full transition-colors relative ${notifications.interviewReminders ? 'bg-primary' : 'bg-gray-700'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${notifications.interviewReminders ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
              </button>
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
            <Shield className="w-5 h-5 text-accent" /> Security
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Change Password</h3>
                <p className="text-sm text-textSecondary">Update your password regularly to keep your account secure.</p>
              </div>
              <Button variant="secondary">Update</Button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-textSecondary">Add an extra layer of security to your account.</p>
              </div>
              <Button variant="secondary">Enable 2FA</Button>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20 bg-red-500/5">
          <h2 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2 border-b border-red-500/20 pb-4">
            <AlertTriangle className="w-5 h-5" /> Danger Zone
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-white">Delete Account</h3>
              <p className="text-sm text-textSecondary">Permanently delete your account and all data. This action cannot be undone.</p>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white">Delete Account</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
