import React from "react";

export default function AddToCart({ setIsOpenCart }) {
    return (
        <button
            type="submit"
            onClick={() => setIsOpenCart(true)}
            className="capitalize w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
        >
            Add to bag
        </button>
    );
}
