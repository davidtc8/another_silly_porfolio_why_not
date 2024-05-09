import PopupImage from '../HelpfulFunctions/PopupImage'
import Starcraft from '../../assets/starcraft1.jpeg'
import AOE from '../../assets/aoe.jpeg'
import ReactCert from '../../assets/react-cert.jpeg'
import PythonCert from '../../assets/python-cert.jpeg'
import SQLCert from '../../assets/sql-cert.jpeg'
import GoogleCloud from '../../assets/google-cloud-cert.jpeg'
import UdacityCert from '../../assets/udacity-cert.jpeg'
import PythonDS from '../../assets/python-ds-cert.jpeg'
import ML from '../../assets/machine-learning.jpeg' 
import WebDevelopment from '../../assets/web-dev.jpeg' 
import English from '../../assets/english.jpeg' 
import ReadMore from '../HelpfulFunctions/ReadMore'
import './aboutmeStyling.css'

export default function Aboutme() {
  return (
    <div className='main_wrapper'>
      <div className='aboutme_main_section'>
        <div className='letter_section_box'>
          <span className='about_me_bigletters_section text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
            About Me!
          </span>
        </div>
        <div className='full_summary_box'>
          <div className='about_me_section text-gray-400 text-md font-normal'>
            <div className='header_section_writing'>
              Why do I like to code
            </div>
            <div className='full_explanation_writing'>
              <ReadMore letters={"Answer 🧑🏻‍💻"}>
                <div>
                  <ul>
                    <li className='my_text'>
                      When I was young I was in love with games like <PopupImage imageUrl={Starcraft}>Starcraft</PopupImage> and <PopupImage imageUrl={AOE}>Age of Empires</PopupImage>, 
                      so when I was around 14 I started creating my own games, however, to be honest I wasn't really successful, but ever since then, this fueled in me a sense of curiosity
                      about programming.
                    </li>
                  </ul>
                </div>
              </ReadMore>
            </div>
            <div className='header_section_writing'>
              Some Certifications
            </div>
            <div className='full_explanation_writing'>
              <ReadMore letters={"Certs 📑"}>
                <div>
                  <ul>
                    <li className='my_text'>
                      Here are some of my Certifications, if you want to know more about it, feel free to check my <a className='my_a' href="https://www.linkedin.com/in/david-tc/">LinkedIn</a>
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={ML}>Machine Learning</PopupImage> by MIT Professional Education.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={PythonDS}>Python</PopupImage> Data Structures by Coursera.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={WebDevelopment}>Web Development</PopupImage> by ITESM.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={ReactCert}>React</PopupImage> Certfication by HackerRank.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={PythonCert}>Python</PopupImage> Certfication by HackerRank.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={SQLCert}>SQL</PopupImage> Certfication by Datacamp.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={GoogleCloud}>Certification</PopupImage> by Google Cloud.
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={UdacityCert}>Programming for Data Science</PopupImage> by Udacity.
                    </li>
                    <li className='my_text2'>
                      Other Certifications
                    </li>
                    <li className='my_next_li'>
                      <PopupImage imageUrl={English}>English</PopupImage> Test by Duolingo (C1 Level).
                    </li>
                  </ul>
                </div>
              </ReadMore>
            </div>
            <div className='header_section_writing'>
              What are my hobbies?
            </div>
            <div className='full_explanation_writing'>
              Letters
            </div>
            <div className='header_section_writing'>
              What I'm currently working on and future goals
            </div>
            <div className='full_explanation_writing'>
              Letters
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
