'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Profile } from '../ui/icons/profile/Profile';
import { Search } from '../ui/icons/search/Search';
import Link from 'next/link';

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setActive(false);
            }
        };

        if (active) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [active]);

    return (
        <>
            <div className='static bg-black shadow-sm shadow-slate-600 text-white py-2 px-2 flex flex-wrap justify-between items-center'>
                <div className='flex items-center'>
                    <p className='font-semibold self-center'>Miroadmap</p>
                </div>

                <div className='flex justify-between gap-5'>
                    {!isMobile && (
                        <div className='flex items-center'>
                            <input type='text' placeholder='Search' className='self-center rounded-full p-2 bg-gray-800 border-2 border-gray-700 text-white outline-none font-semibold text-sm' />
                        </div>
                    )}
                    <div className='rounded-full bg-gray-800 hover:bg-slate-300 border-2 border-gray-700 p-2'>
                        <Profile size={35} color="#fff" />
                    </div>
                    <div
                        ref={buttonRef}
                        className='rounded-full bg-gray-800 hover:bg-slate-300 border-2 border-gray-700 p-2'
                        onClick={(e) => {
                            e.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
                            setActive(!active);
                        }}
                    >
                        <Search size={35} color="#fff" />
                    </div>
                </div>
            </div>

            {(active && !isMobile) && (
                <div ref={menuRef} className='absolute right-0 rounded-lg bg-gray-800 w-3/12 mx-3 my-3 p-3 shadow-gray-400 shadow-sm'>
                    <ul className='list-none'>
                        <li className='py-1 hover:bg-slate-300 rounded-md'>
                            <Link href="/" className='block px-4 py-2 text-white'>
                                Home
                            </Link>
                        </li>
                        <li className='py-1 hover:bg-slate-300 rounded-md'>
                            <Link href='profile' className='block px-4 py-2 text-white'>
                                Profile
                            </Link>
                        </li>
                        <li className='py-1 hover:bg-slate-300 rounded-md'>
                            <div className='block px-4 py-2 text-white'>
                                Sign out
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            {/* mobile */}
            {(active && isMobile) && (
                <div ref={menuRef} className='absolute right-0 bg-gray-800 w-full p-3 shadow-gray-400 shadow-sm'>
                    <ul className='list-none'>
                        <li className='py-1 rounded-md'>
                            <input type='text' placeholder='Search' className='w-full self-center rounded-full p-2 bg-gray-800 border-2 border-gray-700 text-white outline-none font-semibold text-sm' />
                        </li>
                        <li className='py-1 hover:bg-slate-300 rounded-md mt-5'>
                            <Link href="" className='block px-4 py-2 text-white'>
                                Home
                            </Link>
                        </li>
                        <li className='py-1 hover:bg-slate-300 rounded-md'>
                            <Link href='profile' className='block px-4 py-2 text-white'>
                                Profile
                            </Link>
                        </li>
                        <li className='py-1 hover:bg-slate-300 rounded-md'>
                            <div className='block px-4 py-2 text-white'>
                                Sign out
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};
