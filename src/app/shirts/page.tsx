import ProductPreviewCard from "@/components/ProductPreviewCard";
import { ProductInfoShort } from "@/models";
import { Grid, Stack, Typography } from "@mui/material"


import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shirts',
    description: 'All Shirts Available',
};

const shirtDetailURL = '/shirts/details/';

const mockShirtProducts: ProductInfoShort[] = [
    {
        name: 'Shirt 1',
        price: 22.99,
        productDetailLink: `${shirtDetailURL}1`,
    },
    {
        name: 'Shirt 2',
        price: 22.99,
        productDetailLink: `${shirtDetailURL}2`,
    },
    {
        name: 'Shirt 3',
        price: 22.99,
        productDetailLink: `${shirtDetailURL}3`,
    },
    {
        name: 'Shirt 4',
        price: 22.99,
        productDetailLink: `${shirtDetailURL}4`,
    },
    {
        name: 'Shirt 5',
        price: 22.99,
        productDetailLink: `${shirtDetailURL}5`,
    },
]

const ShirtsPage = () => {
  return (
    <Stack>
        <Typography variant="h1">All Shirts</Typography>
        <Grid container xs={12}>
            {mockShirtProducts.map((mockShirt) => {
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductPreviewCard {...mockShirt} />
                    </Grid>
                )
            })}
        </Grid>
    </Stack>
  )
}

export default ShirtsPage;