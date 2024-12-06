
import extra from './images/extra.png'
import h_munu_icon from './images/h_munu_icon.png'
import openai_icon from './images/openai_icon.png'
import upload_icon from './images/upload_icon.png'
import avatar_icon from './images/avatar_icon.png'
import edit_icon from './images/edit_icon.png'
import copy_icon from './images/copy_icon.png'
import CheriCheriLady from './images/CheriCheriLady.png'
import { useLocation } from 'react-router-dom';  




export default function AnswerPage(){
    var location = useLocation(); 
    var { Conversations } = location.state || "Prompt was lost, try again";

    
    
    
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

                <p className=' mb-[50px]'>The Enteted Text comes first: </p>

                {/* User's typed prompts are managed by this section */}
                <section className='bg-amber-300 px-[24px] box-border"'>
                    <div className='flex items-center'>
                        <img src={avatar_icon} alt="icon not found" className=" mr-[12px] w-[24px] h-[24px]" />
                        <p className='text-[#051320] text-[16px] font-semibold	leading-[20px]'>You</p>
                    </div>


                    <p className=''>{Conversations[Conversations.length-1]}</p>


                    <div className='flex mt-[16px]'>

                        <div className='flex'>
                            <img src={edit_icon} alt="icon not found" className="  w-[16px] h-[16px]" />
                            <p className='text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium'>Edit</p>
                        </div>

                        <div className='flex'>
                            <img src={copy_icon} alt="icon not found" className="  w-[16px] h-[16px]" />
                            <p className='text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium'>Copy</p>
                        </div>

                    </div>
                    
                    
                </section>
                <img src={CheriCheriLady} alt="icon not found" className=" mb-[24px]" />
           </section>
}



  