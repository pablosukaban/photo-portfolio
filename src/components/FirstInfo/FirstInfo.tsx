import React from 'react';

const Para = ({ children }: { children: string }) => {
    return <p className='mt-8 text-lg text-gray-700'>{children}</p>;
};

export const FirstInfo = () => {
    return (
        <div className='mx-auto mt-12 max-w-[600px] text-center text-black'>
            <h1 className='text-4xl font-semibold'>Rise Above The Noise</h1>
            <Para>
                In an increasingly superficial and commoditized world, we exist
                to help you stand apart.
            </Para>
            <Para>
                Get access to cinematic music, sound effects, and visual assets
                trusted by legendary brands.
            </Para>
            <Para>
                From post-production essentials to unique assets that you won’t
                find anywhere else, a Lens Distortions membership is the
                gamechanger you’ve been searching for.
            </Para>
        </div>
    );
};
