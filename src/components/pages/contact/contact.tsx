"use client"

import Image from "next/image";
import {useState} from "react";
import {Check, X} from "lucide-react";
import Link from "next/link";

export function Contact() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedValue, setSelectedValue] = useState('');
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Basic validation
        if (!fullName.trim() || !email.trim() || !message.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/mail/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullName, email, budget: selectedValue, message})
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || 'Submission failed');
            }

            setSuccess(data?.message || 'Thank you for contacting us!');
            setFullName("");
            setEmail("");
            setSelectedValue("")
            setMessage("");
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full  flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>


            <main className="w-full  flex  flex-col">
                <section className="flex relative px-[10%] max-sm:pt-20 pt-50 pb-10 flex-col gap-5">
                    <div className="w-full h-full inset-0 absolute">
                        <Image
                            fill
                            src={"/background/pastries.svg"}
                            alt={"#"}
                            className="object-cover opacity-20"
                        />
                    </div>
                    <h1 className="text-8xl z-10 max-sm:text-5xl font-semibold font-clash text-[#4B2E2B]">
                        Get in touch.
                    </h1>

                    {/*<div className="flex font-sans z-10 items-center gap-4">*/}
                    {/*    <Link href={"#"} className="rounded-full text-white drop-shadow-2xl text-sm p-3 px-8 bg-[#4B2E2B]">*/}
                    {/*        Our Menu*/}
                    {/*    </Link>*/}
                    {/*    <Link href={"#"} className="border px-8 py-2 rounded-full text-[#4B2E2B] border-[#4B2E2B]">*/}
                    {/*        View Gallery*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </section>
                <section
                    className="w-full flex px-[10%] max-sm:px-[5%]  justify-center">
                    <div className="grid font-clash gap-y-5 w-full gap-x-[10%] px-5 py-[5%] max-sm:grid-cols-1 md:grid-cols-2">
                        <div className="text-[#4B2E2B] flex flex-col gap-y-1 text-xl">
                            <h2 className="text-6xl max-md:text-5xl font-space tracking-tight">
                                Contact Us.
                            </h2>
                            <h3 className="text-3xl font-medium max-md:text-xl">
                                Talk to our team.
                            </h3>
                            <p className="text-[#333] max-md:text-lg py-5">
                                Book a call with our team, and let us know, how we can help you.</p>
                            <div className="w-full relative">
                                <div className="max-sm:hidden absolute  w-80 aspect-[1248/933]">
                                    <Image
                                        fill
                                        src={"/images/basket-two.png"}
                                        alt={"#"}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className='  w-full items-center flex flex-col gap-y-5'>
                            <form
                                onSubmit={handleSubmit}
                                className="flex w-full my-5 flex-col gap-y-4"
                            >
                                {error && (
                                    <div className="w-[50%] flex max-md:w-[95%] text-red-800 items-center gap-2 rounded p-3">
                                        <span className="border border-[#d4c5a8]/20 rounded-full  bg-red-800/20 p-2"><X /></span> {error}
                                    </div>
                                )}
                                {success && (
                                    <div className="w-[50%] flex max-md:w-[95%] text-green-800 items-center gap-2 rounded p-3">
                                        <span className="border border-[#d4c5a8]/20 rounded-full  bg-green-800/20 p-2"><Check /></span> {success}
                                    </div>
                                )}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    placeholder="Name"
                                    className="p-4 py-6  rounded-xl text-black border border-black placeholder:text-black/40 backdrop-blur-2xl  bg-[#D4C5A8]/5"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="p-4 py-6 text-black border rounded-xl border-black placeholder:text-black/40 backdrop-blur-2xl bg-[#D4C5A8]/5"/>

                                {/*<CustomSelect*/}
                                {/*    options={options}*/}
                                {/*    value={selectedValue}*/}
                                {/*    onChange={setSelectedValue}*/}
                                {/*    placeholder="Please select a project investment range"*/}
                                {/*/>*/}

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder="How can we help?"
                                    className="p-4 max-sm:text-lg text-black border rounded-xl border-black placeholder:text-black/40 backdrop-blur-2xl  bg-[#D4C5A8]/5"/>

                                <button disabled={loading}
                                        className="bg-[#4B2E2B] max-sm:text-sm rounded-xs text-white p-3 text-lg font-medium">
                                    {loading ? 'Sending Message...' : 'Submit'}
                                </button>
                                <p className="text-black">
                                    By clicking “Submit” you agree to {" our "}
                                    <Link href="#" target="_blank" className="underline">TOS</Link>
                                    {' and '}
                                    <Link href="#" target="_blank" className="underline">Privacy Policy</Link>
                                </p>
                            </form>

                        </div>
                    </div>
                    {/*<div className="grid uppercase max-md:grid-cols-1 gap-5 md:col-start-2 grid-cols-3">*/}
                    {/*    <Link href="https://www.linkedin.com/company/qvsestudio" target="_blank"*/}
                    {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                    {/*        <span className="flex gap-4"><Linkedin/> Linkedin</span> <ArrowRight/> </Link>*/}

                    {/*    <Link href="https://www.instagram.com/qvsestudio/" target="_blank"*/}
                    {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                    {/*        <span className="flex gap-4"><Instagram/> Instagram </span> <ArrowRight/> </Link>*/}
                    {/*    <Link href="mailto:hello@qvse.co.za" target="_blank"*/}
                    {/*          className="border flex items-center justify-between bg-[#D4C5A8]/5 gap-5  border-[#D4C5A8]/20 p-5">*/}
                    {/*        <span className="flex gap-4"><Mail /> email </span> <ArrowRight/> </Link>*/}
                    {/*</div>*/}

                </section>

                <section className="w-full grid grid-cols-2 relative px-[10%] bg-white gap-10">
                    <form className="w-full">

                    </form>

                </section>

            </main>
        </div>

    )
}