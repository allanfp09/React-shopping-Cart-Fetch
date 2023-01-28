import { createContext, useReducer, useState } from 'react';

const CartContext = createContext({});

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.value.id
            );

            const item = state.items[itemIndex];

            let totalAmount;

            let updatedItems = [...state.items];

            if (item) {
                const updatedItem = {
                    ...item,
                    amount: item.amount + 1,
                };
                updatedItems[itemIndex] = updatedItem;

                totalAmount =
                    action.value.amount * action.value.price +
                    state.totalAmount;
                return { items: updatedItems, totalAmount: totalAmount };
            } else {
                return {
                    items: state.items.concat(action.value),
                    totalAmount: action.value.price + state.totalAmount,
                };
            }

        default:
            return { items: [] };
    }
};

export const CartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [cartState, dispatchCart] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
    });

    const addToCart = (item) => {
        dispatchCart({ type: 'add', value: item });
    };

    const isOpenHandler = (value) => {
        setIsOpen(value);
    };

    const cartValues = {
        cartState,
        addToCart,
        isOpen,
        isOpenHandler,
    };
    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
