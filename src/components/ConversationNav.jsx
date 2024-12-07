import { func } from 'prop-types';
import h_munu_icon from './images/h_munu_icon.png';
import openai_icon from './images/openai_icon.png';
import upload_icon from './images/upload_icon.png';
import pdf_icon from './images/pdf_icon.png'
import x_icon from './images/x_icon.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


{/* the nav part for the chat page was made to give the user other options to use the LLM */}
        
export default function ConversationNav(){

    var UploadButton = <img src={upload_icon}  alt="icon not found" className="w-[40px] h-[40px]
    mr-[24px] ml-[auto]" />

    return <nav className=" flex items-center bg-fuchsia-400 mt-[24px] mb-[60px]">
                <img src={h_munu_icon} alt="icon not found" className="w-[40px] h-[40px]" />
                <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[12px]" />
                <p className="text-[#051320] text-[20px] leading-[24px]
                font-semibold ml-[16px]">GPT 4o</p>
                


              

            <Popup trigger={UploadButton} modal>
                <section className='flex items-center'>
                    <img src={x_icon} alt="icon not found" className="w-[40px] h-[40px]" />

                    <img src={pdf_icon} alt="icon not found" className="w-[40px] h-[40px]" />

                    <p>Export as PDF</p>
                </section>

                <p>All your conversations with
                     Chat Bot AI will be exported as PDF. Please choose a title for this file</p>
            
                <input type="text" placeholder='Title' className='border rounded-[16px]
                 border-[#EBEDEC] box-border '/>
            </Popup>

           </nav>

}

