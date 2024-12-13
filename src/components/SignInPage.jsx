import { Link , useNavigate} from "react-router-dom"
import email_icon from './images/email_icon.png'; 
import key_icon from './images/key_icon.png'
import eye_icon from './images/eye_icon.png'
import openai_icon from './images/openai_icon.png'
import { useState } from "react";
import avatar_icon from './images/avatar_icon.png';


export default function SignInPage(){
    const navigate = useNavigate();
    var [PasswordState , setPasswordState] = useState("password");
    const [EnteredEmail, setEnteredEmail] = useState('');
    const [EnteredPassword, setEnteredPassword] = useState('');
    const [EnteredName, setEnteredName] = useState('');

    
    var ManagePasswordState = ()=>{
      setPasswordState(PasswordState=="text" ? "password"  : "text"); 
      console.log(PasswordState);
    }
    
    var HandleEmailInput = (event) => {
      
      setEnteredEmail(event.target.value);
    };

    var HandlePasswordInput = (event) => {
      setEnteredPassword(event.target.value);
    };


    var HandleNameInput = (event) => {
      setEnteredName(event.target.value);
    };


    var HandleSignin = async () => {
      console.log(EnteredEmail);
      console.log(EnteredPassword);
    
      var newUser = {
        Name: EnteredName,
        Email: EnteredEmail,
        Password: EnteredPassword
      };
    
  
    const res = await fetch('https://6756066c11ce847c992bcae8.mockapi.io/UserInfo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    };
    

    
    return <form className="flex-col flex justify-center mt-[40px]  px-[32px] box-border">

      {/* The login page header section */}
      <section className=" mb-[40px]">
        <img src={openai_icon} alt="icon not found" className="w-[64px] h-[64px] mb-[24px]" />
        <h1 className="font-bebas text-[50px] mb-[16px] text-[#051320]"><b>Sign in to your <br /> account</b></h1>
        <p className="text-[1.6rem]">Already have an account? <span className="text-[#01CD98]"><Link to={'/'}>Login</Link></span></p>
      </section>


      {/* The section for normal input. (user enters their informaion) */}
      <section className="bg-white w-[100%] mb-[32px]">
        
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


        {/* The name input section */}
        <section className="flex bg-white rounded-[16px] border-[#dbdcdc] border
            border-solid h-[56px] items-center box-border px-[16px] mt-[24px]">
            <img src={avatar_icon} alt="icon not found" className="w-[28px] h-[28px]" />
            <input type={"text"} value={EnteredName} onChange={HandleNameInput} placeholder="name" className="border-none bg-transparent ml-[12px] outline-none	w-[100%] h-[100%] text-[1.4rem]"/>
        </section>
        
        
        <section className="flex justify-between items-center  mt-[32px]">  
            <div></div> {/* Just a placeholder to push the link to the far right */}  
            <a href="" className="pr-[32px] text-[#01CD98] text-[1.4rem]">Forgot Password?</a>  
        </section>
      </section>


      
      <Link onClick={HandleSignin}  to={"/"} className="bg-[#01CD98] rounded-[36px] w-[100%] h-[56px] flex items-center
       justify-center mb-[32px] text-[1.6rem] text-[#FFFFFF]" >Sign in</Link>




      


      <a className="mt-[80px] flex justify-center text-[#616161] text-[1.4rem]">Terms of use | Privacy policy</a>
      
    </form>
}





