import Image from "next/image";
import Link from "next/link";

export default function Menu() {
    return (
        <div className="flex w-full min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>


            <main className="w-full  flex  flex-col">
                <section className="flex relative px-[10%] max-sm:px-[5%] pt-50 flex-col gap-5">
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl max-sm:text-center  z-10 max-sm:text-5xl font-semibold font-clash text-[#4B2E2B]">
                        The master chef calleth <br /> <span className="font-dancing max-sm:text-6xl">Come and Dine</span>
                    </h1>
                    <p className="font-clash max-sm:text-lg max-sm:text-center  z-10 text-2xl text-[#4B2E2B]">
                        Our menu is a culinary adventure, where every bite tells a story. <br /> From the delicate flavours of our pastries to the rich flavors of our coffee, every dish is a celebration of the art of cooking.
                    </p>

                </section>


                {/* breakfast */}
                <section className="flex max-sm:px-[5%]  items-start flex-col w-full relative   py-20 px-[10%] bg-white gap-10">
                    <section className="flex w-full max-w-4xl items-center justify-between relative  font-clash bg-white gap-10">
                        <h3 className="font-clash text-4xl">
                            Pastries
                        </h3>
                        <Link href="#" className="underline">
                            View more
                        </Link>
                    </section>
                    <div className="max-w-4xl w-full gap-5 max-sm:grid-cols-1  items-end grid grid-cols-3">
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

                </section>
                <section className="flex border-t border-[#4B2E2B] relative px-[10%] py-20 flex-col gap-5">
                    <section className="flex w-full max-w-4xl items-center justify-between relative  font-clash bg-white gap-10">
                        <h3 className="font-clash text-4xl">
                            Drinks
                        </h3>
                        <Link href="#" className="underline">
                            View more
                        </Link>
                    </section>
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