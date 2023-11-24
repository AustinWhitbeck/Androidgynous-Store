
/*

Functionality TODO:

1. cart state data shape
2. add to cart
3. remove from cart
4. call cart to get items

*/

import { ProductInfoShort } from "@/models";
import { createContext } from "react";

export type CartState = {
    items: ProductInfoShort[];
}

const defaultCartValue: CartState = {
    items: [],
};

// const cartReducer = ({state, action}: { state: CartState, action: string}) {
//     switch(action) {
//         case 'ADD_ITEM':
//             retun
//     }
// } 

const CartContext = createContext(defaultCartValue);

const CartProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        CartContext
        {children}
    </>
  )
}

export default CartProvider;