import "./Links.css";
import { Link } from "react-router-dom";

const Links=(props)=>{
    return(
        <section id="links">

            <Link to={props.fybca} className="course" style={{color:props.color}}>Fybca</Link>

            <Link to={props.sybca} className="course" style={{color:props.color}}>Sybca</Link>

            <Link to={props.tybca} className="course" style={{color:props.color}}>Tybca</Link>
            
        </section>
    );
};
export default Links;