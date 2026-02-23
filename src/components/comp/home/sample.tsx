'use client';

import Image from 'next/image';
import phone from '../../../../public/download (2).webp'

export function Sample() {
    return (
        <div className="w-5xl h-screen bg-sky-500 mx-auto flex ">
            <div className="flex-1 bg-green-600 flex flex-col justify-center items-center">
                <h1 className='text-4xl'>This is a phone</h1>
                <p>Price: 1,000, 050</p>
            </div>
            <div className="flex-1 bg-pink-600 flex justify-center items-center">
                <Image
                    src={phone}
                    alt='smart-phone'
                    width={300}
                    height={350}
                />
            </div>
        </div>
    );
};