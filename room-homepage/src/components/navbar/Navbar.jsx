import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import styles from './Navbar.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState("Home");
    const [hover, setHover] = useState('');
    const handleActive = (menu) => {
    setActive(menu);
  };
  const handleHover = (menu) => {
    setHover(menu);
  };

    return (
        <div className={`${styles.navbar__wrapper}`}>
            <div className='container'>
                <nav className={`${styles.navbar}`} role={navigation}>
                    <div className={`${styles.logo}`}>
                        <Link to="/"><Logo /></Link>
                    </div>
                    <ul className={isMobile ? `${styles.nav_links_mobile}` : `${styles.nav_links}`} onClick={() => setIsMobile(false)}>
                        <li className={`${styles.nav_link} ${hover === "Home" ? styles.hover : ""} ${active === "Home" ? styles.hover : ""}`} onClick={() => { handleActive("Home");}} onMouseEnter={() => {handleHover('Home')}}>
                        <Link to="/">Home</Link>
                        </li>
                        <li className={`${styles.nav_link} ${ hover === "Shop" ? styles.hover : ""}`}  onClick={() => {handleActive("Shop");}} onMouseEnter={() => {handleHover('Shop')}}>
                        <Link to="/shop" className="blog">
                            Shop
                        </Link>
                        </li>
                        <li className={`${styles.nav_link} ${ hover === "About" ? styles.hover : ""}`}  onClick={() => {handleActive("About");}} onMouseEnter={() => {handleHover('About')}}>
                        <Link to="/about" className="blog">
                            About
                        </Link>
                        </li>
                        <li className={`${styles.nav_link} ${ hover === "Contact" ? styles.hover : ""}`}  onClick={() => {handleActive("Contact");}} onMouseEnter={() => {handleHover('Contact')}}>
                        <Link to="/contact" className="blog">
                            Contact
                        </Link>
                        </li>
                    </ul>
                    <button className={`${styles.mobile_menu_icon}`} onClick={()=>setIsMobile(!isMobile)}>
                    {isMobile ? ( <FontAwesomeIcon icon={["fas", "times"]} className={`${styles.mobile_icon__t}`}/>) : ( <FontAwesomeIcon icon={["fas", "bars"]} className={`${styles.mobile_icon}`}/>)}
                  </button>
                </nav>
            </div>
        </div>
    )
}
export default Navbar;