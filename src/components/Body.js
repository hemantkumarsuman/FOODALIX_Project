import RestaurantCard, {RestaurantCardHOC} from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =()=>{

    //state variable
    let [listOfRestaurant,setListOfRestaurant] = useState([]);

    const [filterRestaurant,setFilterRestaurant] = useState([]);

    const [searchRes,SetSearchRes] = useState('');

    //Higher order component
    const RestaurantCardHigherOrderComponent = RestaurantCardHOC(RestaurantCard) ;

    console.log(listOfRestaurant);

    useEffect(()=>{
      fetchdata();
    },[]);

      

    const fetchdata =async ()=>{
      const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9852641&lng=77.7188677&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      
      const json = await data.json();

      //console.log(json);

      setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
      
      setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    };

    //Using custom hooks [useOnlinestatus]
    const onlinestatus = useOnlineStatus();
    if(onlinestatus === false){
      return (
        <h1>Please try again later! It seems you are offline.</h1>
      )
    }

    //Conditional rendering
    if(listOfRestaurant.length === 0){
      return <Shimmer/>
    }

    return (
      <div className='body'>
        <div className='filter flex justify-between'>
            <div className="search p-2 m-1">
              <input type="text" className="search-box mx-1 border border-lined border-black" value={searchRes} 
              onChange={(e)=>{
                SetSearchRes(e.target.value)
              }}/>
              <button className="px-4 bg-green-300 rounded-md hover:border border-green-700"
              onClick={()=>{
                //Filter the res card and show it on UI
                
                console.log(searchRes);

                const filteredRestaurant=listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchRes.toLowerCase()));
                
                setFilterRestaurant(filteredRestaurant);
                
              }}>
                Search
              </button>
            </div>


            <button className="filter-btn p-2 m-1 bg-green-300 rounded-lg hover:border border-green-700" onClick={()=>{
                //update listOfRestaurant using function setListOfRestaurant()


                let filteredRestaurant=listOfRestaurant.filter(
                    (res)=> res.info.avgRating > 4
                );

                //update
                setListOfRestaurant(filteredRestaurant);
                //console.log(filteredRestaurant);
            }}>
                Top Rated Restaurant
            </button>
        </div>
  
        <div className='res-container flex flex-wrap'>        
  
          {
            filterRestaurant.map((restaurant)=>(
              <Link key={restaurant.info.id} to={'/restaurants/'+restaurant.info.id}>
                
                <RestaurantCard  resData={restaurant}/>
              </Link>
              
            ))
          }
        </div>
      </div>
  
      
    );
  }

  export default Body;