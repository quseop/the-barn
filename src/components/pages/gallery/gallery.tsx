import Image from "next/image";
import Link from "next/link";
import {ProductCard} from "@/components/blocks/cards/product-card";

export default function Gallery() {
    return (
        <div className="flex w-full min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>


            <main className="w-full  flex  flex-col">
                <section className="flex relative px-[10%] py-50 flex-col gap-5">
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl z-10 font-semibold font-clash text-[#4B2E2B]">
                        Become part of this Family <br /> <span className="font-dancing">Visit us at The Barn.</span>
                    </h1>
                    <p className="font-clash z-10 text-2xl text-[#4B2E2B]">
                        Hand-rolled pastries, small-batch coffee, and flavours that feel like home. <br />
                        Everything here is crafted to slow you down and lift you up.
                    </p>

                    <div className="flex font-sans z-10 items-center gap-4">
                        <Link href={"#"} className="rounded-full text-white drop-shadow-2xl text-sm p-3 px-8 bg-[#4B2E2B]">
                            Our Menu
                        </Link>
                        <Link href={"#"} className="border px-8 py-2 rounded-full text-[#4B2E2B] border-[#4B2E2B]">
                            View Gallery
                        </Link>
                    </div>
                </section>

                <section className="grid grid-cols-2  w-full relative   py-30 px-[10%] bg-white gap-10">
                    {/*<div className="w-full h-full inset-0 absolute">*/}
                    {/*    <Image*/}
                    {/*        fill*/}
                    {/*        src={"/background/pastries.svg"}*/}
                    {/*        alt={"#"}*/}
                    {/*        className="object-cover opacity-20"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="w-full relative aspect-[604/466]">
                        <Image
                            fill
                            src={"/images/kookies.png"}
                            alt={"#"}
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="w-full flex justify-between flex-col font-clash relative aspect-[604/466]">
                        <h3 className="text-8xl font-medium text-[#4B2E2B]">
                            More than just a treat.
                        </h3>

                        <p className="text-2xl">
                            Golden, chewy, and packed with flavour. These never last long, so grab yours first.
                        </p>
                        <div className="w-full gap-5 items-end grid grid-cols-3">
                            <div className="w-full  relative aspect-[430/462]">
                                <Image
                                    fill
                                    src={"/images/doughnutsy.png"}
                                    alt={"#"}
                                    className="object-cover "
                                />
                            </div>
                            <div className="w-full  relative aspect-[441/484]">
                                <Image
                                    fill
                                    src={"/images/artisano.png"}
                                    alt={"#"}
                                    className="object-cover rounded-md"
                                />
                            </div>
                            <div className="w-full  relative aspect-[446/462]">
                                <Image
                                    fill
                                    src={"/images/cinnamono.png"}
                                    alt={"#"}
                                    className="object-cover "
                                />
                            </div>

                        </div>
                    </div>

                </section>
                <section className="flex border-t border-[#4B2E2B] relative px-[10%] py-40 flex-col gap-5">
                    <div className="absolute top-50 z-10 right-50 w-[35%] aspect-square">
                        <Image
                            fill
                            src={"/images/latte-beans.png"}
                            alt={"#"}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl z-10  font-semibold font-clash text-[#4B2E2B]">
                        <span className="font-dancing">The Perfect Pair Lives Here.</span>
                    </h1>
                    <p className="font-clash z-10 text-3xl font-medium text-[#4B2E2B]">
                        Your favourite pastry in one hand, coffee in the other. <br /> That’s how you turn a snack into an experience.
                    </p>
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