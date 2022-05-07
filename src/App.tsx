import Navbar from './component/Navbar/Navbar'
import SideBar from './component/SideBar/SideBar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './component/Footer/Footer'

import './App.scss'

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
            <Contact />
            <Footer />
          </>
      </div>
  );
}

export default App;