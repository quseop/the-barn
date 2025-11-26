import LiquidEther from "@/components/reactbits/liquid-ether";
import Link from "next/link";
import Image from "next/image";
import {ProductCard} from "@/components/blocks/cards/product-card";
import RotatingText from "@/components/RotatingText";


export default function Home() {
    return (
        <div className="flex w-full min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>
            <div className="max-sm:hidden absolute top-70 z-10 right-10 w-[45%] aspect-square">
                <Image
                    fill
                    src={"/images/basket.png"}
                    alt={"#"}
                    className="object-cover"
                />
            </div>

            <main className="w-full  flex  flex-col">
                <section className="flex relative max-sm:items-center max-sm:h-[85vh] px-[10%] max-sm:px-[5%] max-sm:py-20 py-50 flex-col max-sm:gap-2 gap-5">
                    <div className="w-full h-full  inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>

                    <p className="font-clash font-medium max-sm:text-center max-sm:text-sm z-10 text-2xl text-[#4B2E2B]">
                        Unit 9A Rondebosch Village, Rondebosch
                    </p>
                    <h1 className="text-8xl max-sm:text-center z-10 max-sm:text-5xl font-semibold font-clash text-[#4B2E2B]">
                        Craving something real? <br className={"max-sm:hidden"} /> Step into <br className={"max-sm:inline hidden"} />
                        <span className="font-dancing max-sm:text-5xl">The Barn.</span>
                    </h1>
                    <p className="font-clash max-sm:text-center max-sm:text-sm z-10 text-2xl text-[#4B2E2B]">
                        Hand-rolled pastries, small-batch coffee, and flavours that feel like home. <br className={"max-sm:hidden"} />
                        Everything here is crafted to slow you down and lift you up.
                    </p>

                    <div className="flex font-sans z-10 items-center gap-4">
                        <Link href={"/menu"} className="max-sm:text-xs  rounded-full max-sm:px-6 max-sm:py-2.5 text-white drop-shadow-2xl text-sm p-3 px-8 bg-[#4B2E2B]">
                            Our Menu
                        </Link>
                        <Link href={"/gallery"} className="border max-sm:text-xs  max-sm:px-5 max-sm:py-2 px-8 py-2 rounded-full text-[#4B2E2B] border-[#4B2E2B]">
                            View Gallery
                        </Link>
                    </div>
                    <div className="relative md:hidden w-full">
                        <div className=" absolute top-0 z-10 w-full aspect-square">
                            <Image
                                fill
                                src={"/images/basket.png"}
                                alt={"#"}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center border-y border-[#4B2E2B] bg-[#D9C4B3]">
                    <div className="flex  w-full pt-30 py-20 px-[10%]  flex-col max-sm:gap-4 gap-10">
                        <div className="flex font-medium max-sm:flex-col text-[#4B2E2B] text-5xl max-md:text-2xl font-clash items-center gap-x-2">
                            A Basket Full Of
                            <RotatingText
                                texts={['Comfort','Freshness', 'Love']}
                                mainClassName="  font-clash font-medium text-[#4B2E2B] bg-transparent  text-black overflow-hidden  md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={3000}
                            />
                        </div>
                        <p className="font-clash max-sm:text-lg max-sm:leading-5 max-sm:text-center text-2xl text-[#4B2E2B]">
                            Discover the treats Cape Town keeps coming back for. <br /> Simple ingredients, unforgettable flavours.
                        </p>

                        {/*<p className="font-clash text-7xl text-white">*/}
                        {/*    Sip. Focus. Repeat.*/}
                        {/*</p>*/}
                    </div>
                </section>
                <section className="grid grid-cols-2 max-sm:grid-cols-1 w-full relative py-30 px-[10%] max-sm:px-[5%] bg-white gap-10">
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
                    <div className="w-full flex max-sm:text-center max-sm:gap-5 justify-between flex-col font-clash relative aspect-[604/466]">
                        <h3 className="text-8xl max-sm:text-5xl font-medium text-[#4B2E2B]">
                            More than just a treat.
                        </h3>

                        <p className="text-2xl max-sm:text-lg">
                            Golden, chewy, and packed with flavour. These never last long, so grab yours first.
                        </p>
                        <div className="w-full gap-5 items-end grid max-sm:grid-cols-1 grid-cols-3">
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
                <section className="flex border-t border-[#4B2E2B] relative px-[10%] max-sm:py-20 py-40 flex-col gap-5">
                    <div className="absolute max-sm:hidden top-50 z-10 right-50 w-[35%] aspect-square">
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
                    <h1 className="text-8xl max-sm:text-5xl z-10  max-sm:text-center font-semibold font-clash text-[#4B2E2B]">
                        <span className="font-dancing ">The Perfect Pair Lives Here.</span>
                    </h1>
                    <p className="font-clash z-10 text-3xl max-sm:text-xl max-sm:text-center max-sm:leading-5 font-medium text-[#4B2E2B]">
                        Your favourite pastry in one hand, coffee in the other. <br /> That’s how you turn a snack into an experience.
                    </p>

                    <div className="w-full py-10 max-w-4xl max-sm:grid-cols-1 grid grid-cols-3 gap-4">
                        <div className={`flex text-[#4B2E2B] p-5 bg-[#4B2E2B]/80 rounded-4xl border-[#4B2E2B] border flex-col gap-5`}>
                            <div className="w-full relative rounded-md  aspect-square">
                                <img
                                    // fill
                                    src={"/images/glass-coffee.png"}
                                    alt={"#"}
                                    className="absolute object-cover"
                                />
                            </div>
                            <div className="flex gap-5 text-white justify-between px-2 items-center">
                                <p className="text-2xl font-medium font-clash">
                                    Cape Latte
                                </p>
                                <p className="font-medium font-sans text-xl">
                                    R45
                                </p>
                            </div>
                        </div>
                        <div className={`flex text-[#4B2E2B] p-5 bg-[#FFA1FD]/40 rounded-4xl border-[#4B2E2B] border flex-col gap-3`}>
                            <div className="w-full relative rounded-md  aspect-square">
                                <img
                                    // fill
                                    src={"/images/ice-coffee.png"}
                                    alt={"#"}
                                    className="absolute object-cover"
                                />
                            </div>
                            <div className="flex gap-5 text-[#4B2E2B] justify-between px-2 items-center">
                                <p className="text-2xl font-medium font-clash">
                                    Iced Cappuccino
                                </p>
                                <p className="font-medium font-sans text-xl">
                                    R45
                                </p>
                            </div>
                        </div>
                        <div className={`flex text-[#4B2E2B]  p-5 bg-[#1B7002]/40 rounded-4xl border-[#4B2E2B] border flex-col gap-5`}>
                            <div className="w-full relative rounded-md  aspect-square">
                                <img
                                    // fill
                                    src={"/images/coffee-cup.png"}
                                    alt={"#"}
                                    className="absolute object-cover"
                                />
                            </div>
                            <div className="flex gap-5 text-white justify-between px-2 items-center">
                                <p className="text-2xl font-medium font-clash">
                                    Chai Latte
                                </p>
                                <p className="font-medium font-sans text-xl">
                                    R45
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </div>
    )
}