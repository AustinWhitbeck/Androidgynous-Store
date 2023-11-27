import ProductPreviewCard from "@/components/ProductPreviewCard";
import { ProductInfoShort } from "@/models";
import { Grid, Stack, Typography } from "@mui/material"
import { Metadata } from "next";
import { getAllTShirts } from "./actions";
import PrintifyProductPreviewCard from "@/components/PrintifyProductPreviewCard";

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

const ShirtsPage = async () => {

  const tShirts = await getAllTShirts();
  console.log('tShirts', tShirts);

  return (
    <Stack>
        <Typography variant="h1">All Shirts</Typography>
        {/* <Grid container sx={{ padding: '10px'}}>
            {mockShirtProducts.map((mockShirt) => {
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <ProductPreviewCard {...mockShirt} />
                    </Grid>
                )
            })}
        </Grid> */}

        <Grid container sx={{ padding: '10px'}}>
            {tShirts.data.map((shirt) => {
                return(
                    <Grid item xs={12} sm={6} md={4} key={`${shirt.id}`}>
                        <PrintifyProductPreviewCard {...shirt} />
                    </Grid>
                )
            })}
        </Grid>
    </Stack>
  )
}

export default ShirtsPage;