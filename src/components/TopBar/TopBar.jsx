import { MenuIcon, RfLogo } from 'assets';
import './TopBar.scss';

const TopBar = ({ title, navOpen, onMenuClick, menuButtonRef }) => (
    <header className="top-bar" inert={navOpen}>
        <button
            ref={menuButtonRef}
            type="button"
            className="top-bar-menu"
            aria-label="Open navigation"
            aria-controls="side-bar"
            aria-expanded={navOpen}
            onClick={onMenuClick}
        >
            <MenuIcon aria-hidden="true" />
        </button>
        <RfLogo aria-hidden="true" />
        <span className="top-bar-title">{title}</span>
    </header>
);

export default TopBar;
