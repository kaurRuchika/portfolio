import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './BackToTopButton.css'

export default function BackToTopButton() {
    const buttonContent = useRef(null)

    const handleClick = () => window.scroll({ top: 0, behavior: "smooth" });    

    const showButton = () => {
        if (window.pageYOffset > 40) {
            buttonContent.current.classList.add('back-to-top-button-show')
        } else {
            buttonContent.current.classList.remove('back-to-top-button-show')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showButton);

        return () => {
            window.removeEventListener('scroll', showButton);
          }
    }, [])

    return (
        <button className="back-to-top-button" onClick={handleClick} ref={buttonContent}>
            <div className="fa-layers fa-fw">
                <FontAwesomeIcon id="icon1" icon={faChevronUp} size="3x" color="#007bff" />
                <FontAwesomeIcon icon={faChevronUp} size="3x" color="#007bff" />
            </div>            
        </button>
    )
}