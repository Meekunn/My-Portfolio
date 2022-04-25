import '../styles/exp.scss' 

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
        role: "Intern",
        office: "Weixel Tech",
        link: "https://weixeltech.com/",
        date: "April 2021 - Nov 2021",
        li1: "Worked as a Junior Web Developer",
        li2: "Learned ReactJS and NextJS frameworks.",
        li3: "Learned to use Firebase for web applications"
    }
]

const Experience = () => {

    return(
        <div id="experience" className='experience'>
               <div className='exp-container'>
               <h2>My Experience</h2>
               <div className="exp-contents">
                    <div className="exp-content">
                       <button>Bright Network</button>
                       <div className='details'>
                            <h3>Intern @<a href="https://www.brightnetwork.co.uk/" target="_blank">Bright Network</a></h3>
                            <p>Dec 2020 - Jan 2021</p>
                            <ul>
                                <li>Remote Internship</li>
                                <li>Acquired skills in time management, teamwork, and collaboration.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="exp-content">
                       <button>Weixel Tech</button>
                       <div className='details'>
                            <h3>Intern @<a href="https://weixeltech.com/" target="_blank">Weixel Tech</a></h3>
                            <p>April 2021 - Nov 2021</p>
                            <ul>
                                <li>Worked as a Junior Web Developer</li>
                                <li>Learned ReactJS and NextJS frameworks.</li>
                                <li>Learned to use Firebase for web applications</li>
                            </ul>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Experience