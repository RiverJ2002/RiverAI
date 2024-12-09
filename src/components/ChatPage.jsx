import { useState , useEffect } from "react";
import ConversationNav from './ConversationNav.jsx';
import ConversationCardMaker from './ConversationCardMaker.jsx';
import avatar_icon from './images/avatar_icon.png';
import edit_icon from './images/edit_icon.png';
import copy_icon from './images/copy_icon.png';

import CheriCheriLady from './images/CheriCheriLady.png';
import extra from './images/extra.png';


export default function ChatPage() {
   
    var [prompts, setPrompts] = useState([]);
    //This state is for controlling suggested chats and the conversations. It simply hides elements on command.
    var [show, setShow] = useState(true);
    


    // Fetch the latest conversation's prompts on page load
    useEffect(() => {
        fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations')
            .then((response) => response.json())
            .then((data) => {
                const lastConversation = data[data.length - 1];
                if (lastConversation) {
                    const fetchedPrompts = Object.values(lastConversation.prompts);
                    setPrompts(fetchedPrompts); // Set the prompts state with API data
                }
            })
            .catch((error) => {
                console.error("Error fetching conversation:", error);
            });
    }, []); // Empty dependency array ensures this runs only on mount

        
    
    
    var addPromptSection = (prompt) => {
        // Add the new prompt to the local state.
        setPrompts([...prompts, prompt]);
    
        // Fetch the latest conversation from the API to add the prompts. I always try using then. 
        fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations')
            .then((response) => response.json())
            .then((data) => {
                // Get the actual last conversation which was added when the user clicked the new topic button in the history page. 
                const lastConversation = data[data.length - 1];
                
                if (lastConversation) {
                // Update the prompts object locally. I have to admit my first approach to this was not effective. It cound work but it
                // could create problems too. I used the prompts variable from the setPrompts state which I now ralize that it changes everytime
                //this whole function is called. ChatGPT suggsested this which is simple and smart. Hats off to her!!
                lastConversation.prompts[`prompt${Object.keys(lastConversation.prompts).length}`] = prompt;
                }

                // Send the updated conversation back to the API. If we don't do this the api doesn't change and the prompt is lost!
                return fetch(`https://6756066c11ce847c992bcae8.mockapi.io/Conversations/${lastConversation.id}`, {
                    method: 'PUT', // or PATCH
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(lastConversation),
                });

                }).then((response) => {
                // Can't hurt to check can it?
                if (!response.ok) {
                    throw new Error('Failed to update conversation on the API');
                }

                // Hide suggestions and welcome message after successful update. This little state which was interduced at the start of this 
                //function solves a big issue and makes the app better by not having to navigate to another page for chatting while the first
                //chat is here!!
                setShow(false);
            })
            .catch((error) => {
                console.error('Error updating the conversation:', error);
            });
    };
    
    



    // The cards are made in this variable , the prompts are extracted using the ConversationCardMaker component. 
    var cards = prompts.map((prompt, index) => (
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
        <section className="box-border	px-[16px]">
            <ConversationNav />

            
            {   show && <section className="bg-zinc-200">
                    <p className="text-[#051320] mb-[32px] text-[16px] leading-[20px] font-semibold">
                        How can I help you, my friend? 😊️</p>
                    
                    <img src={extra} alt="icon not found" className=" mb-[24px]" />
                </section>
            }



            {cards}

            <ConversationCardMaker onSendPrompt={addPromptSection} />
        </section>
    );
}
