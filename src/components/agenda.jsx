import { agendas } from "../data/constant";
import "../styles/agenda.css";

export const Agenda = () => {
  return (
    <div className="agenda-timeline">
      <h2 className="agenda-title">Conference Agenda</h2>
      <div className="timeline">
        {agendas.map((item, i) => (
          <div className="timeline-event" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="event-date-time">
                <strong>{item.date}</strong> | {item.time}
              </div>
              <div className="event-title">{item.sessionTitle}</div>
              <div className="event-speaker">Speaker: {item.speaker}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
