import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronDown, Video, FolderOpen, Download } from 'lucide-react';


const ProgramCurriculum = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

  const curriculumItems = [
    { title: 'Welcome to the Digital Marketing Pro Course', liveClasses: 0, projects: 0 },
    { title: 'Fundamentals of Digital Marketing', liveClasses: 6, projects: 1 },
    { title: 'Social Media Marketing', liveClasses: 10, projects: 3 },
    { title: 'Search Engine Optimisation', liveClasses: 9, projects: 2 },
    { title: 'Performance Marketing', liveClasses: 20, projects: 6 },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <section className="py-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container py-5">
        <h2 className="text-center mb-3" style={{ fontSize: '48px', fontWeight: 'bold', color: '#2C3E50' }}>
          Program Curriculum
        </h2>
        <p className="text-center mb-5" style={{ fontSize: '18px', color: '#6C757D' }}>
          Our curriculum is designed to make you a finest marketer
        </p>

        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          {curriculumItems.map((item, index) => (
            <div
              key={index}
              className="border-bottom"
              style={{ borderColor: '#E5E5E5' }}
            >
              <div
                className="d-flex justify-content-between align-items-center py-4 px-3"
                style={{ cursor: 'pointer' }}
                onClick={() => toggleExpand(index)}
              >
                <h5 className="mb-0" style={{ fontSize: '20px', fontWeight: '600', color: '#2C3E50' }}>
                  {item.title}
                </h5>
                <div className="d-flex align-items-center gap-4">
                  {item.liveClasses > 0 && (
                    <div className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          backgroundColor: '#FFE5D9',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Video size={20} color="#FF7F50" />
                      </div>
                      <span style={{ fontSize: '14px', color: '#6C757D', fontWeight: '600' }}>
                        {item.liveClasses} Live Classes
                      </span>
                    </div>
                  )}
                  {item.projects > 0 && (
                    <div className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          backgroundColor: '#FFF4E5',
                          borderRadius: '50%',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <FolderOpen size={20} color="#FFA500" />
                      </div>
                      <span style={{ fontSize: '14px', color: '#6C757D', fontWeight: '600' }}>
                        {item.projects} Project
                      </span>
                    </div>
                  )}
                  <ChevronDown
                    size={24}
                    color="#495057"
                    style={{
                      transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-lg px-5 py-3"
            style={{
              backgroundColor: '#FF7F50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600'
            }}
          >
            <Download size={20} className="me-2" />
            Download Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramCurriculum;
