import './projectsStyling.css'

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
            </div>
        </div>
    )
}