import React, { useEffect, useRef, useState } from 'react';
import { List, X } from 'phosphor-react';

const LINKS = ['music', 'sfx', 'color', 'vfx', 'log in', 'join'];

export const NavBar = () => {
    const [isHidden, setIsHidden] = useState(true);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!navRef.current) return;

        const scrollFunc = () => {
            if (!isHidden) return;
            navRef.current?.classList.toggle('scrolled', window.scrollY > 0);
        };

        window.addEventListener('scroll', scrollFunc);

        return () => {
            window.removeEventListener('scroll', scrollFunc);
        };
    }, [isHidden]);

    return (
        <div className='sticky top-0  text-white transition-all' ref={navRef}>
            <div className='mx-auto max-w-[1450px]'>
                <div className='relative flex min-h-[80px] justify-center p-6 lg:justify-between'>
                    <div
                        className={`absolute top-6 left-6 block cursor-pointer  lg:hidden ${
                            isHidden ? 'block' : 'hidden'
                        }`}
                        onClick={() => setIsHidden(false)}
                    >
                        <List size={24} />
                    </div>
                    <div
                        className={`absolute left-0 top-0 h-screen w-4/5 bg-white p-6 ${
                            isHidden ? 'hidden' : 'block'
                        }`}
                    >
                        <ul className='flex flex-col gap-4'>
                            {LINKS.map((link, index) => (
                                <li
                                    key={index}
                                    className='cursor-pointer border-b p-2 text-base font-normal uppercase text-gray-700 hover:text-gray-500'
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                        <div
                            className='absolute right-2 top-2 cursor-pointer text-black'
                            onClick={() => setIsHidden(true)}
                        >
                            <X size={24} />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='cursor-pointer uppercase'>
                            Заголовок
                        </div>
                    </div>
                    <div className='hidden items-center lg:flex'>
                        {/* на компах */}
                        <ul className='flex justify-center gap-2'>
                            {LINKS.map((link, index) => (
                                <li
                                    key={index}
                                    className='cursor-pointer text-base font-normal uppercase tracking-wide'
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
