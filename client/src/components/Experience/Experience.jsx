import './experienceStyling.css'
import Nymbus from '../../assets/nymbus.jpeg'
import Deacero from '../../assets/deacero.jpeg'
import Workday from '../../assets/workday.jpeg'
import BlueYonder from '../../assets/blueyonder.jpeg'
import Xignux from '../../assets/xignux.jpeg'
import Japan from '../../assets/japan.jpeg'
import China from '../../assets/china.jpeg'
import ExcellenceAward from '../../assets/PLEIAWARD.jpeg'
import WorkdayDinner from '../../assets/workday_dinner.jpeg'
import SQLTraining from '../../assets/sql_training.jpeg'
import AceriaDeacero from '../../assets/aceria_deacero.jpeg'
import DinnerNymbus from '../../assets/nymbus_fun_time.jpeg'
import { useState, useEffect, useRef } from 'react';
import ReadMore from '../HelpfulFunctions/ReadMore'
import PopupImage from '../HelpfulFunctions/PopupImage'
import { connect } from 'react-redux';

function Experience({ theme }) {
  return (
    <>
      <div id="experience" className={`main_div_experience_section ${theme === 'dark' ? 'main_div_experience_section_dark_theme' : 'main_div_experience_section_light_theme'}`}>
        <div className='experience_h1'>
          <span className={`text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-cyan-600'}`}>
            Experience
          </span>
        </div>
        <div className='parent_section'>
          <div className='rectangle'>
            {/* Nymbus */}
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
                  <ReadMore letters={"Position Activities"}>
                    <div className={`role_explanation_experience`}>
                      <ul>
                        <div className='years_responsive'>
                          Sep 2023 - Present
                        </div>
                        <br />
                        <p className='my_p_experience'><b>Daily Activities:</b></p>
                        <li>Agile work with daily meetings with Eastern Europe team (6am daily standups).</li>
                        <li>Enhancing frontend features for fintech product using JQuery, SCSS, HTML.</li>
                        <li>Applying code best practices for frontend development.</li>
                        <li>Using Chrome Devtools to troubleshoot and debug 3 frontend fintech web applications.</li>
                        <li>Weekly merge requests to our repositories using Git and Gitlab.</li>
                        <li>Pair programming.</li>
                        <p className='following_p_experience'><b>Achievements:</b></p>
                        <li>Participated in Hackaton using AWS Sagemaker for ML Model</li>
                        <li>Part of the Next Engineer Program at Nymbus working with the latest AI AWS tools like Code Whisperer.</li>
                        <li>Going out to <PopupImage imageUrl={DinnerNymbus}>eat and have a fun</PopupImage> time!</li>
                        <p className='following_p_experience'><b>Tech Stack:</b></p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Jquery
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              SCSS
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Devtools
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </ReadMore>
                </div>
              </div>
            </div>
            {/* Deacero */}
            <div className='grid'>
              <div className='col1'>
                <div className='years_experience'><p>Feb 2023 - Sept 2023</p></div>
              </div>
              <div className='col2'>
                <div className='text_company'>
                  <div className='grouper_name_and_logo'>
                    <div className='img_div_experience'>
                        <a href="home">
                          <img src={Deacero} alt="" className='company_img_experience' href="home"/>
                        </a>
                    </div>
                    <h1 className='role_experience text-gray-400 text-xl font-normal'>
                      Full Stack Developer - Deacero
                    </h1>
                  </div>
                  <ReadMore letters={"Position Activities"}>
                    <div className={`role_explanation_experience`}>
                      <ul>
                        <div className='years_responsive'>
                          Feb 2023 - Sept 2023
                        </div>
                        <br />
                        <p className='my_p_experience'><b>Daily Activities:</b></p>
                        <li>Developed internal applications using React.js, Python, <PopupImage imageUrl={SQLTraining}>SQL</PopupImage>, C# with Xamarin, and Kraken.</li>
                        <li>Daily scrum meetings with product owners to optimize outcomes.</li>
                        <li>Troubleshooting existing applications, ensuring high client satisfaction.</li>
                        <li>Building a responsive geolocation app using React.js.</li>
                        <li>Built an automation script that extracts 10,000+ data from different APIs to make data injection to our databases.</li>
                        <p className='following_p_experience'><b>Achievements:</b></p>
                        <li>Visited <PopupImage imageUrl={AceriaDeacero}>Aceria Deacero in Celaya</PopupImage> to seek ways to enhance the software we develop by engaging closely with users, soliciting their needs, and gaining insight into their daily routines.</li>
                        <p className='following_p_experience'><b>Tech Stack:</b></p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              SQL
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              C#
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Xamarin
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </ReadMore>
                </div>
              </div>
            </div>
            {/* Workday */}
            <div className='grid'>
              <div className='col1'>
                <div className='years_experience'><p>Jun 2021 - Aug 2022</p></div>
              </div>
              <div className='col2'>
                <div className='text_company'>
                  <div className='grouper_name_and_logo'>
                    <div className='img_div_experience'>
                        <a href="home">
                          <img src={Workday} alt="" className='company_img_experience' href="home"/>
                        </a>
                    </div>
                    <h1 className='role_experience text-gray-400 text-xl font-normal'>
                      Data Conversion Consultant - Workday
                    </h1>
                  </div>
                  <ReadMore letters={"Position Activities"}>
                    <div className={`role_explanation_experience`}>
                      <ul>
                        <div className='years_responsive'>Jun 2021 - Aug 2022</div>
                        <br />
                        <p className='my_p_experience'><b>Daily Activities:</b></p>
                        <li>Working directly with client, functional and internal team to perform data conversion.</li>
                        <li>Extracting customer data through ETL to perform data migration.</li>
                        <li>Developing a graphical user interface (GUI) in Python to run various scripts in a friendly way. </li>
                        <li>Performing configuration migration using web serivces and ruby/python/sql scripts.</li>
                        <li>Manipulating XML's and working with API's.</li>
                        <p className='following_p_experience'><b>Achievements:</b></p>
                        <li>Mentoring and teaching new team members in data conversion methodologies.</li>
                        <li>Helping grow the new Data Conversion Team in Mexico.</li>
                        <li>Certified in HCM (HCM Essentials, HCM Applied and HCM Services Portal)</li>
                        <li>Certified in Advanced Data Conversion.</li>
                        <li>Hired as the <PopupImage imageUrl={WorkdayDinner}>second data conversion member in Mexico.</PopupImage></li>
                        <li>10x Successful Go-lives</li>
                        <p className='following_p_experience'><b>Tech Stack:</b></p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Consulting
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              SQL
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Workday
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Data Conversion
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </ReadMore>
                </div>
              </div>
            </div>
            {/* Blue Yonder */}
            <div className='grid'>
              <div className='col1'>
                <div className='years_experience'><p>Jan 2021 - Jul 2021</p></div>
              </div>
              <div className='col2'>
                <div className='text_company'>
                  <div className='grouper_name_and_logo'>
                    <div className='img_div_experience'>
                        <a href="home">
                          <img src={BlueYonder} alt="" className='company_img_experience' href="home"/>
                        </a>
                    </div>
                    <h1 className='role_experience text-gray-400 text-xl font-normal'>
                      Associate Technical Consultant - Blue Yonder
                    </h1>
                  </div>
                  <ReadMore letters={"Position Activities"}>
                    <div className={`role_explanation_experience`}>
                      <ul>
                        <div className='years_responsive'>Jan 2021 - Jul 2021</div>
                        <br />
                        <p className='my_p_experience'><b>Daily Activities:</b></p>
                        <li>Working with Cloud Operations Team.</li>
                        <li>Weekly meetings with clients to understand and work towards business needs.</li>
                        <li>Installing Transportation Manager solution in Test, Dev, and Prod servers using remote desktops on Azure.</li>
                        <li>Developed a framework to automate various tasks using Python and PowerShell.</li>
                        <li>Working with Azure Cloud.</li>
                        <p className='following_p_experience'><b>Tech Stack:</b></p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Azure
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Powershell
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Python
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Blue Yonder TM
                            </div>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </ReadMore>
                </div>
              </div>
            </div>
            {/* Xignux */}
            <div className='grid'>
              <div className='col1'>
                <div className='years_experience'><p>May 2019 - Jul 2019</p></div>
              </div>
              <div className='col2'>
                <div className='text_company'>
                  <div className='grouper_name_and_logo'>
                    <div className='img_div_experience'>
                        <a href="home">
                          <img src={Xignux} alt="" className='company_img_experience' href="home"/>
                        </a>
                    </div>
                    <h1 className='role_experience text-gray-400 text-xl font-normal'>
                    IT Consultant - Xignux - Internship
                    </h1>
                  </div>
                  <ReadMore letters={"Position Activities"}>
                    <div className={`role_explanation_experience`}>
                      <ul>
                        <div className='years_responsive'>May 2019 - Jul 2019</div>
                        <br />
                        <p className='my_p_experience'><b>Daily Activities:</b></p>
                        <li>Developed a project overseas (<PopupImage imageUrl={Japan}>Japan</PopupImage>, <PopupImage imageUrl={China}>China</PopupImage>, Singapore, Malaysia, Indonesia, and India).</li>
                        <li>Lead a Project on the internet of things (IoT) and energy management.</li>
                        <li>Look for suppliers connect Xignux with countries overseas.</li>
                        <li>Contact, schedule, and meet with the supplier to know more about the foreign company.</li>
                        <li>Analysis of potential companies that can bring value to Mexico through Xignux. </li>
                        <p className='following_p_experience'><b>Achievements:</b></p>
                        <li><PopupImage imageUrl={ExcellenceAward}>Excellence Award</PopupImage> for developing the best project out of 24.</li>
                        <li>Business meetings with more than 24 Business Managers, interactions with 3 embassies, 4 consulates, and 4 tech fairs (e.g., SNEC 2019)</li>
                        <p className='following_p_experience'><b>Tech Stack:</b></p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-2 mb-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Consulting
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              IoT
                            </div>
                          </li>
                          <li className="mr-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Data Analysis
                            </div>
                          </li>
                        </ul>
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


const mapStateToProps = (state) => ({
  theme: state.theme.theme // Accessing the theme state from Redux store
});

export default connect(mapStateToProps)(Experience); // Connect component to Redux store