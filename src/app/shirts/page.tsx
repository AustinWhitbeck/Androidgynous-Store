import ProductPreviewCard from "@/components/ProductPreviewCard";
import { ProductInfoShort } from "@/models";
import { Button, Grid, Stack, Typography } from "@mui/material"


import { Metadata } from "next";
import { CheckCartButton } from "./client-components";

export const metadata: Metadata = {
    title: 'Shirts',
    description: 'All Shirts Available',
};

const shirtDetailURL = '/shirts/details/';

const mockShirtProducts: ProductInfoShort[] = [
    {
        name: 'Shirt 1',
        id: 1,
        price: 22.99,
        productDetailLink: `${shirtDetailURL}1`,
    },
    {
        name: 'Shirt 2',
        id: 2,
        price: 22.99,
        productDetailLink: `${shirtDetailURL}2`,
    },
    {
        name: 'Shirt 3',
        id: 3,
        price: 22.99,
        productDetailLink: `${shirtDetailURL}3`,
    },
    {
        name: 'Shirt 4',
        id: 4,
        price: 22.99,
        productDetailLink: `${shirtDetailURL}4`,
    },
    {
        name: 'Shirt 5',
        id: 5,
        price: 22.99,
        productDetailLink: `${shirtDetailURL}5`,
    },
]

const ShirtsPage = () => {

  return (
    <Stack>
        <Typography variant="h1">All Shirts</Typography>
        <CheckCartButton />
        <Grid container xs={12} sx={{ padding: '10px'}}>
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