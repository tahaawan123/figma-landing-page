import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


import { Roboto } from 'next/font/google'
const roboto =Roboto({
    subsets:["latin"],
    weight:["400","700"]
})

function Footer() {
  return (
    <div className={roboto.className}>
                 {/* main outer container*/}
         <div className='w-[1280px] h-[684px]  p-20 mt-20'>
                 {/* inner container  */}
             <div className='w-[1120px] h-[524px] gap-20 '>
                {/* header  */}
                <div className='w-[1120px] h-[82px] flex justify-between '>
                      {/* Left side */}
                    <div className='w-[500px] h-[51px]'>
                        <h4 className='text-[18px] font-semibold leading[27px]'>Subscribe to our newsletter</h4>
                        <p className='leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                          {/*Right Side  */}
                    <div className='w-[400px] h-[82px] gap-4 '>
                         {/* button  and input*/}
                          <div className='w-[400px] h-12 flex gap-4'>
                               <input type="text" placeholder='Enter your email' className='w-[256px] h-12 rounded-[5px] border border-black gap-2 p-3' />
                               <button className='w-[119px] h-12  rounded-[5px] border border-black pt-3 pb-3  pr-6 pl-6'>Subscribe</button>
                          </div>
                          <p className='text-[12px] mt-3'>By subscribing you agree to with our <span className='underline'>Privacy Policy</span></p>
                    </div>
                        
                </div>

 
              <div className='w-[1120px] h-[225px] gap-[40px]  mt-20 flex'>
                    {/* logo div */}
                   <div className='w-[250px] h-10'>
                      <Image  src={"/Ddsgnr logo.svg"} alt="logo" width={130} height={30} />
                   </div>

                          {/* courses container */}
                    <div className='w-[250px] h-[225px] gap-4'>
                      <h5 className='font-semibold h-6'>
                      Courses
                      </h5>
                      <div className='w-[250px] h-[185px]'>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Business
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Development
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Technology
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Design
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Programming
                       </p>
                      </div>
                    </div>





                    
                          {/* Resources container */}
                          <div className='w-[250px] h-[225px] gap-4'>
                      <h5 className='font-semibold h-6'>
                      Resources
                      </h5>
                      <div className='w-[250px] h-[185px]'>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Career
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Resume
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Learning
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Interview Preparation
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Jobs
                       </p>
                      </div>
                    </div>






                    
                          {/* About Us container */}
                          <div className='w-[250px] h-[225px] gap-4'>
                      <h5 className='font-semibold h-6'>
                      About Us
                      </h5>
                      <div className='w-[250px] h-[185px]'>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Contact
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Help/Support
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        FAQ
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Terms and Conditions
                        </p>
                        <p className='pt-2 bt-2 text-[14px] h-[37px]' >
                        Partners
                       </p>
                      </div>
                    </div>







             </div>
               

              <div className='w-[1120px] h-[57px] border-t border-black mt-20 ' >
                 <div className='w-[1120px] flex justify-between mt-8'>
                    <div className='w-[564px] h-[21px] gap-6 text-[14px] flex'>
                        <p >2023 Ddsgnr. All right reserved.</p>
                        <p className='underline '>Privacy Policy</p>
                        <p className='underline '>Terms of Service</p>
                        <p className='underline '>Cookies Settings</p>
                    </div>

                        {/* icons */}

                        <div className='flex gap-2'>
                          <FaFacebookF  className='w-[10px] h-[18px] '/>
                          <FaInstagram  className='w-[18px] h-[18px]'/>
                          <FaTwitter  className='w-[15px] h-[18px]'/>
                          <FaLinkedin  className='w-[18px] h-[18px] '/>

                        </div>
                 </div>
              </div>

               </div>


    




















         </div>
    </div>
  )
}

export default Footer
