import React, { useEffect, useState } from 'react'
import { IMG_URL, MENU_URL } from '../utils/constants';
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import MenuCards from './MenuCards';
import useResMenuData from '../utils/useResMenuData';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();
    // console.log(resId);

    const resMenu = useResMenuData(resId);

    
    if (!resMenu) return <ShimmerUI/>
    const {name,avgRating,cuisines, costForTwoMessage , cloudinaryImageId    } = resMenu?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card || resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
    const itemCards = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards 
               || resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards;

    const cards = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // console.log(cards);
    const categories = cards.filter((c)=>{
        return(c?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    })
    // const nested_categories = cards.filter((c)=>{
    //     return(c?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
    // })
    // const all_categories = cards.filter((c)=>{
    //     return(c?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" || c?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // })
    console.log(categories)
    // console.log(nested_categories)
    // console.log(all_categories)
    return (                                                                                                   

        <div className='w-[60%] mx-auto mb-10 '>
            {/* {console.log(itemCards)} */}
            <div className='flex items-center  res-menu-info-logo-container mt-12  gap-[50px] pl-4'>
                <div className='res-menu-info-container'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='text-lg font-bold text-[#02060C99]'>{cuisines.join(",")} - {costForTwoMessage}</p>
                </div>
            </div>
            {/* <ul>
                {itemCards.map(item => <MenuCards key={item?.card?.info?.id} resData={item?.card?.info}/>)}
                
            </ul> */}
            {console.log(categories[0].card?.card?.itemCards[0].card.info)}
            <div>
                {categories.map(category => {

                    return( <div key={category?.card?.card?.title}>
                            <RestaurantCategory  data={category?.card?.card} />
                            </div>)
                })}
            </div>
 

        </div>
    )
}

export default RestaurantMenu