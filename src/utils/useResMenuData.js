import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";


const useResMenuData = (resId) => {
    const [resMenu , setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(MENU_URL + resId);
        const json=await data.json();
        // console.log(json.cards[0].card.card.text);
        // console.log(json);
        // console.log(json.data.cards[2].card.card.info.avgRating);
        // console.log(json.data.cards[2].card.card.info.cuisines);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards); RECOMMENDED SECTION
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);

        setResMenu(json);
        
    }
    return(resMenu);
}

export default useResMenuData;