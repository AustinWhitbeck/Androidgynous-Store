'use client';
import { ProductInfoShort } from "@/models";
import {  useCart } from "@/providers/CartContext";
import { Box, Stack, Typography } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const ProductPreviewCard = ({ name, price, productDetailLink, id}: ProductInfoShort) => {
  const { state, dispatch, addItemToCart } = useCart();
  console.log('state', state);


  // function addItemToCart(item: ProductInfoShort) {
  //   dispatch({ type: 'ADD_ITEM', payload: item });
  // }

  function removeItemFromCart(item: ProductInfoShort) {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  }
  return (
        <Stack sx={{ width: '100px', height: '200px'}}>
            <Typography>{name}</Typography>
            <Link href={productDetailLink} passHref >
            <Box sx={{ height: '100px', width: '60px'}}>
                <Box sx={{ width: '100%', height: '100%', backgroundColor: 'gray'}}>
                    Placeholder Image
                </Box>
            {/* <Image href={image} alt={altImageDescription} /> */}
            </Box>
            </Link>
            <Typography variant="body1">Price: {price}</Typography>
            <Stack direction="row">
                <button onClick={() => addItemToCart({ name, price, productDetailLink, id})}>Add to Cart</button>
              </Stack>
        </Stack>
  )
}

export default ProductPreviewCard