import React from 'react'
import { Mona_Sans } from 'next/font/google'

const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function animation() {
  return (
    <div className='w-dvw h-dvh justify-center items-center flex bg-indigo-700'>
      <h1 className={`text-8xl font-bold text-orange-50 ${monaSans.className}`}>Animation</h1>
    </div>
  )
}
