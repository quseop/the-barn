"use client"

import Image from "next/image";
import {ComingSoon} from "@/components/blocks/coming-soon";
import Link from "next/link";
import {MasonryGallery} from "@/components/blocks/masonry-gallery";

export default function Gallery() {
    return (
        <div className="flex w-full  flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>


            <main className="w-full  flex  flex-col">
                <section className="flex relative px-[10%] pt-50 pb-10 flex-col gap-5">
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl z-10 max-sm:text-5xl font-semibold font-clash text-[#4B2E2B]">
                        Become part of this Family <br /> <span className="font-dancing">Visit us at The Barn.</span>
                    </h1>
                    <p className="font-clash z-10 text-2xl text-[#4B2E2B]">

                    </p>

                    {/*<div className="flex font-sans z-10 items-center gap-4">*/}
                    {/*    <Link href={"#"} className="rounded-full text-white drop-shadow-2xl text-sm p-3 px-8 bg-[#4B2E2B]">*/}
                    {/*        Our Menu*/}
                    {/*    </Link>*/}
                    {/*    <Link href={"#"} className="border px-8 py-2 rounded-full text-[#4B2E2B] border-[#4B2E2B]">*/}
                    {/*        View Gallery*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </section>

                <section className="w-full  flex py-10 min-h-screen pb-40 max-sm:grid-cols-1 grid-cols-3  px-[10%] max-sm:px-[0%] bg-white gap-10">
                    <MasonryGallery />
                </section>


                {/*<section className="flex w-full items-center py-50 px-[10%] bg-[#4B2E2B] flex-col gap-10">*/}
                {/*    <h2 className="text-4xl font-medium font-clash text-white">*/}
                {/*        Shop some of our all time bests...*/}
                {/*    </h2>*/}
                {/*    <div className="w-full max-w-7xl grid grid-cols-3 gap-10">*/}
                {/*        <ProductCard />*/}
                {/*        <ProductCard />*/}
                {/*        <ProductCard />*/}
                {/*    </div>*/}
                {/*</section>*/}

            </main>
        </div>

    )
}