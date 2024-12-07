import h_munu_icon from './images/h_munu_icon.png';
import openai_icon from './images/openai_icon.png';
import upload_icon from './images/upload_icon.png';



{/* the nav part for the chat page was made to give the user other options to use the LLM */}
        
export default function ConversationNav(){


    return <nav className=" flex items-center bg-fuchsia-400 mb-[24px]">
                <img src={h_munu_icon} alt="icon not found" className="w-[40px] h-[40px]" />
                <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[12px]" />
                <p className="text-[#051320] text-[20px] leading-[24px]
                font-semibold ml-[16px]">GPT 4o</p>
                
                <img src={upload_icon} alt="icon not found" className="w-[40px] h-[40px]
                mr-[24px] ml-[auto]" />
           </nav>

}

