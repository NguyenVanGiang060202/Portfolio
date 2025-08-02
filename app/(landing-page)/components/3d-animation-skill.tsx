import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion, MotionValue, useTransform } from 'framer-motion'
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function ThreeDAnimationSkill({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.95])
    const y = useTransform(scrollYProgress, [0.65, 0.9], ["-280%", "-420%"])
    return (
        <motion.div style={{ scale, y }} className='w-screen h-[calc(100vh-4rem)] justify-center items-center flex bg-slate-50 z-30 rounded-[4rem] overflow-hidden scale-90 origin-top my-10 shadow-2xl'>
            <h1 className={`text-8xl font-bold ${monaSans.className}`}>3D Animation</h1>
        </motion.div>
    )
}
