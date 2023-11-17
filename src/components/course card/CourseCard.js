import { Link } from "react-router-dom";

const CourseCard=(props)=>{
    return(

        <Link to={props.link} className={`w-36 h-20 flex items-center justify-center text-white border-none rounded-xl shadow-[1px_1px_10px_0px_grey] hover:shadow-none ${props.bgcolor}`}>

            <span className="text-center text-lg">{props.name}</span>

        </Link>
    );
};

export default CourseCard;