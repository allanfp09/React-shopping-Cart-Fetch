import React, { useContext, useState } from 'react';
import CartContext from '../context/cart-context';

const FoodList = ({ id, name, price }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <li
            className="flex justify-between items-center border border-gray-400 p-3
        "
        >
            <div className="flex space-x-9">
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <div>
                <button
                    className="bg-green-300 rounded-md text-[15px] p-1"
                    onClick={() => {
                        addToCart({
                            id: id,
                            name: name,
                            price: price,
                            amount: 1,
                        });
                    }}
                >
                    Add me
                </button>
            </div>
        </li>
    );
};

export default FoodList;
