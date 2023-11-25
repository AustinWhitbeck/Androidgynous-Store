'use client';

import { CartProduct, useCart } from "@/providers/CartContext";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export const CartItem = ({ name, price, productDetailLink, id, quantity}: CartProduct) => {
    const { addItemToCart, decrementItemFromCart, removeItemFromCart } = useCart();

    return (
        <Box sx={{ width: '100%', border: 'solid 2px black', borderRadius: '5px'}}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{productDetailLink}</p>
            <p>ID: {id}</p>
            <p>Quantity: {quantity}</p>
            <Link href={productDetailLink} passHref >Details</Link>
            <Button onClick={() => removeItemFromCart({ name, price, productDetailLink, id})}>Remove from Cart</Button>
            <Button onClick={() => addItemToCart({ name, price, productDetailLink, id})}>Increment to Cart</Button>
            <Button onClick={() => decrementItemFromCart({ name, price, productDetailLink, id})}>Decrement from Cart</Button>
        </Box>
    )
    }
