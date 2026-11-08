import { eventLogo } from 'assets';
import './EventHeader.scss';

const EventHeader = ({ event }) => (
    <header className="event-header">
        <div className="event-header-logo">
            <img src={eventLogo} alt={`${event.name} logo`} />
        </div>
        <div className="event-header-info">
            <h1 className="event-header-title">{event.name}</h1>
            <div className="event-header-sub">
                <p>{event.date}</p>
                <p>{event.location}</p>
            </div>
        </div>
        <button type="button" className="event-header-edit">
            Edit event
        </button>
    </header>
);

export default EventHeader;
