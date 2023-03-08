import React from 'react';
import { NavBar } from '../NavBar/NavBar';

const HeroText = () => {
    return (
        <div className='mt-[-80px] h-[520px] px-[40px] xl:p-0'>
            <div className='mx-auto max-w-[1080px]'>
                <div className='flex flex-col gap-2 text-center md:text-start'>
                    <h1 className='mt-[200px] text-3xl font-semibold capitalize sm:text-4xl'>
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
        <div className='h-[600px] bg-hero bg-local'>
            <HeroText />
        </div>
    );
};
