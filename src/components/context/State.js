import { useState } from "react";
import Context from "./Context";

const State=(props)=>{

    const [navigate,setNavigate]=useState();
    const [showLoader,setShowLoader]=useState(false);

    return(
        <Context.Provider value={{navigate,setNavigate,showLoader,setShowLoader}}>
            {props.children}
        </Context.Provider>
    )
}

export default State;