'use client';

import { useCart } from "@/providers/CartContext";

export const CheckCartButton = () => {
    const { state, dispatch} = useCart();
    function checkCart() {
        console.log('cart', state);
    }
    return (
        <button onClick={checkCart}>Check Cart</button>
    )
}