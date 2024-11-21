import React from 'react'
import { Roboto } from 'next/font/google'
const roboto=Roboto({
  subsets:["latin"],
  weight:["400","700"]
})

function Achivement() {
  return (
    <div className={roboto.className}>
      <div className='w-[1280px] h-[488px] pt-[112px] pr-16 pl-16 pb-[112px] gap-20 '>
        <div className='w-[1152px] h-[136px] gap-6 '>
        <h3 className='text-5xl font-bold text-center mb-8'>Our Achivements</h3>
        <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

       <div className='w-[1256px] h-[96px] gap-6 mt-8  flex'>
         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>+200</h3>
           <p className='leading-6'>Courses</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>50K</h3>
           <p className='leading-6'>Mentors</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>370k</h3>
           <p className='leading-6'>Students</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>100+</h3>
           <p className='leading-6'>Recognition</p>
         </div>
       </div>

       </div>





       <div className='w-[1280px] h-[488px] pt-[112px] pr-16 pl-16 pb-[112px] gap-20 mt-8'>
        <div className='w-[1152px] h-[136px] gap-6 '>
        <h3 className='text-5xl font-bold text-center mb-8'>Our Achivements</h3>
        <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

       <div className='w-[1256px] h-[96px] gap-6 mt-8 flex'>
         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>+200</h3>
           <p className='leading-6'>Courses</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>50K</h3>
           <p className='leading-6'>Mentors</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>370k</h3>
           <p className='leading-6'>Students</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center'>
           <h3 className='font-bold text-[40px] leading-[48px] '>100+</h3>
           <p className='leading-6'>Recognition</p>
         </div>
       </div>
</div>


    </div>
  )
}

export default Achivement;
