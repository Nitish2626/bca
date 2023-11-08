import "./Books.css";
import Links from "../links/Links";
import { useLocation } from "react-router-dom";

const Books = (props) => {

    const location=useLocation();
    if(location.pathname=="/books"){
        props.val(true);
    }

    return (
        <div id="books-btn-div">
            <Links fybca={"/books/fybca"} sybca={"/books/sybca"} tybca={"/books/tybca"} color={"rgb(43, 196, 145)"} />
        </div>
    );
}
export default Books;