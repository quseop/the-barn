import Image from "next/image";

export function ProductCard({color, image}:{color: string, image: string}) {
    return (
        <div className={`flex text-[#4B2E2B] p-5 bg-[${color}]/90 rounded-4xl border-[#4B2E2B] border flex-col gap-3`}>
            <div className="w-full relative rounded-md  aspect-square">
                <img
                    // fill
                    src={image}
                    alt={"#"}
                    className="absolute object-cover"
                />
            </div>
            <div className="flex gap-5 justify-between px-2 items-center">
                <p className="text-2xl font-medium font-clash">
                    Chai Latte
                </p>
                <p className="font-medium font-sans text-xl">
                    R45
                </p>
            </div>
        </div>
    )
}