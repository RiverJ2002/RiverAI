import { useState, useEffect } from "react";
import ConversationNav from './ConversationNav.jsx';
import ConversationCardMaker from './ConversationCardMaker.jsx';
import avatar_icon from './images/avatar_icon.png';
import edit_icon from './images/edit_icon.png';
import copy_icon from './images/copy_icon.png';

import CheriCheriLady from './images/CheriCheriLady.png';
import extra from './images/extra.png';

export default function ChatPage() {
    const [prompts, setPrompts] = useState([]);
    const [show, setShow] = useState(true);
    const [newConversation, setNewConversation] = useState(null);

    // Fetch the latest conversation's prompts on page load
    useEffect(() => {
        fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations')
            .then((response) => response.json())
            .then((data) => {
                const lastConversation = data[data.length - 1];
                setNewConversation(lastConversation); // Store the latest conversation
            });
    }, []); // Empty dependency array ensures this runs only on mount


    const addPromptSection = (prompt) => {

        // Add the new prompt to the local state
        setPrompts([...prompts, prompt]);

        newConversation.prompts[`prompt${Object.keys(newConversation.prompts).length}`] = prompt;



        console.log(newConversation)

        // Hide suggestions and welcome message after successful update
        setShow(false);
    };

    // The cards are made in this variable, the prompts are extracted using the ConversationCardMaker component
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
        <section className="box-border px-[16px]">
            <ConversationNav />

            {show && (
                <section className="bg-zinc-200">
                    <p className="text-[#051320] mb-[32px] text-[16px] leading-[20px] font-semibold">
                        How can I help you, my friend? 😊️
                    </p>
                    <img src={extra} alt="icon not found" className=" mb-[24px]" />
                </section>
            )}

            {cards}

            <ConversationCardMaker onSendPrompt={addPromptSection} />
        </section>
    );
}
