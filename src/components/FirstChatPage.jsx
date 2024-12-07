import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ConversationNav from './ConversationNav.jsx';
import ConversationCardMaker from './ConversationCardMaker.jsx';

export default function FirstChatPage() {
    const navigate = useNavigate();
    const [firstPrompt, setFirstPrompt] = useState("");

    const handleSendPrompt = (prompt) => {
        if (prompt.trim() === "") return;

        // Navigate to ConversationPage with the first prompt
        navigate('./ConversationPage', { state: { firstPrompt: prompt } });
    };

    return (
        <section>
            <ConversationNav />
            <section className="bg-zinc-200">
                <p className="text-[#051320] text-[16px] leading-[20px] font-semibold">
                    How can I help you, my friend? 😊️
                </p>
            </section>
            <ConversationCardMaker onSendPrompt={handleSendPrompt} />
        </section>
    );
}
