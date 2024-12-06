import h_munu_icon from './images/h_munu_icon.png';
import openai_icon from './images/openai_icon.png';
import upload_icon from './images/upload_icon.png';
import send_icon from './images/send_icon.png';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PromptReciever from './PromptReciever';





export default function ChatPage(){
    const [UserPrompt, setTextValue] = useState('');
    const navigate = useNavigate();
    const Conversations = [];

    const SendPrompt = () => {
        console.log(UserPrompt);
        Conversations.push(UserPrompt);
        navigate('./AnswerPage', { state: { Conversations: Conversations } });
    };


    return <section>

                {/* the nav part for the chat page was made to give the user other options
                to use the LLM */}
                <nav className=" flex items-center bg-fuchsia-400 mb-[24px]">
                    <img src={h_munu_icon} alt="icon not found" className="w-[40px] h-[40px]" />
                    <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[12px]" />
                    <p className="text-[#051320] text-[20px] leading-[24px]
                    font-semibold ml-[16px]">GPT 4o</p>
                    
                    <img src={upload_icon} alt="icon not found" className="w-[40px] h-[40px]
                    mr-[24px] ml-[auto]" />
                </nav>


                <section className="bg-zinc-200">
                    <p className="text-[#051320] text-[16px]
                    leading-[20px] font-semibold">How can I help you my friend? 😊️</p>
                </section>
                
                


                <section className='w-[100%] bg-orange-300 mt-[36px] flex items-center'>

                        <PromptReciever UserPrompt={UserPrompt} setTextValue={setTextValue} SendPrompt={SendPrompt} />
                        <img src={send_icon} onClick={SendPrompt} alt="icon not found" className="w-[56px] h-[56px] ml-[auto] mr-[24px]" />

                </section>


                

            </section>


}





