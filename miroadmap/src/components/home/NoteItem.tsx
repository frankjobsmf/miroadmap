import { useIsMobile } from '@/hooks/useIsMobile';
import Link from 'next/link'
import React from 'react'
import { Terraform } from '../ui/icons/tech/Terraform';

export const NoteItem = () => {
    const isMobile = useIsMobile();
    return (
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
    )
}
