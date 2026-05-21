"use client"
import React, { useRef } from 'react'
import {useScroll } from "framer-motion";
import TailwindDarkmode from './tailwind-skill'
import NextjsSkill from './nextjs-skill'
import AnimationSkill from './animation-skill'
import ThreeDAnimationSkill from './3d-animation-skill';

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    return (
        <div ref={targetRef} className='relative max-w-screen w-full h-[200vh] xl:h-[500vh] bg-orange-50'>
            <div className="max-w-screen w-full h-[120vh] bg-orange-50 flex flex-col sticky top-0 left-0 justify-start items-start overflow-hidden">
                <div className="flex flex-col gap-[25vh] md:gap-[20vh] justify-start items-start mt-32 md:mt-0 ">
                <TailwindDarkmode scrollYProgress={scrollYProgress} />
                    <NextjsSkill scrollYProgress={scrollYProgress} />
                    <AnimationSkill scrollYProgress={scrollYProgress} />
                    <ThreeDAnimationSkill scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </div>
    )
}
