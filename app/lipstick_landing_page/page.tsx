import React from "react";
import { Button } from "@/components/ui/button";
import { Parisienne } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Navbar from "./components/Navbar";
import AnimationSVG from "./components/AnimationSVG";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
});

export default function page() {
  return (
    <div className="relative h-dvh w-screen min-h-screen ">
      <Image
        src="/Background_Pink.webp"
        fill
        alt="Background"
        className="absolute top-0 left-0 object-cover w-full h-full -z-10"
      />
      <Navbar />
      <main>
        <div className="relative w-screen h-dvh flex justify-between items-center flex-col">
          <h1
            className={cn(
              "text-[40rem] font-bold text-white w-fit h-fit tracking-tight",
              `${parisienne.className}`
            )}
          >
            Lip
          </h1>
          <div className=" flex flex-col items-center justify-center text-center">
            <div className="flex flex-col space-y-2 items-center justify-center -mt-60">
              <h2 className="text-4xl font-bold text-white">
                From Passion to Perfection
              </h2>
              <h2 className="text-4xl font-bold text-white">
                The Art of Lipstick.
              </h2>
              <div className="flex flex-row items-center justify-center space-x-3 mt-5">
                <Button className="text-xl p-6 bg-white text-black">
                  Shop Now
                </Button>
                <Button
                  className="text-xl p-6 bg-white/25 text-white"
                  variant="secondary"
                >
                  Discover Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative h-dvh w-screen min-h-screen bg-pink-200 flex justify-center items-center flex-col">
        <div className="w-fit h-fit border-2 border-white rounded-full p-4 flex justify-center items-center">
          <AnimationSVG />
        </div>
      </div>
    </div>
  );
}
