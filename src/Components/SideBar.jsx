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

const SideBar=()=>{

    return(
        <div>
            <div className="grid bg-pink-500 w-1/12 px-7 h-screen fixed">
                <div className="">
                    <IoHome />
                    <IoHomeOutline />
                    <p>Home</p>
                </div>

                <div>
                    <SiYoutubeshorts />
                    <p>Shorts</p>
                </div>

                <div>
                    <MdOutlineSubscriptions />
                    <MdSubscriptions />
                    <p>Subscriptions</p>
                </div>

                <div>
                    <PiCards />
                    <PiCardsFill />
                    <p>You</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar