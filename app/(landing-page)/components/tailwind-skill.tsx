import React, { useEffect, useRef, useState } from 'react'
import { Mona_Sans } from 'next/font/google'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function TailwindDarkmode() {
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
        <div ref={containerRef} className="relative w-dvw h-dvh justify-center items-center flex bg-slate-50 ">
            <Image src="/tailwind-dark_2x.png" alt="Logo" fill sizes='auto' className='object-cover absolute top-0 left-0 w-screen h-screen' quality={100} priority />
            <motion.div style={{ clipPath: `polygon(${relativePos.x}px 0, 100% 0, 100% 100%, ${relativePos.x}px 100%)` }} className="absolute top-0 left-0 w-screen h-screen bg-slate-50">
                <Image src="/tailwind-light_2x.png" alt="Logo" fill sizes='auto' className='object-cover absolute top-0 left-0 w-screen h-screen' quality={100} priority />
            </motion.div>

            {/* <h1 className={`text-8xl font-bold text-sky-500 ${monaSans.className}`}>Tailwind CSS</h1> */}
        </div>
    )
}
