import Image from "next/image";

export function ProductCard() {
    return (
        <div className="flex text-white flex-col gap-3">
            <div className="w-full relative rounded-md bg-[#D9C4B3] aspect-square">
                <Image
                    fill
                    src={"/images/cape-latte.png"}
                    alt={"#"}
                    className="absolute  scale-90 object-cover"
                />
            </div>
            <p className="text-4xl font-clash">
                Cape Latte
            </p>
            <p className="text-lg font-sans">
                Rich espresso with silky steamed milk.
            </p>
            <p className="font-medium font-sans text-3xl">
                R45
            </p>
            <button className="border text-lg border-white rounded-full self-start px-6 py-2 font-sans text-white">
                Add to cart
            </button>

        </div>
    )
}