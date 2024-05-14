'use client'

import React from "react"
import Image from "next/image"
import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";
import image1 from '@/Components/Images/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp'
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

const Navbar=()=>{

    return(
        <div>
            <div className="flex items-center px-7">
                <div className="flex items-center w-full gap-7">
                    <HiMiniBars3  className="text-xl"/>
                    <div className="flex items-center">
                        <Image src={image1} className="w-12"/>
                        <p>YouTube</p>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center">
                    <input className="px-36 py-2"/>
                    <IoSearchOutline className="text-3xl bg-gray-500" />
                    <FaMicrophone />
                </div>

                <div className="flex w-full items-center justify-end">
                    <RiVideoAddLine />
                    <FaRegBell />
                    <p>O</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar