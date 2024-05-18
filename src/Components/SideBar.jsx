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

    return(
        <div className="fixed">

            <div className="relative">
                <HiMiniBars3  className="flex items-center justify-content flex-col w-20 text-2xl absolute top-5  "/>

                <div className="grid w-20 absolute top-20 h-screen bg-pink-500 hidden">
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

                <div className="grid w-64 absolute top-20 bg-pink-500 fixed overflow-y-auto h-screen pb-20 pl-7">
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><IoHome className="text-2xl"/><IoHomeOutline className="text-2xl"/>Home</p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><SiYoutubeshorts className="text-2xl"/>Shorts</p>
                    <p className="flex items-center gap-3 text-base pb-4 font-semibold"><MdSubscriptions className="text-2xl"/><MdOutlineSubscriptions className="text-2xl"/>Subscriptions</p>
                    <hr></hr>

                    <p className="flex items-center gap-3 text-base pb-2 pt-4 font-semibold">You<MdKeyboardArrowRight className="text-xl" /></p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><LiaIdCardSolid className="text-2xl" />Your Channel</p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><GoHistory className="text-2xl" />History</p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><MdOutlinePlaylistPlay className="text-2xl" />Playlists</p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><LiaFileVideoSolid className="text-2xl" />Your Videos</p>
                    <p className="flex items-center gap-3 text-base pb-2 font-semibold"><GoClock className="text-2xl" />Watch Later</p>
                    <p className="flex items-center gap-3 text-base pb-4 font-semibold"><BiLike className="text-2xl" />Liked Videos</p>
                    <hr></hr>
                    <p className="flex items-center gap-3 text-base pb-2 pt-4 font-semibold">Subscriptions</p>

                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><Image src={sdsimage} className="w-6 h-6 rounded-full"/>ZChannel</p>
                    <p className="flex items-center gap-3 text-base pb-4 font-semibold"><MdKeyboardArrowDown/>Show More</p>
                    <hr></hr>

                    <p className="pt-4 gap-3 font-semibold pb-2">Explore</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><BsFire className="text-2xl" />Trending</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><SlMusicToneAlt className="text-2xl" />Music</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><SiYoutubegaming className="text-2xl" />Gaming</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><IoNewspaperOutline className="text-2xl" />News</p>
                    <p className="flex items-center gap-3 font-semibold pb-4"><CiTrophy className="text-2xl" />Sports</p>
                    <hr></hr>

                    <p className="pt-4 gap-3 font-semibold pb-2">More from Youtube</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><SiYoutubemusic className="text-2xl" />Youtube Music </p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><SiYoutubemusic className="text-2xl" />Youtube Premium </p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><SiYoutubekids className="text-2xl" />Youtube Kids </p>
                    <p className="flex items-center gap-3 font-semibold pb-4"><SiYoutubekids className="text-2xl" />Youtube Studio</p>
                    <hr></hr>

                    <p className="flex items-center gap-3 font-semibold pb-2 pt-4"><CiSettings className="text-2xl" />Settings</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><BsFlag className="text-2xl" />Report History</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><IoHelpCircleOutline className="text-2xl" />Help</p>
                    <p className="flex items-center gap-3 font-semibold pb-2"><MdOutlineFeedback className="text-2xl" />Send Feedback</p>
                    <hr></hr>

                    <ul className="grid grid-cols-4 grid-row-3 pt-4">
                        <li className="text-sm font-semibold">About</li>
                        <li className="text-sm font-semibold">Press</li>
                        <li className="text-sm col-span-2 font-semibold">Copyright</li>
                        <li className="text-sm col-span-2 font-semibold">Contact Us</li>
                        <li className="col-span-2 text-sm font-semibold">Creators</li>
                        <li className=" text-sm col-span-2 font-semibold">Advertise</li>
                        <li className="text-sm col-span-2 font-semibold">Developers</li>
                    </ul>

                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Policy & Safety</li>
                        <li>How YOutube Works</li>
                        <li>Test New Features</li>
                    </ul>

                    <p><MdCopyright />2024 Google LLC</p>
                </div>
            </div>

            
            
        </div>
    )
}

export default SideBar