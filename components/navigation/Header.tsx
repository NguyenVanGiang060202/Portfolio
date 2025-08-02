"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import { Menu, Moon, Sun } from 'lucide-react'

const monaSans = Mona_Sans({
	subsets: ["latin"],
	weight: "700",
});

export default function NavBar() {
	const [isHover, setIsHover] = useState(false)
	const [isDarkMode, setIsDarkMode] = useState(false)
	return (
		<>
			<motion.header className="absolute px-8 top-20 left-20 z-10 size-fit flex justify-center items-center gap-8" onClick={() => setIsHover(!isHover)} onHoverEnd={() => setIsHover(false)}>
				<motion.div className='rounded-full size-full' whileTap={{ scale: 0.9, cursor: "pointer", transition: { duration: 0.4, ease: "easeInOut" }, rotate: 360, transformOrigin: "center center" }} whileHover={{ scale: 0.9, cursor: "pointer", transition: { duration: 0.4, ease: "easeInOut" }, rotate: 360, transformOrigin: "center center" }} onHoverStart={() => setIsHover(true)} >
					<Menu className='size-10' />
				</motion.div>
				<motion.div
					className="w-fit h-fit flex gap-4 text-lg z-10 hover:cursor-pointer"
					initial={{visibility: 'hidden', opacity: 0, x: -20 }}
					animate={{ visibility: isHover ? 'visible' : 'hidden', opacity: isHover ? 1 : 0, x: isHover ? 0 : -20 }}
					transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
					
				>
					<motion.div
						initial={{visibility: 'hidden', opacity: 0, y: -10 }}
						animate={{ visibility: isHover ? 'visible' : 'hidden', opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.2 }}
						className='hover:cursor-pointer'
					>
						<Link href="#projects" className={monaSans.className}>Projects</Link>
					</motion.div>

					<motion.div
						initial={{visibility: 'hidden', opacity: 0, y: -10 }}
						animate={{ visibility: isHover ? 'visible' : 'hidden', opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.4 }}
						className='hover:cursor-pointer'
					>
						<Link href="#skills" className={monaSans.className}>Skills</Link>
					</motion.div>

					<motion.div
						initial={{visibility: 'hidden', opacity: 0, y: -10 }}
						animate={{ visibility: isHover ? 'visible' : 'hidden', opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.6 }}
						className='hover:cursor-pointer'
					>
						<Link href="#contact" className={monaSans.className}>Contact</Link>
					</motion.div>
					<motion.div
						initial={{visibility: 'hidden', opacity: 0, y: -10 }}
						animate={{ visibility: isHover ? 'visible' : 'hidden', opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.6 }}
						onClick={() => setIsDarkMode(!isDarkMode)}
						whileTap={{ scale: 0.9, cursor: "pointer", transition: { duration: 0.4, ease: "easeInOut" }, rotate: 360, transformOrigin: "center center" }}
						whileHover={{ scale: 0.9, cursor: "pointer", transition: { duration: 0.4, ease: "easeInOut" }, rotate: 360, transformOrigin: "center center" }}
						className='hover:cursor-pointer'
					>
						{isDarkMode ? <Moon fill='' className='text-black'/> : <Sun fill='' className='text-black'/>}
					</motion.div>
				</motion.div>
			</motion.header>
		</>
	)
}
