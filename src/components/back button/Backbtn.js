import { useContext } from "react";
import Context from "../context/Context";
import { Link } from "react-router-dom";
import larrow from "../../icons/left-arrow.png";

const Backbtn = (props) => {

    const {navigate}=useContext(Context);

    return (
        <div className="w-full h-10 flex items-center fixed bg-white z-10 px-1">

            <Link to={navigate} className="flex items-center justify-center bg-white border-none outline-none rounded-full cursor-pointer py-1 px-3 hover:shadow-[2px_2px_10px_0px_grey]">

                <img src={larrow} className="w-6 h-6"></img>

            </Link>

            <h2 className="text-green-900 ml-20 text-xl font-semibold">{props.text}</h2>

        </div>
    );
}
export default Backbtn;