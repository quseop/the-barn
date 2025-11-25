"use client"

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import {CartSheet} from "@/components/pages/cart/cart-sheet";
import React from "react";
import { useState } from "react";

import { Menu, X } from "lucide-react";

export function Header() {
    return (
        <header className="w-full mt-4
       border border-[#4B2E2B] rounded-full  max-w-7xl
         z-30 fixed  backdrop-blur-sm p-3 ">
            <div className="max-w-7xl mx-auto flex  items-center justify-between py-2 px-6">

                {/* Logo */}
                <h1 className="text-2xl text-[#4B2E2B] font-bold  font-dancing">TheBarn<span className="font-normal font-sans">™</span></h1>

                {/* Navigation */}
                <nav className="flex font-clash text-[#4B2E2B] tracking-tight items-center gap-6 text-sm ">
                    <Link href="#" className="hover:opacity-70">About us</Link>
                    <span className="text-black">|</span>

                    <Link href={"/gallery"} className="hover:opacity-70">Our Gallery</Link>
                    <span className="text-black">|</span>
                    <Link href="#" className="hover:opacity-70">News</Link>
                </nav>

                {/* Cart Icon */}
                <Link href="#" className="hover:opacity-70 font-clash">Contact Us</Link>
            </div>
        </header>
    );
}



export  function SecondHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className={ ` ${!open && 'border'} w-[90vw] mt-4  border-[#4B2E2B] rounded-full max-w-7xl z-30 fixed backdrop-blur-sm p-1 left-1/2 -translate-x-1/2`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-5">

                {/* Logo */}
                <h1 className="text-xl text-[#4B2E2B] font-bold font-dancing">
                    TheBarn<span className="font-normal font-sans">™</span>
                </h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex font-clash text-[#4B2E2B] tracking-tight items-center gap-6 text-sm">
                    <Link href="#" className="hover:opacity-70">About us</Link>
                    <span className="text-black">|</span>

                    <Link href="/gallery" className="hover:opacity-70">Our Gallery</Link>
                    <span className="text-black">|</span>

                    <Link href="#" className="hover:opacity-70">News</Link>
                </nav>

                {/* Contact (Desktop) */}
                <Link href="#" className="hidden md:block hover:opacity-70 font-clash">
                    Contact Us
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#4B2E2B]"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="
          md:hidden mt-3 bg-white/60 backdrop-blur-md border border-[#4B2E2B]
          rounded-2xl p-2 flex flex-col gap-4 text-[#4B2E2B]
        ">
                    <Link href="#" className="hover:opacity-70">About us</Link>
                    <Link href="/gallery" className="hover:opacity-70">Our Gallery</Link>
                    <Link href="#" className="hover:opacity-70">News</Link>
                    <Link href="#" className="hover:opacity-70">Contact Us</Link>
                </div>
            )}
        </header>
    );
}

