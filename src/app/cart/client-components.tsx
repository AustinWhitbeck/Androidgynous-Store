'use client';

import { CartProduct, useCart } from "@/providers/CartContext";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import Link from "next/link";

export const CartItem = ({ name, price, productDetailLink, id, quantity}: CartProduct) => {
    const { addItemToCart, decrementItemFromCart, removeItemFromCart } = useCart();

    return (
        <Box sx={{ width: '100%', border: 'solid 2px black', borderRadius: '5px'}}>
            <p>{name}</p>
            <p>{price}</p>
            <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center'}}>
                <IconButton onClick={() => addItemToCart({ name, price, productDetailLink, id})}>
                    <AddCircleIcon />
                </IconButton>
                <Typography variant="body1" sx={{ minWidth: '30px', textAlign: 'center'}}>{quantity}</Typography>
                <IconButton onClick={() => decrementItemFromCart({ name, price, productDetailLink, id})}>
                    <RemoveCircleIcon />
                </IconButton>
                <IconButton onClick={() => removeItemFromCart({ name, price, productDetailLink, id})}>
                    <DeleteIcon />
                </IconButton>

            </Box>
            <Link href={productDetailLink} passHref >Details</Link>
        </Box>
    )
    }
