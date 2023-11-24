import { ProductInfoShort } from "@/models";
import { Box, Stack, Typography } from "@mui/material";
// import Image from "next/image";
import Link from "next/link";

const ProductPreviewCard = ({ name, price, productDetailLink}: ProductInfoShort) => {
  return (
    <Link href={productDetailLink} passHref >
        <Stack sx={{ width: '100px', height: '120px'}}>
            <Typography>{name}</Typography>
            <Box sx={{ height: '100px', width: '60px'}}>
                <Box sx={{ width: '100%', height: '100%', backgroundColor: 'gray'}}>
                    Placeholder Image
                </Box>
            {/* <Image href={image} alt={altImageDescription} /> */}
            </Box>
            <Typography variant="body1">Price: {price}</Typography>
        </Stack>
    </Link>
  )
}

export default ProductPreviewCard