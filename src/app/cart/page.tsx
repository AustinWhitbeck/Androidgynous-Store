import { Box, Typography } from "@mui/material";
import { Metadata } from "next";
import CartClientPage from "./client";

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Shopping Cart',
};

const CartPage = () => {
  return (
    <>
      <Typography variant="h1">Cart</Typography>
      <Box sx={{ padding: '20px'}}>
        <CartClientPage />
      </Box>
    </>
  )
}

export default CartPage;