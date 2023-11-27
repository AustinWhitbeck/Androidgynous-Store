'use client';

import { useCart } from "@/providers/CartContext";
import { CartItem } from "./client-components";
import { Box, Button, Stack, Typography } from "@mui/material";
import calculateCartTotal from "@/helper-functions/calculateCartTotal";
import Link from "next/link";
import GeneralContainer from "@/components/GeneralContainer";

const CartClientPage = () => {
    const { state } = useCart();
    const cartTotal = calculateCartTotal(state.items);

    const cartItemsRender = () => {
        if (state.items.length === 0) {
            return (
            <GeneralContainer>
                <Stack>
                    <Typography variant="h4">Cart is empty</Typography>
                    <Typography variant="subtitle1">Check out some of our Inventory!</Typography>
                    <Stack>
                        <Link href="/shirts" passHref>
                            <Typography sx={{ backgroundColor: 'gray'}}>Shirts</Typography>
                        </Link>
                    </Stack>
                </Stack>
            </GeneralContainer>
            )
        }
        return (
        <>
            {state.items.map((item, index) => (
                <CartItem key={`${index}-${item.id}`} {...item} />
            ))}
            <Box>
                <Typography>{`Subtotal (${cartTotal.numberOfItems} items): ${cartTotal.totalPrice}`}</Typography>
            </Box>
        </>
        );
    };
  return (
    <Stack sx={{ overflowY: 'scroll'}}>
        {cartItemsRender()}
    </Stack>
  )
}

export default CartClientPage