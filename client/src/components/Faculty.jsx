import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const trainersData =[
  {
    id: 1,
    name: 'Srilaxmi Madhu Sudhan',
    role: 'Assistant Brand Manager',
    company: 'redBus',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/RedBus_logo.png',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Shashank Shekhar',
    role: 'Growth Marketer',
    company: 'masai',
    companyLogo: 'https://www.masaischool.com/images/new-logo.svg',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Sarthak Rohilla',
    role: 'Product Specialist',
    company: 'cognizant',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Cognizant_logo_2022.svg',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    name: 'Abhilash Pathak',
    role: 'Growth & Digital Experience',
    company: 'CRED',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Cred_company_logo.png',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Ashi goyal',
    role: 'Marketing Manager',
    company: 'rapido',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Rapido-logo.png',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function Trainers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(trainersData.length - 4, prev + 1));
  };

  return (
    <div style={{ backgroundColor: '#1a5f5f', minHeight: '100vh', padding: '80px 20px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="text-white fw-bold mb-3">Meet Your Trainers</h1>
          <p className="text-white fs-5">You will be mentored by practitioners who are masters of their trade</p>
        </div>

        <div className="position-relative" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="d-flex gap-4 overflow-hidden">
            {trainersData.slice(currentIndex, currentIndex + 4).map((trainer) => (
              <div key={trainer.id} className="flex-shrink-0" style={{ width: '300px' }}>
                <div className="card border-0 shadow-lg h-100" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <div style={{ position: 'relative', paddingTop: '60%', backgroundColor: '#1a5f5f' }}>
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '5px solid #1a5f5f'
                      }}
                    />
                  </div>
                  <div className="card-body text-center" style={{ backgroundColor: '#1a5f5f', color: 'white', padding: '30px 20px' }}>
                    <div
                      className="bg-white d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        borderRadius: '25px',
                        padding: '8px 20px',
                        position: 'relative',
                        top: '-50px',
                        marginBottom: '-30px'
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>{trainer.company}</span>
                    </div>
                    <h6 style={{ fontSize: '14px', marginBottom: '5px', fontWeight: '500' }}>{trainer.name}</h6>
                    <h5 className="fw-bold" style={{ fontSize: '18px' }}>{trainer.role}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3 mt-5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '60px', height: '60px', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= trainersData.length - 4}
              className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '60px', height: '60px', border: '2px solid rgba(255,255,255,0.5)' }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
