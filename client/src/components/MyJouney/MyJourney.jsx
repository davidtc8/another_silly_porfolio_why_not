import PopupImage from '../HelpfulFunctions/PopupImage'
import './myJourneyStyling.css'

export default function MyJourney() {
    return (
        <div className="main_wrapper_journey">
            <div className='my_journey_main_section'>
                <div className='big_letter_section'>
                    <span className='text-6xl p-4 text-center font-bold from-cyan-400 via-cyan-600 to-sky-200 bg-gradient-to-r bg-clip-text text-transparent'>
                        My Journey
                    </span>
                </div>
                <span className='project_description_section text-gray-400 text-lg font-normal'>
                    <p className='first_about_me_projects_p'>
                    Embarking on my coding journey four years ago, I've delved into the intricate world of programming, with a primary focus on JavaScript, 
                    HTML, CSS, and Python. Through countless hours of learning, experimentation, and project development, I've cultivated a strong 
                    foundation in these languages, enabling me to tackle a variety of web development challenges with confidence and creativity.
                    <br />
                    <br />
                    Beyond the realm of coding, I find solace and exhilaration on the padel court. Participating in numerous tournaments, 
                    I've not only honed my skills but also forged lasting connections within the vibrant padel community. The game serves 
                    as a welcome outlet for my competitive drive, offering a balance to the cerebral demands of programming.
                    <br />
                    <br />
                    In the quiet moments between code commits and matches, I find myself immersed in the pages of literature. George Orwell's 
                    dystopian masterpiece, "1984," resonates deeply with me, its themes of surveillance, control, and individualism sparking 
                    introspection and contemplation.
                    <br />
                    <br />
                    However, life took an unexpected turn in 2020 when I was diagnosed with Ulcerative Colitis (UC). Since then, I've embarked on a 
                    journey of self-care and advocacy, prioritizing my health and well-being while raising awareness about UC and supporting initiatives 
                    aimed at improving the lives of those affected by the condition. Conscious of the profound impact of nutrition on my health, 
                    I've embraced a mindful approach to food, exploring dietary choices that complement my treatment and promote overall wellness.
                    <br />
                    <br />
                    Through coding, padel, literature, and my commitment to health advocacy, I strive to cultivate a rich and meaningful life, 
                    driven by curiosity, passion, and a desire to make a positive impact in both the digital and physical realms. 
                    </p>
                </span>
            </div>
        </div>
    )
}