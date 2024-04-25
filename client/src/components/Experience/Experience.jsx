import './experienceStyling.css'
import Nymbus from '../../assets/nymbus.jpeg'
import { useState } from 'react';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text">
          {isReadMore ? text[10] : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "#00ADB5", cursor: 'pointer' }}
          >
              {isReadMore ? "Position Activities" : " show less"}
          </span>
      </p>
  );
};

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
                <div className='text_company'>
                  <div className='grouper_name_and_logo'>
                    <div className='img_div_experience'>
                        <a href="home">
                          <img src={Nymbus} alt="" className='company_img_experience' href="home"/>
                        </a>
                    </div>
                    <h1 className='role_experience text-gray-400 text-xl font-normal'>
                      Full Stack Developer - Nymbus
                    </h1>
                  </div>
                  <ReadMore>
                    <div className='role_explanation_experience'>
                      <ul>
                        <p className='my_p_experience'>Daily Activities:</p>
                        <li>Agile work with daily meetings with Eastern Europe team (6am daily standups).</li>
                        <li>Enhancing frontend features for fintech product using JQuery, SCSS, HTML.</li>
                        <li>Applying code best practices for frontend development.</li>
                        <li>Using Chrome Devtools to troubleshoot and debug 3 frontend fintech web applications.</li>
                        <li>Weekly merge requests to our repositories using Git and Gitlab.</li>
                        <li>Startup setting, dynamic processes, fast-paced.</li>
                        <li>Completing Jira tickets per scrum.</li>
                        <li>Pair programming.</li>
                        <p className='following_p_experience'>Achievements:</p>
                        <li>Participated in Hackaton using AWS Sagemaker for ML Model</li>
                        <li>Part of the Next Engineer Program at Nymbus working with the latest AI AWS tools like Code Whisperer.</li>
                      </ul>
                    </div>
                  </ReadMore>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
