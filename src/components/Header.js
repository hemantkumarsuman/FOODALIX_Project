import { useEffect, useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ()=>{
  const [btnLoginReact, setBtnLoginReact] = useState('login');

  const onlinestatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items)

  
  useEffect(()=>{
    console.log('Useeffect with dependency');
  },[btnLoginReact]);

    return (
      <div className='flex justify-between bg-orange-200 m-1 shadow-lg'>
        <div className='logo-container'>
          <img className='w-40 p-5' src={logo_url}/>
        </div>
  
        <div className='flex items-center '>
          <ul className="flex p-4 m-4">
            <li className="px-4">
              Online Status:{
                onlinestatus? '✅':'🔴'
              }
            </li>
            <li className="px-4">
              <Link to='/'>Home</Link>
            </li>
            <li className="px-4">
              <Link to='/about'>About Us</Link>
            </li>
            <li className="px-4">
              <Link to='/contact'>Contact</Link>
            </li>
            <li className="px-4">
              <Link to='/cart' className=" text-2xl">🛒({cartItems.length})</Link>
            </li>
            <button className="px-4 bg-orange-300 hover:border border-lined border-orange-600" onClick={()=>{
              if(btnLoginReact==='Login')setBtnLoginReact('Logout');
              else{setBtnLoginReact('Login');}
            }}>
              {btnLoginReact}
            </button>
          </ul>
        </div>
      </div>
    );
}

export default Header;