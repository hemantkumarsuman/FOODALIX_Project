import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

    const {resId} = useParams();

    const resInfo = useRestaurant(resId);


    // We will use this logic in custom hooks
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async ()=>{
    //     const data= await fetch(MENU_API+resId);
    //     const json= await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };

    if(resInfo===null)
    {
        return <Shimmer/>
    }

    let {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const cateroies = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

    console.log(cateroies);


    return(
        <div className="m-1 text-center">
            <h1 className="p-4 font-bold text-xl">{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>{resInfo.cards[2].card.card.info.cuisines.join(',')} - {resInfo.cards[2].card.card.info.costForTwoMessage}</h3>

            {/* Accordion section*/}
            {cateroies.map((category)=>(
                <RestaurantCategory key={category?.card?.card?.id} data={category?.card?.card}/>
                
            ))}
        </div>        
    )

};

export default RestaurantMenu;