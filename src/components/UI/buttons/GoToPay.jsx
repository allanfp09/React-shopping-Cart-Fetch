import React from 'react';

const GoToPay = ({ onToPay }) => {
    return (
        <>
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        onToPay();
                    }}
                    className="flex justify-center text-gray-400 hover:text-green-500"
                >
                    <p>Go to payment</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default GoToPay;
