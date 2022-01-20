import styles from './Logo.module.css';
import logo from '../images/logo.svg';

const Logo = () => {
    return <img src={logo} alt='Room logo' className={`img-fluid ${styles.AppLogo}`}/>}

export default Logo;