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
        <div ref={targetRef} className='relative w-screen h-[500vh] bg-red-50'>
            <div className="w-[100vw] h-[120vh] bg-orange-50 flex flex-col sticky top-0 justify-start items-start overflow-hidden">
                <div className="flex flex-col gap-[20vh] justify-start items-start">
                    <TailwindDarkmode scrollYProgress={scrollYProgress} />
                    <NextjsSkill scrollYProgress={scrollYProgress} />
                    <AnimationSkill scrollYProgress={scrollYProgress} />
                    <ThreeDAnimationSkill scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </div>
    )
}
