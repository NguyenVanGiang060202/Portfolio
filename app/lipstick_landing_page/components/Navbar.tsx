"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";


const navItems = ["Shop now", "New Arrivals", "Offers & Pricing"];


export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ">
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4 ">
          <div className="flex items-center">
            <div className="text-5xl font-bold flex items-center">
              <p>LIP</p>
            </div>
            <div className="">
              

            </div>
          </div>
          <div className="flex h-full items-center justify-between text-2xl font-bold text-black/50">
            <div className="hidden md:flex justify-between items-center gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Link href="#">{item}</Link>
                  <Button variant="ghost">#</Button>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
