import { useId } from 'react';
import WorkflowCard from './WorkflowCard.jsx';

const SettingsRow = ({ settings }) => (
    <ul className="settings-row">
        {settings.map((setting) => (
            <li key={setting.id}>
                <button type="button" className="settings-row-item">
                    <span className="settings-row-title">{setting.title}</span>
                    <span className="settings-row-description">{setting.description}</span>
                </button>
            </li>
        ))}
    </ul>
);

const Module = ({ module }) => {
    const panelId = useId();
    const Icon = module.icon;

    return (
        <section className="module">
            <h3>
                <Icon aria-hidden="true" />
                {module.title}
            </h3>

            <div id={panelId} className="module-steps">
                {module.steps.map((step, index) => (
                    <div key={step.id} className="setup-step">
                        <p className="setup-step-label">
                           <b>Step {index + 1}:</b> {step.label}
                        </p>
                        {step.settings && <SettingsRow settings={step.settings} />}
                        {step.cards && (
                            <div className="card-grid">
                                {step.cards.map(({ id, ...card }) => (
                                    <WorkflowCard key={id} {...card} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Module;
