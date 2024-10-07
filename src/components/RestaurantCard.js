import { IMG_URL } from "../utils/constants";

import Rating_Logo from "../utils/rating-logo";

const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {cloudinaryImageId, name, costForTwo, cuisines, avgRatingString,sla,locality,areaName,aggregatedDiscountInfoV3 : headTitle} = resData;
    return(
        <div className='w-[252px] h-[270px] overflow-hidden m-[14px] cursor-pointer transition-all duration-100 ease-in hover:transform hover:scale-95'>
            <div className='relative w-[252px] h-[168px] overflow-hidden rounded-3xl res-img-container' >
                <img className=' h-[168px] w-[252px] object-cover ' src={IMG_URL + cloudinaryImageId}/>
                {/* <h2 className='res-price'>{costForTwo.toUpperCase()}</h2> */}
                <h2 className='absolute bottom-0 left-0 right-0 py-0 px-3 overflow-hidden overflow-ellipsis whitespace-nowrap text-white z-20 font-extrabold text-[22px] word-spacing-1 tracking-[-1px] '>{headTitle ? `${headTitle.header} ${headTitle.subHeader}` : " "}</h2>
            </div>
            <h3 className='text-lg font-bold whitespace-nowrap overflow-hidden overflow-ellipsis px-3 pt-2 text-[18px]'>{name}</h3>
            <div className='flex justify-items-start items-center px-3 text-[16px]'> 
                <p className='flex items-center '><Rating_Logo/>
                    <span className='px-[5px] font-[500] text-[15px]'>{avgRatingString}</span>
                </p>
                <span className='res-time text-[15px] font-[600]'> • {sla.slaString}</span>
            </div>
            
            <p className='text-[15px] px-3 font-[500] text-[#02060C99] overflow-hidden overflow-ellipsis'>{cuisines.join(", ")}</p>
            <p className='capitalize text-[15px] px-3 font-[500] text-[#02060C99] overflow-hidden overflow-ellipsis'>{locality + ", " + areaName}</p>
            {/* {console.log(resData)} */}
           
        </div>
        
    )
}


export default RestaurantCard;