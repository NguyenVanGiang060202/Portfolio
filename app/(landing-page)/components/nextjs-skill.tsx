import React from 'react'
import { Mona_Sans } from 'next/font/google'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
const monaSans = Mona_Sans({
    subsets: ["latin"],
    weight: "700",
});

export default function NextjsSkill({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
    const y = useTransform(scrollYProgress, [0.15, 0.35], ["0", "200%"]);
    const yInverse = useTransform(scrollYProgress, [0.15, 0.30, 0.45], ["500%", "120%", "300%"])
    return (
        <div className="w-dvw h-dvh justify-center items-center flex  bg-[linear-gradient(90deg,_#f8fafc_20%,_#432dd7_70%)] relative">
            <h1 className={`text-8xl font-bold text-orange-50 ${monaSans.className}`}>NextJS</h1>
            <motion.div style={{ y: yInverse }} className="absolute mx-auto w-full max-w-sm rounded-md p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button variant={"ghost"}>
                                <ArrowLeft/>
                                Previous
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant={"outline"}>1</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant={"outline"}>2</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant={"outline"}>3</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant={"outline"}>...</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button variant={"ghost"}>
                                Next
                                <ArrowRight/>
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </motion.div>
            <motion.div style={{ y }} className="absolute mx-auto w-full max-w-sm rounded-md border p-4 -top-20 left-20">
                <div className="flex animate-pulse space-x-4">
                    <div className="size-10 rounded-full bg-gray-400"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 rounded bg-gray-400"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 h-2 rounded bg-gray-400"></div>
                                <div className="col-span-1 h-2 rounded bg-gray-400"></div>
                            </div>
                            <div className="h-2 rounded bg-gray-400"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
