import React from "react";

export default function FooterMenu() {
    return (
        <footer className="w-full items-center  flex gap-y-5 flex-col bg-[#d9c5b4]  font-clash">
            <div className="flex text-center self-start max-sm:flex-col max-sm:items-center w-full items-start max-sm:gap-5 gap-20 border-b border-[#4B2E2B]/50 pb-10  text-[#4B2E2B]">
                {/* Location */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Location</h3>
                    <ul className="space-y-1">
                        <li>Directions</li>
                        <li>Parking info</li>
                        <li>Hours</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
                    <ul className="space-y-1">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                        <li>Careers</li>
                    </ul>
                </div>

                {/* Coffee Details */}
                {/*<div>*/}
                {/*    <h3 className="font-semibold text-xl mb-3">Coffee Details</h3>*/}
                {/*    <ul className="space-y-1">*/}
                {/*        <li>Esp. Blend Info</li>*/}
                {/*        <li>Flavour Notes</li>*/}
                {/*        <li>Roasting Days</li>*/}
                {/*        <li>Origin Notes</li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Services</h3>
                    <ul className="space-y-1">
                        <li>Catering</li>
                        <li>Wholesale</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>

                {/* Account */}
                {/*<div>*/}
                {/*    <h3 className="font-semibold text-xl mb-3">Account</h3>*/}
                {/*    <ul className="space-y-1">*/}
                {/*        <li>Login</li>*/}
                {/*        <li>Loyalty Programs</li>*/}
                {/*        <li>Subscription</li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                {/* Legal */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Legal</h3>
                    <ul className="space-y-1">
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
            </div>
            <p className="flex gap-5 font-clash text-[#4B2E2B]"> Sustainability     <span>•</span>     Payment Methods     <span>•</span>     Site Map </p>
        </footer>
    );
}
