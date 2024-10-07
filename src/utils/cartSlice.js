import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            
            if (existingItem) {
              // If the item already exists in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // Otherwise, add the item to the cart with quantity = 1
                state.items.push({
                    ...action.payload,  // This contains item details like id, name, price, etc.
                    quantity: 1,        // Add a quantity field to track the number of items
                });
            }
        },
        deleteItem : (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        removeItem: (state, action) => {
            // Now action.payload is just the id, not an object
            const existingItem = state.items.find(item => item.id === action.payload);

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },

        clearCart : (state) => {
            state.items.length = 0;   
        },
    }
})

export const selectTotalPrice = (state) => {
    return state.cart.items.reduce((total, item) => {
        const itemPrice = item.defaultPrice / 100 || item.price / 100;
        return total + itemPrice * item.quantity;
    }, 0);
};

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer