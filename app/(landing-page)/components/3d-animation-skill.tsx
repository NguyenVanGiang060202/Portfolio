import React from 'react'
import { Mona_Sans } from 'next/font/google'

const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function ThreeDAnimationSkill() {
  return (
    <div className='w-dvw h-dvh justify-center items-center flex bg-slate-50'>
      <h1 className={`text-8xl font-bold ${monaSans.className}`}>3D Animation</h1>
    </div>
  )
}
