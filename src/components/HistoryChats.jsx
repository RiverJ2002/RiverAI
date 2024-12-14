import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function HistoryChats() {
    const [conversations, setConversations] = useState([]);
    const navigate = useNavigate();

    var GoToConversation = (conversationId) => {
        // Navigate to the ChatPage and pass the conversation ID as a state in order to resurrect the old conversations!
        navigate('./ChatPage', { state: { conversationId: conversationId } });
    }

    // Fetch data on component mount
    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    const data = await response.json();
                    setConversations(data); 
                } else {
                    console.error('Failed to fetch conversations');
                }
            } catch (error) {
                console.error('Error fetching conversations:', error);
            }
        };

        fetchConversations();
    }, []); // Empty dependency array ensures this runs only once

    //The data extraction proved to be difficult in later on so I used functions to extract prompts and responses. 
    
    const extractPrompts = (history) => {
        return <div>
                {history[0].role === 'user' && (
                    <p className='text-[#01CD98] text-[16px] font-semibold	line-[16px]'>{history[0].parts.map((part) => part.text.split(" ").slice(0,12).join(" "))}</p>
                )}

                {history[1].role === 'model' && (
                    <p className='text-[#616161] font-normal text-[16px] line-[24px]'>{history[1].parts.map((part) => part.text.split(" ").slice(0,20).join(" ")+"...")}</p>
                )}
            </div>
       
    };
    
    const nonEmptyConversations = conversations.filter(conversation => conversation.history.length > 0);

    const ConversationSections = nonEmptyConversations.map((conversation, index) => (
        <section onClick={() => GoToConversation(conversation.id)} key={index} className="w-[190px] mb-[16px] ml-[16px] border rounded-[36px] py-[32px] px-[24px] box-border	cursor-pointer">
            {extractPrompts(conversation.history)}
            <p className='text-[#616161] text-[14px] font-normal line-[18px] mt-[20px]'>{conversation.time}</p>
        </section>
    ));

    return (
        <section className="mt-[48px] flex flex-wrap">
            {ConversationSections.length > 0 ? (
                ConversationSections
            ) : (
                <p>{conversations.length==0 ? "No chats found" : "Loading conversations..."}</p>
            )}
        </section>
    );
}
