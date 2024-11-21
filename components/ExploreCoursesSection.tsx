import React from "react";
import Image from "next/image";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ExploreCoursesSection = () => {
  return (
    <div className={roboto.className}>
      <div className="w-[1280px] h-[850px] pt-[112px]  pb-[112px] pr-[64px]  ">
      <div className="w-[768px] h-[109px]  mx-auto mb-16  ">
        <h2 className="font-bold text-5xl leading-[57.6px]">Explore Courses By Category</h2>
        <p className="text-[18px] mt-4 leading-5">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

        {/* main div of Courses By Category */}
      <div className="w-[1280] h-[636]">
        
          {/* main div of box  */}
        <div className="h-[132px] gap-6 grid grid-cols-3 ">
          

          {/*  1st box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-8">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/pen-tool-2.svg"}
                alt="pentool"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">
                Design & Development
              </h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>


          {/*  2nd box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/volume-high.svg"}
                alt="volume"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Marketing</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  3rd box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/group.svg"} alt="group" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Development</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  4rth box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/microphone.svg"}
                alt="microphone"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Communication</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  5th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/link.svg"} alt="link" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Digital Marketing</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  6th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/arrow-2.svg"} alt="arrow" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Self Development</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  7th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/briefcase.svg"}
                alt="briefcase"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Business</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  8th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/book.svg"} alt="book" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Finance</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  9th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/book-2.svg"} alt="book-2" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Consulting</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>
        


        
         <div className="w-[155px] h-12 rounded-[5px] p-3  border border-black ml-[600px] mt-10">
            <button type="button" >
            View All Courses
            </button>
            </div>



      </div>

      </div>


     
      </div>

    </div>
  );
};

export default ExploreCoursesSection;
