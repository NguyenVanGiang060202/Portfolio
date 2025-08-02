import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, MotionValue, useTransform } from "framer-motion";

export default function TailwindDarkmode({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const scale = useTransform(scrollYProgress, [0.15, 0.4], [1, 0.8])
    const containerRef = useRef<HTMLDivElement>(null)
    const mousePosition = useRef({ x: 0, y: 0 })
    const [relativePos, setRelativePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useEffect(() => {
        const updatePosition = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect()
                const x = mousePosition.current.x - rect.left
                const y = mousePosition.current.y - rect.top
                setRelativePos({ x, y })
            }
            requestAnimationFrame(updatePosition)
        }

        const id = requestAnimationFrame(updatePosition)
        return () => cancelAnimationFrame(id)
    }, [])

    return (
        <motion.div ref={containerRef} style={{ scale }} className="relative w-screen h-[calc(100vh-4rem)] justify-center items-center flex bg-slate-50 scale-90 rounded-[4rem] overflow-hidden origin-top my-10 shadow-2xl">
            <Image src="/tailwind-dark_2x.png" alt="Logo" fill sizes='auto' className='object-cover absolute top-0 left-0 w-screen h-screen' quality={100} priority />
            <motion.div style={{ clipPath: `polygon(${relativePos.x}px 0, 100% 0, 100% 100%, ${relativePos.x}px 100%)` }} className="absolute top-0 left-0 w-screen h-[calc(100vh-4rem)] bg-slate-50">
                <Image src="/tailwind-light_2x.png" alt="Logo" fill sizes='auto' className='object-cover absolute top-0 left-0 w-screen h-screen' quality={100} priority />
            </motion.div>

            {/* <h1 className={`text-8xl font-bold z-10 text-orange-500 ${monaSans.className}`}>Tailwind CSS</h1> */}
        </motion.div>
    )
}
