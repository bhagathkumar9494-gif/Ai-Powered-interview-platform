import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-8 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};
