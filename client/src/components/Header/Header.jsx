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
            <h1>Hey there!</h1>
          </div>
        </div>
      </div>
    </>
  )
}

