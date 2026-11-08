import { useCallback, useEffect, useRef, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router';
import './App.scss';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import EventHeader from './components/EventHeader/EventHeader';
import Attendees from './views/Attendees';
import Guide from './views/Guide';
import Content from './views/Content';
import Exhibitors from './views/Exhibitors';
import { event } from './data/event';

function App() {
    const [navOpen, setNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(() => !window.matchMedia('(min-width: 768px)').matches);
    const menuBtnRef = useRef(null);

    const closeNav = useCallback(() => setNavOpen(false), []);

    useEffect(() => {
        const widthWatcher = window.matchMedia('(min-width: 768px)');
        const handleChange = (e) => {
            setIsMobile(!e.matches);
            if (e.matches) {
                setNavOpen(false);
            }
        };
        widthWatcher.addEventListener('change', handleChange);
        return () => widthWatcher.removeEventListener('change', handleChange);
    }, []);

    return (
        <HashRouter>
            <div className="App">
                {isMobile && (
                    <TopBar
                        title={event.name}
                        navOpen={navOpen}
                        onMenuClick={() => setNavOpen(true)}
                        menuButtonRef={menuBtnRef}
                    />
                )}
                <SideBar open={navOpen} onClose={closeNav} isMobile={isMobile} />
                <main className="App-body" inert={navOpen}>
                    <EventHeader event={event} />
                    <Routes>
                        <Route path='/' element={<Navigate to="attendees" />}></Route>
                        <Route path="guide" element={<Guide />}></Route>
                        <Route path='attendees' element={<Attendees />}></Route>
                        <Route path="content" element={<Content />}></Route>
                        <Route path="exhibitors" element={<Exhibitors />}></Route>
                    </Routes>
                </main>
            </div>
        </HashRouter>
    );
}

export default App;
