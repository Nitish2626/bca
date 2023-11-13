// import "./Links.css";
import { Link } from "react-router-dom";

const Links=(props)=>{
    return(
        <section className="flex flex-col items-center justify-center gap-6">

            <Link to={props.fybca} className="w-36 h-10 bg-white flex items-center justify-center text-2xl rounded-md shadow-[2px_2px_10px_0px_grey] hover:bg-green-500" style={{color:props.color}}>
                Fybca
            </Link>

            <Link to={props.sybca} className="w-36 h-10 bg-white flex items-center justify-center text-2xl rounded-md shadow-[2px_2px_10px_0px_grey] hover:bg-green-500 hover:text-white" style={{color:props.color}}>
                Sybca
            </Link>

            <Link to={props.tybca} className="w-36 h-10 bg-white flex items-center justify-center text-2xl rounded-md shadow-[2px_2px_10px_0px_grey] hover:bg-green-500 hover:text-white" style={{color:props.color}}>
                Tybca
            </Link>
            
        </section>
    );
};
export default Links;