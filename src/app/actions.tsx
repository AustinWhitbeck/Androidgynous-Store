'use server';

import { GetProductsResponse } from "@/models";

const PRINTIFY_URL = process.env.PRINTIFY_BASE_URL;
const SHOP_ID = process.env.PRINTIFY_SHOP_ID;

export async function getAllShops() {
    console.log('printify key', process.env.PRINTIFY_API_KEY);
    const response = await fetch(`${PRINTIFY_URL}shops.json`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.PRINTIFY_API_KEY}`,
            "Content-Type": "application/json",
        }
    })
    if (!response.ok) {
        throw new Error(`error in testPrintifyCall, status text: ${response.statusText}`);
    };

    const data = await response.json();
    console.log('testPrintifyCall data',data);
}

// GET products

export async function getAllProducts() {
    const response = await fetch(`${PRINTIFY_URL}shops/${SHOP_ID}/products.json`, {
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
}