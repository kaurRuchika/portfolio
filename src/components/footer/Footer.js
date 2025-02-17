import './Footer.css';

function Footer() {
    return (
        <footer>
            Ruchika Kaur Walia &copy; <span>{new Date().getFullYear()}</span> | <span className="footer-message">Made with love and lots of crea-tea-vity &#9749;!</span>
        </footer>
    )
}

export default Footer;