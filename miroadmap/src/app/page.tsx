'use client'
import { Notes } from "@/components/home/Notes";
import { Topics } from "@/components/home/Topics";
import { Adds } from "@/components/layout/Adds";
import { GCP } from "@/components/ui/icons/tech/GCP";
import { Git } from "@/components/ui/icons/tech/Git";
import { Javascript } from "@/components/ui/icons/tech/Javascript";
import { Terraform } from "@/components/ui/icons/tech/Terraform";
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
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-black bg-slate-200 w-28 rounded-full text-center py-1">Notes</h3>
              <Link href="topics" className=" text-slate-400 text-end my-2 underline decoration-solid hover:text-slate-200">view all</Link>
            </div>
            <Notes />
          </div>
        </div>
      </div>
      {/* ads */}
      <Adds />
    </>

  );
}
