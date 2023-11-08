import { useLocation } from "react-router-dom";
import "./NotFound.css";

const NotFound=(props)=>{

    const location=useLocation();
    if(location.pathname!=="/books" || location.pathname!=="/pyq" || location.pathname!=="/notes" || location.pathname!=="/videos"){
       props.val(false);
    }
    else{
        props.val(true);
    }

    return (
        <div id="not-found">
            <h2>404 ! Page Not Found</h2>
        </div>
    );
}
export default NotFound;