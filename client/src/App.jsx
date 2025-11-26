import { Routes, Route, Navigate } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import ApplicationSection from './components/ApplicationSection';
import HiringPartners from './components/HiringPartners';
import IndustryTools from './components/IndustryToos';
import ProgramCurriculum from './components/Curriculum';
import Faculty from './components/Faculty';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PdfSummarizer from './pages/PdfSummarizer';

import CoursePage from './pages/CoursePage.jsx';


function LandingPage() {
  const scrollToApplication = () => {
    const applicationSection = document.getElementById('application-section');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <CustomNavbar />
      <section id="overview">
        <Hero onApplyClick={scrollToApplication} />
      </section>
      <section id="hiring-partners">
        <HiringPartners />
      </section>
      <section id="application-section">
        <ApplicationSection />
      </section>
      <section id="curriculum">
        <ProgramCurriculum />
      </section>
      <section id="trainers">
        <Faculty />
      </section>
      <section id="projects">
        <Portfolio />
      </section>
      <section id='success-stories'>
        <IndustryTools/>
      </section>
      <section id="success-stories">
        <Testimonials />
      </section>
      <section id="faqs">
        <FAQ />
      </section>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pdf" element={<PdfSummarizer />} />

      {/* 🆕 Updated Route for Courses */}
      <Route path="/courses" element={<CoursePage />} />

      {/* OLD route can be removed if not needed */}
      {/* <Route path="/course/:enrollmentId" element={<CoursePage />} /> */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


export default App;