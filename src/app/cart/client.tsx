'use client';

import { useCart } from "@/providers/CartContext";
import { CartItem } from "./client-components";
import { Stack } from "@mui/material";

const CartClientPage = () => {
    const { state } = useCart();

    const cartItemsRender = () => {
        if (state.items.length === 0) {
            return <p>Cart is empty</p>
        }
        return state.items.map((item, index) => (
            <CartItem key={`${index}-${item.id}`} {...item} />
        ));
    };
  return (
    <Stack sx={{ overflowY: 'scroll'}}>
        {cartItemsRender()}
    </Stack>
  )
}

export default CartClientPage