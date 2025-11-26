import { Calendar } from 'lucide-react';



const testimonialsData = [
  {
    id: 1,
    name: 'Roshni Singh',
    date: 'February 2024',
    text: "Amazing classes from day one that is the orientation class. The best, part about Imarticus' Mycaptain digital marketing program is the Placement Assistant they provide. The team trained and guided me throughout the process and ensured I got placed. Really Happy with the entire experience.",
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageColor: '#fef3c7'
  },
  {
    id: 2,
    name: 'Utkarsh Maurya',
    date: 'July 2024',
    text: "I\\'m so glad I decided to take the Imarticus' Mycaptain digital marketing program. They\\'ve been incredibly supportive throughout the entire process. I\\'ve learned so much about digital marketing and it\\'s been really helpful. I actually heard about the course from a friend who recommended it, and I\\'m so glad I took their advice. I secured a great placement with their support. They were incredibly helpful throughout the entire job search process, and I\\'m so thankful for their guidance.",
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageColor: '#d1fae5'
  },
  {
    id: 3,
    name: 'Neetu Bhardwaj',
    date: 'July 2024',
    text: "My journey began when I joined the July 2024 cohort. From our first interaction, which was the orientation, it was clear that this digital marketing program will help me transform my career. <br/> In a nutshell, my journey with Imarticus' Mycaptain digital marketing program has been transformative in terms of shaping my career.",
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageColor: '#ddd6fe'
  },
  {
    id: 4,
    name: 'Pranshu Gupta',
    date: 'July 2024',
    text: "I\\'m grateful for Imarticus' Mycaptain digital marketing program, it gave me a deep understanding of digital marketing and helped me think like a marketer. The program boosted my confidence and skills. It\\'s placement support helped me crack my first job. I appreciate their guidance and encouragement. Thanks to this program, I\\'m optimistic about my future in digital marketing.",
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    imageColor: '#fde68a'
  }
];

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '80px 20px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: '#1e293b' }}>Testimonials From Our Students</h1>
        </div>

        <div className="row g-4" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-md-6">
              <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', padding: '30px' }}>
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: testimonial.imageColor
                    }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2" style={{ color: '#1e293b' }}>
                      {testimonial.name}
                    </h5>
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={16} style={{ color: '#10b981' }} />
                      <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '500' }}>
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button
            className="btn btn-lg text-white fw-semibold"
            style={{
              backgroundColor: '#fb7185',
              border: 'none',
              borderRadius: '8px',
              padding: '15px 60px',
              fontSize: '18px'
            }}
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
