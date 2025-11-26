import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Dame Essentials',
    mentor: 'Mentee: Sweta',
    color: '#1e293b',
    label: 'CASE STUDY'
  },
  {
    id: 2,
    title: 'MyCaptain Project',
    mentor: 'Mentee: Mayank Pradhan',
    color: '#a78bfa',
    label: 'CASE STUDY'
  },
  {
    id: 3,
    title: 'SEO - FlinkIt',
    mentor: 'Mentee: Joel Johnson',
    color: '#fb7185',
    label: 'CASE STUDY'
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(projectsData.length - 3, prev + 1));
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '80px 20px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: '#1e293b' }}>
            Portfolio of Our Learners
          </h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>
            Our mentees work on industry relevant portfolio projects that gets them hired
          </p>
        </div>

        <div className="position-relative" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="d-flex gap-4 overflow-hidden">
            {projectsData.slice(currentIndex, currentIndex + 3).map((project) => (
              <div key={project.id} className="flex-shrink-0" style={{ width: '450px' }}>
                <div
                  className="card border-0 shadow"
                  style={{
                    backgroundColor: project.color,
                    color: 'white',
                    height: '300px',
                    borderRadius: '15px',
                    padding: '40px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <span
                      className="badge"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        fontSize: '11px',
                        padding: '6px 12px',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {project.label}
                    </span>
                    <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: '48px' }}>
                      {project.title}
                    </h2>
                    <p style={{ fontSize: '16px', opacity: 0.9 }}>{project.mentor}</p>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '150px',
                      height: '150px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'rotate(45deg)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3 mt-5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '60px', height: '60px', border: '1px solid #e2e8f0' }}
            >
              <ChevronLeft size={24} color="#64748b" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= projectsData.length - 3}
              className="btn rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '60px',
                height: '60px',
                border: '2px solid #1e293b',
                backgroundColor: 'white'
              }}
            >
              <ChevronRight size={24} color="#1e293b" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
