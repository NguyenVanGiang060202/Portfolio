"use client"
import React, { useRef, useState } from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion, useAnimation, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});


const projects = [
    {
        id: 0,
        name: "Project LMS",
        image: "/Project_1.webp",
        link: "https://github.com/NguyenVanGiang060202/TLCN-client"
    },
    {
        id: 1,
        name: "Project Booking Service",
        image: "/Project_2.webp",
        link: "https://github.com/NguyenVanGiang060202/booking-service-front-end"
    },
    {
        id: 2,
        name: "Project CMS Restaurant",
        image: "/Project_3.webp",
        link: "https://github.com/NguyenVanGiang060202/manager_dashboard_food_reservation"
    }
]

export default function ListProjects() {
    const text = "Projects"
    const MotionImage = motion.create(Image)
    const controls = useAnimation()
    const targetRef = useRef(null);
    const projectRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2])
    const scaleY = useTransform(scrollYProgress, [0, 0.25], [1, -1])


    //-------------------------------------
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const cursorXSpring = useSpring(mouseX, springConfig);
    const cursorYSpring = useSpring(mouseY, springConfig);

    const [activeImage, setActiveImage] = useState<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
    };

    const cursorVariants = {
        default: { scale: 0, opacity: 0 },
        hovered: { scale: 1, opacity: 1 },
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
            <div ref={projectRef} onMouseMove={(event) => handleMouseMove(event)} className={`w-full h-screen max-w-screen min-h-dvh mt-[20%] flex flex-col justify-center items-center bg-slate-900 cursor-pointer text-5xl gap-4 font-bold ${monaSans.className}`}>
                <motion.div className="absolute w-[30%] bg-green-50 aspect-video"
                    variants={cursorVariants}
                    animate={activeImage !== null ? 'hovered' : 'default'}
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                        pointerEvents: 'none',
                        zIndex: 30,
                    }}>
                    {activeImage === 0 && (
                        <MotionImage
                            src={projects[0].image}
                            alt='cursor'
                            fill
                            className=""
                        />
                    )}
                    {activeImage === 1 && (
                        <MotionImage
                            src={projects[1].image}
                            alt='cursor'
                            fill
                            className=""
                        />
                    )}
                    {activeImage === 2 && (
                        <MotionImage
                            src={projects[2].image}
                            alt='cursor'
                            fill
                            className=""
                        />
                    )}
                </motion.div>
                {projects.map((project) => (
                    <Link key={project.id} href={project.link}
                        onMouseEnter={() => setActiveImage(project.id)}
                        onMouseLeave={() => setActiveImage(null)}
                        className="px-28 w-full h-[6rem] flex flex-col justify-start items-center cursor-pointer text-center perspective-[800px]">
                        <motion.div whileHover={{ rotateX: 90, transition: { duration: 0.3, ease: 'easeOut' } }} className="relative w-screen h-full [transform-style:preserve-3d] origin-center">
                            <motion.div className={`absolute border-white border-b-2 w-full h-full px-28 flex justify-between items-center [backface-visibility:hidden] transform rotate-x-0 translate-z-[3rem] text-slate-50 text-[3rem] ${monaSans.className}`}>
                                <div className="">{project.name}</div>
                                <ArrowUpRight size="3rem" />
                            </motion.div>
                            <motion.div className={`absolute bg-slate-50 px-28 w-full h-full flex justify-between items-center [backface-visibility:hidden] transform -rotate-x-90 -translate-z-[3rem] origin-bottom text-slate-900 text-[3rem] ${monaSans.className}`}>
                                <div className="">{project.name}</div>
                                <ArrowUpRight size="3rem" />
                            </motion.div>
                        </motion.div>

                    </Link>
                ))}
            </div>
        </div>
    )
}

