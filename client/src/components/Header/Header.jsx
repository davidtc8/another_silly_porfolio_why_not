import './headerStyling.css'
import image from '../../assets/image_dave.jpeg'
import { FiMoon } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { useState } from 'react';

export default function Header() {

  const scrollToExperience = () => {
    const experienceElement = document.getElementById('experience');
    if (experienceElement) {
      experienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

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
                <ul><a href="aboutus">About me</a></ul>
              </li>
              <li>
                <ul><a href="projects">Projects</a></ul>
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
                      <a href="aboutus">About me</a>
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
            <FiMoon className='night_icon' size={30}>
            </FiMoon>
          </div>
        </div>
        <div className='welcome_section'>
          <div className='welcome_letters_section'>
            <span className='hey_there_welcome_section text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
              Hey there, I'm
            <br />
            <span className='name_welcome_section text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
              David Torres!
              <span className='icon_robot'> 🤖 </span>
            </span> 
            <br />
            </span>
            <br />
            <span className='about_me_welcome_section text-gray-400 text-xl font-normal'>
              <p className='first_about_me_p'>
                Software Engineer and tech enthusiast based in Monterrey, Mexico 🇲🇽
              </p>
              <p>
                Welcome to this blog/portfolio/site where you'll be able to see the latest work I'm working on.
              </p> 
            </span>
            <a href="my_journey">
              <button type="button" className="my_journey_button text-white border border-yellow-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100">
                My Journey
              </button>
            </a>
            <a href="https://www.linkedin.com/in/david-tc/" target="_blank">
              <button type="button" className="my_journey_button text-white border border-yellow-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100">
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/davidtc8" target="_blank">
              <button type="button" className="my_journey_button text-white border border-yellow-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100">
                GitHub
              </button>
            </a>

            <span className="scroll-btn">
              <a>
                <span className="mouse" onClick={scrollToExperience} style={{cursor: "pointer"}}>
                  <span>
                  </span>
                </span>
              </a>
              <p>scroll me</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

