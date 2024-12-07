
import icon_left from './images/icon_left.png'
import avatar_icon from './images/avatar_icon.png'
import kebab_icon from './images/kebab_icon.png'
import expand_icon from './images/expand_icon.png'


export default function ProfilePage(){
    
    return  <section className="flex-col">
                <nav className='flex justify-between items-center  bg-neutral-200'>
                
                    <div className='flex items-center'>
                        <img src={icon_left} alt="icon not found" className="w-[40px] h-[40px]" />
                        <p className='text-[#051320] text-[20px] font-semibold	line-[24px]'>Profile & Settings</p>
                    </div>

                    <img src={kebab_icon} alt="icon not found" className="w-[40px] h-[40px]" />

                </nav>

                <section className='flex flex-col justify-center items-center bg-amber-300 box-border p-[24px]'>
                    
                    <img src={avatar_icon} alt="icon not found" className="w-[96px] h-[96px] mb-[24px] mt-[64px]" />

                    <p className='text-[#051320] text-[22px] font-bold	line-[33px]'>Reza Alavi</p>

                </section>

                
                <section className='bg-violet-400 mt-[24px] box-border p-[24px]'>
                    <div className='pb-[24px] border-b-2 flex justify-between'>
                        <p className='text-[#051320] text-[18px] font-medium line-[24px]'>Email</p>
                        <img src={expand_icon} alt="icon not found" className="w-[24px] h-[24px]" />
                    </div>

                    <div className='pb-[24px] pt-[24px] border-b-2 flex justify-between'>
                    <p className='text-[#051320] text-[18px] font-medium line-[24px]'>Theme</p>
                        <img src={expand_icon} alt="icon not found" className="w-[24px] h-[24px]" />
                    </div>

                    <div className='pb-[24px] pt-[24px] border-b-2 flex justify-between'>
                        <p className='text-[#051320] text-[18px] font-medium line-[24px]'>Data & storage</p>
                        <img src={expand_icon} alt="icon not found" className="w-[24px] h-[24px]" />
                    </div>

                    <div className='pb-[24px] pt-[24px] border-b-2 flex justify-between'>
                        <p className='text-[#051320] text-[18px] font-medium line-[24px]'>Change password</p>
                        <img src={expand_icon} alt="icon not found" className="w-[24px] h-[24px]" />
                    </div>

                    <div className='pt-[24px] flex justify-between mb-[12px]'>
                        <p className='text-[#051320] text-[18px] font-medium line-[24px]'>Send feedback</p>
                        <img src={expand_icon} alt="icon not found" className="w-[24px] h-[24px]" />
                    </div>

                    <p className='text-[#616161] text-[14px] line-[18px] font-normal'>Chatbot AI can make mistakes. Consider checking 
                        important information and send us your feedback</p>

                    
                    <p className='text-[#616161] text-[14px] line-[18px] font-normal mt-[112px] mb-[8px] text-center'>Chat Bot AI - Version 2.0.5</p>

                    <p className='text-[#616161] text-[14px] line-[18px] font-normal text-center'>Terms of use | Privacy policy'</p>
                </section>
              
            </section>
}
