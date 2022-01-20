import styles from './Home.module.css'
import hero from '../../components/images/desktop-image-hero-1.jpg'
import heroImg from '../../components/images/desktop-image-hero-2.jpg'
import heroImage from '../../components/images/desktop-image-hero-3.jpg'
import aboutDark from '../../components/images/image-about-dark.jpg'
import aboutLight from '../../components/images/image-about-light.jpg'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Carousel, { CarouselItem } from '../../components/carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'

const Home = () => {
    const [hover, setHover] = useState('');
    const handleHover = (menu) => {
        setHover(menu);
    };

    return (
        <div className={styles.home__wrapper}>
            <Navbar />
            <Carousel>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={hero} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>Discover innovative<br/>ways to decorate</h2>
                            <p className={styles.item__text}>We provide unmatched quality, comfort, <br/>and style for property owners across the country.<br/> Our experts combine form and function in bringing <br/>your vision to life. Create a room in your own <br/>style with our collection and make your property<br/> a reflection of you and what you love.</p>
                            <p className={`${styles.item__link}`}><Link to='/' className={`${styles.item__a} ${hover === "Shop" ? styles.hover : ""}`} onMouseEnter={() => {handleHover('Shop')}}>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={heroImg} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>We are available<br/> all across the globe</h2>
                            <p className={styles.item__text}>With stores all over the world, it's easy <br/>for you to find furniture for your home or <br/>place of business. Locally, we’re in most major <br/>cities throughout the country. Find the branch <br/>nearest you using our store locator. <br/>Any questions? Don't hesitate to contact us today.</p>
                            <p className={`${styles.item__link}`}><Link to='/' className={`${styles.item__a} ${hover === "Shop" ? styles.hover : ""}`} onMouseEnter={() => {handleHover('Shop')}}>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className={styles.home__item}>
                        <div className={styles.carousel__child}>
                            <img src={heroImage} alt='Design' className={styles.carousel__image}/>
                        </div>
                        <div className={styles.carousel__notes}>
                            <h2 className={styles.item__title}>Manufactured with <br/>the best materials</h2>
                            <p className={styles.item__text}>Our modern furniture store provide a high level of quality. <br/>Our company has invested in advanced technology to ensure <br/>that every product is made as perfect and as consistent as possible. <br/>With three decades of experience in this industry, we understand <br/>what customers want for their home and office.</p>
                            <p className={`${styles.item__link}`}><Link to='/' className={`${styles.item__a} ${hover === "Shop" ? styles.hover : ""}`} onMouseEnter={() => {handleHover('Shop')}}>Shop now <FontAwesomeIcon icon={['fas', 'arrow-right']} className={styles.right}/></Link></p>
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
            <div className={styles.home__page}>
                <div className={styles.home__image}>
                    <img alt='About' src={aboutDark} className={styles.about__image}/>
                </div>
                <div className={styles.about__text__con}>
                    <h2 className={styles.about__title}>About our furniture</h2>
                    <p className={styles.about__text}>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div className={styles.home__image}>
                    <img alt='About' src={aboutLight} className={styles.about__image}/>
                </div>
            </div>
        </div>
    );
}

export default Home;