import { useEffect, useRef, useState } from "react";
import { 
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import Home from "../home/Home";
import Logo from "../logo/Logo";
import About from "../about/About";
import Projects from "../projects/Projects";
import Work from "../work/Work";
import Contact from "../contact/Contact";
import './Navigation.css';

function Navigation() {
    const pathName = useLocation().pathname;
    const toggleContent = useRef(null);
    const navContent = useRef(null);    
    const [isHome, setIsHome] = useState(pathName === "/portfolio" || pathName === "/portfolio/");
    
        // Update isHome when pathName changes
        useEffect(() => {
            setIsHome(pathName === "/portfolio" || pathName === "/portfolio/");
        }, [pathName]);
        
    const handleResize = () => {
        if (window.innerWidth >= 992 && navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    }

    const handleToggle = (e) => {
        const path = e.composedPath(); // Use composedPath() for better browser compatibility
    
        if (toggleContent.current && path.includes(toggleContent.current)) {
            navContent.current.classList.toggle('show');
        } else if (navContent.current && !path.includes(navContent.current) && navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    };        

    const handleScroll = () => {
        // Remove 'show' class when user scrolls
        if (navContent.current && navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        window.addEventListener('click', handleToggle);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleToggle);
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

    useEffect(() => {
        if (navContent.current.classList.contains('show')) {
            navContent.current.classList.remove('show');
        }
    }, [pathName])

    return (
        <>
                <header>                
                    {!isHome ? <Logo className="nav-logo" /> : null}                
                    <nav className="navbar">
                        <button className="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse"
                                data-target="#navbar-content"
                                aria-controls="navbar-content"
                                aria-expanded="false"
                                ref={toggleContent}>
                            <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                            <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                            <span className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'toggler-icon toggler-icon-home' : 'toggler-icon' }></span>
                        </button>

                    <div className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'navbar-collapse navbar-collapse-home' : 'navbar-collapse' } ref={navContent} id="navbar-content">
                        <ul className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'navbar-nav navbar-nav-home' : 'navbar-nav' }>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio" onClick={() => setIsHome(true)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/about" onClick={() => setIsHome(false)}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/projects" onClick={() => setIsHome(false)}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/work" onClick={() => setIsHome(false)}>Work Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={ pathName === "/portfolio" || pathName === "/portfolio/" ? 'nav-link nav-link-home' : 'nav-link' } to="/portfolio/contact" onClick={() => setIsHome(false)}>Contact</Link>
                            </li>
                        </ul>
                    </div>                        
                </nav>
            </header>                

            <Switch>
                <Route path="/portfolio/contact" component={Contact} />
                <Route path="/portfolio/projects" component={Projects} />
                <Route path="/portfolio/work" component={Work} />
                <Route path="/portfolio/about" component={About} />
                <Route path="/portfolio" exact component={Home} />                    
            </Switch>
        </>
    )
}

export default Navigation;