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
                


              

            <Popup trigger={UploadButton} modal contentStyle={{ width: '90%',
                 display:'flex', justifyContent: 'center', padding:0}}>
            {close => (

                <section>

            <section className='bg-emerald-300 flex justify-between items-center px-[20px]'>  
            <img src={x_icon} onClick={close} alt="icon not found" className="w-[40px] h-[40px] cursor-pointer" />  

                <div className='flex items-center justify-center flex-grow bg-orange-500'>  
                    <img src={pdf_icon} alt="icon not found" className="w-[40px] h-[40px]" />  
                    <p className="ml-2">Export as PDF</p>  
                </div>  

            </section>



                    <section className='flex flex-col bg-amber-200 p-[32px]'>
                        <p className='font-normal text-[16px]'>All your conversations with
                            Chat Bot AI will be <br /> exported as PDF. Please choose a title for this file</p>
                    
                        <input type="text" placeholder='Title' className='border rounded-[16px]
                        border-[#EBEDEC] box-border px-[24px] h-[56px]'/>


                        <button className='rounded-[36px] h-[56px] w-[100%] bg-[#051320] text-[white]'>Export</button>

                    </section>

                </section>
            )}
            </Popup>
            

           </nav>

}

