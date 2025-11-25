import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {clashDisplay, dancingScript} from "@/app/fonts";
import React from "react";
import Image from "next/image";
import {Tiktok} from "@/components/icons/tiktok";
import {Instagram} from "@/components/icons/instagram";
import FooterMenu from "@/components/blocks/footer-menu";
import {NewsletterSignup} from "@/components/blocks/join-newsletter";
import {Header, SecondHeader} from "@/components/blocks/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Barn",
  description: "Crafted to Comfort. Served to Satisfy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${dancingScript.variable} flex  flex-col items-center antialiased`}
      >
      <SecondHeader />
        {children}
      <footer className="w-full relative">
          <div className="max-md:hidden absolute top-[15%] z-10 right-30 w-[20%] aspect-[1248/933]">
              <Image
                  fill
                  src={"/images/basket-two.png"}
                  alt={"#"}
                  className="object-cover"
              />
          </div>
          <section className="flex w-full justify-between relative gap-10 py-10 px-[10%] bg-[#D9C4B3] flex-col ">
              <div className="flex gap-3 max-sm:flex-col items-center">
                  <p className="text-2xl max-sm:text-4xl text-[#4B2E2B] font-dancing">TheBarn<span className="font-sans">™</span></p>
                  <span className="text-[#4B2E2B] max-sm:hidden ">|</span>
                  <p className="font-sans text-[#4B2E2B]">Crafted to Comfort. Served to Satisfy.</p>
                  <span className="text-[#4B2E2B] max-sm:hidden">|</span>
                  <div className="flex gap-3">
                      <Tiktok />
                      <Instagram />
                  </div>
              </div>
              <NewsletterSignup />
              <div className="flex w-full max-sm:flex-col gap-10">
                  <FooterMenu />
              </div>
          </section>
      </footer>
      </body>
    </html>
  );
}
