import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import React from 'react'

export const Adds = () => {

    const isMobile = useIsMobile();


    return (
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
    )
}
