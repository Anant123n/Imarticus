import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndustryTools= () => {
  return (
    <section style={{ backgroundColor: '#0C5C4C', padding: '60px 0' }}>
      <div className="container">
        <h2 className="text-center text-white mb-5" style={{ fontSize: '48px', fontWeight: 'bold' }}>
          Master Industry-Relevant Tools
        </h2>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2C3E50' }}>Sitechecker</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
              <span style={{ color: '#FF6B9D' }}>Spark</span>
              <span style={{ color: '#4CAF50' }}>Toro</span>
            </span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#4CAF50' }}>Screamingfrog</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#E53935' }}>SOCIALBLADE</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF0000' }}>YouTube</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#00C4CC', fontStyle: 'italic' }}>Canva</span>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF6B35' }}>Hootsuite</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#F4B400' }}>Google Analytics</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#4285F4' }}>Google Ads</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#0668E1' }}>Meta Business Suite</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2C3E50' }}>Buffer</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF6B35' }}>Ubersuggest</span>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#10A37F' }}>ChatGPT</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#0A66C2' }}>LinkedIn</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF7A59' }}>HubSpot</span>
          </div>
          <div className="bg-white px-4 py-3" style={{ borderRadius: '8px', minWidth: '160px', textAlign: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF642D' }}>SEMRUSH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTools;
