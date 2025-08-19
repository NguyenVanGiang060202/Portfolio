import NavBar from '@/components/navigation/Header';
import React from 'react'


export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='flex min-h-screen w-full h-full max-w-screen'>
            <NavBar/>
            {children}
        </div>
    )
}