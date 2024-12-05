import h_munu_icon from './images/h_munu_icon.png'
import openai_icon from './images/openai_icon.png'
import upload_icon from './images/upload_icon.png'
import send_icon from './images/send_icon.png'
import { useState } from "react";



export default function ChatPage(){
    var [textValue, setTextValue] = useState('');

    var PromptInputChange = (event) =>{
        setTextValue(event.target.value);
    }

    var SendPrompt = ()=>{
        console.log(textValue);
    }
    
    return <section>
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
                    <textarea
                        placeholder="Ask me anything..."
                        className="text-[16px] w-[100%] h-[56px] mr-[12px] bg-white border border-[red] border-solid rounded-[30px] resize-none px-[16px] py-[14px] outline-none"
                        rows="1"
                        value={textValue}
                        onInput={PromptInputChange}
                    ></textarea>

                    <img src={send_icon} onClick={SendPrompt} alt="icon not found" className="w-[56px] h-[56px] ml-[auto] mr-[24px]" />
                </section>



            </section>


}





