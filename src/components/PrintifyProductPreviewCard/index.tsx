'use client';
import { PrintifyProduct, ProductInfoShort } from "@/models";
import {  useCart } from "@/providers/CartContext";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const PrintifyProductPreviewCard = (product: PrintifyProduct) => {
    const { title, description, id, images} = product;
    console.log('images', images);
//   const { addItemToCart } = useCart();

    const defaultImage = images.find((image) => image.is_default === true) ?? { src: 'No Default Image' };

  return (
        <Stack sx={{ width: '200px', height: '200px'}}>
            <Typography>{title}</Typography>
            {/* <Link href={`/shirts/details/${id}`} passHref > */}
            <Box sx={{ height: '100px', width: '60px'}}>
                <Box sx={{ width: '100%', height: '100%', backgroundColor: 'gray'}}>
                    Placeholder Image
                </Box>
            <Image src={defaultImage.src} alt={title} width={200} height={300} />
            </Box>
            {/* </Link> */}
            {/* <Typography variant="body1">{description}</Typography> */}
            <Typography variant="body1">Price:</Typography>
            <Stack direction="row">
                {/* <button onClick={() => addItemToCart({ name, price, productDetailLink, id})}>Add to Cart</button> */}
              </Stack>
        </Stack>
  )
}

export default PrintifyProductPreviewCard;