'use client'

import React, { useState, useEffect } from 'react';
import { Profile } from '../ui/icons/profile/Profile';
import { Search } from '../ui/icons/search/Search';

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Define como móvil si es menor a 768px (puedes ajustar)
        };

        checkScreenSize(); // Verificar en el primer render
        window.addEventListener('resize', checkScreenSize); // Escuchar cambios en el tamaño

        return () => window.removeEventListener('resize', checkScreenSize); // Limpiar evento
    }, []);

    return (
        <div className='bg-black shadow-lg text-white py-2 px-2 flex flex-wrap justify-between items-center'>
            <div className='flex items-center'>
                <p className='font-semibold self-center'>Miroadmap</p>
            </div>

            {!isMobile && (
                <div className='flex items-center'>
                    <input type='text' placeholder='Buscar' className='self-center rounded-full p-2 bg-gray-800 text-white outline-none font-semibold text-sm' />
                </div>
            )}

            {
                isMobile && (
                    <div className='rounded-2xl flex justify-around'>
                        <div className='rounded-full bg-gray-800 p-2'>
                            <Search size={20} color='white'/>
                        </div>
                    </div>
                )
            }

            <div className='rounded-2xl flex justify-around'>
                <div className='rounded-full bg-gray-800 p-2'>
                    <Profile size={35} />
                </div>
            </div>
            {isMobile && (
                <div className='mt-2 w-full flex justify-center'>
                    <input type='text' placeholder='Buscar' className='w-4/5 rounded-full p-2 bg-gray-800 text-white outline-none font-semibold text-sm' />
                </div>
            )}
        </div>
    );
};
