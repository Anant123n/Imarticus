import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users, Star } from 'lucide-react';


const HeroSection = ({ onApplyClick }) => {
  return (
    <section className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="container py-5">
        <div className="text-center mb-4">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" fill="#FF7F50"/>
              <path d="M25 20L35 30L25 40" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="ms-3 mb-0" style={{ fontSize: '48px', fontWeight: 'bold', color: '#2C3E50' }}>
              mycaptain
            </h1>
          </div>
          <p style={{ fontSize: '14px', color: '#6C757D', letterSpacing: '2px' }}>
            BY IMARTICUS LEARNING
          </p>
        </div>

        <h2
          className="text-center mb-4"
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#2C3E50',
            lineHeight: '1.2'
          }}
        >
          Become a Digital Marketer in<br />18 Weeks
        </h2>

        <h3
          className="text-center mb-5"
          style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#495057'
          }}
        >
          MyCaptain Digital Marketing Program with Job Assurance
        </h3>

        <div
          className="card mx-auto mb-4"
          style={{
            maxWidth: '1000px',
            border: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '12px'
          }}
        >
          <div className="card-body p-4">
            <div className="row text-center">
              <div className="col-md-3 border-end">
                <div style={{ color: '#6C757D', fontSize: '14px', marginBottom: '8px' }}>
                  Next Batch
                </div>
                <div style={{ color: '#2C3E50', fontSize: '28px', fontWeight: 'bold' }}>
                  October
                </div>
              </div>
              <div className="col-md-3 border-end">
                <div style={{ color: '#6C757D', fontSize: '14px', marginBottom: '8px' }}>
                  Available Seats
                </div>
                <div style={{ color: '#2C3E50', fontSize: '28px', fontWeight: 'bold' }}>
                  29/60
                </div>
              </div>
              <div className="col-md-3 border-end">
                <div style={{ color: '#6C757D', fontSize: '14px', marginBottom: '8px' }}>
                  Taught by experts from
                </div>
                <div style={{ color: '#2C3E50', fontSize: '16px', fontWeight: '600' }}>
                  Rapido, Deloitte, MFine, Zomato
                </div>
              </div>
              <div className="col-md-3">
                <div style={{ color: '#6C757D', fontSize: '14px', marginBottom: '8px' }}>
                  Designed for
                </div>
                <div style={{ color: '#2C3E50', fontSize: '16px', fontWeight: '600' }}>
                  Freshers & Early Working Professionals
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className="d-flex align-items-center me-4">
            <Star size={20} fill="#FFD700" color="#FFD700" />
            <span className="ms-2" style={{ fontSize: '18px', fontWeight: '600', color: '#2C3E50' }}>
              4.51
            </span>
          </div>
          <div className="d-flex align-items-center">
            <Users size={20} color="#6C757D" />
            <span className="ms-2" style={{ fontSize: '18px', fontWeight: '600', color: '#2C3E50' }}>
              1.2 Lacs+ Learners
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg px-5 py-3"
            onClick={onApplyClick}
            style={{
              backgroundColor: '#FF7F50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              minWidth: '200px'
            }}
          >
            Apply Now
          </button>
          <button
            className="btn btn-lg px-5 py-3"
            style={{
              backgroundColor: '#2C3E50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: '600',
              minWidth: '200px'
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
