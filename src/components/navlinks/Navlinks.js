import { NavLink } from "react-router-dom";

const Navlinks=(props)=>{
    return(
        <NavLink to={props.to} className="w-11 flex items-center justify-center bg-transparent rounded-full py-1">
            
            <img src={props.src} className="w-8 h-8"></img>

        </NavLink>
    );
};

export default Navlinks;