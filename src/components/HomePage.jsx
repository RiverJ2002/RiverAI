import { Link } from "react-router-dom"
import icon_left from "./images/icon_left.png"
import avatar_icon from "./images/avatar_icon.png"

export default function HomePage(){
    
    return  <section className="flex-col bg-neutral-200">
                <section className="flex justify-between items-center">
                    <Link className="bg-[#01CD98] h-[56px] ml-[16px] flex items-center" to={"/"}>
                        <img src={icon_left} alt="icon not found" className="w-[40px] h-[40px] ml[16px]" />
                        <p className="text-[2rem] ml-[12px]">Back</p>
                    </Link>

                    <img src={avatar_icon} alt="icon not found" className="w-[40px] h-[40px] mr-[16px]" />
                </section>


            </section>
}
