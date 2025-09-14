import "./Hero.css";
import profile_img from "../../assets/hero_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img id="profile_pic" src={profile_img} alt="profile" />
        <h1>
          <span>I'm Somashekar,</span> full-stack-developer based in Bangalore,
          Karnataka.
        </h1>
        <p>
          A self-taught Full Stack Developer specializing in the MERN stack.
          Passionate about building scalable web apps, I’m committed to
          continuous learning and tackling new challenges.{" "}
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div>
            <a
              className="hero-resume"
              href="/Resume_Somashekar_B_E_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
