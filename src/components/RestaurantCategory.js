import React, { useState } from 'react'
import MenuCards from './MenuCards';

const RestaurantCategory = (data) => {
    const [showItems , setShowItems] = useState(false)
    const {title , itemCards} = data.data

    const handleClick = () => {
        setShowItems(!showItems)
        // console.log("clicked")
    }

    // console.log(data)
    return (
        <div className='mt-12'>
            <div className='flex justify-between text-base p-4 shadow-lg font-bold bg-gray-100 w-full rounded-lg cursor-pointer' 
              onClick={handleClick}>
                <span className=''>{title} ({itemCards.length}) </span>
                <span>{showItems ? "⬆️" : "⬇️"}</span>
            </div>

            <div>{showItems && itemCards.map(item => <MenuCards key={item?.card?.info?.id} resData={item?.card?.info}/>)}</div> 
            

        </div>
        
    )
}

export default RestaurantCategory