import { useState } from "react";
import Context from "./Context";

const State=(props)=>{

    const [navigate,setNavigate]=useState();

    return(
        <Context.Provider value={{navigate,setNavigate}}>
            {props.children}
        </Context.Provider>
    )
}

export default State;