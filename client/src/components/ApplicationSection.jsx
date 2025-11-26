import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { User, Mail, Phone, MapPin, Briefcase } from "lucide-react";

const API_BASE_URL = "https://imarticus-1.onrender.com/api";

const ApplicationSection = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    location: "",
    experience: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save data directly (NO COURSE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, location, experience } = formData;

    if (!name || !email || !mobile || !location || !experience) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/enrollments/save-only`, formData);

      if (response.data.success) {
        alert("🎉 Your details are submitted successfully!");
      } else {
        alert("❌ Failed to submit application.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong while submitting!");
    }
    setLoading(false);
  };

  return (
    <section style={{ backgroundColor: "#0C5C4C", minHeight: "100vh", padding: "80px 0" }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Section */}
          <div className="col-lg-6 text-white">
            <h2 className="mb-5" style={{ fontSize: "48px", fontWeight: "bold" }}>
              Key Highlights
            </h2>

            <div className="row g-4 mb-5">
              <div className="col-md-6">
                <div style={{
                  backgroundColor: "#FF7F50",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "10px" }}>1600+</h3>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Students Pligned...
                  ed across India</p>
                </div>
              </div>

              <div className="col-md-6">
                <div style={{
                  backgroundColor: "#FF7F50",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "10px" }}>12LPA</h3>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Highest CTC</p>
                </div>
              </div>

              <div className="col-md-6">
                <div style={{
                  backgroundColor: "#FF7F50",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "10px" }}>10</h3>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Assured Interviews</p>
                </div>
              </div>

              <div className="col-md-6">
                <div style={{
                  backgroundColor: "#FF7F50",
                  borderRadius: "12px",
                  padding: "40px 30px",
                  textAlign: "center",
                }}>
                  <h3 style={{ fontSize: "56px", fontWeight: "bold", marginBottom: "10px" }}>1000+</h3>
                  <p style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>Hiring Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="col-lg-6">
            <div className="card" style={{ borderRadius: "16px", border: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
              <div className="card-body p-5">
                <h3 className="mb-4" style={{ fontSize: "24px", fontWeight: "bold", color: "#2C3E50" }}>
                  Apply For <span style={{ color: "#FF7F50" }}>Digital Marketing Program</span>
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <User size={18} className="me-2" /> Full Name
                    </label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <Mail size={18} className="me-2" /> Email Address
                    </label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <Phone size={18} className="me-2" /> Mobile Number
                    </label>
                    <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="+91 1234567890" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      <MapPin size={18} className="me-2" /> Location
                    </label>
                    <input type="text" className="form-control" name="location" value={formData.location} onChange={handleChange} placeholder="City, State" required />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">
                      <Briefcase size={18} className="me-2" /> Professional Experience
                    </label>
                    <select className="form-select" name="experience" value={formData.experience} onChange={handleChange} required>
                      <option value="" disabled hidden>Select Experience</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="fresh-graduate">Fresh Graduate</option>
                      <option value="0-1-years">0–1 Years</option>
                      <option value="1-2-years">1–2 Years</option>
                      <option value="2-3-years">2–3 Years</option>
                      <option value="3-5-years">3–5 Years</option>
                      <option value="5-7-years">5–7 Years</option>
                      <option value="7-plus-years">7+ Years</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" /> Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
