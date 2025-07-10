import './Hero.css'
import profile_img from '../../assets/hero_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <>
            <div id='home' className="hero">
                <img id='profile_pic' src={profile_img} alt="profile" />
                <h1><span>I'm Somashekar,</span> frontend developer based in Bangalore, Karnataka.</h1>
                <p>Enthusiastic and detail-oriented front-end developer with strong foundational knowledge in HTML, CSS, JavaScript, and ReactJS. Proficient to apply web development skills and contribute to user-centric, responsive web applications. </p>
                <div className="hero-action">
                    <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                    <div className="hero-resume">My Resume</div>
                </div>
            </div>
        </>
    )
}

export default Hero
