"use client"
import { Button } from "@/components/ui/button"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {ShoppingCart} from "lucide-react";

export function CartSheet() {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <ShoppingCart size={20} strokeWidth={1.5}/>
            </SheetTrigger>
            <SheetContent className="bg-[#D9C4B3]">
                <SheetHeader>
                    <SheetTitle>My Cart</SheetTitle>
                    <SheetDescription>
                        Make changes to your cart here.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        {/*<Label htmlFor="sheet-demo-name">Name</Label>*/}
                        {/*<Input id="sheet-demo-name" defaultValue="Pedro Duarte" />*/}
                    </div>
                    <div className="grid gap-3">

                    </div>
                </div>
                <SheetFooter className={"font-clash"}>
                    <Button  className="bg-[#4B2E2B]" type="submit">Proceed to checkout</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
