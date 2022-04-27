import ExpDetail from '../component/ExpDetail/ExpDetail'
import '../styles/pages/exp.scss' 

const details: IDetails [] = [
    {
        id: 1,
        role: "Intern",
        office: "Bright Network",
        link: "https://www.brightnetwork.co.uk/",
        date: "Dec 2020 - Jan 2021",
        li1: "Remote Internship",
        li2: "Acquired skills in time management, teamwork, and collaboration."
    },{
        id: 2,
        role: "Junior Web Developer",
        office: "Weixel Tech",
        link: "https://weixeltech.com/",
        date: "April 2021 - Nov 2021",
        li1: "Worked as a Junior Web Developer",
        li2: "Learned ReactJS and NextJS frameworks.",
        li3: "Learned to use Firebase for web applications"
    }
]

const education: IDetails [] = [
    {
        id: 1,
        role: "Bachelor of Engineering",
        office: "Federal University of Technology Akure",
        link: "https://futa.edu.ng/",
        date: "2018 - Present",
        li1: "Department of Information and Communication Technology",
        li2: "3rd year student",
        li3: "CGPA of 4.66"
    }
]

const Experience = () => {

    return(
        <div id="resume" className='experience'>
                <div className='exp-container'>
                <h2>Resume</h2>
                <p className='c-vitae'>For my full curriculum vitae please visit my <a href="https://www.linkedin.com/in/adedamola-orofin-6568641ba/" target="_blank" className='download'>LinkedIn </a> 
                profile or download <a href="/files/OrofinAdedamola_CV.pdf" target="_blank" download className='download'>here</a> </p>
                <div className="exp-contents">
                    <h3>Work Experience</h3>
                    {details.map((detail: any) => {
                        return (
                            <ExpDetail key={detail.id} role={detail.role} office={detail.office}
                            link={detail.link} date={detail.date} li1={detail.li1} li2={detail.li2} li3={detail.li3} />
                        )
                    })}
                    <h3>Education</h3>
                    {education.map((edu: any) => {
                        return (
                            <ExpDetail key={edu.id} role={edu.role} office={edu.office}
                            link={edu.link} date={edu.date} li1={edu.li1} li2={edu.li2} li3={edu.li3} />
                        )
                    })}
                    <h3>Tech Communities</h3>
                    <div className='exp-content'>
                        <h4>Member</h4>
                        <h5><a href="https://shecodeafrica.org/" target="_blank" rel="noopener noreferrer">She Code Africa</a></h5>
                        <p>April 2022 - present</p>
                    </div>
                    <div className='exp-content'>
                        <h4>Member</h4>
                        <h5><a href="https://devcareer.io/" target="_blank" rel="noopener noreferrer">DevCareer Africa</a></h5>
                        <p>April 2022 - present</p>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Experience