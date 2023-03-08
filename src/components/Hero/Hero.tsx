import React from 'react';
import { NavBar } from '../NavBar/NavBar';

const HeroText = () => {
    return (
        <div className='mt-[200px] h-[520px] px-[40px] xl:p-0'>
            <div className='mx-auto max-w-[1080px]'>
                <div className='flex flex-col gap-2 text-center md:text-start'>
                    <h1 className='text-3xl font-semibold capitalize sm:text-4xl'>
                        Create World-Class <br className='block lg:hidden' />{' '}
                        Content
                    </h1>
                    <p>Superior Music, Sound Effects, LUTs, and VFX</p>
                    <p>GET ALL-ACCESS FOR $39/MONTH</p>
                    <div>
                        <button className='rounded-3xl bg-gray-400 px-6 py-2 font-medium uppercase text-white transition-colors hover:bg-white hover:text-blue-400'>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Hero = () => {
    return (
        <div className='h-[600px] '>
            <img
                className='absolute inset-0 -z-10 h-full w-full object-cover'
                src='https://wallpapercave.com/wp/wp6415210.jpg'
            />
            <NavBar />
            <HeroText />
        </div>
    );
};
