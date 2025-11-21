"use client"

import {create} from "zustand";
import {CartItem, CartState} from "@/lib/types/Cart";
import {createJSONStorage, persist} from "zustand/middleware/persist";

export const useCartStore = create<CartState>()(
    persist(
        (set, get)=> ({
            cart: null,
            setCart: (cart) => set({cart}),
            updateCartItem: (itemId, updates) => {
                const state = get();
                if (!state.cart) return;

                const updatedItems = state.cart.items.map(item =>
                    item.id === itemId ? { ...item, ...updates } : item
                );

                const quantity = updatedItems.reduce((s, i) => s + i.quantity, 0);
                const total_amount_cents = updatedItems.reduce((s, i) => s + i.total_cents, 0);

                set({
                    cart: {
                        ...state.cart,
                        items: updatedItems,
                        quantity,
                        total_amount_cents,
                    }
                });
            },

            addCartItem: (newItem) => {
                const state = get();
                const cartId = state.cart?.id || "temp-cart";
                const itemId = `item-${Date.now()}`;
                const total_cents = newItem.price_cents * newItem.quantity;

                const cartItem: CartItem = {
                    id: itemId,
                    cart_id: cartId,
                    product_id: newItem.product_id,
                    name: newItem.name,
                    image: newItem.image,
                    price_cents: newItem.price_cents,
                    quantity: newItem.quantity,
                };

                if (!state.cart) {
                    set({
                        cart: {
                            id: cartId,
                            user_id: "anonymous",
                            quantity: newItem.quantity,
                            total_amount_cents: total_cents,
                            items: [cartItem],
                        }
                    });
                    return;
                }

                const exists = state.cart.items.find(
                    i => i.product_id === newItem.product_id
                );

                let updatedItems;

                if (exists) {
                    updatedItems = state.cart.items.map(i =>
                        i.product_id === newItem.product_id
                            ? {
                                ...i,
                                quantity: i.quantity + newItem.quantity,
                                total_cents: i.total_cents + total_cents,
                            }
                            : i
                    );
                } else {
                    updatedItems = [...state.cart.items, cartItem];
                }

                const quantity = updatedItems.reduce((s, i) => s + i.quantity, 0);
                const total_amount_cents = updatedItems.reduce((s, i) => s + i.total_cents, 0);

                set({
                    cart: {
                        ...state.cart,
                        items: updatedItems,
                        quantity,
                        total_amount_cents,
                    }
                });
            },

            removeCartItem: (itemId) => {
                const state = get();
                if (!state.cart) return;

                const updatedItems = state.cart.items.filter(i => i.id !== itemId);
                const quantity = updatedItems.reduce((s, i) => s + i.quantity, 0);
                const total_amount_cents = updatedItems.reduce((s, i) => s + i.total_cents, 0);

                set({
                    cart: {
                        ...state.cart,
                        items: updatedItems,
                        quantity,
                        total_amount_cents,
                    }
                });
            },

            clearCart: () => set({ cart: null }),
        }),
        {
            name: "cart-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
)