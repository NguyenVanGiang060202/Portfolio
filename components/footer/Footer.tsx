import React from 'react'
import { Github, MailIcon } from 'lucide-react'
import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className='w-full h-full flex md:flex-row flex-col justify-between items-center border-y-2 py-20 bg-slate-50 gap-10'>
            <p className="text-2xl font-bold text-slate-900 overflow-hidden px-18 flex justify-center items-center gap-4">This site build with Next.js and
                using Tailwind CSS, Radix UI to build components, Framer Motion, Lenis to add animation</p>
            <div className="flex flex-col gap-4 h-full justify-center items-start">
                <Link href="https://mail.google.com/mail/#compose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-slate-900  flex justify-center items-center gap-4 group relative">
                    <MailIcon className="size-8" /> Nguyenvangiang060202@gmail.com
                    <span
                        className="absolute left-0 -bottom-2 h-[0.25rem] w-0 bg-black transition-all duration-300 group-hover:w-full"
                    ></span>
                </Link>
                <Link href="tel:0393508079" className="text-2xl font-bold text-slate-900 flex justify-center items-center gap-4 group relative">
                    <PhoneIcon className="size-8" />0393508079
                    <span
                        className="absolute left-0 -bottom-2 h-[0.25rem] w-0 bg-black transition-all duration-300 group-hover:w-full"
                    ></span>
                </Link>
                <Link href="https://github.com/NguyenVanGiang060202" className="text-2xl font-bold text-slate-900 flex justify-center items-center gap-4 group relative">
                    <Github className="size-8" /> https://github.com/NguyenVanGiang060202
                    <span
                        className="absolute left-0 -bottom-2 h-[0.25rem] w-0 bg-black transition-all duration-300 group-hover:w-full"
                    ></span>
                </Link>
            </div>
        </div>
    )
}
