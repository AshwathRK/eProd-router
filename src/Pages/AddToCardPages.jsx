import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function AddToCardPages(probs) {

    const deliveryPrices = [
        {
            'plan': 'Standard Delivery',
            'price': 0
        },
        {
            'plan': 'Fast Delivery',
            'price': 100
        },
        {
            'plan': 'Super Fast Delivery',
            'price': 200
        }

    ]

    const [allProdectTotal, setAllProdectTotal] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState("Standard Delivery");
    const [addCount, setAddCount] = useState([]);
    const [deliveryPrice, setDeliveryPrice] = useState([])


    // Delivery plan choose function
    useEffect(() => {
        const selectedPrice = deliveryPrices.find((value) => value.plan === deliveryOption);
        setDeliveryPrice(selectedPrice ? [selectedPrice] : []);
    }, [deliveryOption]);

    // Decrease the selected count
    const decrease = (key) => {
        setAddCount((prevState) =>
            prevState.map((value) =>
                value.id === key && value.selectedCount !== 1
                    ? { ...value, selectedCount: value.selectedCount - 1 }
                    : value
            )
        );
    };

    // Increase the selected count
    const increase = (key) => {
        setAddCount((prevState) =>
            prevState.map((value) =>
                value.id === key
                    ? { ...value, selectedCount: value.selectedCount + 1 }
                    : value
            )
        );
    };

    //Set the add count
    useEffect(() => {
        setAddCount(probs.selectedProdectCount)
    }, [probs]);


    useEffect(() => {
        if (Array.isArray(addCount)) {
            const total = addCount.reduce(
                (sum, value) => sum + (value.selectedCount || 0) * (value.price || 0),
                0
            );
            setAllProdectTotal(total);
        }
    }, [addCount]);



    return (
        <div className="addToCardPopup col-span-5 row-span-9 row-start-2 grid grid-cols-3 grid-rows-1">
            <div className='shippingCart col-span-2 grid grid-cols-1 grid-rows-7'>
                <header className='headers flex flex-col px-3'>
                    <div className='flex items-center justify-between h-full w-full px-5'>
                        <h4 className='poppins-bold'>Shopping Cart</h4>
                        <h4 className='poppins-bold'>{probs.selectedProdectCount.length ? probs.selectedProdectCount.length : 0} items</h4>
                    </div>
                    <div className='title grid grid-cols-6 px-3 grid-rows-1'>
                        <h6 className='poppins-bold col-span-3 px-2 py-1 text-center'>Product Details</h6>
                        <h6 className='poppins-bold col-start-4 px-2 py-1 text-center'>Quantity</h6>
                        <h6 className='poppins-bold col-start-5 px-2 py-1 text-center'>Price(₹)</h6>
                        <h6 className='poppins-bold col-start-6 px-2 py-1 text-center'>Total(₹)</h6>
                    </div>
                    <hr />
                </header>
                <div className='row-span-5 px-3'>
                    <div className='w-full h-full overflow-hidden overflow-y-auto'>
                        {Array.isArray(probs.selectedProdect) && probs.selectedProdect.length > 0 ? (
                            probs.selectedProdect.map((values, key) => (
                                <div key={key} className='h-40 w-full my-2 rounded-md grid grid-cols-6 grid-rows-1 border'>
                                    <div className='col-span-3 flex'>
                                        <div className='w-1/3 flex item-center justify-center h-full bg-white rounded-md'>
                                            <img className='rounded-md object-contain w-22' src={values.image} />
                                        </div>
                                        <div className='w-2/3 flex flex-col justify-around px-4'>
                                            <h6 className='poppins-bold'>Title: {values.title}</h6>
                                            <h6 className=''>Category: {values.category}</h6>
                                            <button id={key} onClick={() => probs.removerProd(values)} className='w-20 h-7 bg-gray-500 text-white btn-remove btn-secondary hover:opacity-70 active:opacity-60'>Remove</button>
                                        </div>
                                    </div>
                                    <div className='col-start-4 flex justify-center items-center'>
                                        <div className='countIncresser flex w-20 justify-around items-center h-8 border rounded-lg'>
                                            <button onClick={() => decrease(values.id)} className="countDecress text-block poppins-bold w-7 h-full hover:bg-gray-200 active:bg-gray-400">-</button>
                                            <div className='w-7 h-full flex items-center justify-center bg-white'>
                                                <h6 className="count text-block poppins-bold">{addCount.map((countValue, contIndex) => countValue.id === values.id ? countValue.selectedCount : null)}</h6>
                                            </div>
                                            <button onClick={() => increase(values.id)} className="countIncress text-block poppins-bold w-7 h-full hover:bg-gray-200 active:bg-gray-400">+</button>
                                        </div>
                                    </div>
                                    <div className='col-start-5 flex justify-center items-center'>
                                        <h4>₹{values.price}</h4>
                                    </div>
                                    <div className='col-start-6 flex justify-center items-center'>
                                        <h4>₹{addCount.map((countValue, countIndex) => countValue.id === values.id ? (countValue.selectedCount * values.price).toFixed(2) : null)}</h4>
                                    </div>
                                </div>
                            )
                            )) : (
                            <p className='poppins-semibold'>No products selected...</p>
                        )
                        }

                    </div>
                    <hr />
                </div>
                <div className='row-start-7 flex items-center px-3'>
                    <div className=' h-5 w-54 hover:bg-blue-100 flex items-center'>
                        <Link to='/'>
                            <button type="button" className="btn btn-outline-secondary w-54">Continue Shopping...</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='orderSummery col-start-3 grid grid-cols-1 grid-rows-7 flex items-center justify-between bg-gray-200'>
                <div className='px-5'>
                    <h4 className='poppins-bold px-3 h-26 flex items-center'>Order Summery</h4>
                    <hr />
                </div>
                <div className='row-span-3 h-full px-5 flex flex-col gap-10'>
                    <div className='w-full h-15 flex items-center justify-between px-3'>
                        <h6 className='poppins-bold w-18 flex items-center'>Items: {probs.selectedProdectCount.length ? probs.selectedProdectCount.length : 0}</h6>
                        <h6>₹ {allProdectTotal.toFixed(2)}</h6>
                    </div>
                    <div className="dropdown flex items-center justify-between">
                        <h6 className='poppins-semibold'>Shipping: </h6>
                        <button
                            className="btn btn-secondary dropdown-toggle w-50"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"

                        >
                            {deliveryOption}
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => setDeliveryOption("Standard Delivery")}
                                >
                                    Standard Delivery
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => setDeliveryOption("Fast Delivery")}
                                >
                                    Fast Delivery
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => setDeliveryOption("Super Fast Delivery")}
                                >
                                    Super Fast Delivery
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='px-3'>
                        <h6 cl>A 10% discount has been applied to your purchase.</h6>
                    </div>
                    <hr />
                </div>

                <div className='row-span-3 px-5 row-start-5 h-full flex flex-col justify-around'>
                        <h4 className='text-center poppins-bold'>Total cost</h4>
                        <div className='flex items-end flex-col justify-around h-25'>
                            <h6 className='h-5 poppins-regular'>Shipping Charge ₹: <span className='poppins-bold'>{deliveryPrice[0]?.price===0? "Free": deliveryPrice[0]?.price }</span></h6>
                            <h6 className='h-5 poppins-regular'>Discount: ₹: <span className='poppins-bold'>-{(allProdectTotal*0.1).toFixed(2)}</span></h6>
                        </div>
                        <h4 className='justify-end flex'>Total: {((allProdectTotal-(allProdectTotal*0.1))+deliveryPrice[0]?.price).toFixed(2)}</h4>
                        <button type="button" class="btn btn-success">Confirm Your Order</button>
                </div>

            </div>
        </div>


    )
}
