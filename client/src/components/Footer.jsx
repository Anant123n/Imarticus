import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a5f5f', color: 'white' }}>
      <div className="container" style={{ padding: '40px 20px 20px' }}>
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <div className="mb-3">
              <span className="d-block mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>Follow us on</span>
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="mb-3">
              <span className="d-block mb-3" style={{ fontSize: '14px', fontWeight: '500' }}>Download our app</span>
              <div className="d-flex gap-3 justify-content-md-end">
                <a href="#" className="d-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: '45px' }}
                  />
                </a>
                <a href="#" className="d-block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    style={{ height: '45px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '30px 0' }} />

        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-2">
              <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '4px' }} />
              <div>
                <div style={{ fontWeight: '700', fontSize: '20px', letterSpacing: '1px' }}>IMARTICUS</div>
                <div style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: '500' }}>LEARNING</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-column flex-md-row justify-content-md-end align-items-md-center gap-3">
              <a href="#" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                Terms & Conditions
              </a>
              <span className="d-none d-md-inline" style={{ color: 'rgba(255,255,255,0.5)' }}>|</span>
              <a href="#" className="text-white text-decoration-none" style={{ fontSize: '14px' }}>
                Privacy Policy
              </a>
            </div>
            <div className="mt-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
              © 2025 Imarticus Learning Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#e5e7eb', padding: '20px 0', marginTop: '30px' }}>
        <div className="container text-center">
          <button
            className="btn text-white fw-semibold"
            style={{
              backgroundColor: '#2d3748',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 40px',
              fontSize: '16px'
            }}
          >
            Download Brochure
          </button>
        </div>
      </div>
    </footer>
  );
}
