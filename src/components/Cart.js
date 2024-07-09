import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    
    return (
        <div className="text-center m-5 p-10">
            <h1 className=" text-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length===0 && <h1 className="my-10">Your cart is empty <h2 className="text-gray-400">You can go to Home page to view more restaurants</h2></h1>}
                <ItemLists items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;