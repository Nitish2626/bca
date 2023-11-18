import { Link } from "react-router-dom";

const Links = (props) => {
    return (

        <Link to={props.to} className={`w-36 h-10 bg-white flex items-center justify-center text-2xl rounded-md shadow-[2px_2px_10px_0px_grey] ${props.color} hover:${props.bgcolor} hover:text-white`} >

            {props.class}

        </Link>

    );
};
export default Links;