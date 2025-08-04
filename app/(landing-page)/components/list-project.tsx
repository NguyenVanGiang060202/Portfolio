"use client"
import React, { useRef, useState } from 'react'
import { Mona_Sans } from 'next/font/google'
import { color, motion, useAnimation, useScroll, useTransform, useCycle } from 'framer-motion'
import { Rotate3D } from 'lucide-react';
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

// Projects ---> Portfolio - reservation - oj - education - ct - service ---> làm hiệu ứng hover -> ảnh + description
export default function ListProjects({ text }: { text: string }) {
    const [open, setOpen] = useState(false);
    const controls = useAnimation()
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
    const scaleY = useTransform(scrollYProgress, [0, 0.25], [1, -1])

    const containerVariants = {
        hover: {}, // cha không cần animation
    };

    const childVariants = {

        initialFirstText: { opacity: 1, y: 0 },
        hoverFirstText: { opacity: 0, y: -20 },
        initalSecondText: { opacity: 0, y: 0 },
        hoverSecondText: { opacity: 1, y: -20 },
    };
    return (
        <div ref={targetRef} className="w-full h-[300vh] max-w-screen min-h-dvh flex flex-col justify-start items-start bg-gradient-to-b from-orange-50 to-15% to-slate-900">
            <motion.div style={{ scale, scaleY }} animate={controls} transition={{ duration: 1, ease: 'easeOut' }} className="w-[calc(100vw-12rem)] m-24 h-screen max-w-screen min-h-dvh  flex justify-center items-center bg-slate-900 rounded-[4rem] cursor-pointer">
                {text.split("").map((char, index) => (
                    <div key={index} className='relative flex flex-col items-center justify-center'>
                        <motion.h1 onHoverStart={() => controls.start({ backgroundColor: "#4338ca" })} onHoverEnd={() => controls.start({ backgroundColor: "#0f172a" })} whileHover={{ scale: 1.2, backgroundSize: '100% 100%', color: 'transparent', transition: { duration: 1, ease: 'easeOut' } }} initial={{ backgroundSize: '100% 0%', backgroundColor: "#ffffff" }}
                            style={{
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'bottom',
                            }}
                            className={` text-[14rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-orange-50 to-orange-200 ${monaSans.className}`}>
                            {char}
                        </motion.h1>
                    </div>
                ))}
            </motion.div>
            <div className={`w-full h-screen max-w-screen min-h-dvh mt-[20%] flex flex-col justify-center items-center bg-slate-900 cursor-pointer text-5xl gap-4 font-bold ${monaSans.className}`}>
                <div className="px-28 w-full h-[6rem] flex flex-col justify-start items-center cursor-pointer text-center perspective-[800px]">
                    <motion.div whileHover={{ rotateX: 90, transition: { duration: 0.3, ease: 'easeOut' } }} className="relative w-screen h-full [transform-style:preserve-3d] origin-center">
                        <motion.div className={`absolute border-white border-b-2 w-full h-full px-28 flex justify-start items-center [backface-visibility:hidden] transform rotate-x-0 translate-z-[3rem] text-slate-50 text-[3rem] ${monaSans.className}`}>Project 1</motion.div>
                        <motion.div className={`absolute bg-slate-50 px-28 w-full h-full flex justify-start items-center [backface-visibility:hidden] transform -rotate-x-90 -translate-z-[3rem] origin-bottom text-slate-900 text-[3rem] ${monaSans.className}`}>Project 1</motion.div>
                    </motion.div>
                </div>
                <div className="px-28 w-full h-[6rem] flex flex-col justify-start items-center cursor-pointer text-center perspective-[800px]">
                    <motion.div whileHover={{ rotateX: 90, transition: { duration: 0.3, ease: 'easeOut' } }} className="relative w-screen h-full [transform-style:preserve-3d] origin-center">
                        <motion.div className={`absolute border-white border-b-2 w-full h-full px-28 flex justify-start items-center [backface-visibility:hidden] transform rotate-x-0 translate-z-[3rem] text-slate-50 text-[3rem] ${monaSans.className}`}>Project 2</motion.div>
                        <motion.div className={`absolute bg-slate-50 px-28 w-full h-full flex justify-start items-center [backface-visibility:hidden] transform -rotate-x-90 -translate-z-[3rem] origin-bottom text-slate-900 text-[3rem] ${monaSans.className}`}>Project 2</motion.div>
                    </motion.div>
                </div>
                <div className="px-28 w-full h-[6rem] flex flex-col justify-start items-center cursor-pointer text-center perspective-[800px]">
                    <motion.div whileHover={{ rotateX: 90, transition: { duration: 0.3, ease: 'easeOut' } }} className="relative w-screen h-full [transform-style:preserve-3d] origin-center">
                        <motion.div className={`absolute border-white border-b-2 w-full h-full px-28 flex justify-start items-center [backface-visibility:hidden] transform rotate-x-0 translate-z-[3rem] text-slate-50 text-[3rem] ${monaSans.className}`}>Project 3</motion.div>
                        <motion.div className={`absolute bg-slate-50 px-28 w-full h-full flex justify-start items-center [backface-visibility:hidden] transform -rotate-x-90 -translate-z-[3rem] origin-bottom text-slate-900 text-[3rem] ${monaSans.className}`}>Project 3</motion.div>
                    </motion.div>
                </div>
                <div className="px-28 w-full h-[6rem] flex flex-col justify-start items-center cursor-pointer text-center perspective-[800px]">
                    <motion.div whileHover={{ rotateX: 90, transition: { duration: 0.3, ease: 'easeOut' } }} className="relative w-screen h-full [transform-style:preserve-3d] origin-center">
                        <motion.div className={`absolute border-white w-full h-full px-28 flex justify-start items-center [backface-visibility:hidden] transform rotate-x-0 translate-z-[3rem] text-slate-50 text-[3rem] ${monaSans.className}`}>Project 4</motion.div>
                        <motion.div className={`absolute bg-slate-50 px-28 w-full h-full flex justify-start items-center [backface-visibility:hidden] transform -rotate-x-90 -translate-z-[3rem] origin-bottom text-slate-900 text-[3rem] ${monaSans.className}`}>Project 4</motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
