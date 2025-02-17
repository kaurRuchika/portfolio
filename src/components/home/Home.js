import { useEffect } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

function Home() {
  useEffect(() => {
    let typed;

    if (window.innerWidth > 768) {
      typed = new Typed("#typed", {
        strings: ["Developer", "Designer", "Tea Lover"],
        typeSpeed: 120, // Even slower typing speed
        backSpeed: 60, // Slower backspacing speed
        backDelay: 1500, // Longer pause before backspacing
        startDelay: 500, // Small delay before starting
        loop: true,
      });
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  return (
    <main>
      <div className="main-container">
        <h1>Ruchika Kaur is a <span id="typed"></span></h1>
        <h2>Welcome to my portfolio</h2>
        
        {/* Social Media Icons with FontAwesome */}
        <div className="icons">
          <a href="https://www.linkedin.com/in/ruchika-kaur-walia-a857a4104/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/kaurRuchika" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Home;
