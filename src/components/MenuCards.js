import React from 'react'
import { IMG_URL } from '../utils/constants';
import StarLogo from '../utils/star-logo';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';
import { useState } from "react";

const MenuCards = (props) => {

    const {resData} = props;
    const {id,name,imageId,description} = resData
    const cartItems = useSelector(state => state.cart.items);
    const currentItem = cartItems.find(item => item.id === id);
    const quantity = currentItem ? currentItem.quantity : 0;
    // const cartItems = useSelector(state => state.cart.items);

    const dispatch = useDispatch()

    const handleAddToCart = (resData) => {
        dispatch(addItem(resData))
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeItem(id))
    }


    return (
        <div>
            <div></div>
            <div className='menu-card-container flex justify-between items-start my-[30px] gap-[20px] relative pl-4'>
                <div className='menu-card-info flex flex-col flex-wrap gap-[12px]'>
                    <h3 className='menu-card-info-heading text-xl font-bold'>{name}</h3>
                    <h4 className='text-base font-bold'>{"₹"}{resData.finalPrice/100 ||resData.defaultPrice/100 || resData?.price/100}</h4>
                    <p className='menu-card-info-description'>{description}</p>
                </div>
                <div className='flex-shrink-0 pr-4 relative'>
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-[55%] -translate-y-[-50%] whitespace-nowrap bg-white text-[#1BA672] overflow-hidden rounded-lg border border-[#d3d3d3] font-bold'>
                        {/* <button className="px-8" onClick={() => {handleAddToCart(resData)}}>{quantity>0?buttonState+" ("+quantity+")":"ADD"}</button> */}
                        {quantity>0? <div className="flex justify-between items-center">
                            <button className="py-2 px-3  hover:bg-slate-200" onClick={() => {handleRemoveFromCart(id)}}>-</button> 
                            {/* {buttonState+"("+quantity+")"} */}
                            <div className="py-2 px-4">{quantity}</div>
                            <button className="py-2 px-3  hover:bg-slate-200" onClick={() => {handleAddToCart(resData)}}>+</button> 
                        </div>
                        : 
                        <button className="px-7 py-2" onClick={() => {handleAddToCart(resData)}}>ADD</button>
                        }
                    </div>
                    <img className=' h-[144px] w-[156px] rounded-2xl bg-[#FBEED7]' src={IMG_URL + imageId} alt="logo" />
                </div>
            </div>
            <div className='menu-card-line border-b border-[#d3d3d3] border-b-[0.3px] h-[0.3px] my-[20px] mx-4 '></div>
        </div>
  )
}

export default MenuCards