import React from 'react'
import paymentLogo from '../assets/imgs/payment-logo.png'
import { clearCart, selectTotalPrice } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PaymentSuccessPage = () => {

     // Get the current date and time
     const currentDate = new Date();
     const formattedDate = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
     const formattedTime = currentDate.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // Ensures 12-hour format with AM/PM
    });

    const dispatch = useDispatch();

    const totalPrice = useSelector(selectTotalPrice);
    const price = totalPrice;
    const handlePrint = () => {
        window.print();
    };


    useEffect(() => {
        // Clear the cart only after the total price is fetched
        return () => {
            dispatch(clearCart());
        };
    }, [dispatch]);


    return (
        <div className='payment-success-page'>
            <div className='mx-auto my-10 bg-white shadow-lg w-[70%] border border-green-400 rounded-3xl'>
                <div className='flex flex-col justify-center items-center my-5'>
                        <h1 className='text-2xl font-bold text-green-400'>Payment Successful !</h1>
                        <div>
                            <img src={paymentLogo} alt="payment logo" className='w-[100px] h-[100px] mt-5' />
                        </div>
                        {/* Date and Time */}
                    
                        <div className="flex flex-col justify-center items-center my-5 w-full">
                        <div className='flex justify-between w-[50%] items-center'>
                                <h1 className='text-[#767678]'>Date  </h1>
                                <h1 className='text-[#343435]'>{formattedDate}</h1>
                            </div>
                            <div className='flex justify-between w-[50%] items-center'>
                                <h1 className='text-[#767678]'>Time </h1>
                                <h1 className='text-[#343435]'>{formattedTime.toUpperCase()}</h1>
                            </div>
                            <div className='flex justify-between w-[50%] items-center'>
                                <h1 className='text-[#767678]'>Order id </h1>
                                <h1 className='text-[#343435]'>37254</h1>
                            </div>
                            <div className='flex justify-between w-[50%] items-center'>
                                <h1 className='text-[#767678]'>Transaction id </h1>
                                <h1 className='text-[#343435]'>158745895754</h1>
                            </div>
                            <div className='flex justify-between w-[50%] items-center font-semibold'>
                                <h1 className='text-[#767678]'>Amount Paid </h1>
                                <h1 className='text-[#343435]'>₹{price.toFixed(2)}</h1>
                            </div>
                            
                        </div>
                        <h1 className='text-lg font-semibold mt-5 text-[#606061]'> Your order is confirmed!</h1>
                        <h1 className='text-lg font-semibold text-[#343435]'> Thank you for shopping with us</h1>
                        <button className='print-hidden text-lg font-bold border px-4 py-2 rounded-xl border-[#347959] bg-[#39cd88] text-white my-8' onClick={handlePrint} >Print</button>
                    </div>
            </div>
        </div>
    )
}

export default PaymentSuccessPage