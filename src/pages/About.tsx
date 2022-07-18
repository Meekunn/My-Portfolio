import Portrait from "../images/image.jpg"
import '../styles/pages/about.scss'

const About = () => {
    return(
        <div id="about">  
            <div className="about-container">
                <h2>About Me</h2>
                <div className="content">
                    <div className="p-content">
                        <div className="bio">
                            <p>Hola! My name is Adedamola Ayomikun Orofin, friends call me Meekun. I enjoy building websites and web applications. My career in web development started back in 2020 during the covid-19 lockdown. I wanted to learn a new skill, and I thought to myself, "why not learn how to build a website?"</p>
                            <p>So far, I've had the privilege to intern at a Startup company called <a href="https://weixeltech.com/" target='_blank' rel="noreferrer">Weixel Tech</a> in Ondo State, Nigeria. My main focus now is to work with talented people in the field to build applications that will create an impact in Nigeria and the world at large.</p>
                            <p>My other focus is on networking with people and improving my skills. I hope to become a Fullstack developer in the coming year.</p>
                            <p>Myself and another frontend developer recently just completed a todo-app. The app has the basic functionalities which include adding, deleting, editing and checking tasks. We call it <a href="https://ehc-todoapp.web.app/" target='_blank' rel="noreferrer">Tsks</a>; this is the first version and we hope to add more features later on. The application was built on ReactJS and Firebase for the backend services.</p>
                            <p>Currently, I'm working with a team on another project. The project is a school website with a result checker. I'm working with UI/UX Designers, Backend and Frontend developers. You can follow me on Twitter or Github to follow up on the project.</p>
                            <p style={{textIndent: 0}}>Here are the technologies I work with now</p>
                        </div>
                        <ul className="skills">
                            <li>ReactJS</li>
                            <li>Firebase</li>
                            <li>HTML &#38; CSS/SASS</li>
                            <li>Git</li>
                            <li>TypeScript</li>
                            <li>Github</li>
                            <li>Chakra-UI</li> 
                        </ul>
                    </div>
                    <div className="image">
                        <img src={Portrait} alt='self-portrait' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About