import './headerStyling.css'
import image from '../../assets/image_dave.jpeg'
import { FiMoon } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from 'react';

export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <>
      {/* Image div */}
      <div className= "main_navbar_div">
        {/* Start Creating the circular div inside the image */}
        <div className="main_navbar_component">
          <div className='img_div'>
            <a href="/">
              <img src={image} alt="" className='img_navbar' href="home"/>
            </a>
          </div>
          <div className='circular_component'>
            <div className='content_navbar'>
              <li>
                <ul><a href="projects">Projects</a></ul>
              </li>
              <li>
                <ul><a href="aboutme">About me</a></ul>
              </li>
              <li>
                <ul><a href="other">Other</a></ul>
              </li>
            </div>
          </div>
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div className="burger flex items-center justify-between">
            <a href="/">
              <img src="https://designbygio.it/images/logo.png" alt="logo" />
            </a>
            <nav>
              <section className="MOBILE-MENU flex">
                <div
                  className="HAMBURGER-ICON space-y-2"
                  onClick={() => setIsNavOpen((prev) => !prev)}
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="aboutme">About me</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="projects">Projects</a>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <a href="other">Other</a>
                    </li>
                  </ul>
                </div>
              </section>
            </nav>
          </div>
          <div className='night_mode_div'>
            <button onClick={handleTheme}>
              {theme === 'dark' ? <FiMoon className='night_icon' size={30}></FiMoon> : <MdOutlineLightMode className='night_icon' size={30}></MdOutlineLightMode>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

