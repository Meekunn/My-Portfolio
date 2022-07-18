import { ExpDetail, EduDetail } from '../component/ExpDetail/ExpDetail'
import '../styles/pages/exp.scss' 

const details: IDetails [] = [
    {
        id: 1,
        role: "Frontend Developer (Volunteer)",
        office: "Empower Her Community",
        link: "https://empowerher.community/",
        date: "June 2022 - Present",
        li1: "Collaborating with other developers to ensure the technical feasibility of UI/UX designs.",
        li2: "Developing, debugging, and testing reusable code.",
        li3: "Ensuring all codes are properly documented for future reference..",
        li4: "Ensuring all codes are properly documented for future reference.",
    }, {
        id: 2,
        role: "Frontend Developer (Intern)",
        office: "Weixel Tech",
        link: "https://weixeltech.com/",
        date: "April 2021 - Nov 2021",
        li1: "Coded using HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms.",
        li2: "Collaborated with other developers during development processes to confirm creative proposals and design best practices.",
        li3: "Exercised my communication skills by keeping in touch with my supervisor throughout the project's lifecycle via email, and slack.",
        li4: "Researched emerging web technologies for possible incorporation into sites.",
    }, {
        id: 3,
        role: "Technology Intern",
        office: "Bright Network",
        link: "https://www.brightnetwork.co.uk/",
        date: "Dec 2020 - Jan 2021",
        li1: "Learned SDLC best practices within Agile environment to produce rapid iterations for clients.",
        li2: "Learned the importance of effective communication and time management in teamwork.",
        li3: "Delivered the final task in time by exercising my time-management skill.",
        li4: "Worked on a presentation that involved pitching a new software and having a summary of the project's lifecycle."
    }
]

const education: IEducation [] = [
    {
        id: 1,
        role: "Bachelor of Engineering",
        office: "Federal University of Technology Akure",
        link: "https://futa.edu.ng/",
        date: "2018 - Present",
        li1: "Department of Information and Communication Technology",
        li2: "3rd year student"
    }
]

const Experience = () => {

    return(
        <div id="resume">
                <div className='exp-container'>
                <h2>Resume</h2>
                <p className='c-vitae'>For my full curriculum vitae please visit my <a href="https://www.linkedin.com/in/adedamola-orofin-6568641ba/" target="_blank" rel="noreferrer" className='download'>LinkedIn </a> 
                profile or download <a href="/files/OrofinAdedamola_Resume.pdf" target="_blank" rel="noreferrer" download className='download'>here</a> </p>
                <div className="exp-contents">
                    <h3>Work Experience</h3>
                    {details.map((detail: any) => {
                        return (
                            <ExpDetail key={detail.id} role={detail.role} office={detail.office}
                            link={detail.link} date={detail.date} li1={detail.li1} li2={detail.li2} li3={detail.li3} li4={detail.li4} />
                        )
                    })}
                    <h3>Education</h3>
                    {education.map((edu: any) => {
                        return (
                            <EduDetail key={edu.id} role={edu.role} office={edu.office}
                            link={edu.link} date={edu.date} li1={edu.li1} li2={edu.li2} />
                        )
                    })}
                    <h3>Tech Communities</h3>
                    <div className='exp-content'>
                        <h4>Member & Volunteer</h4>
                        <h5><a href="https://empowerher.community/" target="_blank" rel="noreferrer">Empower Her Community</a></h5>
                        <p>June 2022 - present</p>
                    </div>
                    <div className='exp-content'>
                        <h4>Member</h4>
                        <h5><a href="https://shecodeafrica.org/" target="_blank" rel="noreferrer">She Code Africa</a></h5>
                        <p>April 2022 - present</p>
                    </div>
                    <div className='exp-content'>
                        <h4>Member</h4>
                        <h5><a href="https://devcareer.io/" target="_blank" rel="noreferrer">DevCareer Africa</a></h5>
                        <p>April 2022 - present</p>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Experience