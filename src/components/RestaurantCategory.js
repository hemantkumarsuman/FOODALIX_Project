import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({data})=>{

    const [showItems, setShowItems] = useState(false);
    
    const handleClick = ()=>{
        setShowItems(!showItems)
    }

    return (
        <div>
            {/**Accordian Header */}
            <div className="bg-gray-100 w-6/12 shadow-lg mx-auto my-4 p-4 cursor-pointer"> 
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="text-bold text-xl">{data.title} ({data.itemCards.length})</span>
                    <span className="text-xl">⬇️</span>
                </div>

                {/**Accordian Items */}
                {showItems && <ItemLists items={data.itemCards}/>}
            </div>
            
            
        </div>
    );
};

export default RestaurantCategory;