import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import {CartSheet} from "@/components/pages/cart/cart-sheet";

export function Header() {
    return (
        <header className="w-full backdrop-blur-2xl
         z-30 fixed font-sans  ">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

                {/* Logo */}
                <h1 className="text-xl font-semibold text-black">
                    Kafé<span className="text-sm align-super">™</span>
                </h1>

                {/* Navigation */}
                <nav className="flex items-center gap-6 text-sm text-black">
                    <Link href="#" className="hover:opacity-70">About us</Link>
                    <span className="text-black">|</span>

                    <Link href="#" className="hover:opacity-70">Our Gallery</Link>
                    <span className="text-black">|</span>

                    <a href="#" className="hover:opacity-70">Contact Us</a>
                </nav>

                {/* Cart Icon */}
                <CartSheet />
            </div>
        </header>
    );
}
