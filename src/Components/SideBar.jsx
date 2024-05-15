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
            <HiMiniBars3  className="flex items-center justify-content flex-col w-20 text-2xl"/>

            <div className="grid w-20">
                <div className="flex items-center justify-content flex-col w-20 ">
                    <IoHome />
                    <IoHomeOutline />
                    <p>Home</p>
                </div>

                <div className="flex items-center justify-content flex-col w-20 ">
                    <SiYoutubeshorts />
                    <p>Shorts</p>
                </div>

                <div className="flex items-center justify-content flex-col w-20 ">
                    <MdOutlineSubscriptions />
                    <MdSubscriptions />
                    <p>Subscriptions</p>
                </div>

                <div className="flex items-center justify-content flex-col w-20 ">
                    <PiCards />
                    <PiCardsFill />
                    <p>You</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar