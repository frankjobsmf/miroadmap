'use client'
import { GCP } from "@/components/ui/icons/tech/GCP";
import { Git } from "@/components/ui/icons/tech/Git";
import { Javascript } from "@/components/ui/icons/tech/Javascript";
import { Terraform } from "@/components/ui/icons/tech/Terraform";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Home() {

  const isMobile = useIsMobile();

  const DIV_DESKTOP = "flex justify-between my-2 mx-2 gap-3"
  const DIV_MOBILE = "flex flex-wrap mt-2"

  return (
    <div className={`${isMobile ? DIV_MOBILE : DIV_DESKTOP}`} >
      <div className={`bg-black  w-full ${!isMobile && "rounded-md shadow-md shadow-slate-500"} p-3`}>
        <h3 className="font-bold text-white bg-slate-700 w-28 rounded-full text-center py-1">Topics</h3>
        <div className="mt-5">
          <p className="text-white text-end font-semibold">Some topics that may interest you</p>
          <p className="text-slate-400 text-end mt-2">view all</p>
          <div className="flex flex-wrap mt-3 justify-self-center items-center">
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
              <p className="text-white text-sm font-semibold mb-3">Programming</p>
              <Javascript size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
              <p className="text-white text-sm font-semibold mb-3">Cloud</p>
              <GCP size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
              <p className="text-white text-sm font-semibold mb-3">Git</p>
              <Git size={50} />
            </div>
            <div className="w-28 h-28 rounded-lg bg-black flex flex-col items-center justify-center hover:bg-slate-800">
              <p className="text-white text-sm font-semibold mb-3">Infrastructure</p>
              <Terraform size={50} />
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-black  w-full ${!isMobile && "rounded-md shadow-md shadow-slate-500"} p-3`}>
        <h3 className="font-bold text-white bg-slate-700 w-28 rounded-full text-center py-1">Topics</h3>
      </div>
    </div>
  );
}
