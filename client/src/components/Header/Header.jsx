import './headerStyling.css'
import image from '../../assets/image_dave.jpeg'
import { FiMoon } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../../features/theme/themeReducer'

function Header({ theme, toggleTheme}) {

  const rootHTML = document.getElementById('root')
  const handleTheme = () => {
    console.log(rootHTML.classList[0])
    if(rootHTML.classList[0] === 'darkModeTheme') {
      rootHTML.classList.remove('darkModeTheme')
      rootHTML.classList.add('lightModeTheme')
    } else if (rootHTML.classList[0] === 'lightModeTheme'){
      rootHTML.classList.remove('lightModeTheme')
      rootHTML.classList.add('darkModeTheme')
    }
    toggleTheme(); // Dispatch the toggleTheme action
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* Image div */}
      <div className= {`${theme === 'dark' ? 'darkModeTheme' : 'lightModeTheme'}`}>
        {/* Start Creating the circular div inside the image */}
        <div className={`main_navbar_component ${theme === 'dark' ? 'main_welcome_section_dark_mode' : 'main_welcome_section_light_mode'}`}>
          <div className='img_div'>
            <a href="/">
              <img src={image} alt="" className='img_navbar' href="home"/>
            </a>
          </div>
          <div className={`circular_component ${theme === 'dark' ? 'circular_component_black' : 'circular_component_light'}`}>
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

                <div className={`${isNavOpen
                  ? theme === 'dark'
                    ? "showMenuNav showMenuNav_dark_theme"
                    : theme === 'light'
                    ? "showMenuNav showMenuNav_light_theme"
                    : null
                  : "hideMenuNav"}`}
                >
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <svg
                      className={`h-8 w-8 ${theme === 'dark' ? 'text-gray-600' : 'text-cyan-600'}`}
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
                    <li className={`border-b ${theme === 'dark' ? 'border-gray-400' : 'border-blue-400'} my-8 uppercase`}>
                      <a className={`${theme === 'dark' ? 'text-gray-600' : 'text-cyan-600'}`}href="projects">Projects</a>
                    </li>
                    <li className={`border-b ${theme === 'dark' ? 'border-gray-400' : 'border-blue-400'} my-8 uppercase`}>
                      <a className={`${theme === 'dark' ? 'text-gray-600' : 'text-cyan-600'}`} href="aboutme">About me</a>
                    </li>
                    <li className={`border-b ${theme === 'dark' ? 'border-gray-400' : 'border-blue-400'} my-8 uppercase`}>
                      <a className={`${theme === 'dark' ? 'text-gray-600' : 'text-cyan-600'}`} href="other">Other</a>
                    </li>
                  </ul>
                </div>
              </section>
            </nav>
          </div>
          <div className={`night_mode_div ${theme === 'dark' ? 'night_icon_dark' : 'night_icon_light'}`}>
            <button onClick={handleTheme}>
              {theme === 'dark' ? <FiMoon className='night_icon' size={30}></FiMoon> : <MdOutlineLightMode className='night_icon' size={30}></MdOutlineLightMode>}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme // Accessing the theme state from Redux store
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(toggleTheme()) // Dispatch the toggleTheme action
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);