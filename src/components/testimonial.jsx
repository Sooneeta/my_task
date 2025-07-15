import "../styles/testimonial.css";
import { testimonials } from "../data/constant";

export const TestimonialCard = () => {
  return (
    <>
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-mark">“</div>
            <p className="testimonial-review">{item.review}</p>
            <p className="testimonial-name">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
