'use client';
import { ProductInfoShort } from '@/models';
import React, { createContext, useReducer, useContext } from 'react';

export type CartProduct = ProductInfoShort & {
    quantity: number;
}

export type CartState = {
        items: CartProduct[];
}

export type CartAction = {
        type: 'ADD_ITEM' | 'REMOVE_ITEM' | 'DECREMENT_ITEM' | 'EMPTY_CART';
        payload: ProductInfoShort;
}


type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
    addItemToCart: (item: ProductInfoShort) => void;
    decrementItemFromCart: (item: ProductInfoShort) => void;
    removeItemFromCart: (item: ProductInfoShort) => void;
    emptyCart: () => void;
  };
  
const initialState: CartState = {
    items: [],
    // You can add more states like total price, number of items, etc.
};
export const CartContext = createContext<CartContextType>({
    state: initialState,
    dispatch: () => {},// Empty placeholder function
    addItemToCart: (item: ProductInfoShort) => {},
    decrementItemFromCart: (item: ProductInfoShort) => {},
    removeItemFromCart: (item: ProductInfoShort) => {},
    emptyCart: () => {},
  });
  


const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Logic to add item

            // Work Flow
            // 1. Check if an item with the same ID is already in the cart
            // 2. If it is, increment the quantity by 1
            // 3. If not, add the item to the cart

            // 1. Check if an item with the same ID is already in the cart
            // returns index if found and returns -1 if it's not found.
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (itemIndex === -1) {
                // 2. if it's not in the cart, create new entry
                const uniqueNewItem = {
                    ...action.payload,
                    quantity: 1,
                }
                return {
                    ...state,
                    items: [...state.items, uniqueNewItem],
                };
            } else {
                // 3. if it's in the cart already, increment quantity by 1
                const updatedItems = [...state.items];
                const updatedItem = {
                    ...updatedItems[itemIndex],
                    quantity: updatedItems[itemIndex].quantity + 1,
                };
                updatedItems[itemIndex] = updatedItem;
                return {
                    ...state,
                    items: updatedItems,
                };
            }
               
        case 'DECREMENT_ITEM':
            // Logic to decrement item

            // Work Flow
            // 1. Check if an item with the same ID is already in the cart
            // 2. If it is, decrement the quantity by 1
            // 3. If not, return the current state

            // 1. Check if an item with the same ID is already in the cart
            const itemIndexDecrement = state.items.findIndex(item => item.id === action.payload.id);

            // if item is not in cart, just return the current state
            if (itemIndexDecrement === -1) {
                return state;
            };
                // 2. If it is, decrement the quantity by 1
                const updatedItems = [...state.items];
                // reduce quantity by 1
                const updatedItem = {
                    ...updatedItems[itemIndexDecrement],
                    quantity: updatedItems[itemIndexDecrement].quantity - 1,
                };
                // if quantity is 0, remove item from cart
                if (updatedItem.quantity === 0) {
                    updatedItems.splice(itemIndexDecrement, 1);
                }
                // if quantity is greater than 0, update item in cart
                if (updatedItem.quantity > 0) {
                    updatedItems[itemIndexDecrement] = updatedItem;
                }
                return {
                    ...state,
                    items: updatedItems,
                };

        case 'REMOVE_ITEM':
            // Logic to remove all of an item
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case 'EMPTY_CART':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function addItemToCart(item: ProductInfoShort) {
        dispatch({ type: 'ADD_ITEM', payload: item });
      }
    
      function removeItemFromCart(item: ProductInfoShort) {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
      }
      function decrementItemFromCart(item: ProductInfoShort) {
        dispatch({ type: 'DECREMENT_ITEM', payload: item });
      }
      function emptyCart() {
        dispatch({ type: 'EMPTY_CART', payload: {     name: '',
            price: 0,
            id: 0,
            productDetailLink: ''} });
      }

    return (
        <CartContext.Provider value={{ state, dispatch, addItemToCart, decrementItemFromCart, removeItemFromCart, emptyCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);

/*
Workflow Example
Let's say you want to add an item to the cart:

Dispatch an Action:

You call dispatch({ type: 'ADD_ITEM', payload: newItem }) from a component.
Reducer Function Executes:

React calls cartReducer with the current state and the action you dispatched.
The reducer sees that the action type is 'ADD_ITEM', and it adds newItem to the array of items in the state.
State Update:

The reducer returns the new state.
React updates the state and re-renders any components using this state.
*/

/*
In Your Context
Reducer (cartReducer):

This function handles different actions like 'ADD_ITEM' or 'REMOVE_ITEM'.
For each action type, it specifies how the state should be updated.
The returned value becomes the new state.
Initial State (initialState):

This defines the initial structure and values of your cart's state, like an empty array of items.
Using useReducer:

When you call useReducer(cartReducer, initialState), React keeps track of the state internally and provides you with the dispatch function.
state reflects the current state of the cart.
dispatch is used to trigger updates to the state. When you dispatch an action, React runs the reducer function with the current state and the provided action.
*/