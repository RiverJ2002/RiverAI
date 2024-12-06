import { Link } from "react-router-dom"
import email_icon from './images/email_icon.png'; 
import key_icon from './images/key_icon.png'
import eye_icon from './images/eye_icon.png'
import google_icon from './images/google_icon.png'
import facebook_icon from './images/facebook_icon.png'
import openai_icon from './images/openai_icon.png'
import { useState } from "react";



export default function NormalLogin(){

    var [PasswordState , setPasswordState] = useState("password");

    var ManagePasswordState = ()=>{
      setPasswordState(PasswordState=="text" ? "password"  : "text"); 
      console.log(PasswordState);
    }
    
    
    return <form className="flex-col bg-fuchsia-400 flex justify-center mt-[40px]  px-[32px] box-border">

      {/* The login page header section */}
      <section className="bg-lime-200 mb-[40px]">
        <img src={openai_icon} alt="icon not found" className="w-[64px] h-[64px] mb-[24px]" />
        <h1 className="text-[4rem] mb-[16px]">Login to your <br /> account</h1>
        <p className="text-[1.6rem]">Don’t have an account? <span className="text-[#01CD98]"><a href="">Sign Up</a></span></p>
      </section>


      {/* The section for normal input. (user enters their informaion) */}
      <section className="bg-white w-[100%] mb-[32px]">
        
        {/* The email input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border 
        border-solid h-[56px] items-center ">

          <img src={email_icon} alt="icon not found" className="w-[28px] h-[28px] ml-[16px]" />
          <input type="text" placeholder="Email" className=" bg-transparent ml-[12px] outline-none w-[100%] h-[100%] text-[1.4rem]"/>

        </section>

        {/* The passsword input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border
        border-solid h-[56px] items-center box-border px-[16px] mt-[24px]">

          <img src={key_icon} alt="icon not found" className="w-[28px] h-[28px]" />
          <input type={PasswordState} placeholder="password" className="border-none bg-transparent ml-[12px] outline-none	w-[100%] h-[100%] text-[1.4rem]"/>
          <img src={eye_icon} alt="icon not found" className="w-[28px] h-[28px] ml-auto"
           onClick={ManagePasswordState}/>
        </section>
        
        <section className="flex justify-between items-center  mt-[32px]">  
            <div></div> {/* Just a placeholder to push the link to the far right */}  
            <a href="" className="pr-[32px] text-[#01CD98] text-[1.4rem]">Forgot Password?</a>  
        </section>
      </section>


      
      <Link className="bg-[#01CD98] rounded-[36px] w-[100%] h-[56px] flex items-center
       justify-center mb-[32px] text-[1.6rem] text-[#FFFFFF]" to={"HistoryPage"}>Login</Link>



      {/* Other ways to login */}
      <div className="flex mb-[32px] items-center justify-between">
        <div  className="w-[121px] h-[1px] bg-[#EBEDEC]"></div>
        <p className="text-[#616161] text-[1.4rem]">Or login with</p>
        <div  className="w-[121px] h-[1px] bg-[#EBEDEC]"></div>
      </div>
      

      <section className="w-[100%] h-[56px] bg-blue-400 flex justify-between">

        {/* Login with google button */}
        <button className="flex items-center justify-center
         bg-amber-200 rounded-[36px] w-[178px]">
          <img src={google_icon} alt="icon not found" className="w-[28px] h-[28px]"/>
          <p className="ml-[8px] text-[#051320] text-[16px]"><b>Google</b></p>
        </button>

        {/* Login with facebook button */}
        <button className="flex items-center justify-center
         bg-amber-200 rounded-[36px] w-[178px]">
          <img src={facebook_icon} alt="icon not found" className="w-[28px] h-[28px] "/>
          <p className="ml-[8px] text-[#051320] text-[16px]"><b>Facebook</b></p>
        </button>

      </section>

      <a className="mt-[112px] flex justify-center text-[#616161] text-[1.4rem]">Terms of use | Privacy policy</a>
      
    </form>
}





