import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{

    const [onlinestatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        });

        window.addEventListener('online',()=>{
            setOnlineStatus(true);
        })
    },[])

    return onlinestatus;
}

export default useOnlineStatus;