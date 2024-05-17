'use client'

import React from "react"
import Image from "next/image"
import { useState } from "react" 
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { PiCards } from "react-icons/pi";
import { PiCardsFill } from "react-icons/pi";
import { HiMiniBars3 } from "react-icons/hi2";


const SideBar=()=>{

    return(
        <div className="fixed bg-pink-500 h-full">

            <div className="relative">
                <HiMiniBars3  className="flex items-center justify-content flex-col w-20 text-2xl absolute top-5 "/>

                <div className="grid w-20 gap-7 absolute top-20">
                    <div className="flex items-center justify-content flex-col w-20 ">
                        <IoHome className="text-xl" />
                        <IoHomeOutline className="text-xl" />
                        <p className="text-xs">Home</p>
                    </div>

                    <div className="flex items-center justify-content flex-col w-20 ">
                        <SiYoutubeshorts className="text-xl" />
                        <p className="text-xs">Shorts</p>
                    </div>

                    <div className="flex items-center justify-content flex-col w-20 ">
                        <MdOutlineSubscriptions className="text-xl" />
                        <MdSubscriptions className="text-xl" />
                        <p className="text-xs">Subscriptions</p>
                    </div>

                    <div className="flex items-center justify-content flex-col w-20 ">
                        <PiCards className="text-xl" />
                        <PiCardsFill className="text-xl" />
                        <p className="text-xs">You</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar