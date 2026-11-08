import Module from './Module.jsx';
import './SetupGuide.scss';

const SetupGuide = ({ modules }) => (
    <>
        <section className="setup-intro">
            <h2 className="setup-title">Event setup guide</h2>
            <p className="setup-desc">
                See the available list of modules below. We suggest that you start with the attendee module.
            </p>
        </section>
        {modules.map((module) => (
            <Module key={module.id} module={module} />
        ))}
    </>
);

export default SetupGuide;
