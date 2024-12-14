import { func } from 'prop-types';
import h_munu_icon from './images/h_munu_icon.png';
import openai_icon from './images/openai_icon.png';
import upload_icon from './images/upload_icon.png';
import pdf_icon from './images/pdf_icon.png'
import x_icon from './images/x_icon.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState, useEffect } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   

{/* the nav part for the chat page was made to give the user other options to use the LLM */}
        
export default function ConversationNav(){

    // for the pop up to have cleaner code I made the upload image element here to be added later. 
    var UploadButton = <img src={upload_icon}  alt="icon not found" className="w-[40px] h-[40px]
    mr-[24px] ml-[auto]" />

    const [theme, setTheme] = useState("system");


      // Function to apply theme to the document body
  const applyTheme = (selectedTheme) => {

      document.documentElement.classList.toggle("dark", selectedTheme === "dark");
    
  };


    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return <nav className=" flex items-center mt-[24px] mb-[60px]">
                <Menu placement="bottom-start">
                    <MenuHandler>
                        <img src={h_munu_icon} alt="icon not found" className="w-[40px] h-[40px]" />
                    </MenuHandler>
                    <MenuList className='flex flex-col w-[400px] flex-nowrap overflow-y-auto'>

                        <MenuItem onClick={()=>applyTheme("system")} className='h-[80px]'><p className='text-[#051320] text-[20px] font-medium'>
                        System default</p></MenuItem>

                        <MenuItem onClick={()=>applyTheme("light")} className='h-[80px]'><p className='text-[#051320] text-[20px] font-medium'>
                        Light mode</p></MenuItem>

                        <MenuItem onClick={()=>applyTheme("dark")} className='h-[80px]'><p className='text-[#051320] text-[20px] font-medium'>
                        Dark mode</p></MenuItem>
                        <hr className="my-3" />
                        <MenuItem className='h-[80px]'><p className='text-[#051320] text-[20px] font-medium'>
                        Delete Account</p></MenuItem>
                        <MenuItem className='h-[80px]'><p className='text-[#CB4959] text-[20px] font-medium'>
                            Sign out</p></MenuItem>


                        
                    </MenuList>
                </Menu>

                
                <img src={openai_icon} alt="icon not found" className="w-[40px] h-[40px] ml-[12px]" />
                <p className="text-[#051320] text-[20px] leading-[24px]
                font-semibold ml-[16px]">GPT 4o</p>
                


              

            <Popup trigger={UploadButton} modal contentStyle={{ width: '90%',
                 display:'flex', justifyContent: 'center', padding:0}}>
            {close => (

                <section>

            <section className=' flex justify-between items-center px-[20px]'>  
            <img src={x_icon} onClick={close} alt="icon not found" className="w-[40px] h-[40px] cursor-pointer" />  

                <div className='flex items-center justify-center flex-grow '>  
                    <img src={pdf_icon} alt="icon not found" className="w-[40px] h-[40px]" />  
                    <p className="ml-2">Export as PDF</p>  
                </div>  

            </section>



                    <section className='flex flex-col  p-[32px]'>
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

