import Links from "../links/Links";
import { useLocation } from "react-router-dom";

const Books = (props) => {

    const location=useLocation();
    if(location.pathname=="/books"){
        props.val(true);
    }

    return (
        <div className="w-full h-96 flex items-center justify-center">

            <Links fybca={"/books/fybca"} sybca={"/books/sybca"} tybca={"/books/tybca"} color={"green-600"} />

        </div>
    );
}
export default Books;