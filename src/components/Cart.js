import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MenuCards from './MenuCards';
import { clearCart, selectTotalPrice } from '../utils/cartSlice';
import CartCards from './CartCards';
import { Link } from 'react-router-dom';

const Cart = () => {

    const totalPrice = useSelector(selectTotalPrice);
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }

    return (
        <div className='mx-auto w-[70%] my-7'>
            <div className='flex justify-between items-center mx-4'>
                <h1 className='text-5xl font-bold text-center'>Cart</h1>
            </div>
            {cartItems.length===0 && <h1 className='text-2xl font-bold text-center mt-20'>Cart is Empty , Please Add some items in your cart</h1> || 
                <div className='flex justify-between items-center mt-0 mx-4'>
                    <h1 className='text-2xl font-bold text-center'>Total Price: ₹{totalPrice.toFixed(2)}</h1>
                    <div className='flex gap-3'>
                        <button className='text-lg font-bold right-0 text-center border px-4 py-2 rounded-xl bg-slate-50 my-8'
                            onClick={handleClear}>
                                Remove All
                        </button>
                        <Link to="/checkout">
                        <button className='text-lg font-bold right-0 text-center border px-4 py-2 rounded-xl border-[#347959] bg-[#39cd88] text-white my-8'>
                                CheckOut
                        </button>
                        </Link>
                    </div>
                </div>
            }
            <div>{cartItems.length>0 && cartItems.map(item => <CartCards key={item?.id} resData={item}/>)}</div> 
        </div>

    )
}

export default Cart