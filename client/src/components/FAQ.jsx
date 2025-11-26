import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';



const faqData= [
  {
    id: 1,
    question: 'Do I need a laptop to do the course?',
    answer: 'A Laptop is mandatory to do the course. This is primarily because all your projects are industry-level and you would be able to do those projects only on a Laptop.'
  },
  {
    id: 2,
    question: 'How will the Placement Assurance work?',
    answer: 'Our placement assurance program ensures that you get comprehensive support throughout your job search process, including resume building, interview preparation, and direct connections with hiring partners.'
  },
  {
    id: 3,
    question: 'How will I be taught concepts in the class?',
    answer: 'The course follows a practical, hands-on approach where concepts are taught through live sessions, real-world projects, and interactive assignments that help you apply what you learn immediately.'
  },
  {
    id: 4,
    question: 'What is the duration of this course?',
    answer: 'The course duration varies based on the program you choose. Typically, our comprehensive digital marketing programs range from 3 to 6 months with flexible learning schedules.'
  },
  {
    id: 5,
    question: "What's the cost of the program?",
    answer: 'Program costs vary depending on the specific course and any ongoing offers. Please contact our admissions team for the most current pricing information and available financing options.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '80px 20px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{ color: '#1e293b' }}>Still have Doubts?</h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>
            We have answered some of the frequent questions for you!
          </p>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {faqData.map((faq) => (
            <div key={faq.id} className="mb-3">
              <div
                className="card border-0 shadow-sm"
                style={{ borderRadius: '12px', overflow: 'hidden' }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="btn text-start d-flex justify-content-between align-items-center w-100"
                  style={{
                    backgroundColor: 'white',
                    border: 'none',
                    padding: '25px 30px',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#1e293b'
                  }}
                >
                  {faq.question}
                  {openId === faq.id ? (
                    <ChevronUp size={24} color="#64748b" />
                  ) : (
                    <ChevronDown size={24} color="#64748b" />
                  )}
                </button>
                {openId === faq.id && (
                  <div
                    style={{
                      padding: '0 30px 25px 30px',
                      backgroundColor: 'white',
                      color: '#475569',
                      fontSize: '16px',
                      lineHeight: '1.7'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
