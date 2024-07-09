import { CDN_url } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData}=props;
    console.log(props);
    return (
    <div className='res-card m-4 p-4 w-[250px] h-[500px] hover:bg-orange-100'>
        <img className='res-logo rounded-lg' alt='res-logo' src={CDN_url+resData.info.cloudinaryImageId}/>
        <h3 className='font-bold py-1 text-lg'>{resData.info.name}</h3>
        <h4 className='font-bold'>{`Delivery Time: ${resData.info.sla.slaString}`}</h4>
        <h4>{`Rating: ⭐${resData.info.avgRating}`}</h4>
        <h4>{resData.info.cuisines.join(', ')}</h4>        
        <h4>{resData.info.costForTwo}</h4>
        
      </div>
    );
}

export const RestaurantCardHOC = ()=>{
  return (props)=>{
    <div>
      <label>OFF</label>
      <RestaurantCard {...props}/>
    </div>
  }
}

export default RestaurantCard;
