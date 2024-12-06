

import send_icon from './images/send_icon.png'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function PromptReciever({ UserPrompt, setTextValue, SendPrompt }) {
    const PromptInputChange = (event) => {
        setTextValue(event.target.value);
    };

    return <textarea
            placeholder="Ask me anything..."
            className="text-[16px] w-[100%] h-[56px] mr-[12px] bg-white border border-[red] border-solid rounded-[30px] resize-none px-[16px] py-[14px] outline-none"
            rows="1"
            value={UserPrompt}
            onInput={PromptInputChange}
        ></textarea>
    ;
}


