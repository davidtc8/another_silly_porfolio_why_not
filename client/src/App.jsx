import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import WelcomeSection from './components/Welcome/WelcomeSection'
import AboutMe from './components/AboutMe/Aboutme'
import './appStyling.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomeSection />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
