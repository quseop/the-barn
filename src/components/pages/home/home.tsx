import LiquidEther from "@/components/reactbits/liquid-ether";
import Link from "next/link";
import Image from "next/image";
import {ProductCard} from "@/components/cards/product-card";


export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#D9C4B3' }}>
            <div className="w-full h-[86vh] absolute">
                <LiquidEther
                    colors={[ '#4B2E2B', '#D9C4B3', '#D9C4B3' ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>


            <div className="absolute top-90 right-10 w-[45%] aspect-square">
                <Image
                    fill
                    src={"/images/latte-beans.png"}
                    alt={"#"}
                    className="object-cover"
                />
            </div>

            <main className="w-full ">
                <section className="flex px-[10%] py-65 flex-col gap-5">
                    <h1 className="text-9xl font-clash text-white">
                        Savor your <span className="font-bold stroke-3 stroke-white text-[#4B2E2B]">Coffee</span> <br /> Ahead of your task.
                    </h1>
                    <p className="font-clash text-2xl text-[#4B2E2B]">
                        Take a break, take a breath  let a warm <br />
                        cup carry you through the rush.
                    </p>

                    <div className="flex font-sans items-center gap-4">
                        <Link href={"#"} className="rounded-full drop-shadow-2xl text-sm p-3 px-8 bg-[#4B2E2B]">
                            Order Now
                        </Link>
                        <Link href={"#"} className="border px-8 py-2 rounded-full text-[#4B2E2B] border-[#4B2E2B]">
                            More Menu
                        </Link>
                    </div>
                </section>
                <section className="flex py-50 px-[10%] bg-[#4B2E2B] flex-col gap-10">
                    <h2 className="text-5xl font-bold font-clash text-white">
                        Fuel your grind. <br />
                        Sip your vibe
                    </h2>
                    <p className="font-clash text-2xl text-white">
                        Slow-roasted, smoothly balanced coffee crafted for Cape Town moments.
                        Whether mornings, study breaks, or catch-ups, enjoy comfort, warmth,
                        and calm, no rush, just really good coffee.
                    </p>

                    <p className="font-clash text-7xl text-white">
                        Sip. Focus. Repeat.
                    </p>
                </section>
                <section className="flex relative items-center h-[90vh] py-10 px-[10%] bg-[#D9C4B3] flex-col gap-[-30px]">
                    <h2 className="text-5xl right-50 top-30 absolute font-medium font-clash text-[#4B2E2B]">
                        Every great sip <br />
                        deserves a sidekick.
                    </h2>
                    <div className="absolute w-[55%] aspect-[797/598]">
                        <Image
                            fill
                            src={"/images/rose-bun.png"}
                            alt={"#"}
                            className="absolute object-cover"
                        />
                    </div>
                    <p className="font-clash left-40 bottom-15 absolute font-medium text-5xl text-[#4B2E2B]">
                        Because coffee’s even better <br />
                        with a little treat on the side…
                    </p>
                </section>
                <section className="flex items-center py-50 px-[10%] bg-[#4B2E2B] flex-col gap-10">
                    <h2 className="text-4xl font-medium font-clash text-white">
                        Shop some of our all time bests...
                    </h2>
                    <div className="w-full max-w-7xl grid grid-cols-3 gap-10">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>

            </main>
        </div>
    )
}