import extra from './images/extra.png'
import h_munu_icon from './images/h_munu_icon.png'
import openai_icon from './images/openai_icon.png'
import upload_icon from './images/upload_icon.png'
import { useLocation } from 'react-router-dom';



export default function AnswerPage(){
    const location = useLocation();
    const prompt = location.state?.prompt || 'No prompt provided';

    
    return <section>
                <nav className=" flex items-center bg-fuchsia-400 mb-[24px]">
                    <img src={h_munu_icon} alt="icon not found" className="w-[40px] h-[40px]" />
                    <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[12px]" />
                    <p className="text-[#051320] text-[20px] leading-[24px]
                    font-semibold ml-[16px]">GPT 4o</p>
                    
                    <img src={upload_icon} alt="icon not found" className="w-[40px] h-[40px]
                    mr-[24px] ml-[auto]" />
                </nav>

                <img src={extra} alt="icon not found" className=" mb-[24px]" />
                <p className='text-[white] mb-[50px]'>The Enteted Text comes first: </p>
                <p className='text-[white] mb-[50px]'>{prompt}</p>
           </section>
}



  