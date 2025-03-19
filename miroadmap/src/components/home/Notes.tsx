import Link from 'next/link'
import React from 'react'
import { Javascript } from '../ui/icons/tech/Javascript'
import { Git } from '../ui/icons/tech/Git'
import { GCP } from '../ui/icons/tech/GCP'
import { Terraform } from '../ui/icons/tech/Terraform'
import { useIsMobile } from '@/hooks/useIsMobile'

export const Notes = () => {

    const isMobile = useIsMobile();

    return (
        <div className="my-2 mx-1">
            <ul className="flex flex-wrap justify-center gap-1">
                <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
                    <div className="flex justify-between my-1">
                        <p className="text-md text-black font-semibold">Javascript</p>
                        <Javascript className="" />
                    </div>
                    <div className="flex-grow border-t border-gray-400">
                        <p className="py-1 font-semibold text-sm text-slate-950">
                            Data structure with Javascript
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
                            First steps with Git
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
                            Create your first VM
                        </p>
                        <p className="text-sm line-clamp-3 text-slate-900">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                        </p>
                    </div>
                </Link>
                <Link href="" className={`${isMobile ? "w-full" : "w-80"} px-5 py-1 bg-slate-200 rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-slate-300`}>
                    <div className="flex justify-between my-1">
                        <p className="text-md text-black font-semibold">Terraform</p>
                        <Terraform className="" />
                    </div>
                    <div className="flex-grow border-t border-gray-400">
                        <p className="py-1 font-semibold text-sm text-slate-950">
                            Learn about IaC
                        </p>
                        <p className="text-sm line-clamp-3 text-slate-900">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                        </p>
                    </div>
                </Link>
            </ul>
        </div>
    )
}
