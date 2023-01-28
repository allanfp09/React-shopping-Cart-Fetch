import React, { useContext, useState } from 'react';
import CartContext from '../context/cart-context';
import CheckoutList from './CheckoutList';
import PaymentForm from './PaymentForm';
import GoToPay from './UI/buttons/GoToPay';

const Checkout = () => {
    const [toPay, setToPay] = useState(false);
    const { cartState, isOpenHandler } = useContext(CartContext);

    const payBtnHandler = () => {
        setToPay(true);
    };

    return (
        <>
            <div className="absolute top-[77px] left-[50px] bg-white border border-gray-400 rounded-lg p-5 w-[80%]">
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            isOpenHandler(false);
                        }}
                        className="text-[20px] text-red-500"
                    >
                        x
                    </button>
                </div>
                <h1 className="text-[25px] font-bold py-1 mb-2">Checkout</h1>
                {!toPay && (
                    <div>
                        {cartState.items.length === 0 && (
                            <p>No items in cart yet</p>
                        )}
                        {cartState.items.length > 0 && <CheckoutList />}
                        <div className="font-semibold py-5">
                            <p>Total:{cartState.totalAmount}</p>
                        </div>
                        {cartState.items.length > 0 && (
                            <GoToPay onToPay={payBtnHandler} />
                        )}
                    </div>
                )}
                {toPay && <PaymentForm />}
            </div>
        </>
    );
};

export default Checkout;
