import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import WelcomeSection from './components/Welcome/WelcomeSection'
import AboutMe from './components/AboutMe/Aboutme'
import Projects from './components/Projects/Projects'
import './appStyling.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
