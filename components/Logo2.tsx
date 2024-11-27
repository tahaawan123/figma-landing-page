import React from 'react'
import Image from 'next/image'
import {Roboto} from 'next/font/google'
const roboto =Roboto({
    subsets : ["latin"],
    weight: ["400","700"]
})

const Logo = () => {
  return (
    <div className={roboto.className}>
      <div className='max-w-[1280px] h-[228px] pt-20 pb-20 pl-16 pr-16 bg-primary flex  max-sm:bg-white max-sm:flex-col'>
       <div className='w-[320px] h-[68px]' >
        <h5 className='font-bold text-2xl'>Trusted by 2000+ companies worldwide.</h5>
       </div>

        <div className='flex ml-20 max-sm:flex-wrap'>
            <Image src={"/Airbnb-logo1.svg"} alt='logo2' width={124} height={38} />
            <Image src={"/Airbnb-logo2.svg"} alt='logo2' width={124} height={38} />
            <Image src={"/Airbnb-logo3.svg"} alt='logo3' width={124} height={38} />
            <Image src={"/Airbnb-logo4.svg"} alt='logo4' width={124} height={38} />
            <Image src={"/Airbnb-logo5.svg"} alt='logo5' width={124} height={38} />
            <Image src={"/Airbnb-logo6.svg"} alt='logo6' width={124} height={38} />
        </div>
      </div>
    </div>
  )
}

export default Logo;
