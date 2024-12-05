import { Link } from "react-router-dom"
import icon_left from "./images/icon_left.png"
import avatar_icon from "./images/avatar_icon.png"
import openai_icon from './images/openai_icon.png'
import plus_icon from './images/plus_icon.png'

export default function HistoryPage(){
    
    return  <section className="flex-col bg-neutral-200">

                {/* the nav section of the history page */}
                <section className="flex justify-between h-[100%] items-center box-border px-[24px] pt-[24px]">
                    <Link className="bg-[#01CD98] h-[56px] ml-[16px] flex items-center" to={"/"}>
                        <img src={icon_left} alt="icon not found" className="w-[40px] h-[40px]" />
                        <p className="text-[20px] ml-[12px]">Back</p>
                    </Link>

                    <img src={avatar_icon} alt="icon not found" className="w-[40px] h-[40px] mr-[16px]" />
                </section>

                
                {/* The header part of the history page */}
                <section className="mt-[24px] bg-yellow-400 box-border p-[24px]">

                    <h1 className="text-[#051320] text-[40px]">Start a new chat</h1>
                    <div className="flex items-center h-[48px]">
                        <p className="text-[#051320] text-[40px]">With</p>    
                        <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[16px]" />
                    </div>

                    <div className="flex justify-between items-center bg-zinc-50">
                        <h1 className="text-[40px] bg-gradient-to-r from-[#051320] via-[#00F5B5] to-[#ADE2FF] inline-block text-transparent bg-clip-text">Chat bot AI</h1>
                        <Link className=" bg-[#01CD98] w-[156px] h-[56px] flex items-center rounded-[36px] hover:bg-blue-600 justify-center">
                            <img src={plus_icon} alt="icon not found" className="w-[24px] h-[24px] mr-[8px] " />
                            <p className="text-[#FFFFFF] text-[16px]">New Topic</p>
                        </Link>
                    </div>

                </section>

            </section>
}
