import Image from "next/image";
import {ComingSoon} from "@/components/blocks/coming-soon";
import Link from "next/link";

export default function News() {
    return (
        <div className="flex w-full  flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>


            <main className="w-full  flex  flex-col">
                <section className="flex relative px-[10%]  max-sm:px-[5%] max-sm:py-20 py-[10%_4%] flex-col gap-5">
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl z-10 max-sm:text-5xl font-semibold font-clash text-[#4B2E2B]">
                        Stay up-to-date <br /> <span className="font-dancing">The Barn News</span>
                    </h1>
                    <p className="font-clash z-10 text-2xl text-[#4B2E2B]">
                        Welcome to our news room.
                    </p>
                </section>

                <section className="w-full grid py-10 pb-40 max-sm:grid-cols-1 grid-cols-3 relative px-[10%] max-sm:px-[5%] bg-white gap-10">
                    <div className="border relative flex-col gap-4 flex w-full p-4 py-7 rounded-2xl border-[#4B2E2B]">
                        <div className="w-full h-full inset-0 absolute">
                            <Image
                                fill
                                src={"/background/pastries.svg"}
                                alt={"#"}
                                className="object-cover opacity-20"
                            />
                        </div>
                        <Image height={400} width={400} src={"/news/rest.png"} alt={"#"} className="w-full z-20 origin-top  aspect-[16/10] rounded object-cover" />
                        <p className="text-xl font-sans  text-[#4B2E2B]">
                        {/*    Date */}
                            November 18, 2025
                        </p>
                        <h4 className="font-sans text-[#4B2E2B] text-3xl">
                            The Barn is opening a restaurant in the heart of Rondebosch.
                        </h4>
                        <p className="font-sans text-lg">
                            The Barn is opening a restaurant in the heart of Rondebosch. The restaurant will be open from 10am to 5pm.
                            <br />
                            <br />
                            <Link href={"/"} className="underline ">Read more</Link>
                        </p>
                    </div>
                    <div className="border relative flex-col gap-4 flex w-full p-4 py-7 rounded-2xl border-[#4B2E2B]">
                        <div className="w-full h-full inset-0 absolute">
                            <Image
                                fill
                                src={"/background/pastries.svg"}
                                alt={"#"}
                                className="object-cover opacity-20"
                            />
                        </div>
                        <Image height={400} width={400} src={"/news/rest.png"} alt={"#"} className="w-full z-20 origin-top  aspect-[16/10] rounded object-cover" />
                        <p className="text-xl font-sans  text-[#4B2E2B]">
                            {/*    Date */}
                            November 18, 2025
                        </p>
                        <h4 className="font-sans text-[#4B2E2B] text-3xl">
                            The Barn is opening a restaurant in the heart of Rondebosch.
                        </h4>
                        <p className="font-sans text-lg">
                            The Barn is opening a restaurant in the heart of Rondebosch. The restaurant will be open from 10am to 5pm.
                            <br />
                            <br />
                            <Link href={"/"} className="underline ">Read more</Link>
                        </p>
                    </div>
                    <div className="border relative flex-col gap-4 flex w-full p-4 py-7 rounded-2xl border-[#4B2E2B]">
                        <div className="w-full h-full inset-0 absolute">
                            <Image
                                fill
                                src={"/background/pastries.svg"}
                                alt={"#"}
                                className="object-cover opacity-20"
                            />
                        </div>
                        <Image height={400} width={400} src={"/news/rest.png"} alt={"#"} className="w-full z-20 origin-top  aspect-[16/10] rounded object-cover" />
                        <p className="text-xl font-sans  text-[#4B2E2B]">
                            {/*    Date */}
                            November 18, 2025
                        </p>
                        <h4 className="font-sans text-[#4B2E2B] text-3xl">
                            The Barn is opening a restaurant in the heart of Rondebosch.
                        </h4>
                        <p className="font-sans text-lg">
                            The Barn is opening a restaurant in the heart of Rondebosch. The restaurant will be open from 10am to 5pm.
                            <br />
                            <br />
                            <Link href={"/"} className="underline ">Read more</Link>
                        </p>
                    </div>

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