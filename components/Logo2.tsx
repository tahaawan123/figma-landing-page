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
      <div className='w-[1280px] h-[228px] pt-20 pb-20 pl-16 pr-16 bg-primary flex'>
       <div className='w-[320px] h-[68px]' >
        <h5 className='font-bold text-2xl'>Trusted by 2000+ companies worldwide.</h5>
       </div>

        <div>
            <Image src={"/Logos.svg"} alt='logo2' width={880} height={56} />
        </div>
      </div>
    </div>
  )
}

export default Logo;
