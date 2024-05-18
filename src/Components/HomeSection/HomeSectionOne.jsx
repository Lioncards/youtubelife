'use client'

import React from "react"
import { useState } from "react"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";

const HomeSectionOne=()=>{

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = () => {
        setIsScrolling(!isScrolling);
    };

    return(
        <div>
            <div className="ml-24 flex items-center pt-3">
                <ul className={`flex gap-3 items-center overflow-hidden ${isScrolling ? 'animate-scroll' : ''}`}>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                    <li className="border-0 rounded-lg bg-gray-500 px-4 py-2 font-semibold text-sm">All</li>
                </ul>

                <MdKeyboardArrowRight onClick={handleScroll} className="text-3xl " />
            </div>
        </div>
    )
}

export default HomeSectionOne