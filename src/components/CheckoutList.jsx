import React, { useContext } from 'react';
import CartContext from '../context/cart-context';

const CheckoutList = () => {
    const { cartState } = useContext(CartContext);

    return (
        <>
            {cartState.items.map((food) => {
                return (
                    <div
                        key={food.id}
                        className="flex justify-between items-center mb-4"
                    >
                        <p>{food.name}</p>
                        <p>x{food.amount}</p>
                        <p>${food.price}</p>
                    </div>
                );
            })}
        </>
    );
};

export default CheckoutList;
