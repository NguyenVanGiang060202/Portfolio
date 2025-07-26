"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'

const monaSans = Mona_Sans({
	subsets: ["latin"],
	weight: "700",
});

export default function NavBar() {
	const [isHover, setIsHover] = useState(false)
	return (
		<>
			<motion.header className="absolute top-20 left-20 z-10 size-fit flex justify-center items-center gap-8" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
				<motion.div className='rounded-full size-full' whileHover={{ scale: 0.9, cursor: "pointer", transition: { duration: 0.2, ease: "easeInOut" }, rotate: 360, transformOrigin: "center center" }}>
					<Menu className='size-10' />
				</motion.div>
				<motion.div
					className="w-fit h-fit flex gap-4 text-lg z-10"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: isHover ? 1 : 0, x: isHover ? 0 : -20 }}
					transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
				>
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.2 }}
					>
						<Link href="#projects" className={monaSans.className}>Projects</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.4 }}
					>
						<Link href="#skills" className={monaSans.className}>Skills</Link>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: isHover ? 1 : 0, y: isHover ? 0 : -10 }}
						transition={{ duration: 0.3, delay: 0.6 }}
					>
						<Link href="#contact" className={monaSans.className}>Contact</Link>
					</motion.div>
				</motion.div>



				{/* <DropdownMenu>
					<DropdownMenuTrigger asChild>

					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="start">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Link href="#about">About</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="#projects">Projects</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="#skills">Skills</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Link href="#contact">Contact</Link>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu> */}
			</motion.header>
		</>
	)
}
