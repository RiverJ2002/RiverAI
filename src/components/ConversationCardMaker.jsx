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


    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent adding a new line when enter is pressed. no coflict anymore
            SendPrompt();
        }
    };
    

    return (
        <section className="w-[100%] flex items-center">
            <textarea
                placeholder="Ask me anything..."
                className="text-[16px] w-[100%] h-[60px] mr-[12px] border border-[#EBEDEC] rounded-[30px] resize-none px-[16px] py-[16px] outline-none"
                rows="1"
                value={userPrompt}
                onInput={PromptInputChange}
                onKeyDown={handleKeyDown}
            ></textarea>

            <img
                src={send_icon}
                onClick={SendPrompt}
                alt="Send Icon"
                className="w-[56px] h-[56px] ml-auto mr-[0]"
            />
        </section>
    );
}

