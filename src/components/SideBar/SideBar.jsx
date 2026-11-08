import { useRef, useState } from 'react';
import { RfLogo, SearchSmallIcon, eventLogoThumb } from '../../assets';
import { Link } from 'react-router';
import { event, navItems } from '../../data/event';
import './SideBar.scss';

const SideBar = ({ open, onClose, isMobile }) => {
    const [activeId, setActiveId] = useState('attendees');
    const [expandedId, setExpandedId] = useState('attendees');
    const [query, setQuery] = useState('');
    const closeButtonRef = useRef(null);

    const filterNav = (items, query) => {
        if (!query) {
            return items;
        }
        query = query.trim().toLowerCase();

        return items
            .map((item) => {
                const matchLabel = item.label.toLowerCase().startsWith(query);
                const children = item.children?.filter((child) => child.toLowerCase().startsWith(query));
                if (matchLabel) {
                    return item;
                } 
                if (children?.length) {
                    return { ...item, children };
                }
                return null;
            })
            .filter(Boolean);
    };

    const visibleItems = filterNav(navItems, query);

   

    const selectItem = (item) => {
        setActiveId(item.id);
        if (item.children) {
            setExpandedId((current) => (current === item.id ? null : item.id));
        }
        if(isMobile) {
            onClose();
        }
    };

    return (
        <>
            <div className={`side-bar-backdrop${open ? ' open' : ''}`} aria-hidden="true" onClick={onClose} />
            <aside id="side-bar" className={open ? 'open' : undefined}>
                <div id="icons">
                    <div className="top-icons">
                        <Link className="logo" to="/" aria-label="RainFocus Home">
                            <RfLogo aria-hidden="true" />
                        </Link>
                        <button type="button" className="event" aria-label={event.name}>
                            <img className="optionThumb" src={eventLogoThumb} alt="" />
                        </button>
                    </div>
                    <button type="button" className="user" aria-label="Account">
                        {event.userInitials}
                    </button>
                </div>

                <nav className="nav" aria-label="Event Navigation">
                    <div className="nav-header">
                        <p className="event-name">{event.name}</p>
                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="close"
                            aria-label="Close Navigation"
                            onClick={onClose}
                        >
                            ×
                        </button>
                    </div>
                    <p className="event-details">
                        <span>{event.locationShort}</span>
                        <span aria-hidden="true">•</span>
                        <span>{event.date}</span>
                    </p>

                    <label className="search">
                        <SearchSmallIcon aria-hidden="true" />
                        <input
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </label>

                    <ul className="menu">
                        {visibleItems.map((item) => {
                            const isActive = item.id === activeId;
                            const isExpanded = item.children && (item.id === expandedId || query.trim() !== '');

                            return (
                                <li key={item.id}>
                                    <Link 
                                        to={"/" + item.label.toLowerCase()}
                                        type="button"
                                        className={`item${isActive ? ' active' : ''}`}
                                        aria-current={isActive ? 'page' : undefined}
                                        aria-expanded={item.children ? isExpanded : undefined}
                                        onClick={() => selectItem(item)}
                                    >
                                        <span className="item-icon" aria-hidden="true" />
                                        {item.label}
                                    </Link>

                                    {isExpanded && (
                                        <ul className="submenu">
                                            {item.children.map((child) => (
                                                <li key={child}>
                                                    <button type="button" className="subitem" onClick={onClose}>
                                                        {child}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default SideBar;
