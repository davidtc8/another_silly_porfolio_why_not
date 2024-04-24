import './experienceStyling.css'
import Nymbus from '../../assets/nymbus.jpeg'

export default function Experience() {
  return (
    <>
      <div className='main_div_experience_section'>
        <div className='experience_h1'>
          <span className='text-6xl font-bold text-white'>
            Experience
          </span>
        </div>
        <div className='parent_section'>
          <div className='rectangle'>
            <div className='grid'>
              <div className='col1'>
                <div className='years_experience'><p>Sep 2023 - Present</p></div>
              </div>
              <div className='col2'>
                <div className='img_div_experience'>
                  <a href="home">
                    <img src={Nymbus} alt="" className='company_img_experience' href="home"/>
                  </a>
                </div>
                <div className='text_company'>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
