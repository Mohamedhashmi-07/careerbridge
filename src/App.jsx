import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';

// Pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { StudentPreferences } from './pages/StudentPreferences';
import { ParentPreferences } from './pages/ParentPreferences';
import { PreferenceAnalysis } from './pages/PreferenceAnalysis';
import { Courses } from './pages/Courses';
import { CourseDetails } from './pages/CourseDetails';
import { Institutions } from './pages/Institutions';
import { InstitutionDetails } from './pages/InstitutionDetails';
import { MapPage } from './pages/MapPage';
import { CareerPath } from './pages/CareerPath';
import { Scholarships } from './pages/Scholarships';
import { FamilyComparison } from './pages/FamilyComparison';
import { DecisionLock } from './pages/DecisionLock';

// Automatically scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-brand-500 selection:text-white">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/student-preferences" element={<StudentPreferences />} />
                <Route path="/parent-preferences" element={<ParentPreferences />} />
                <Route path="/analysis" element={<PreferenceAnalysis />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetails />} />
                <Route path="/institutions" element={<Institutions />} />
                <Route path="/institutions/:id" element={<InstitutionDetails />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/careers" element={<CareerPath />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/family-comparison" element={<FamilyComparison />} />
                <Route path="/decision-lock" element={<DecisionLock />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer />
          </div>
        </BrowserRouter>
      </AppProvider>
    </LanguageProvider>
  );
}
