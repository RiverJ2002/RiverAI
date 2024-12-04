import { Link } from "react-router-dom"

export default function NormalLogin(){
    
    return <section className="flex-col bg-neutral-200">
      <h1 className="text-[red]">This is page 1</h1>
      <Link className="bg-[#01CD98] rounded-[36px] w-[80%] h-[56px] flex items-center
       justify-center" to={"HomePage"}>Login</Link>
     
      
    </section>
}





