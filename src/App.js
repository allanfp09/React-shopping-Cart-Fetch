import { useContext } from 'react';
import { createPortal } from 'react-dom';
import Checkout from './components/Checkout';
import Food from './components/Food';
import CartContext from './context/cart-context';

function App() {
    const { cartState, isOpen, isOpenHandler } = useContext(CartContext);

    const cartModal = createPortal(
        <Checkout />,
        document.getElementById('cart-modal')
    );
    return (
        <>
            <div className="max-w-[300px] md:max-w-[300px] mx-auto">
                <div className="flex justify-between mt-6">
                    <h1 className="font-bold text-green-700">FOODY</h1>
                    <button
                        className="flex space-x-2 bg-blue-500 text-white font-semibold rounded-md p-1"
                        onClick={() => {
                            isOpenHandler(true);
                        }}
                    >
                        <p>Cart</p>
                        <p>{cartState.items.length}</p>
                    </button>
                </div>
                <Food />
                {isOpen && cartModal}
            </div>
        </>
    );
}

export default App;
