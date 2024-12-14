import { Link , useNavigate} from "react-router-dom"
import email_icon from './images/email_icon.png'; 
import key_icon from './images/key_icon.png'
import eye_icon from './images/eye_icon.png'
import google_icon from './images/google_icon.png'
import facebook_icon from './images/facebook_icon.png'
import openai_icon from './images/openai_icon.png'
import { useState } from "react";
import SignInPage from "./SignInPage";



export default function NormalLogin(){
    const navigate = useNavigate();

    var [PasswordState , setPasswordState] = useState("password");

    const [EnteredEmail, setEnteredEmail] = useState('');
    const [EnteredPassword, setEnteredPassword] = useState('');

    var ManagePasswordState = ()=>{
      setPasswordState(PasswordState=="text" ? "password"  : "text"); 
      console.log(PasswordState);
    }
    
    var HandleEmailInput = (event) => {
      
      setEnteredEmail(event.target.value);
    };


    var LogIn = async () => {
      console.log(EnteredEmail);
      console.log(EnteredPassword);
    
      try {
        const response = await fetch('https://6756066c11ce847c992bcae8.mockapi.io/UserInfo', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
    

        const users = await response.json(); // Parse the JSON response
    
        // Check if any user matches the entered email and password
        const userFound = users.some(user => 
          user.Email === EnteredEmail && user.Password === EnteredPassword
        );
    
        if (userFound) {
          console.log('Login successful');
          // Navigate to the next page or perform any other action
        } else {
          console.log('Invalid email or password');
          // Handle invalid login (e.g., show an error message)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    


    var HandlePasswordInput = (event) => {
      setEnteredPassword(event.target.value);
    };
    
    return <form className="flex-col flex justify-center mt-[40px]  px-[32px] box-border 
    lg:bg-orange-300 lg:flex-row">

      {/* The login page header section */}
      <section className=" mb-[40px] lg:bg-green-300 lg:mr-[50px]">
        <img src={openai_icon} alt="icon not found" className="w-[64px] h-[64px] mb-[24px]" />
        <h1 className="text-[4rem] mb-[16px]">Login to your <br /> account</h1>
        <p className="text-[1.6rem]  lg:hidden">Don’t have an account? <span className="text-[#01CD98]"><Link to={"/SignInPage"}>Sign Up</Link></span></p>
      </section>





      {/* The section for normal input. (user enters their informaion) */}
      <section className="bg-white w-[100%] mb-[32px] lg:bg-teal-400 lg:flex lg: flex-col
      lg: justify-center">
        
        {/* The email input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border 
        border-solid h-[56px] items-center ">

          <img src={email_icon} alt="icon not found" className="w-[28px] h-[28px] ml-[16px]" />
          <input type="text" value={EnteredEmail} onChange={HandleEmailInput} placeholder="Email" className=" bg-transparent ml-[12px] outline-none w-[100%] h-[100%] text-[1.4rem]"/>

        </section>

        {/* The password input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border
        border-solid h-[56px] items-center box-border px-[16px] mt-[24px]">

          <img src={key_icon} alt="icon not found" className="w-[28px] h-[28px]" />
          <input type={PasswordState} value={EnteredPassword} onChange={HandlePasswordInput} placeholder="password" className="border-none bg-transparent ml-[12px] outline-none	w-[100%] h-[100%] text-[1.4rem]"/>
          <img src={eye_icon} alt="icon not found" className="w-[28px] h-[28px] ml-auto"
           onClick={ManagePasswordState}/>
        </section>
        
        <section className="flex justify-between items-center  mt-[32px]">  
            <div></div> {/* Just a placeholder to push the link to the far right */}  
            <a href="" className="pr-[32px] text-[#01CD98] text-[1.4rem]">Forgot Password?</a>  
        </section>


        <Link onClick={LogIn} className=" bg-[#01CD98] rounded-[36px] w-[100%] h-[56px] flex items-center
       justify-center mb-[32px] text-[1.6rem] text-[#FFFFFF] hidden lg:flex" to={"HistoryPage"}>Login</Link>

      </section>

      {/* The sign in  page header section for desktops*/}
      <section className=" mb-[40px] lg:bg-green-300 lg:mr-[50px] hidden lg:block lg:ml-[50px]  lg:mr-[50px]">
          <img src={openai_icon} alt="icon not found" className="w-[64px] h-[64px] mb-[24px]" />
          <h1 className="text-[4rem] mb-[16px]">Sign in to My <br /> ChatBot</h1>
          <p className="text-[1.6rem]  lg:hidden">Don’t have an account? <span className="text-[#01CD98]"><Link to={"/SignInPage"}>Sign Up</Link></span></p>
      </section>
      
      <Link onClick={LogIn} className="bg-[#01CD98] rounded-[36px] w-[100%] h-[56px] flex items-center
       justify-center mb-[32px] text-[1.6rem] text-[#FFFFFF] lg: hidden" to={"HistoryPage"}>Login</Link>


      <SignInPage />


      {/* Other ways to login */}
      <div className="flex mb-[32px] items-center justify-between lg:hidden">
        <div  className="w-[121px] h-[1px] bg-[#EBEDEC]"></div>
        <p className="text-[#616161] text-[1.4rem]">Or login with</p>
        <div  className="w-[121px] h-[1px] bg-[#EBEDEC]"></div>
      </div>
      

      <section className="w-[100%] h-[56px] flex justify-between lg:hidden">

        {/* Login with google button */}
        <button className="flex items-center justify-center
          rounded-[36px] w-[178px] bg-[#6464641F]">
          <img src={google_icon} alt="icon not found" className="w-[28px] h-[28px]"/>
          <p className="ml-[8px] text-[#051320] text-[16px]"><b>Google</b></p>
        </button>

        {/* Login with facebook button */}
        <button className="flex items-center justify-center
          rounded-[36px] w-[178px] bg-[#6464641F]">
          <img src={facebook_icon} alt="icon not found" className="w-[28px] h-[28px] "/>
          <p className="ml-[8px] text-[#051320] text-[16px]"><b>Facebook</b></p>
        </button>

      </section>

      <a className="mt-[112px] flex justify-center text-[#616161] text-[1.4rem] lg:hidden">Terms of use | Privacy policy</a>
      
    </form>
}





