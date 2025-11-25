import React from "react";
import { Send } from "lucide-react";

export function NewsletterSignup() {
    return (
        <div className="bg-[#d9c5b4] w-[30%] max-sm:w-full gap-y-2  items-start max-sm:items-center font-clash py-12 flex flex-col  text-center">
            <h2 className="text-xl max-sm:text-center text-[#4B2E2B]">Join our newsletter</h2>
            <p className=" text-left max-sm:text-center  text-[#4B2E2B]">Stay up-to-date for the latest ingredients, and maybe some secret family recipes</p>
            <form className="flex bg-white rounded-md items-center w-full max-w-xl">
                <input
                    type="email"
                    placeholder="email"
                    className="flex-1 text-[#4B2E2B] rounded-r-xl p-2 placeholder:text-gray-600 outline-none"
                />

                <button className="bg-[#4B2E2B] p-3 rounded-md -ml-4 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                </button>
            </form>
        </div>
    );
}
