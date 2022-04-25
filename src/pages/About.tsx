import Image from "../images/image.jpg"
import '../styles/about.scss'

const About = () => {
    return(
        <div className="about" id="about">  
            <div className="about-container">
                <h2>About Me</h2>
                <div className="content">
                    <div className="p-content">
                    <div>
                        <p>Hola! My name is Adedamola but you can call me Meekun. I love creating and building websites and web applications. My career in web development started back in 2020 during the covid-19 lockdown. I wanted to learn a new skill and I thought to myself, "why not learn how to build a website?"</p>
                        <p>So far, I've had the privilege to intern at a Startup company named <a href="https://weixeltech.com/" target='_blank'>Weixel Tech</a> in Ondo State, Nigeria. My main focus now is to work with talented people in the field to build applications that will create impact in Nigeria and the world at large. I'm hoping to work on aspects regarding power supply in the country.</p>
                        <p>My other focuses are on improving my skills, working with well-known companies; basically, network with people. I hope to become a Fullstack developer in a year to come and eventually dive into Blockchain development.</p>
                        <p>I recently just completed a school project. It's a web application that allows students locate lecturers' offices and know their availability status. I call it <a href="https://findit-4cd7f.web.app/" target='_blank'>FindiT-App</a>. The application was built on ReactJS, using Typescript and Firebase as the backend</p>
                        <p>Here are the technologies I work with now</p>
                    </div>
                    <ul className="skills">
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>HTML &#38; CSS</li>
                        <li>Git</li>
                        <li>JavaScript</li>
                        <li>Github</li> 
                    </ul>
                    </div>
                    <div className="image">
                    <img src={Image} alt='picture' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About