import React from 'react'
import aboutImg from "../assets/about.jpg"
import { RiDoubleQuotesL } from 'react-icons/ri'

const About = () => {
  return (
   <section className='max-padd-container py-16 xl:py-28'>
    {/* container */}
    <div className='flex flex-col xl:flex-row gap-10'>
        {/* left side */}
        <div className='flex-1 relative'>
            <img src={aboutImg} alt="" className='rounded-3xl rounded-tr-[155px] w-[488px]' />
            <div className='bg-white absolute bottom-16 max-w-xs p-4 rounded-lg flexCenter flex-col'>
                <span className='relative bottom-8 p-3 shadow-md bg-white h-12 w-12 flex items-center rounded-full' ><RiDoubleQuotesL className='text-2xl'/>
                </span>
                <p className='text-center relative bottom-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, praesentium!</p>
            </div>
        </div>
        {/* right side */}
        <div>
            <span>Unveilling Our Journey</span>
            <h2 className='text-4xl font-bold'>Our Commitement Crafting Extraordinary Real Estate Expiernce</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati accusamus quas repellendus sunt nam earum quod ex consectetur. Magnam, reprehenderit.</p>
            {/* Statistics conatiner */}
            <div>
                {statistics.map((statistic,index)=>(
                    <div key={index}>
                        <div className=''>

                        </div>
                     </div>
                ))}
            </div>
        </div>
    </div>
   </section>
 )
}

export default About