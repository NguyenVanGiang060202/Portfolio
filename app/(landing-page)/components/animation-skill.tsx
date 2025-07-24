import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion, MotionValue, useTransform } from 'framer-motion';

const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function animation({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const y = useTransform(scrollYProgress, [0.6, 0.8], ["0", "100%"]);
    return (
        <div className='relative w-dvw h-dvh justify-center items-center flex bg-indigo-700'>
            <motion.div style={{ translateY: useTransform(y, (v) => `calc(-1 * ${v})`) }} className="absolute w-dvw h-dvh bg-slate-50 z-10 [clip-path:polygon(0_0,_100%_0,_100%_100%,_100%_100%)]">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-slate-900 ${monaSans.className}`}>Animation</div>
            </motion.div>
            <motion.div style={{ y }} className="absolute w-dvw h-dvh bg-slate-50 z-10 [clip-path:polygon(0_0,_0_0,_100%_100%,_0_100%)]">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-slate-900 ${monaSans.className}`}>Animation</div>
            </motion.div>

            <div className={`text-8xl font-bold text-orange-50 ${monaSans.className}`}>Animation</div>
        </div>
    )
}
