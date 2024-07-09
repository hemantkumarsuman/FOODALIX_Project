import { useDispatch } from "react-redux";
import { CDN_url } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemLists = ({items})=>{
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="flex justify-between py-2 border-gray-300 border-b-2">
                    <div className="text-left w-9/12">
                        <span className="font-bold">{item.card.info.name}</span>
                        <span className="font-bold"> - ₹ {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                        <p>{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="text-green-400 font-bold bg-white rounded-lg p-2 hover:border border-green-900 " onClick={()=>handleAddItem(item)}>ADD</button>
                        </div>
                        
                        <img className="rounded-lg" src={CDN_url + item.card.info.imageId}/>
                    </div>                    
                    
                </div>
            ))}
        </div>
    )
}
export default ItemLists;
    