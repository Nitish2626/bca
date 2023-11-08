import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard=(props)=>{
    return(
        <Link to={props.link} id="course-card" style={{backgroundColor:`${props.color}`}}>
            <span>{props.name}</span>
        </Link>
    );
};

export default CourseCard;