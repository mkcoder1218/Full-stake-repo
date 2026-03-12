import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';

// Public Layout & Pages
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Admin Layout & Pages
import AdminLayout from './admin/layouts/AdminLayout';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import ManageProjects from './admin/pages/ManageProjects';
import ManageSkills from './admin/pages/ManageSkills';
import ManageProfile from './admin/pages/ManageProfile';
import ManageSocials from './admin/pages/ManageSocials';

export default function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="projects" element={<ManageProjects />} />
            <Route path="skills" element={<ManageSkills />} />
            <Route path="profile" element={<ManageProfile />} />
            <Route path="socials" element={<ManageSocials />} />
          </Route>
        </Routes>
      </Router>
    </PortfolioProvider>
  );
}
