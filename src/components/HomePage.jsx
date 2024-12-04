import { Link } from "react-router-dom"


export default function HomePage(){
    
    return <section className="flex-col bg-neutral-200">
              <h1 className="text-[red]">This is page 2</h1>
      <Link className="bg-[#01CD98] rounded-[36px] w-[80%] h-[56px] flex items-center
       justify-center" to={"/"}>Back</Link>
    </section>
}
