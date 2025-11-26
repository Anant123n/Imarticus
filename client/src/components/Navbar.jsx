import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomNavbar = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const navigate = useNavigate();

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "hiring-partners", label: "Hiring Partners" },
    { id: "curriculum", label: "Curriculum" },
    { id: "trainers", label: "Trainers" },
    { id: "projects", label: "AiSummarizer" },
    { id: "courses", label: "Courses" }, // 👈 NEW
    { id: "success-stories", label: "Success Stories" },
    { id: "pricing", label: "Pricing" },
    { id: "faqs", label: "FAQs" },
  ];

  const handleNavClick = (sectionId) => {
    // 👉 Navigate to PDF Summarizer page
    if (sectionId === "projects") {
      navigate("/pdf");
      return;
    }

    // 👉 Navigate to Course Page
    if (sectionId === "courses") {
      navigate("/courses");
      return;
    }

    // 👉 Scroll for Landing Page sections
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="white" className="py-3 border-bottom">
        <Container fluid className="px-5">
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center">
              <svg
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L0 8V24L12 32L24 24V8L12 0Z" fill="#0C5C4C" />
                <path
                  d="M12 8L8 10.5V21.5L12 24L16 21.5V10.5L12 8Z"
                  fill="white"
                />
              </svg>
              <div className="ms-2">
                <div style={{ fontSize: "18px", fontWeight: "bold", color: "#0C5C4C" }}>
                  IMARTICUS
                </div>
                <div style={{ fontSize: "10px", color: "#0C5C4C", letterSpacing: "1px" }}>
                  LEARNING
                </div>
              </div>
              <div
                className="ms-2"
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#0C5C4C",
                  borderLeft: "2px solid #FF7F50",
                  paddingLeft: "10px",
                }}
              >
                12
              </div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div
        style={{
          backgroundColor: "#0C5C4C",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Container
          fluid
          className="px-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            height: "80px",
          }}
        >
          {navItems.map((item) => (
            <span
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                color: "white",
                borderBottom:
                  activeSection === item.id
                    ? "3px solid #FF7F50"
                    : "3px solid transparent",
                paddingTop: "1.2rem",
                paddingBottom: "1.2rem",
                transition: "border-bottom 0.3s ease",
                fontSize: "16px",
                fontWeight: 500,
                cursor: "pointer",
                flexShrink: 0,
                display: "inline-block",
              }}
            >
              {item.label}
            </span>
          ))}
        </Container>
      </div>

      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
