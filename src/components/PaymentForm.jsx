import { useContext, useRef } from 'react';
import CartContext from '../context/cart-context';

const PaymentForm = () => {
    const { cartState } = useContext(CartContext);
    const userName = useRef();
    const userLastName = useRef();
    const userAdreess = useRef();

    const onSubmitOrder = (event) => {
        // event.preventDefaul();
        fetch('https://react-swap-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    name: userName.current.value,
                    lastName: userLastName.current.value,
                    adreess: userAdreess.current.value,
                },
                orderedItems: cartState.items,
            }),
        });
    };

    const onConfirmOrder = () => {
        onSubmitOrder();
    };
    return (
        <>
            <div>
                <div className="mb-3 font-semibold">
                    <h2>Order information</h2>
                </div>
                <form
                    onSubmit={onSubmitOrder}
                    className="space-y-3"
                    method="post"
                >
                    <div>
                        <input
                            className="border border-gray-400 rounded-2xl w-full p-1"
                            type="text"
                            placeholder="Name"
                            ref={userName}
                        />
                    </div>
                    <div>
                        <input
                            className="border border-gray-400 rounded-2xl w-full p-1"
                            type="text"
                            placeholder="LastName"
                            ref={userLastName}
                        />
                    </div>
                    <div>
                        <input
                            className="border border-gray-400 rounded-2xl w-full p-1"
                            type="text"
                            placeholder="Adreess"
                            ref={userAdreess}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={onConfirmOrder}
                            className="bg-green-400 rounded-2xl w-20 p-2"
                        >
                            Pay
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PaymentForm;
