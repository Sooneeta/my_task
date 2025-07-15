import "../App.css";
import { Header } from "../components/header";
import { targetAudience } from "../data/constant";
import { SpeakerCard } from "../components/speakerCard";
import { Agenda } from "../components/agenda";
import { TestimonialCard } from "../components/testimonial";
import "../styles/landingpage.css";
import { FAQSection } from "../components/faq";
import { Footer } from "../components/footer";
import { RegistrationForm } from "../components/registrationForm";

export const LandingPage = () => {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <Header />
            <p className="tag-line">
              "Exploring the Future of AI, Robotics, and Blockchain"{" "}
            </p>
            <p>
              TechInnovate 2025 is the premier technology conference bringing
              together industry leaders, innovators, and enthusiasts to explore
              cutting-edge advancements in artificial intelligence, robotics,
              blockchain, and more.
            </p>
          </div>
        </section>
        <section className="target-audience">
          <h2>Target Audience</h2>

          <div className="target-audience-items-wrapper">
            {targetAudience?.map((item, index) => (
              <div key={item} className="target-audience-item">
                {item}
              </div>
            ))}
          </div>
        </section>
        <section className="speaker-section">
          <SpeakerCard />
        </section>
        <section className="agenda-section">
          <Agenda />
        </section>
        <section className="venue-section">
          <h2>Location</h2>
          <ul>
            <li>
              <strong>Physical Venue:</strong> San Francisco Convention Center,
              747 Howard St, San Francisco, CA 94103
            </li>
            <li>
              <strong>Map:</strong>
            </li>
            <li>
              <iframe
                title="Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0128320880145!2d-122.40387528468185!3d37.78479817975706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064fbc32d61%3A0xb295290bd0fef3a0!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1627856025703!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </li>
            <li>
              <strong>Virtual Event Info:</strong> Hosted on Zoom Webinar
              platform
            </li>
            <li>
              <strong>Recommended Hotels:</strong> Grand Hyatt San Francisco,
              Marriott Marquis
            </li>
            <li>
              <strong>Transportation:</strong> Accessible via BART and public
              transit
            </li>
          </ul>
        </section>
        <section className="registration-section">
          <RegistrationForm />
        </section>

        <section className="testimonial-section">
          <TestimonialCard />
        </section>

        <section className="faq-section">
          <FAQSection />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};
