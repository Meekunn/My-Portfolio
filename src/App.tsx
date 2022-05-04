import Navbar from './component/Navbar/Navbar'
import SideBar from './component/SideBar/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Projects'
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
            <Experience />
            <Project />
            {/* <Contact /> */}
          </>
      </div>
  );
}

export default App;