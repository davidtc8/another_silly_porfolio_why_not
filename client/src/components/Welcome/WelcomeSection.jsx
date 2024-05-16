import '../Header/headerStyling.css'
import { useState } from 'react';
import { connect } from 'react-redux';
import Experience from '../Experience/Experience'

function WelcomeSection({ theme }) {

    const rootHTML = document.getElementById('root')
    if(theme === 'dark') {

    }
    theme === 'dark' ? rootHTML.classList.add('darkModeTheme') : rootHTML.classList.add('lightModeTheme')

    const scrollToExperience = () => {
        const experienceElement = document.getElementById('experience');
        if (experienceElement) {
          experienceElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <>
    <div className={`main_welcome_section ${theme === 'dark' ? 'main_welcome_section_dark_mode' : 'main_welcome_section_light_mode'}`}>
        <div className={`welcome_section ${theme === 'dark' ? 'welcome_section_dark' : 'welcome_section_light'}`}>
            <div className='welcome_letters_section'>
                <span className={`hey_there_welcome_section text-6xl p-4 text-center font-bold ${theme === 'dark' ? 'from-cyan-400 via-cyan-600 to-sky-300' : 'from-cyan-600 via-cyan-600 to-sky-500'} bg-gradient-to-r bg-clip-text text-transparent`}>
                Hey there, I'm
                <br />
                <span className={`name_welcome_section text-6xl p-4 text-center font-bold  ${theme === 'dark' ? 'from-cyan-400 via-cyan-600 to-sky-200' : 'from-cyan-600 via-cyan-600 to-sky-500'} bg-gradient-to-r bg-clip-text text-transparent`}>
                David Torres!
                <span className='icon_robot'> 🤖 </span>
                </span> 
                <br />
                </span>
                <br />
                <span className={`about_me_welcome_section ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} text-xl font-normal`}>
                    <p className='first_about_me_p'>
                        Software Engineer and tech enthusiast based in Monterrey, Mexico 🇲🇽
                    </p>
                    <p>
                        Welcome to this blog/portfolio/site where you'll be able to see the latest work I'm working on.
                    </p> 
                </span>
                <a href="/my_journey">
                <button type="button" className={`my_journey_button ${theme === 'dark' ? 'text-white border border-sky-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100' : 'text-grey border border-sky-200 bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100'}`}>
                    My Journey
                </button>
                </a>
                <a href="https://www.linkedin.com/in/david-tc/" target="_blank">
                <button type="button" className={`my_journey_button ${theme === 'dark' ? 'text-white border border-sky-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100' : 'text-grey border border-sky-200 bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100'}`}>
                    LinkedIn
                </button>
                </a>
                <a href="https://github.com/davidtc8" target="_blank">
                <button type="button" className={`my_journey_button ${theme === 'dark' ? 'text-white border border-sky-400 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100' : 'text-grey border border-sky-200 bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-yellow-100'}`}>
                    GitHub
                </button>
                </a>
                <span className={`scroll-btn ${theme === 'dark' ? 'scroll-btn-dark' : 'scroll-btn-light'}`}>
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
    <Experience />
    </>
  )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme // Accessing the theme state from Redux store
  });
  
export default connect(mapStateToProps)(WelcomeSection); // Connect component to Redux store