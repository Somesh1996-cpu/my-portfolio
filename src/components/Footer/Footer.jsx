import './Footer.css'
import footer_logo from '../../assets/name_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <img id="footer-logo" src={footer_logo} alt="footer-logo" />
                        <p>I have 6+ years work experience with the companies like ITC Limited, ETG, Conneqt Business Solutions & MyGate.</p>
                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_icon} alt="user_icon" />
                            <input type="email" placeholder='Enter your email' />
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left">&copy;2025 Somashekar. All rights reserved. </p>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
