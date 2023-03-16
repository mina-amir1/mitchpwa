import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ }) {
    return (
        <div className="p-8 mx-auto bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="pb-10">
                    <h1 className="text-4xl font-semibold">Shoping Cart</h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <div className="pt-6 border-t border-black-300">
                            {/* Cart Item */}
                            <div className="flex justify-between items-start mb-6 pb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 w-48 h-48 flex items-center justify-center rounded-md mr-5">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="md:text-md text-base font-medium text-gray-900">Product -1</span>
                                        <span className="text-xs font-light text-gray-400 flex my-1">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center ml-auto">
                                    <div className="pr-8 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex justify-between items-start mb-6 pb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 w-48 h-48 flex items-center justify-center rounded-md mr-5">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="md:text-md text-base font-medium text-gray-900">Product -1</span>
                                        <span className="text-xs font-light text-gray-400 flex my-1">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center ml-auto">
                                    <div className="pr-8 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex justify-between items-start mb-6 pb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 w-48 h-48 flex items-center justify-center rounded-md mr-5">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="md:text-md text-base font-medium text-gray-900">Product -1</span>
                                        <span className="text-xs font-light text-gray-400 flex my-1">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center ml-auto">
                                    <div className="pr-8 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            {/* Cart Item */}
                            <div className="flex justify-between items-start mb-6 pb-6 border-b border-black-300">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 w-48 h-48 flex items-center justify-center rounded-md mr-5">
                                        <img src="https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-12/csm-220-web-1.jpg" className="max-w-[80%] max-h-[80%]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="md:text-md text-base font-medium text-gray-900">Product -1</span>
                                        <span className="text-xs font-light text-gray-400 flex my-1">
                                            <span>Black</span>
                                            <span className="w-px mx-3 bg-gray-300"></span>
                                            <span>Large</span>
                                        </span>
                                        <span className="text-sm font-light text-slate-400">Categories-1</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center ml-auto">
                                    <div className="pr-8 flex">
                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <MinusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                        <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-xs mx-2 text-center text-gray-600" defaultValue="1" />

                                        <button
                                            type="button"
                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500 cursor-pointer"
                                        >
                                            <PlusIcon className="h-4 w-4" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="pr-8">
                                        <span className="text-sm font-medium">$10.50</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">remove item</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 sm:col-span-1 pl-5">
                        <div className="bg-gray-100 p-5">
                            <h2 className="text-xl capitalize font-semibold">Order summary</h2>
                            <div className="flex flex-col">
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Subtotal</span>
                                    <span className="text-gray-600">99.00 EGP</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Shipping estimate</span>
                                    <span className="text-gray-600">25.00 EGP</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-black-300">
                                    <span className="font-light text-gray-600">Tax estimate</span>
                                    <span className="text-gray-600">10.00 EGP</span>
                                </div>
                                <div className="flex justify-between py-5">
                                    <span className="font-bold font-lg text-gray-900">Order Total</span>
                                    <span className="font-bold text-gray-600">10.00 EGP</span>
                                </div>
                                <Link className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-lg text-center text-white hover:bg-indigo-500">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
