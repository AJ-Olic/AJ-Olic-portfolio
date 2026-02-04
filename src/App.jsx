import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ExperiencePage from './pages/Experience';
import ExperienceDetail from './pages/ExperienceDetail';
import ProjectsPage from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import ContactPage from './pages/Contact';
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#1a3a52]">
      <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
