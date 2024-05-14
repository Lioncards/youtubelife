'use client'

import React from "react"
import Image from "next/image"
import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";
import image1 from '@/Components/Images/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp'
import { PiMicrophoneLight } from "react-icons/pi";
import { BsCameraVideo } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

const Navbar=()=>{

    return(
        <div>
            <div className="flex items-center px-7 py-2">
                <div className="flex items-center w-full gap-7">
                    <HiMiniBars3  className="text-xl"/>
                    <div className="flex items-center">
                        <Image src={image1} className="w-12"/>
                        <p className="font-extrabold text-lg">YouTube</p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center gap-7">
                    <div className="flex">
                        <input className="pl-5 pr-48 py-2 rounded-l-full border-gray-800 bg-black border-2" placeholder="Search"/>
                        <div className="py-2 px-5 bg-gray-800 rounded-r-full">
                            <IoSearchOutline className="text-2xl" />
                        </div>
                    </div>

                    <div className="p-2.5 bg-gray-800 rounded-full">
                        < PiMicrophoneLight className="text-2xl"/>
                    </div>
                </div>

                <div className="flex w-full items-center justify-end gap-7">
                    <BsCameraVideo className="text-2xl"/>
                    <CiBellOn className="text-2xl"/>
                    
                    <div className="p-2 bg-red-700 rounded">
                        <p>I</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar