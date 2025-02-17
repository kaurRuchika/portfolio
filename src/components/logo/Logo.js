import logoImg from '../../assets/logo.png';

export default function Logo({ className }) {
    return (
        <img src={logoImg} alt="logo" className={className}></img>
    )
}