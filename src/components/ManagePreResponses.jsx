import openai_icon from './images/openai_icon.png'



export default function ManageResponses() {



    return (
        <section className="mt-[48px]">
            <div className="flex items-center">
                <img src={openai_icon} alt="icon not found" className="w-[16px] h-[16px]" />
                <h1 className="text-[#051320] text-[16px] ml-[12px] font-semibold line-[24px]">Chat Bot AI</h1>
            </div>
            
            <p className="whitespace-pre-wrap font-normal text-[16px] text-[#051320] line-[24px] mt[16px]">{responses}</p>
        </section>
    );
}
