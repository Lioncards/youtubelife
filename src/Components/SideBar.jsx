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
import { LiaIdCardSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { LiaFileVideoSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { SlMusicToneAlt } from "react-icons/sl";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { BsFlag } from "react-icons/bs";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import sdsimage from '@/Components/Images/1-intro-photo-final.jpg'

const SideBar=()=>{

    const[smallSideBar,setsmallSideBar]= useState(true)
    const[bigSideBar, setbigSideBar]= useState(false)

    const openSideBar=()=>{
        setsmallSideBar(!smallSideBar)
        setbigSideBar(!bigSideBar)
    }

    return(
        <div className="fixed">

            <div className="relative">
                <HiMiniBars3 onClick={openSideBar} className="flex items-center justify-content flex-col w-20 text-2xl absolute top-5  "/>

                {smallSideBar && (
                    <div className="grid w-20 absolute top-20 h-screen">
                        <div className="flex items-center justify-content flex-col w-20 ">
                            <IoHome className="text-xl" />
                            <IoHomeOutline className="text-xl" />
                            <p className="text-xs">Home</p>
                        </div>

                        <div className="flex items-center justify-content flex-col w-20 absolute top-20">
                            <SiYoutubeshorts className="text-xl" />
                            <p className="text-xs">Shorts</p>
                        </div>

                        <div className="flex items-center justify-content flex-col w-20 absolute top-32 ">
                            <MdOutlineSubscriptions className="text-xl" />
                            <MdSubscriptions className="text-xl" />
                            <p className="text-xs">Subscriptions</p>
                        </div>

                        <div className="flex items-center justify-content flex-col w-20 absolute top-48">
                            <PiCards className="text-xl" />
                            <PiCardsFill className="text-xl" />
                            <p className="text-xs">You</p>
                        </div>
                    </div>
                ) }

                
                {bigSideBar && (
                    <div className="grid w-64 absolute top-20 fixed overflow-y-auto h-screen pb-20 pl-7 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-black">
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><IoHome className="text-2xl"/><IoHomeOutline className="text-2xl"/>Home</p>
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><SiYoutubeshorts className="text-2xl"/>Shorts</p>
                        <p className="flex items-center gap-3 text-sm pb-4 font-normal"><MdSubscriptions className="text-2xl"/><MdOutlineSubscriptions className="text-2xl"/>Subscriptions</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <p className="flex items-center gap-3 text-sm pb-3 pt-4 font-semibold">You<MdKeyboardArrowRight className="text-xl" /></p>

                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><LiaIdCardSolid className="text-2xl" />Your Channel</p>
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><GoHistory className="text-2xl" />History</p>
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><MdOutlinePlaylistPlay className="text-2xl" />Playlists</p>
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><LiaFileVideoSolid className="text-2xl" />Your Videos</p>
                        <p className="flex items-center gap-3 text-sm pb-3 font-normal"><GoClock className="text-2xl" />Watch Later</p>
                        <p className="flex items-center gap-3 text-sm pb-4 font-normal"><BiLike className="text-2xl" />Liked Videos</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <p className="flex items-center gap-3 text-sm pb-3 pt-4 font-semibold">Subscriptions</p>

                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                        <p className="flex items-center gap-3 text-sm text-base pb-4 font-normal"><MdKeyboardArrowDown/>Show More</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <p className="pt-4 gap-3 font-normal pb-2">Explore</p>

                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><BsFire className="text-2xl" />Trending</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><SlMusicToneAlt className="text-2xl" />Music</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><SiYoutubegaming className="text-2xl" />Gaming</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><IoNewspaperOutline className="text-2xl" />News</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-4"><CiTrophy className="text-2xl" />Sports</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <p className="pt-4 gap-3 font-normal pb-2">More from Youtube</p>

                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><SiYoutubemusic className="text-2xl" />Youtube Music </p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><SiYoutubemusic className="text-2xl" />Youtube Premium </p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><SiYoutubekids className="text-2xl" />Youtube Kids </p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-4"><SiYoutubekids className="text-2xl" />Youtube Studio</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <p className="flex items-center gap-3 text-sm font-normal pb-3 pt-4"><CiSettings className="text-2xl" />Settings</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><BsFlag className="text-2xl" />Report History</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><IoHelpCircleOutline className="text-2xl" />Help</p>
                        <p className="flex items-center gap-3 text-sm font-normal pb-3"><MdOutlineFeedback className="text-2xl" />Send Feedback</p>
                        <hr className="relative right-10 w-64 border-gray-600"></hr>

                        <ul className="grid grid-cols-4 grid-row-3 pt-4 w-52">
                            <li className="text-sm font-normal text-gray-400">About</li>
                            <li className="text-sm font-normal text-gray-400">Press</li>
                            <li className="text-sm col-span-2 font-normal text-gray-400">Copyright</li>
                            <li className="text-sm col-span-2 font-normal text-gray-400">Contact Us</li>
                            <li className="col-span-2 text-sm font-normal text-gray-400">Creators</li>
                            <li className=" text-sm col-span-2 font-normal text-gray-400">Advertise</li>
                            <li className="text-sm col-span-2 font-normal text-gray-400">Developers</li>
                        </ul>

                        <ul className="grid grid-cols-4 grid-row-3 pt-4 w-52">
                            <li className="text-sm font-normal text-gray-400">Terms</li>
                            <li className="text-sm font-normal relative right-1 text-gray-400">Privacy</li>
                            <li className="text-sm font-normal col-span-2 text-gray-400">Policy & Safety</li>
                            <li className="text-sm font-normal col-span-4 text-gray-400">How Youtube Works</li>
                            <li className="text-sm font-normal col-span-4 text-gray-400">Test New Features</li>
                        </ul>

                        <p className="flex text-xs items-center pt-4 text-gray-500"><MdCopyright className="text-sm"/>2024 Google LLC</p>
                    </div>

                )}
                
            </div>

            
            
        </div>
    )
}

export default SideBar