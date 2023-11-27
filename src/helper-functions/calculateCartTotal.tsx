import { CartProduct } from "@/providers/CartContext";

export default function calculateCartTotal(items: CartProduct[]) {
    const itemTotal = items.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
    // Total the cart to 2 decimal places
    const formattedTotal = Math.round(itemTotal * 100) / 100;
    const numberOfItems = items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);
    return {
        totalPrice: formattedTotal,
        numberOfItems
    };
}