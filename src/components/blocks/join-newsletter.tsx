import React from "react";
import { Send } from "lucide-react";

export function NewsletterSignup() {
    return (
        <div className="bg-[#d9c5b4] w-[30%] gap-y-2 items-end font-clash py-12 flex flex-col  text-center">
            <h2 className="text-xl text-[#4B2E2B]">Join our newsletter</h2>

            <div className="flex items-center w-[90%] max-w-xl">
                <input
                    type="email"
                    placeholder="email"
                    className="flex-1 bg-white rounded-l-2xl rounded-r-xl p-4 text-gray-600 outline-none"
                />

                <button className="bg-[#4c322c] p-4 rounded-2xl -ml-4 flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    );
}
