import { PlayCircle } from "lucide-react";

const CoursePage = () => {
  const courses = [
    { _id: "c1", title: "Full Stack Web Development", price: 4999, img: "https://plus.unsplash.com/premium_photo-1685086783842-3cb1cf0a17ed?w=800" },
    { _id: "c2", title: "Data Science & Analytics", price: 5999, img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800" },
    { _id: "c3", title: "Digital Marketing Pro", price: 3999, img: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800" },
    { _id: "c4", title: "AI/ML With Python", price: 6999, img: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=800" },
  ];

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

                  <button className="btn btn-primary w-100">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursePage;
