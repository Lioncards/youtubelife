'use client'

import React from "react"
import Image from "next/image"
import HomeSectionOne from "@/Components/HomeSection/HomeSectionOne"
import Navbar from "@/Components/Navbar"
import SideBar from "@/Components/SideBar"

const page=()=>{
  
  return(
    <div>
        <Navbar/>
        <SideBar/>
    </div>
  )
}

export default page