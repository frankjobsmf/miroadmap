'use client'
import { Topics } from "@/components/home/Topics";
import { GCP } from "@/components/ui/icons/tech/GCP";
import { Git } from "@/components/ui/icons/tech/Git";
import { Javascript } from "@/components/ui/icons/tech/Javascript";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const isMobile = useIsMobile();

  const DIV_DESKTOP = "flex my-2 mx-2 gap-3"
  const DIV_MOBILE = "flex flex-wrap mt-2"

  return (
    <>
      <div className={`${isMobile ? DIV_MOBILE : DIV_DESKTOP}`} >
        <div className={`${!isMobile && "flex flex-row w-full gap-3"}`}>
          <div className={`bg-black  w-full ${!isMobile && "flex-col rounded-md shadow-md shadow-slate-500"} p-3`}>
            <h3 className="font-bold text-white bg-slate-700 w-28 rounded-full text-center py-1">Topics</h3>
            <div className="mt-5">
              <p className="text-white text-center font-semibold">Some topics that may interest you</p>
              <div className="flex justify-end">
                <Link href="topics" className=" text-slate-400 text-end my-2 underline decoration-solid hover:text-slate-200">view all</Link>
              </div>
              <Topics />
            </div>
          </div>
          <div className={`bg-slate-700 max-h-96 w-full ${!isMobile && "flex-col rounded-md shadow-md shadow-slate-500"} p-3 overflow-y-auto`}>
  <h3 className="font-bold text-black bg-slate-200 w-28 rounded-full text-center py-1">All</h3>
  <div className="my-2 mx-1">
    <ul className="flex flex-wrap justify-center gap-1">
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Javascript</p>
          <Javascript className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Estructuras de datos con Javascript
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Git</p>
          <Git className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Primeros pasos con Git
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">GCP</p>
          <GCP className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Crea tú primera VM
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Javascript</p>
          <Javascript className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Estructuras de datos con Javascript
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Javascript</p>
          <Javascript className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Estructuras de datos con Javascript
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Javascript</p>
          <Javascript className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Estructuras de datos con Javascript
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
        <div className="flex justify-between my-1">
          <p className="text-md text-black font-semibold">Javascript</p>
          <Javascript className="" />
        </div>
        <div className="flex-grow border-t border-gray-400">
          <p className="py-1 font-semibold text-sm text-slate-950">
            Estructuras de datos con Javascript
          </p>
          <p className="text-sm line-clamp-3 text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </Link>
      {/* Agrega más elementos aquí */}
    </ul>
  </div>
</div>

        </div>
      </div>
      {/* ads */}
      <div className="bg-slate-100 my-5">
        <div className={`flex flex-row items-center mt-3 ${!isMobile && "mx-2 rounded-lg"} py-2 px-5`}>
          <div className="flex-grow border-t border-gray-400"></div>
          <p className="mx-3 text-gray-600">start of advertising space</p>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flex flex-wrap gap-1 justify-center">
          <div className="flex justify-center">
            <Image
              src={"/assets/ads.png"}
              width={400}
              height={300}
              alt="ads image"
              className="px-3 py-2 self-center"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={"/assets/ads.png"}
              width={400}
              height={300}
              alt="ads image"
              className="px-3 py-2 self-center"
            />
          </div>
        </div>

        <div className={`flex flex-row items-center ${!isMobile && "mx-2 rounded-lg"} py-2 px-5`}>
          <div className="flex-grow border-t border-gray-400"></div>
          <p className="mx-3 text-gray-600">end of advertising space</p>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>

    </>

  );
}
