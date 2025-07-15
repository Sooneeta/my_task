import { speakers } from "../data/constant";
import "../styles/speakercard.css";
import { IoPersonCircle } from "react-icons/io5";

export const SpeakerCard = () => {
  return (
    <div className="speakers-section">
      <h2 className="section-title">Meet Our Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div className="speaker-card" key={index}>
            <IoPersonCircle fontSize={"5rem"} />
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-title">{speaker.title}</p>
            <span className="speaker-company">{speaker.company}</span>
            <p className="speaker-bio">{speaker.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
