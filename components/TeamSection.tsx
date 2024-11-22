import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


import {Roboto} from 'next/font/google'
const roboto = Roboto({
    subsets: ["latin"],
    weight:["400","700"]
})

function TeamSection() {
  return (
    <div className={roboto.className}>
        
        {/* main div */}
       <div className='w-[1280px] h-[895px] pt-[112px] bt-[112px] pl-16 pr-16 bg-primary'>
                  
                  {/* heading div */}
          <div className='w-[786px] h-[109px] gap-6  mx-auto text-center'>
            <h2 className='font-bold text-5xl '>
            Our team
            </h2>
             <p className='text-[18px] leading-[27px] mt-8'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             </p>
             </div>



                        {/* Our Team */}
             <div className='w-[1280px] h-[610px] gap-16 mt-20'>
               
               {/*  1st Row */}
               <div className='w-[1280px] h-[273] gap-12  flex'>
                                
                                {/* 1 James Nduku box */}
               <div className='w-[394px] h-[273px]  flex flex-col  items-center'>
                    <Image src={"/james.svg"} alt='james Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
                James Nduku
                </p>

                <p className='text-[18px] leading-[27px] '>
                Marketing Coordinator
                </p>

                <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>
                 </div>


                                          
                                          {/*2 Joseph Munyambu box */}
                 <div className='w-[394px] h-[273px]   flex flex-col  items-center'>
                    <Image src={"/jose-img.svg"} alt='joseph Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
               Joseph Munyambu
                </p>

                <p className='text-[18px] leading-[27px] '>
                Nursing Assistant
                </p>

                <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>
                 </div>


                                                


                                                {/* 3 Joseph Ngumbau box */}
                 <div className='w-[394px] h-[273px]   flex flex-col  items-center'>
                    <Image src={"/joseph-img.svg"} alt=' Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
               Joseph Ngumbau
                </p>

                <p className='text-[18px] leading-[27px] '>
                Medical Assistant
                </p>

                <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>
                 </div>


          </div>


         

                



                {/* 2nd row */}


                <div className='w-[1280px] h-[273] gap-12  flex mt-20'>

                              {/* 4 Erick Kipkemboi box */}
<div className='w-[394px] h-[273px]   flex flex-col  items-center'>
     <Image src={"/erick-img.svg"} alt='erick Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
Erick Kipkemboi
 </p>

 <p className='text-[18px] leading-[27px] '>
 Web Designer
 </p>


 <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>

  </div>


                                 {/* Stephen Kerubo box */}
  <div className='w-[394px] h-[273px]   flex flex-col  items-center'>
     <Image src={"/stephen-img.svg"} alt='stephen Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
Stephen Kerubo
 </p>

 <p className='text-[18px] leading-[27px] '>
 President of Sales
 </p>



 <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>

  </div>



                              {/* John Leboo box */}
  <div className='w-[394px] h-[273px]   flex flex-col  items-center'>
     <Image src={"/john-img.svg"} alt='john Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
John Leboo
 </p>

 <p className='text-[18px] leading-[27px] '>
 Dog Trainer
 </p>



 <div className='flex gap-[14px] mt-9'>
                 <FaLinkedin className='w-[18px] h-[18px]'/>
                 <FaTwitter className='w-[18px] h-[15.3px]'/>
                 <FaDribbble className='w-[18px] h-[18px]'/>
                </div>

  </div>


</div>









          </div>


       </div>
    </div>
  )
}

export default TeamSection
