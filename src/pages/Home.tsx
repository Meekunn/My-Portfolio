import Typewriter from "typewriter-effect"
import Animation from "../component/Animation/Animation"
import Cartoonify from "../images/Cartoonify.png"

import "../styles/pages/home.scss"

const Home = () => {
    return(
        <div id="home">
            <Animation />
            <>
                <div className="home-container">
                    <div className="intro">
                        <h1>Hola, my name is</h1>
                        <h2>Adedamola Orofin</h2>
                        <Typewriter
                        options={{
                            strings: ["Web Developer", "Engineer", "Student"],
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            deleteSpeed: 50,
                            cursorClassName: "cursor",
                            }}
                        />
                    </div>
                    <div className='png'>
                        <img src={Cartoonify} alt="Avatar png"/>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Home