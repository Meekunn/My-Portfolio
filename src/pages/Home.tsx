import Typewriter from "typewriter-effect"
import Animation from "../component/Animation"
import Birdy from '../images/bird.png'
import "../styles/home.scss"

const Home = () => {
    return(
        <div id="home" style={{backgroundColor: "#1a1a1d", height: "100vh"}}>
            <Animation />
            <div className="home-wrapper">
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
                        <img src={Birdy} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home