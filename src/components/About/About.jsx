import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my_photo.jpg'

const About = () => {
    return (
        <>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt="theme_pattern" />
                </div>
                <div className="about-section">
                    <div className="about-left">
                        <img id='profile_img' src={profile_img} alt="profile_img" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>A passionate and detail-oriented Front-End Developer with a solid foundation in building responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and ReactJS, with a strong understanding of modern front-end development practices and version control using Git. Skilled in translating design mockups into functional web applications and optimizing performance across different browsers and devices. Eager to contribute to collaborative teams, grow technical expertise, and deliver seamless user experiences through clean and maintainable code. </p>
                            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: '85%' }} /></div>
                            <div className="about-skill"><p>JavaScript</p> <hr style={{ width: '65%' }} /></div>
                            <div className="about-skill"><p>ReactJS</p> <hr style={{ width: '70%' }} /></div>
                            <div className="about-skill"><p>Git & GitHub</p> <hr style={{ width: '65%' }} /></div>
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>6+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>10+</h1>
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
    )
}

export default About
