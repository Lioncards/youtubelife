'use client'

import React, { useRef } from "react"
import { useState } from "react"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const HomeSectionOne=()=>{
    const scrollContainerRef = useRef(null);
    
    const scroll = (scrollOffset) => {
        scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollOffset,
        behavior: 'smooth',
        });
    };

    return(
        <div>
            <div className="ml-20 flex items-center pt-3">

                <MdKeyboardArrowLeft onClick={() => scroll(-100)} className="text-3xl z-10" />

                <ul ref={scrollContainerRef} className="flex gap-3 items-center overflow-auto scrollbar-hide">
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">dkjv wvjwn</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                </ul>
                
                <MdKeyboardArrowRight onClick={() => scroll(100)} className="text-3xl z-10" />
            </div>

            <div className="ml-64 flex items-center pt-3 hidden">

                <MdKeyboardArrowLeft onClick={() => scroll(-100)} className="text-3xl z-10" />

                <ul ref={scrollContainerRef} className="flex gap-3 items-center overflow-auto scrollbar-hide">
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">dkjv wvjwn</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm whitespace-nowrap">All</li>
                </ul>
                
                <MdKeyboardArrowRight onClick={() => scroll(100)} className="text-3xl z-10" />
            </div>
        </div>
    )
}

export default HomeSectionOne