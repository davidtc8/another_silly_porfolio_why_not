import './projectsStyling.css'
import Heroes from '../../assets/heroes-react.jpeg'
import F1 from '../../assets/f1.jpeg'
import JSQuiz from '../../assets/js-quiz.jpeg'
import RPGGame from '../../assets/rpg-games.jpeg'

export default function Projects() {
    return (
        <div className="main_wrapper_projects">
            <div className="projects_main_section">
                <div className="letters_projects">
                    <span className='about_me_bigletters_section text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
                        Projects
                    </span>
                </div>
                <span className='project_description_section text-gray-400 text-xl font-normal'>
                    <p className='first_about_me_projects_p'>
                        Feel free to take a look around to what I've built.
                    </p>
                </span>
                <div className='project_showcase_mainwrapper'>
                    <div className='gridProjects'>
                        <div className='grid_item'>
                            <div className='col1_big_box'>
                                <div className='col1Projects'>
                                    <a href="https://heroes-react-dtc.netlify.app/" target="_blank">
                                        <img className='image_project' src={Heroes} alt="heroes-react" />
                                    </a>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='title_project text-gray-400 text-xl font-normal'>
                                    Heroes
                                </div>
                                <br />
                                <span className='title_description'>
                                    Website where you can take a look at different heroes of Marvel and DC.
                                </span>
                                <ul className="mt-2 flex flex-wrap place-content-center" aria-label="Technologies used">
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        React
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Routing
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Javascript
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        HTML
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Vanilla CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid_item responsive_layout'>
                            <div className='col1_big_box responsive_col1_box'>
                                <div className='col1Projects'>
                                    <div className='title_project text-gray-400 text-xl font-normal'>
                                        Formula 1
                                    </div>
                                    <br />
                                    <span className='title_description'>
                                        Website where you can take a look at different heroes of Marvel and DC.
                                    </span>
                                    <ul className="mt-2 flex flex-wrap place-content-center" aria-label="Technologies used">
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vanilla JS
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Vanilla CSS
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            API Management
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            HTML
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='col1Projects'>
                                    <a href="https://davidtc8.github.io/Formula1-Webpage/" target="_blank">
                                        <img className='image_project' src={F1} alt="formula-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='grid_item'>
                            <div className='col1_big_box'>
                                <div className='col1Projects'>
                                    <a href="https://davidtc8.github.io/JS-Quiz/" target="_blank">
                                        <img className='image_project' src={JSQuiz} alt="js-quiz" />
                                    </a>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='title_project text-gray-400 text-xl font-normal'>
                                    Quiz JS
                                </div>
                                <br />
                                <span className='title_description'>
                                    Simple Quiz to enhance your programming knowledge.
                                </span>
                                <ul className="mt-2 flex flex-wrap place-content-center" aria-label="Technologies used">
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        DOM
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Javascript
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        HTML
                                        </div>
                                    </li>
                                    <li className="mr-2">
                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                        Vanilla CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='grid_item responsive_layout'>
                            <div className='col1_big_box responsive_col1_box'>
                                <div className='col1Projects'>
                                    <div className='title_project text-gray-400 text-xl font-normal'>
                                        RPG Text Based Game
                                    </div>
                                    <br />
                                    <span className='title_description'>
                                        Game built in Python
                                    </span>
                                    <ul className="mt-2 flex flex-wrap place-content-center" aria-label="Technologies used">
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Python
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            Command Line
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            API Management
                                            </div>
                                        </li>
                                        <li className="mr-2">
                                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                            OOP
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='col1Projects'>
                                    <a href="My_First_RPG_Game" target="_blank">
                                        <img className='image_project' src={RPGGame} alt="rpg-game-python" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
