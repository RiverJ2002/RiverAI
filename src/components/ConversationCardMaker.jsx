import send_icon from './images/send_icon.png';  
 
import { useState } from "react";




export default function ConversationCardMaker({ onSendPrompt }) {
    var [userPrompt, setUserPrompt] = useState('');
    var PromptInputChange = (event) => {
        setUserPrompt(event.target.value);
    };


    var SendPrompt = () => {
        if (userPrompt.trim() === "") return;
    
        // Notify parent to add the new section
        if (onSendPrompt) {
            onSendPrompt(userPrompt);
        }
        setUserPrompt(''); 
    };

    return (
        <section className="w-[100%] bg-orange-300 flex items-center">
            <textarea
                placeholder="Ask me anything..."
                className="text-[16px] w-[100%] h-[56px] mr-[12px] bg-white border border-red-500 rounded-[30px] resize-none px-[16px] py-[14px] outline-none"
                rows="1"
                value={userPrompt}
                onInput={PromptInputChange}
            ></textarea>

            <img
                src={send_icon}
                onClick={SendPrompt}
                alt="Send Icon"
                className="w-[56px] h-[56px] ml-auto mr-[24px]"
            />
        </section>
    );
}

