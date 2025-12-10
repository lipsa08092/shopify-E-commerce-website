import React from "react";
import swr from "../../assects/speaker-with-remote.png";
import girl from "../../assects/girl.jpg";
import amazonspeaker from "../../assects/amazon-speaker.png";
import perfume from "../../assects/perfume.png";

export default function NewArrival() {
  return (
    <div className="py-10 px-5 sm:px-10 lg:px-20">
      <div className="flex gap-3 items-center">
        <div className="w-4 h-10 rounded-md bg-red-600"></div>
        <p className="text-red-600 font-bold">Featured</p>
      </div>

      <h1 className="text-4xl mt-3 font-semibold">New Arrival</h1>

      {/*grid section*/}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative w-full h-[500px] sm:h-[464px] overflow-hidden">
          <img
            src={swr}
            className="w-full h-full object-cover bg-black"
            alt="PlayStation"
          />

          <div className="absolute bottom-5 left-5 text-white space-y-4">
            <h2 className="text-xl font-semibold">PlayStation 5</h2>
            <p className="text-sm w-60">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className=" text-white underline text-xs font-medium">
              Shop Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* girl */}
          <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-black md:col-span-2 ">
            <img
              src={girl}
              className="w-full h-full object-contain scale-x-[-1] "
              alt="Perfume"
            />
                <div className="absolute bottom-5 left-5 text-white space-y-3 ">
              <h2 className="text-lg font-semibold">Women's Collections</h2>
              <p className="text-xs w-48">
                Featured woman collections that give you another vibe.
              </p>
              <button className=" text-white underline text-xs font-medium">
                Shop Now
              </button>
            </div>
          </div>
       

          {/* Speakers */}
          <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-black">
            <img
              src={amazonspeaker}
              className="w-full h-full object-contain"
              alt="Speakers"
            />
            <div className="absolute bottom-5 left-5 text-white space-y-1">
              <h2 className="text-lg font-semibold">Speakers</h2>
              <p className="text-xs">Amazon wireless speakers</p>
              <button className=" text-white underline text-xs font-medium">
                Shop Now
              </button>
            </div>
          </div>
             {/* perfume */}
          <div className="relative w-full h-[200px] sm:h-[220px]  overflow-hidden">
            <img
              src={perfume}
              className="w-full h-full object-cover bg-black"
              alt="Women Collection"
            />
           <div className="absolute bottom-5 left-5 text-white space-y-1">
              <h2 className="text-lg font-semibold">Perfume</h2>
              <p className="text-xs">GUCCI INTENSE OUD EDP</p>
              <button className=" text-white underline text-xs font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
