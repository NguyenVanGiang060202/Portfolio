"use client"
import React from 'react';
import { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import { useIsMobile } from '@/hooks/use-mobile';

export default function Spline3DAnimation() {
    const isMobile = useIsMobile()
    return (
        <>
            {!isMobile && (
                <div className='lg:flex relative xl:w-[50vw] w-full h-screen justify-center items-center overflow-hidden bg-orange-50'>
                    <div className="relative w-full h-full flex justify-center items-center object-cover">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Spline scene="https://prod.spline.design/TVD3deFWCYRoirM3/scene.splinecode"/>
                        </Suspense>
                    </div>
                </div>
            )}
        </>
    );
}
