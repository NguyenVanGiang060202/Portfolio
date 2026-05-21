import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';

const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});


export default function AnimationSkill({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    const scale = useTransform(scrollYProgress, [0.5, 0.75], [1, 0.9])
    const y = useTransform(scrollYProgress, [0.4, 0.65], ["-140%", "-280%"])

    const yOpen = useTransform(scrollYProgress, [0.55, 0.8], ["0%", "100%"]);
    return (
        <motion.div style={{ scale, y }} className='xl:text-[10rem] text-[4rem] relative w-screen aspect-square xl:aspect-auto xl:h-[calc(100vh-4rem)] justify-center items-center flex bg-indigo-700 rounded-[4rem] overflow-hidden z-20 scale-90 origin-top my-10 shadow-2xl'>
            <motion.div style={{ translateY: useTransform(yOpen, (v) => `calc(-1 * ${v})`) }} className="absolute w-dvw h-dvh bg-slate-50 z-10 [clip-path:polygon(0_0,_100%_0,_100%_100%,_100%_100%)]">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-[10rem] text-[4rem] font-bold text-slate-900 ${monaSans.className}`}>Animation</div>
            </motion.div>
            <motion.div style={{ y: yOpen }} className="absolute w-dvw h-dvh bg-slate-50 z-10 [clip-path:polygon(0_0,_0_0,_100%_100%,_0_100%)]">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-[10rem] text-[4rem] font-bold text-slate-900 ${monaSans.className}`}>Animation</div>
            </motion.div>

            <AnimationText />
        </motion.div>
    )
}


function AnimationText() {

    const mapRange = (
        inputLower: number,
        inputUpper: number,
        outputLower: number,
        outputUpper: number
    ) => {
        const INPUT_RANGE = inputUpper - inputLower
        const OUTPUT_RANGE = outputUpper - outputLower

        return (value: number) => outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    }

    const setTransform = (item: HTMLElement & EventTarget, event: React.PointerEvent, x: MotionValue, y: MotionValue) => {
        const bounds = item.getBoundingClientRect();
        const relativeX = event.clientX - bounds.left;
        const relativeY = event.clientY - bounds.top;

        const xRange = mapRange(20, bounds.width, -1, 1)(relativeX)
        const yRange = mapRange(20, bounds.height, -1, 1)(relativeY)
        x.set(xRange * 50)
        y.set(yRange * 50)
    }

    const x = useSpring(0, { damping: 10, stiffness: 100, restDelta: 0.001 })
    const y = useSpring(0, { damping: 10, stiffness: 100, restDelta: 0.001 })
    return (
        <>
            <motion.div
                onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y)
                }}
                onPointerLeave={() => {
                    x.set(0)
                    y.set(0)
                }}
                drag
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                whileDrag={{ cursor: "grabbing" }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
                dragElastic={0.2}
                initial={{
                    backgroundPosition: "0% 50%",
                    scale: 1,
                }}
                whileHover={{
                    backgroundPosition: "100% 50%",
                    scale: 1.1,
                    transition: {
                        backgroundPosition: {
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    },
                }}
                className={`xl:text-[10rem] text-[4rem] font-bold text-center ${monaSans.className} cursor-grab text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-white bg-[length:200%_200%] bg-left`}
                style={{ x, y }}
            >
                Animation
            </motion.div>
        </>
    )
}
