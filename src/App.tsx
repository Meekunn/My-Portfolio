import Navbar from './component/Navbar/Navbar'
import SideBar from './component/SideBar/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './component/Experience'
import Project from './component/Projects'
import Contact from './pages/Contact'

import './App.css'

function App() {

  return (
      <div className='App'>
          <Navbar />
          <SideBar />
          <>
            <Home />
            <About />
            {/* <Experience />
            <Project />
            <Contact /> */}
          </>
      </div>
  );
}

export default App;