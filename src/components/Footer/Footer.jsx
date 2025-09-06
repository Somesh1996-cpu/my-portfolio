import "./Footer.css";
import footer_logo from "../../assets/name_logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img id="footer-logo" src={footer_logo} alt="footer-logo" />
            <p>
              I started my career in the finance domain, where I gained strong
              analytical and problem-solving skills. Over time, I discovered my
              true passion for technology and transitioned into the IT field,
              focusing on web development. To pursue this passion, I learned
              front-end, back-end, and database technologies, enabling me to
              build complete and scalable web applications. With a blend of
              business acumen and technical expertise, I aim to create solutions
              that are not only functional but also impactful.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="user_icon" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy;2025 somashekarbe1996@gmail.com. All rights reserved.{" "}
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
