import { Link } from "react-router-dom"
import email_icon from './images/email_icon.png'; 
import key_icon from './images/key_icon.png'
import eye_icon from './images/eye_icon.png'
import google_icon from './images/google_icon.png'
import facebook_icon from './images/facebook_icon.png'


export default function NormalLogin(){
    
    return <section className="flex-col bg-fuchsia-400">

      {/* The section for normal input. (user enters their informaion) */}
      <section className="bg-white w-[100%] mb-[32px]">
        
        {/* The email input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border 
        border-solid h-[56px] items-center ">

          <img src={email_icon} alt="icon not found" className="w-[28px] h-[28px] ml-[16px]" />
          <input type="text" placeholder="Email" className="ml-[12px] outline-none w-[100%] h-[100%]"/>

        </section>

        {/* The passsword input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border 
        border-solid h-[56px] items-center box-border px-[16px]">

          <img src={key_icon} alt="icon not found" className="w-[28px] h-[28px]" />
          <input type="text" placeholder="Password" className="ml-[12px] outline-none	w-[100%] h-[100%]"/>
          <img src={eye_icon} alt="icon not found" className="w-[28px] h-[28px] ml-auto"/>
          

        </section>
        <a href="" className="flex justify-end	pr-[32px] text-[#01CD98] mt-[24px]">Forgot Password?</a>
      </section>
      
      


      
      <Link className="bg-[#01CD98] rounded-[36px] w-[100%] h-[56px] flex items-center
       justify-center mb-[32px]" to={"HomePage"}>Login</Link>



      {/* Other ways to login */}
      <p className="text-[#616161] mb-[32px]">Or login with</p>
      <section className="w-[100%] h-[56px] bg-blue-400 flex justify-between">

        {/* Login with google button */}
        <button className="flex items-center justify-center
         bg-amber-200 rounded-[36px] w-[178px]">
          <img src={google_icon} alt="icon not found" className="w-[28px] h-[28px] "/>
          <p className="ml-[8px]">Google</p>
        </button>

        {/* Login with facebook button */}
        <button className="flex items-center justify-center
         bg-amber-200 rounded-[36px] w-[178px]">
          <img src={facebook_icon} alt="icon not found" className="w-[28px] h-[28px] "/>
          <p className="ml-[8px]">Facebook</p>
        </button>

      </section>
      
    </section>
}





