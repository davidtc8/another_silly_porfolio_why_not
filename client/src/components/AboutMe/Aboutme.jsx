import './aboutmeStyling.css'

export default function Aboutme() {
  return (
    <div className='aboutme_main_section'>
      <div className='letter_section_box'>
        <span className='about_me_bigletters_section text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
          About Me!
        </span>
      </div>
      <div className='full_summary_box'>
        <div className='about_me_section text-gray-400 text-md font-normal'>
          <div className='header_section_writing'>
          What is Lorem Ipsum?
          </div>
          <div className='full_explanation_writing'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className='header_section_writing'>
          What is Lorem Ipsum?
          </div>
          <div className='full_explanation_writing'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  )
}
