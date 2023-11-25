'use client';

import { ProductInfoShort } from "@/models";
import { Box } from "@mui/material";

export const CartItem = ({ name, price, productDetailLink, id}: ProductInfoShort) => {
    return (
        <Box sx={{ width: '100%', border: 'solid 2px black', borderRadius: '5px'}}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{productDetailLink}</p>
            <p>{id}</p>
        </Box>
    )
    }
