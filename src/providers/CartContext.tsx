'use client';
import { ProductInfoShort } from '@/models';
import React, { createContext, useReducer, useContext } from 'react';

export type CartState = {
        items: ProductInfoShort[];
}

export type CartAction = {
        type: 'ADD_ITEM' | 'REMOVE_ITEM';
        payload: ProductInfoShort;
}


type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
    addItemToCart: (item: ProductInfoShort) => void;
    removeItemFromCart: (item: ProductInfoShort) => void;
  };
  
const initialState: CartState = {
    items: [],
    // You can add more states like total price, number of items, etc.
};
export const CartContext = createContext<CartContextType>({
    state: initialState,
    dispatch: () => {},// Empty placeholder function
    addItemToCart: (item: ProductInfoShort) => {},
    removeItemFromCart: (item: ProductInfoShort) => {},
  });
  


const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            // Logic to add item
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'REMOVE_ITEM':
            // Logic to remove item
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
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

    return (
        <CartContext.Provider value={{ state, dispatch, addItemToCart, removeItemFromCart }}>
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