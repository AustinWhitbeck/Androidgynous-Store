'use server';
import { GetProductsResponse } from "@/models";

export async function getAllTShirts() {
    const response = await fetch(`${process.env.PRINTIFY_BASE_URL}shops/${process.env.PRINTIFY_SHOP_ID}/products.json?tag=${encodeURIComponent('T-Shirt')}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.PRINTIFY_API_KEY}`,
            "Content-Type": "application/json",
        }
    })
    if (!response.ok) {
        throw new Error(`error in getAllProducts, status text: ${response.statusText}`);
    };

    const data = await response.json() as GetProductsResponse;
    console.log('getAllProducts data',data);
    return data;
}