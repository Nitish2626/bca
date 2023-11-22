import Links from "../links/Links";
import { useLocation } from "react-router-dom";

const Books = (props) => {

    const location = useLocation();
    if (location.pathname === "/books") {
        props.val(true);
    }

    return (
        <div className="w-full h-96 flex flex-col items-center justify-center gap-6">

            <Links to="/books/fybca" class="FYBCA" color="text-green-500"
            bgcolor="hover:bg-green-500"  />

            <Links to="/books/sybca" class="SYBCA" color="text-green-500" bgcolor="hover:bg-green-500"  />

            <Links to="/books/tybca" class="TYBCA" color="text-green-500" bgcolor="hover:bg-green-500"  />

        </div>
    );
}
export default Books;