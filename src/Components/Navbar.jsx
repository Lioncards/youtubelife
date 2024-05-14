'use client'

import React from "react"
import Image from "next/image"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import image1 from '@/Components/Images/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.webp'
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

const Navbar=()=>{

    return(
        <div>
            <div>
                <div>
                    <FaBars />
                    <div>
                        <Image src={image1} className="w-20"/>
                        <p>Youtube</p>
                    </div>
                </div>

                <div>
                    <input/>
                    <FaMicrophone />
                </div>

                <div>
                    <RiVideoAddLine />
                    <FaRegBell />
                    <p>O</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar