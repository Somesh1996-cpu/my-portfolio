import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/my_photo.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img id="profile_img" src={profile_img} alt="profile_img" />
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
          <div className="about-right">
            <div className="about-para">
              <p>
                A passionate and detail-oriented Full Stack Developer
                specializing in the MERN stack. I build scalable, responsive,
                and user-friendly web applications by combining modern front-end
                frameworks with robust back-end solutions.
              </p>{" "}
              <p>
                I’m proficient in HTML, CSS, JavaScript, TypeScript, React.js,
                Next.js, and Tailwind CSS on the front end, and skilled in
                Node.js, Express.js, and MongoDB for server-side and database
                development. With a solid understanding of version control using
                Git, I translate ideas and design mockups into functional
                applications while ensuring performance and cross-browser
                compatibility.{" "}
              </p>{" "}
              <p>
                I’ve built several full-stack projects that showcase
                authentication, payments, API integrations, and real-time
                features. Beyond technical expertise, I’m eager to contribute to
                collaborative teams, continuously learn new technologies, and
                deliver seamless user experiences through clean, maintainable
                code.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>TypeScript</p> <hr style={{ width: "55%" }} />
              </div>
              <div className="about-skill">
                <p>Python</p> <hr style={{ width: "75%" }} />
              </div>
              <div className="about-skill">
                <p>ReactJS</p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>Redux-ToolKit</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Tailwind CSS</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next.js</p> <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill">
                <p>Node.js</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Express.js</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Django</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Mongo-DB</p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>Postman</p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>Git & GitHub</p> <hr style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>15+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>5+</h1>
            <p>CERTIFICATIONS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
