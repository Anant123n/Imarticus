import { useState } from "react";
import axios from "axios";
import { PlayCircle, CheckCircle } from "lucide-react";

const API_BASE_URL = "https://imarticusb.onrender.com/api";
const DUMMY_VIDEO = "https://www.youtube.com/watch?v=3mYVjHTBpS4";

export default function CoursePage() {
  const [unlocked, setUnlocked] = useState([]);

  const courses = [
    { _id: "c1", title: "Full Stack Web Development", price: 4999, img: "https://plus.unsplash.com/premium_photo-1685086783842-3cb1cf0a17ed?w=800" },
    { _id: "c2", title: "Data Science & Analytics", price: 5999, img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800" },
    { _id: "c3", title: "Digital Marketing Pro", price: 3999, img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800" },
    { _id: "c4", title: "AI/ML With Python", price: 6999, img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800" },
  ];

  // ==================  PAYMENT ==================
  const initPayment = async (order, course) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Imarticus Learning",
      description: `Buy Course: ${course.title}`,
      order_id: order.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${API_BASE_URL}/users/verify-razor`, response);
          if (data.success) {
            alert("🎉 Payment Successful! Course Unlocked");
            setUnlocked([...unlocked, course._id]);
          } else alert("❌ Payment Verification Failed");
        } catch (err) {
          console.error(err);
          alert("Payment Error");
        }
      },
      theme: { color: "#04AA6D" },
    };
    new window.Razorpay(options).open();
  };

  const handlePayment = async (course) => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/users/pay-razor`, { planId: course._id });
      if (!data.success) return alert(data.message);
      initPayment(data.data.order, course);
    } catch (error) {
      console.error(error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">💼 Popular Courses</h2>

        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-md-6 col-lg-3" key={course._id}>
              <div className="card shadow-sm border-0 h-100">
                <img src={course.img} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <h6 className="fw-bold">₹{course.price}</h6>

                  {unlocked.includes(course._id) ? (
                    <a
                      className="btn btn-success w-100"
                      href={DUMMY_VIDEO}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PlayCircle size={18} className="me-1" />
                      Watch Course
                    </a>
                  ) : (
                    <button className="btn btn-primary w-100" onClick={() => handlePayment(course)}>
                      Buy Now
                    </button>
                  )}
                </div>

                {unlocked.includes(course._id) && (
                  <div className="card-footer text-success text-center fw-bold small">
                    <CheckCircle size={14} className="me-1" />
                    Purchased
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
