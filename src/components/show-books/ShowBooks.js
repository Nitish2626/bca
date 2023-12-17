import download from "../../icons/download.png";
import { Link } from "react-router-dom";

const ShowBooks=(props)=>{
    return (
        <div className={`w-11/12 flex flex-col items-center justify-center bg-white ${props.color} rounded-lg py-2 shadow-[2px_2px_10px_0px_grey] hover:shadow-none sm:w-2/4 md:w-2/5 lg:w-1/4`}>

            <img src={props.image} className="w-11/12 h-40 rounded-lg"></img>

            <h3 className="text-xl my-2 font-semibold">
                {props.subject}
            </h3>

            <span className="text-lg">
                {props.size}{props.storage}
            </span>

            <Link to={props.url} className="w-8 h-8 flex items-center justify-center bg-white rounded-full my-2 hover:shadow-[2px_2px_10px_0px_grey]" target="blank" download>

                <img src={download} className="w-5 h-5"></img>

            </Link>

        </div>
    );
}
export default ShowBooks;