"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import TailwindDarkmode from './tailwind-skill'
import NextjsSkill from './nextjs-skill'
import AnimationSkill from './animation-skill'
import ThreeDAnimationSkill from './3d-animation-skill';

export default function HorizontalScroll() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0", "-75%"]);

    return (
        <div ref={targetRef} className='relative w-screen h-[400vh]  bg-green-100'>
            <div className="w-[100vw] h-[100vh] bg-red-100 sticky top-0  flex justify-start items-start overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    <TailwindDarkmode/>
                    <NextjsSkill scrollYProgress={scrollYProgress}/>
                    <AnimationSkill scrollYProgress={scrollYProgress}/>
                    <ThreeDAnimationSkill/>
                </motion.div>
            </div>
        </div>
    )
}
