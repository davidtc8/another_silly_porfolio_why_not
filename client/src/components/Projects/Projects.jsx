import './projectsStyling.css'
import Heroes from '../../assets/heroes-react.jpeg'

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
                            <div className='col1_big_box -mt-8 -mb-8 w-full max-w-2xl xl:-mb-8 xl:w-[50rem] xl:flex-none'>
                                <div className='col1Projects'>
                                    <a href="https://heroes-react-dtc.netlify.app/" target="_blank">
                                        <img className='image_project' src={Heroes} alt="heroes-react" />
                                    </a>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='title_project text-gray-400 text-xl font-normal'>
                                    Heroes - React
                                </div>
                                <br />
                                <span className='title_description'>
                                        Website where you can take a look at different heroes of Marvel and DC.
                                </span>
                            </div>
                        </div>
                        <div className='grid_item'>
                            <div className='col1_big_box -mt-8 -mb-8 w-full max-w-2xl xl:-mb-8 xl:w-[50rem] xl:flex-none'>
                                <div className='col1Projects'>
                                    <a href="https://heroes-react-dtc.netlify.app/" target="_blank">
                                        <img className='image_project' src={Heroes} alt="heroes-react" />
                                    </a>
                                </div>
                            </div>
                            <div className='col2Projects'>
                                <div className='title_project text-gray-400 text-xl font-normal'>
                                    Heroes - React
                                </div>
                                <br />
                                <span className='title_description'>
                                        Website where you can take a look at different heroes of Marvel and DC.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}