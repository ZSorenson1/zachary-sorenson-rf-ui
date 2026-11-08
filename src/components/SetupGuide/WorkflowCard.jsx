const WorkflowCard = ({ icon: Icon, title, description, variant, onClick }) => (
    <button
        type="button"
        className={`workflow-card${variant ? ` workflow-card--${variant}` : ''}`}
        onClick={onClick}
    >
        <span className="workflow-card-header">
            <span className="workflow-card-icon">
                <Icon aria-hidden="true" />
            </span>
            {title && <span className="workflow-card-title">{title}</span>}
        </span>
        <span className="workflow-card-description">{description}</span>
    </button>
);

export default WorkflowCard;
