import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/ui/SmoothScroll';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import Students from './pages/admin/Students';
import Teachers from './pages/admin/Teachers';
import Academics from './pages/admin/Academics';
import AdminFees from './pages/admin/Fees';
import Reports from './pages/admin/Reports';
import Settings from './pages/admin/Settings';
import Features from './pages/admin/Features';
import Login from './pages/Login';
import StudentLayout from './components/student/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import Courses from './pages/student/Courses';
import Grades from './pages/student/Grades';
import Attendance from './pages/student/Attendance';
import Fees from './pages/student/Fees';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="academics" element={<Academics />} />
              <Route path="fees" element={<AdminFees />} />
              <Route path="reports" element={<Reports />} />
              <Route path="features" element={<Features />} />
              <Route path="settings" element={<Settings />} />
          </Route>

          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="courses" element={<Courses />} />
              <Route path="grades" element={<Grades />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="fees" element={<Fees />} />
          </Route>

        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
