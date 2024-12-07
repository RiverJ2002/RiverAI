import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import avatar_icon from './images/avatar_icon.png';
import edit_icon from './images/edit_icon.png';
import copy_icon from './images/copy_icon.png';
import CheriCheriLady from './images/CheriCheriLady.png';
import ConversationCardMaker from './ConversationCardMaker';
import ConversationNav from './ConversationNav';

export default function ConversationPage() {
    var location = useLocation();
    var [prompts, setPrompts] = useState([]);

    // Check for the firstPrompt passed via state
    useEffect(() => {
        if (location.state?.firstPrompt) {
            setPrompts([location.state.firstPrompt]); 
        }
    }, [location.state]);

    var addPromptSection = (prompt) => {
        setPrompts([...prompts, prompt]);
    };
    

    const cards = prompts.map((prompt, index) => (
        <section key={index} className="bg-amber-300 px-[24px] box-border">
            <div className="flex items-center">
                <img src={avatar_icon} alt="icon not found" className="mr-[12px] w-[24px] h-[24px]" />
                <p className="text-[#051320] text-[16px] font-semibold leading-[20px]">You</p>
            </div>
            <p className="text-[#051320] text-[14px] font-normal mt-[8px]">{prompt}</p>
            <div className="flex mt-[16px]">
                <div className="flex mr-[16px]">
                    <img src={edit_icon} alt="icon not found" className="w-[16px] h-[16px]" />
                    <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Edit</p>
                </div>
                <div className="flex">
                    <img src={copy_icon} alt="icon not found" className="w-[16px] h-[16px]" />
                    <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Copy</p>
                </div>
            </div>
            <img src={CheriCheriLady} alt="icon not found" className="mb-[24px]" />
        </section>
    ));

    return (
        <section>
            <ConversationNav />

            <img src="./images/extra.png" alt="icon not found" className=" mb-[24px]" />
            <p className=' mb-[50px]'>The Entered Text comes first:</p>

            {cards}

            <ConversationCardMaker onSendPrompt={addPromptSection} />
        </section>
    );
}
