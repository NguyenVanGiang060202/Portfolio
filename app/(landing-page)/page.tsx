import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { ArrowBigDownDashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParallaxTextComponent from './components/parallax-text';
import HorizontalScroll from './components/horizontal-scroll';
import Spline3DAnimation from './components/spline-3d-animation';

const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function page() {
    return (
        <div className='w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50 flex-col '>
            <div className="w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50">
                <div className="relative w-[50vw] h-screen justify-center items-center flex bg-orange-50 p-30 text-balance flex-col ">
                    <h1 className={`text-8xl font-bold ${monaSans.className}`}>Hello, I{`&apos;`}m a software engineer</h1>
                    <Link href="#about" className='absolute bottom-10'>
                        <Button className={` animate-bounce text-xl font-bold flex items-center gap-2 rounded-full p-2 px-4 bg-indigo-700 text-orange-50 ${monaSans.className}`}>
                            <ArrowBigDownDashIcon />
                            Scroll down
                        </Button>
                    </Link>
                </div>
                {/* <div className='relative w-[50vw] h-screen flex justify-center items-center flex-col bg-[linear-gradient(135deg,_#fff7ed_0%,_#432dd7_100%)]'>
                    <div className="relative w-[40vw] h-[40vw] flex justify-center items-center object-contain">
                        <Image src="/image_holder.jpg" alt="Logo" fill sizes='auto' className='object-cover' priority />
                    </div>
                </div> */}
                <div className='relative w-[50vw] h-screen flex justify-center items-center'>
                    <div className="relative w-full h-full flex justify-center items-center object-contain">
                        <Spline3DAnimation/>
                    </div>
                </div>
            </div>

            <div id="skills" className="w-full h-full max-w-screen min-h-dvh flex flex-col justify-start items-start bg-slate-50">
                <div className={`text-8xl font-bold bg-indigo-700 w-full text-orange-50 ${monaSans.className}`}>
                    <ParallaxTextComponent />
                </div>
                <div className="w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50">
                    <HorizontalScroll />
                </div>
            </div>
            <div className="w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50">
                <div className="w-full h-full max-w-screen min-h-dvh flex justify-center items-center bg-slate-50">
                    <h1 className={`text-8xl font-bold bg-indigo-700 w-full text-orange-50 ${monaSans.className}`}>Projects</h1>
                </div>
            </div>
        </div>
    )
}
