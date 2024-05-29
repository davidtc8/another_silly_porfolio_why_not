import PopupImage from '../HelpfulFunctions/PopupImage'
import SimplyMe from '../../assets/simply_me.jpeg'
import MeProgramming from '../../assets/me_programming.jpeg'
import PadelCourt from '../../assets/padel_court.jpeg'
import MePadel from '../../assets/padel.jpeg'
import Book1984 from '../../assets/1984.jpeg'
import { connect } from 'react-redux';
import './myJourneyStyling.css'

function MyJourney({ theme }) {

    return (
        <div className={`main_wrapper_journey ${theme === 'dark' ? 'main_wrapper_journey_dark': 'main_wrapper_journey_light'}`}>
            <div className={`my_journey_main_section ${theme === 'dark' ? 'my_journey_main_section_dark': 'my_journey_main_section_light'}`}>
                <div className='big_letter_section'>
                    <span className={`text-6xl p-4 text-center font-bold ${theme === 'dark' ? 'from-cyan-400 via-cyan-600 to-sky-300' : 'from-cyan-600 via-cyan-700 to-sky-600'} bg-gradient-to-r bg-clip-text text-transparent`}>
                        My Journey
                    </span>
                </div>
                <span className={`project_description_section ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} text-lg font-normal`}>
                    <div className='first_about_me_my_journey_p'>
                    Embarking on my coding journey four years ago, I've delved into the intricate world of <PopupImage imageUrl={MeProgramming}>programming</PopupImage>, with a primary focus on JavaScript, 
                    HTML, CSS, and Python. Through countless hours of <PopupImage imageUrl={SimplyMe}>learning</PopupImage>, experimentation, and project development, I've cultivated a strong 
                    foundation in these languages, enabling me to tackle a variety of web development challenges with confidence and creativity.
                    <br />
                    <br />
                    Beyond the realm of coding, I find solace and exhilaration on the <PopupImage imageUrl={PadelCourt}>padel court</PopupImage>. Participating in numerous <PopupImage imageUrl={MePadel}>tournaments</PopupImage>, 
                    I've not only honed my skills but also forged lasting connections within the vibrant padel community. The game serves 
                    as a welcome outlet for my competitive drive, offering a balance to the cerebral demands of programming.
                    <br />
                    <br />
                    In the quiet moments between code commits and matches, I find myself immersed in the pages of literature. George Orwell's 
                    dystopian masterpiece, <PopupImage imageUrl={Book1984}>"1984"</PopupImage> resonates deeply with me, its themes of surveillance, control, and individualism sparking 
                    introspection and contemplation. I wrote about and <a className='my_a' href="https://medium.com/life-tips/why-read-1984-from-george-orwell-in-the-age-of-social-media-ce65294880b5" target='_blank'>article</a> on Medium if you want to know more about it.
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
                    </div>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.theme.theme // Accessing the theme state from Redux store
  });
  
export default connect(mapStateToProps)(MyJourney); // Connect component to Redux store