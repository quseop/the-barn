"use client";

import { ReactNode, useEffect, useState } from "react";
import {useCartStore} from "@/stores/cart/useCartStore";


export default function CartProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);

    // Ensure Zustand rehydration completes before rendering UI
    useEffect(() => {
        const unsub = useCartStore.persist.onFinishHydration(() => {
            setReady(true);
        });

        // In case hydration already finished
        if (!useCartStore.persist.hasHydrated()) {
            useCartStore.persist.rehydrate();
        } else {
            setReady(true);
        }

        return () => unsub();
    }, []);

    if (!ready) return null; // or loading skeleton

    return <>{children}</>;
}
