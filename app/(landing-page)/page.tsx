import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { ArrowBigDownDashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParallaxTextComponent from './components/parallax-text';
import HorizontalScroll from './components/horizontal-scroll';
import Spline3DAnimation from './components/spline-3d-animation';
import ListProjects from './components/list-project';
import Footer from '@/components/footer/Footer';
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function page() {
    return (
        <div className='w-full h-full max-w-screen min-h-screen flex justify-center items-center bg-slate-50 flex-col select-none'>
            <div id="about" className="w-full h-full max-w-screen min-h-dvh flex xl:flex-row flex-col justify-center items-center bg-slate-50">
                <div className="relative xl:w-[50vw] w-full h-screen justify-center items-center flex bg-orange-50 p-0 xl:p-30 text-balance flex-col ">
                    <h1 className={`text-6xl xl:text-8xl font-bold text-center ${monaSans.className}`}>Hello, I&apos;m a Front-end Developer</h1>
                    <Link href="#skills" className='absolute bottom-10'>
                        <Button className={` animate-bounce text-xl font-bold flex items-center gap-2 rounded-full p-2 px-4 bg-indigo-700 text-orange-50 ${monaSans.className}`}>
                            <ArrowBigDownDashIcon />
                            Scroll down
                        </Button>
                    </Link>
                </div>
                <Spline3DAnimation />
            </div>

            <div id="skills" className="w-full h-full max-w-screen min-h-screen flex flex-col justify-start items-start bg-slate-50 ">
                <div className={`text-8xl font-bold bg-indigo-700 w-full text-orange-50 overflow-hidden ${monaSans.className}`}>
                    <ParallaxTextComponent />
                </div>
                <div className="w-full h-full max-w-screen min-h-screen flex justify-center items-center bg-slate-50">
                    <HorizontalScroll />
                </div>
            </div>


            {/* Mask */}
            {/*Sửa lại phần giới thiệu project = hiệu ứng hover -> chữ nhảy lên trên và xuống dưới*/}
            {/*Code thêm phần cursor cho toàn bộ page*/}
            <div id="projects" className="w-full h-full max-w-screen min-h-dvh flex flex-col justify-start items-start bg-slate-900 overflow-hidden">
                <ListProjects />
            </div>
            <div id="contact" className="w-full h-full max-w-screen flex flex-col justify-start items-start bg-slate-900 overflow-hidden gap-10">
                <h2 className="xl:text-[8rem] text-[4rem] font-bold text-slate-50 overflow-hidden px-18">Contact</h2>
                <Footer />
            </div>
        </div>
    )
}
