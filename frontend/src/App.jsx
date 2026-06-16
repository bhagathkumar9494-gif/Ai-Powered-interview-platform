import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { StartInterview } from './pages/StartInterview';
import { AIInterviewRoom } from './pages/AIInterviewRoom';
import { InterviewCompletion } from './pages/InterviewCompletion';
import { DetailedAnalysis } from './pages/DetailedAnalysis';
import { InterviewHistory } from './pages/InterviewHistory';
import { Analytics } from './pages/Analytics';
import { QuestionBank } from './pages/QuestionBank';
import { ResumeAnalyzer } from './pages/ResumeAnalyzer';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="interviews" element={<StartInterview />} />
          <Route path="interview-room" element={<AIInterviewRoom />} />
          <Route path="interview-results" element={<InterviewCompletion />} />
          <Route path="analysis/:id" element={<DetailedAnalysis />} />
          <Route path="history" element={<InterviewHistory />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="questions" element={<QuestionBank />} />
          <Route path="resume" element={<ResumeAnalyzer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
