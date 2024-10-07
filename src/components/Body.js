import resObj from "../utils/dummydata"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";
import ShimmerUI from "./ShimmerUI"
import Rating_Logo from "../utils/rating-logo";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const Body = () => {
    const [listofRes, setListofRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const filteredRes = listofRes.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRes(filteredRes);
    };
 
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const toggleActiveClass = (e) => {
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(button => button.classList.remove('active'));
        // console.log(buttons);
        // Add 'active' class to the clicked button
        if (e.target.textContent !== "Reset") {
            e.target.classList.add('active');   
        }
    }

    

    useState(()=>{
        fetchData();
    },[]);


    return listofRes.length === 0 ? <ShimmerUI/> :(
        <div className='body'>
            <div className='flex justify-center items-center py-10 text-[40px] gap-[20px]'>
                <input type="text" placeholder='Search for restaurant ....' className='w-3/5 text-[20px] border rounded-full my-[10px] p-[20px] border-black' value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}
                onKeyUp={(e) => e.key === "Enter" && handleSearch()}/>
                    <span className='cursor-pointer' onClick={() => {
                        handleSearch();
                    }}>🔎</span>
                </div>
            
            <div className='flex justify-center items-center gap-[20px] font-semibold text-[20px] 570px:flex-col 570px:text-[15px]'>
                <span className='text-[18px] text-[rgba(2, 6, 12, 0.75)]'>Filters : </span>
                <button className='border border-[#ADABB2] rounded-full px-[8px] py-[12px] my-[8px] text-[14px] filter-btn 570px:w-[60%] 570px:my-[3px] 350px:w-[90%]' onClick={(e) => {
                    toggleActiveClass(e);
                    const filteredRes = listofRes.filter((res) => res.info.avgRating >=  4.5);
                    setFilteredRes(filteredRes);
                }}>
                    {"Ratings 4.5+"}
                </button>
                <button className='border border-[#ADABB2] rounded-full px-[8px] py-[12px] my-[8px] text-[14px] filter-btn 570px:w-[60%] 570px:my-[3px] 350px:w-[90%]' onClick={(e) => {
                    toggleActiveClass(e);
                    const filteredRes = listofRes.filter((res) => res.info.avgRating < 4.5);
                    setFilteredRes(filteredRes);
                }}>
                    {"Ratings below 4.5"}
                </button>
                <button className='border border-[#ADABB2] rounded-full px-[16px] py-[12px] my-[8px] text-[14px] filter-btn 570px:w-[60%] 570px:my-[3px] 350px:w-[90%]' onClick={(e) => {
                    toggleActiveClass(e);
                    setFilteredRes(listofRes);
                }}>{"Reset"}</button>
            </div>

            <div className='flex flex-wrap justify-center w-[90%] mx-auto py-4'>
                {/* <RestaurantCard resData={resObj.restaurants[1].info}/> */}
                {filteredRes.map((res) => <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard resData={res.info}/></Link>)}
            </div>
            <Footer/>
        </div> 
    )
}


export default Body;