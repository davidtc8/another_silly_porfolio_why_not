import './headerStyling.css'
import image from '../../assets/image_dave.jpeg'

export default function Header() {
  return (
    <>
      {/* Image div */}
      <div className= "main_navbar_div">
        {/* Start Creating the circular div inside the image */}
        <div className="circular_div">
          <img src={image} alt="" className='img_navbar'/>
          <h1>hi!</h1>
        </div>
      </div>
    </>
  )
}

