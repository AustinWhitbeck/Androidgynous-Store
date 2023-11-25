import { Typography } from "@mui/material";
import { Metadata } from "next";
import CartClientPage from "./client";

export const metadata: Metadata = {
    title: 'Cart',
    description: 'Shopping Cart',
};

const CartPage = () => {
  return (
    <>
        <Typography variant="h1"> WIP Shopping Cart</Typography>
        <CartClientPage />
    </>
  )
}

export default CartPage;