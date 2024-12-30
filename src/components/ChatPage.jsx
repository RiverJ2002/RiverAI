import { useState, useEffect } from "react";
import ConversationNav from './ConversationNav.jsx';
import ConversationCardMaker from './ConversationCardMaker.jsx';
import avatar_icon from './images/avatar_icon.png';
import edit_icon from './images/edit_icon.png';
import copy_icon from './images/copy_icon.png';
import default_chat from './images/default_chat.png'
import openai_icon from './images/openai_icon.png'
import regenerate_icon from './images/regenerate_icon.png'
import { GoogleGenerativeAI } from "@google/generative-ai";  
import { useLocation } from 'react-router-dom';  
import { CopyToClipboard } from 'react-copy-to-clipboard';




export default function ChatPage() {
    const [prompts, setPrompts] = useState([]);

    const [responses, setResponses] = useState({});

    const [show, setShow] = useState(true);

    const [newConversation, setNewConversation] = useState(null);

    const location = useLocation();

    // Get the conversationId from the router state
    const conversationId = location.state?.conversationId;
    
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (conversationId) {
            // Fetch the specific conversation by ID
            fetch(`https://6756066c11ce847c992bcae8.mockapi.io/Conversations/${conversationId}`)
                .then((response) => response.json())
                .then((data) => {
                    setNewConversation(data);
                    
                    // Populate prompts and responses from the conversation history
                    const userEntries = data.history.filter(entry => entry.role === 'user');
                    const modelEntries = data.history.filter(entry => entry.role === 'model');
                    
                    const extractedPrompts = userEntries.map(entry => entry.parts[0].text);
                    setPrompts(extractedPrompts);
                    
                    // Create responses object
                    const responsesObj = {};
                    extractedPrompts.forEach((prompt, index) => {
                        if (modelEntries[index]) {
                            responsesObj[prompt] = modelEntries[index].parts[0].text;
                        }
                    });
                    setResponses(responsesObj);
                    
                    setShow(false); // Hide suggestions
                });
        } else {
            // Fallback to existing logic if no conversation ID is provided
            fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations')
                .then((response) => response.json())
                .then((data) => {
                    const lastConversation = data[data.length - 1];
                    setNewConversation(lastConversation);
                });
        }
    }, [conversationId]); 




    var addPromptSection = async (prompt) => {
        // Add the new prompt to the local state
        setPrompts([...prompts, prompt]);
        setResponses((prev) => ({ ...prev, [prompt]: "" }));

        
        
        if (newConversation.model === "gemini") {
            var ThisResponse = await UseGemini(prompt, []);
            
            const updatedHistory = [
                ...newConversation.history,
                { role: "user", parts: [{ text: prompt }] },
                { role: "model", parts: [{ text: ThisResponse }] },
            ];
            
            const updatedConversation = {
                ...newConversation,
                history: updatedHistory,
            };
            
            setNewConversation(updatedConversation);





            // Update this conversaion card content to the server
            try {
                const response = await fetch(
                    `https://6756066c11ce847c992bcae8.mockapi.io/Conversations/${newConversation.id}`, 
                    {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(updatedConversation),
                    }
                );

                if (!response.ok) {
                    console.error('Failed to update conversation on the server');
                } else {
                    const updatedData = await response.json();
                    console.log('Server updated successfully:', updatedData);
                }
            } catch (error) {
                console.error('Error updating conversation:', error);
            }
        }

       

        setShow(false); // Hide suggestions and welcome message
    };
    

      
    const UseGemini = async (prompt, history) => {
        const genAI = new GoogleGenerativeAI('AIzaSyA9XkIgKEisgoScqgnwulBga_HzWhz_Xzw');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({ history });
        let result = await chat.sendMessageStream(prompt);


        let responseText = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            responseText += chunkText;

            //I learned this syntax from chatgpt. sometimes I like to see what it gives me. 
            //sometimes it can be a learning tool :) :)
            setResponses((prev) => ({
                ...prev,
                [prompt]: prev[prompt] + chunkText // Append chunk to the response for this prompt
            }));
        }

        return responseText;
    };
      
 


    const Edit = async (prompt) => {
        // Find the index of the prompt in prompts (the original state list where I pour all the prompts as they come)
        const promptIndex = prompts.indexOf(prompt);
    
        // Remove the prompt and associated response from state by resetting all the prompts other than the deleted one.
        const updatedPrompts = prompts.filter((_, index) => index !== promptIndex);
        setPrompts(updatedPrompts);
    
        // we add the responses to a list 
        const updatedResponses = { ...responses };
        delete updatedResponses[prompt]; // The delete operator is amazing. The delted card response is removed from the responses object entirely.
        setResponses(updatedResponses); // The other responses are added to the responses object.
    
        // All this was easy!! but I had to remove the editted item from the data as well. 
        //at first I need to change the variables.
        const updatedHistory = newConversation.history.filter((entry, index) => {
            // Exclude both the user prompt and the model response from the newConversation variable which will be poured into the mockApi.
            return index !== promptIndex * 2 && index !== promptIndex * 2 + 1;
        });
    

        const updatedConversation = {
            ...newConversation,
            history: updatedHistory,
        };

        
        // I simply make a new conversation for the updated version. 
        setNewConversation(updatedConversation);
    
        // Sync changes with the mock api server
        try {
            const response = await fetch(
                `https://6756066c11ce847c992bcae8.mockapi.io/Conversations/${newConversation.id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedConversation),
                }
            );
    
            if (!response.ok) {
                console.error('Failed to update conversation on the server');
            }
        } catch (error) {
            console.error('Error updating conversation:', error);
        }


        
    };
    

    var Regenerate = async (prompt) => {
        alert("I tried implementing this but it made me wanna die!")
    };


    // The cards are made in this variable, the prompts are extracted using the ConversationCardMaker component
    const cards = prompts.map((prompt, index) => (
        <section key={index} className=" px-[24px] box-border mb-[48px] flex flex-col">
            <div className="flex items-center">
                <img src={avatar_icon} alt="icon not found" className="mr-[12px] w-[24px] h-[24px]" />
                <p className="text-[#051320] text-[16px] font-semibold leading-[20px]">You</p>
            </div>

            <p className="text-[#01CD98] text-[16px] line-[24px] font-normal mt-[8px]">{prompt}</p>
            
            <div className="flex mt-[16px]">
                <div className="flex mr-[16px]">
                    <img src={edit_icon} alt="icon not found" className="w-[16px]  mr-[8px] h-[16px]" />
                    <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Edit</p>
                </div>

                <CopyToClipboard text={prompt}>
                    <div className="flex cursor-pointer">
                        <img src={copy_icon} alt="icon not found" className="w-[16px]  mr-[8px] h-[16px]" />
                        <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Copy</p>
                    </div>
                </CopyToClipboard>

            </div>

            <section className="mt-[48px]">
                <div className="flex items-center">
                    <img src={openai_icon} alt="icon not found" className="w-[16px] h-[16px]" />
                    <h1 className="text-[#051320] text-[16px] ml-[12px] font-semibold line-[24px]">Chat Bot AI</h1>
                </div>
                
                <p key={index} className="whitespace-pre-wrap font-normal text-[16px] text-[#051320] line-[24px] mt[16px]"> {responses[prompt] || "Processing..."}</p>
            </section>



            <div  className="flex mt-[16px]">
                <div onClick={() => Edit(prompt)}  className="flex mr-[16px] cursor-pointer">
                    <img src={edit_icon} alt="icon not found" className="w-[16px]  mr-[8px] h-[16px]" />
                    <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Edit</p>
                </div>

                
                <CopyToClipboard text={responses[prompt]}>
                    <div className="flex mr-[8px] cursor-pointer">
                        <img src={copy_icon} alt="icon not found" className="w-[16px]  mr-[8px] h-[16px]" />
                        <p className="text-[#616161] text-[14px] mr-[8px] leading-[18px] font-medium">Copy</p>
                    </div>
                </CopyToClipboard>



                <div onClick={() => Regenerate(prompt)} className="flex cursor-pointer">
                    <img src={regenerate_icon} alt="icon not found" className="w-[16px]  mr-[8px] h-[16px]" />
                    <p className="text-[#616161] text-[14px] leading-[18px] font-medium">Regenerate</p>
                </div>

            </div>
            
        </section>
    ));




    const items = [
        { title: "Brainstorm names", description: "for my fantasy football team with a frog theme" },
        { title: "Suggest some codenames", description: "for a project introducing flexible work arrangements" },
        { title: "Write a SQL query", description: 'that adds a "status" column to an "orders" table' },
        { title: "Explain why popcorn pops", description: "to a kid who loves watching it in the microwave" },
        { title: "Who is jinx in Arcane?", description: "She's amazing isn't she?" },
        { title: "How do stars die?", description: "How could we understand somwthing like this?" },
        { title: "Write me a simple kivy app that says hello aloud.", description: 'Just something to keep me busy I guess' },
        { title: "Ada wong, who is she??", description: " Why was she working with Wesker?!" },
    ];

    // Split the items into two groups
    const ForSmallerScreens = items.slice(0, 4);
    const ForLargerScreens = items.slice(4);


    return (
        <section className="box-border px-[16px] flex flex-col lg:w-[100%]">
            <ConversationNav />

            {show && (
                <section className="flex flex-col mb-[16px]">
                    <p className="text-[#051320] mb-[32px] text-[16px] leading-[20px] font-semibold text-center">
                        How can I help you, my friend? 😊️
                    </p>

                    <section className="lg:flex lg:justify-around">

                        <div>

                            {ForSmallerScreens.map((item, index) => (

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


                        <div>

                        {ForLargerScreens.map((item, index) => (

                            <div 
                                key={index} 
                                onClick={() => addPromptSection(item.title+" "+item.description)} 
                                className="border border-[#EBEDEC] md:hidden hidden mb-[16px] rounded-[36px] p-[24px] lg:flex cursor-pointer"
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
