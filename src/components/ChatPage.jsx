import { useState, useEffect } from "react";
import ConversationNav from './ConversationNav.jsx';
import ConversationCardMaker from './ConversationCardMaker.jsx';
import avatar_icon from './images/avatar_icon.png';
import edit_icon from './images/edit_icon.png';
import copy_icon from './images/copy_icon.png';
import default_chat from './images/default_chat.png'
import openai_icon from './images/openai_icon.png'
import CheriCheriLady from './images/CheriCheriLady.png';
import { GoogleGenerativeAI } from "@google/generative-ai";  




export default function ChatPage() {
    const [prompts, setPrompts] = useState([]);

    const [responses, setResponses] = useState([""]);

    const [show, setShow] = useState(true);

    const [newConversation, setNewConversation] = useState(null);


    


    // Fetch the latest conversation's prompts on page load
    useEffect(() => {
        fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations')
            .then((response) => response.json())
            .then((data) => {
                const lastConversation = data[data.length - 1];
                setNewConversation(lastConversation); 
                
            });
            
    }, []); // Empty dependency array ensures this runs only on mount



    const addPromptSection = async (prompt) => {
        // Add the new prompt to the local state
        setPrompts([...prompts, prompt]);
    
        // Create a copy of the newConversation
        const updatedConversation = {
            ...newConversation,
            prompts: {
                ...newConversation.prompts,
                [`prompt${Object.keys(newConversation.prompts).length}`]: prompt,
            },
        };
    
        // Update the API with the new conversation data
        await fetch(`https://6756066c11ce847c992bcae8.mockapi.io/Conversations/${newConversation.id}`, {
            method: 'PUT', // or PATCH
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedConversation), // Send the updated conversation object
        }).then(res => res.json())
          .then(data => {
              console.log('Updated Conversation:', data);
              // Update the state with the new conversation
              setNewConversation(updatedConversation);
          })
          .catch(error => {
              console.error('Error updating conversation:', error);
          });

          GetResponse(prompt)
          
        
        // Hide suggestions and welcome message after successful update
        setShow(false);
    };


      
    var GetResponse = async (prompt) => {  
        const genAI = new GoogleGenerativeAI('AIzaSyDcgqJRtyuORcu22kktac6o6FlWiCR2AaE');  
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });  
        const chat = model.startChat({});  
      
        let responseText = '';  
        const result = await chat.sendMessageStream(prompt);  
        for await (const chunk of result.stream) {  
          responseText += chunk.text();  
          setResponses((prevResponses) => [...prevResponses, chunk.text()]);  
        }  
      };
 
    
    // The cards are made in this variable, the prompts are extracted using the ConversationCardMaker component
    const cards = prompts.map((prompt, index) => (
        <section key={index} className="bg-amber-300 px-[24px] box-border mb-[48px] flex flex-col">
            <div className="flex items-center">
                <img src={avatar_icon} alt="icon not found" className="mr-[12px] w-[24px] h-[24px]" />
                <p className="text-[#051320] text-[16px] font-semibold leading-[20px]">You</p>
            </div>

            <p className="text-[#01CD98] text-[16px] line-[24px] font-normal mt-[8px]">{prompt}</p>
            
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

            <section className="mt-[48px]">
                <div className="flex items-center">
                    <img src={openai_icon} alt="icon not found" className="w-[16px] h-[16px]" />
                    <h1 className="text-[#051320] text-[16px] ml-[12px] font-semibold line-[24px]">Chat Bot AI</h1>
                </div>
                
                <p className="whitespace-pre-wrap font-normal text-[16px] text-[#051320] line-[24px] mt[16px]">{responses}</p>
            </section>
            
        </section>
    ));




    const items = [
        {
            title: "Brainstorm names",
            description: "for my fantasy football team with a frog theme"
        },
        {
            title: "Suggest some codenames",
            description: "for a project introducing flexible work arrangements"
        },
        {
            title: "Write a SQL query",
            description: 'that adds a "status" column to an "orders" table'
        },
        {
            title: "Explain why popcorn pops",
            description: "to a kid who loves watching it in the microwave"
        },
    ];



    return (
        <section className="box-border px-[16px] flex flex-col ">
            <ConversationNav />

            {show && (
                <section className="flex flex-col mb-[16px]">
                    <p className="text-[#051320] mb-[32px] text-[16px] leading-[20px] font-semibold text-center">
                        How can I help you, my friend? 😊️
                    </p>

                    <section className="bg-[white]">

                    <div>

                        {items.map((item, index) => (
                            <div 
                                key={index} 
                                onClick={() => addPromptSection(item.title+" "+item.description)} 
                                className="border border-[#EBEDEC] mb-[16px] rounded-[36px] p-[24px] flex cursor-pointer"
                            >
                                <div>
                                    <p className="text-[#051320] text-[16px] line-[20px] font-semibold mb-[12px]">{item.title}</p>
                                    <p className="text-[#051320] opacity-[0.7]">{item.description}</p>
                                </div>
                                <img src={default_chat} alt="icon not found" className="w-[24px] h-[24px] ml-[auto]" />
                            </div>
                        ))}
                    </div>

                    </section>
                </section>
            )}
            

            {cards}

            <ConversationCardMaker onSendPrompt={addPromptSection} />
        </section>
    );
}
