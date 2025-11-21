import {CartItem} from "@/lib/types/CartItem";

export type Cart = {
    id: string,
    user_id: string,
    items: CartItem[],
    total_amount_cents: number,
    quantity: number,
}

export type CartItem = {
    id: string,
    product_id: string,
    cart_id: string,
    quantity: number,
    price_cents: number,
    image: string,
    name: string,
}

export interface CartState {
    cart: Cart | null,
    setCart: (cart: Cart) => void,
    updateCartItem: (itemId: string, updates: Partial<CartItem>) => void;
    addCartItem: (item: {
        image: string;
        product_id: string;
        name: string;
        price_cents: number;
        quantity: number;
    }) => void;
    removeCartItem: (itemId: string) => void;
    clearCart: () => void;
}