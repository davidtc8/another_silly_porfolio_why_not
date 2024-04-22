import './headerStyling.css'
import image from '../../assets/image_dave.jpeg'
import { FiMoon } from "react-icons/fi";

export default function Header() {
  return (
    <>
      {/* Image div */}
      <div className= "main_navbar_div">
        {/* Start Creating the circular div inside the image */}
        <div className="main_navbar_component">
          <div className='img_div'>
            <a href="home">
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
          <div className='night_mode_div'>
            <FiMoon className='night_icon' size={30}>
            </FiMoon>
          </div>
        </div>
        <div className='welcome_section'>
          <div className='welcome_letters_section'>
            <span className='hey_there_welcome_section text-5xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
              Hey there, I'm
            <br />
            <span className='name_welcome_section text-5xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
              David Torres!
              <span className='icon_robot'> 🤖 </span>
            </span> 
            <br />
            </span>
            <br />
            <span className='about_me_welcome_section font-normal'>
              <p className='first_about_me_p'>
                Software Engineer and tech enthusiast based in Monterrey, Mexico 🇲🇽
              </p>
              <p>
                Welcome to this blog/portfolio/site where you'll be able to see the latest work I'm working on.
              </p> 
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

