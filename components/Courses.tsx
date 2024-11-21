import React from 'react'
import Image from "next/image";

import  {Roboto} from 'next/font/google'
const roboto=Roboto({
  subsets:["latin"],
  weight:["400","700"]
})  



function Courses() {
  return (
    <div className={roboto.className}>
        {/* main div */}
        <div className='w-[1280px] h-[1742px] pt-[112px] pb-[112px]  '>
           
           <div className='w-[786px] h-[118px]  mx-auto   '>
           <h1 className='font-bold text-[56px] leading-[67.2px] text-center'> Courses</h1>
           <p className='text-[18px] leading-[27px] text-center mt-5'>Your Ultimate Guide to learning</p>
           </div>

           <div className='w-[1152px] h-[1340px]  mt-10 '>
            
                  <ul className='w-[336px] h-[40px] flex mx-auto'>
                    <li className='w-[87px]  border-b border-[#676767] pt-2 pb-2 pr-4 pl-4 '>
                    Popular
                    </li>
                     <li className="w-[140px] pt-2 pb-2 pr-4 pl-4">
                     Recommended
                     </li>
                     <li className="w-[109px] pt-2 pb-2 pr-4 pl-4">
                     Best  Price
                     </li>
                  </ul>
            

                            {/* first Row */}


            {/* courses Images and details */}
              <div className='w-[1312px] h-[534px]  flex mt-11 gap-8'>
                    {/* Ui/UX Design ourse Detail */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/uiux-image.svg"} alt='uiux design' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Design</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>

                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>UX/UI Design 201</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 '>$400</p>
                      </div>
                  </div>




           
                    {/* Introduction to Python */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/python.svg"} alt='python image' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Programmimg</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2 '>5.0</p>
                      </div>

                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Introduction to Python</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2 '>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 '>$400</p>
                      </div>
                  </div>
              





           
                    {/* Data Analysis for Beginners*/}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/data-analysis.svg"} alt='Data Analysis' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Business</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2 '>5.0</p>
                      </div>

                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Data Analysis for Beginners</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
                  </div>
              
                

                          {/*  2nd row*/}

                      

            {/* Art Specialization */}
              <div className='w-[1312px] h-[534px] gap-8 flex mt-6'>
                    {/* Ui/UX Design ourse Detail */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/art.svg"} alt='art' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Art</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Art Specialization</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2 ml-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 ml-2'>$400</p>
                      </div>
                  </div>




           
                    {/* Rule of Law */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/law.svg"} alt='law' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Law</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Rule of Law</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
              




                    {/* Introduction to webflow*/}

           
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary'>
                              <Image src={"/webflow.svg"} alt='webflow' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Tech</p>
                      <Image src={"/star.svg"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Introduction to webflow</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
                  </div>
              
                   <div className='  flex justify-center items-center mt-28'>
                <button className='w-[170px] h-10 border border-black rounded-[5xl] pt-2 pb-2 pr-4 pl-4  ' >View All Courses</button>
                </div>





                </div>
        </div>
    </div>
  )
}

export default Courses
