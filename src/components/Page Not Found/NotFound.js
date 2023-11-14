import { useLocation } from "react-router-dom";

const NotFound=(props)=>{

    const location=useLocation();
    if(location.pathname!=="/books" || location.pathname!=="/pyq" || location.pathname!=="/notes" || location.pathname!=="/videos"){
       props.val(false);
    }
    else{
        props.val(true);
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">

            <h2 className="text-xl">404 ! Page Not Found</h2>
            
        </div>
    );
}
export default NotFound;