import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../pages/Home';

export interface CartItem extends Product {
    quantity: number;
    }

export interface CartState {
    isOpen: boolean;
    items: CartItem[];
    }

    const initialState: CartState = {
    isOpen: false,
    items: [],
    };

    const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        open: (state) => {
        state.isOpen = true;
        },
        close: (state) => {
        state.isOpen = false;
        },
        add: (state, action: PayloadAction<CartItem>) => {
        const existingItem = state.items.find((item) => item.id === action.payload.id);
        if (existingItem) {
            existingItem.quantity += action.payload.quantity;
        } else {
            state.items.push(action.payload);
        }
        },
        remove: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                const item = state.items[index];
                if (item.quantity > 1) {
                    item.quantity -= 1; 
                } else {
                    state.items.splice(index, 1); 
                }
            }
        },
        clear:(state) => {
            state.items = []
        }
    },
    });

    export const { open, close, add, remove, clear } = cartSlice.actions;

    export default cartSlice.reducer;