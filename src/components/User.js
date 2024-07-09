import { useState } from "react";

const User =(props)=>{

    //state variable in functional component
    const [count,setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Count Function: {count}</h1>
            
            <button onClick={()=>{
                setCount(count+1)
            }}>Count Increase</button>

            <h1>Name: {props.name}</h1>
            <h2>Location: Mumbai</h2>
            <h3>Contact: 88XXXXXX0</h3>
        </div>
    )
};

export default User;