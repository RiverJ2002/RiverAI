import { useNavigate } from "react-router-dom";
import icon_left from './images/icon_left.png';
import avatar_icon from './images/avatar_icon.png';
import openai_icon from './images/openai_icon.png';
import plus_icon from './images/plus_icon.png';
import search_icon from './images/search_icon.png';
import { Link } from "react-router-dom"


export default function HistoryPage() {
    const navigate = useNavigate();

    const StartNewConversation = async () => {
        // The data that will be sent to MockApi is originated here along with the user prompt. 
        const NowTime = new Date().toLocaleString();

        const NewConversation = {
            history:[],
            time: NowTime,
            model: "gemini"
        };

        
        // the exact time that this component is called is when the user attempts to make a new conversation.
        //meaning that we'll have the time in which each converstion started. 
        await fetch('https://6756066c11ce847c992bcae8.mockapi.io/Conversations', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            // Send your data in the request body as JSON
            body: JSON.stringify(NewConversation)
        }).then((res) => res.json)
        

        // Navigate to ChatPage and pass the conversation ID or other data
        navigate('./ChatPage');
        
    };

    return (
        <section className="flex-col bg-white">
            {/* the nav section of the history page */}
            <section className="flex justify-between items-center box-border px-[24px] pt-[24px]">
                <Link className=" h-[56px] flex items-center" to={"/"}>
                    <img src={icon_left} alt="icon not found" className="w-[40px] h-[40px]" />
                    <p className="text-[20px] ml-[12px]">Back</p>
                </Link>

                <Link to={"ProfilePage"}>
                    <img src={avatar_icon} alt="icon not found" className="w-[40px] h-[40px] " />
                </Link>
            </section>

            {/* The header part of the history page */}
            <section className="mt-[24px] box-border p-[24px]">
                <h1 className="text-[#051320] text-[40px]">Start a new chat</h1>

                {/* The with gpt icon section */}
                <div className="flex items-center h-[48px] mb-[12px]">
                    <p className="text-[#051320] text-[40px]">With</p>
                    <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[16px]" />
                </div>

                {/* The new topic maker section */}
                <div className="flex justify-between items-center bg-zinc-50">
                    <h1 className="text-[40px] bg-gradient-to-r from-[#051320] via-[#00F5B5] to-[#ADE2FF] inline-block text-transparent bg-clip-text">Chat bot AI</h1>

                    <button
                        onClick={StartNewConversation}
                        className="bg-[#01CD98] w-[156px] h-[56px] flex items-center rounded-[36px] hover:bg-blue-600 justify-center"
                    >
                        <img src={plus_icon} alt="icon not found" className="w-[24px] h-[24px] mr-[8px]" />
                        <p className="text-[#FFFFFF] text-[16px]">New Topic</p>
                    </button>
                </div>
            </section>

            {/* Search previous chats section */}
            <section className="flex justify-between items-center">
                <h1 className="text-[#051320] text-[24px] ml-[24px]">History</h1>
                <div className="flex w-[290px] bg-white rounded-[32px] border-[#dbdcdc] border 
                    border-solid h-[56px] items-center ">
                    <input type="search" placeholder="Search ..." className="ml-[12px] outline-none w-[100%] h-[100%] text-[1.4rem]" />
                    <img src={search_icon} alt="icon not found" className="w-[24px] h-[24px] mr-[8px]" />
                </div>
            </section>

            {/* showing previous chats here */}
            <section>
            </section>
        </section>
    );
}
