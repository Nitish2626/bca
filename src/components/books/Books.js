import Links from "../links/Links";
import { useLocation } from "react-router-dom";

const Books = (props) => {

    const location = useLocation();
    if (location.pathname == "/books") {
        props.val(true);
    }

    return (
        <div className="w-full h-96 flex items-center justify-center">

            <section className="flex flex-col items-center justify-center gap-6">

                <Links to={"/books/fybca"} class="FYBCA" bgcolor="bg-green-500" color="text-green-500" />

                <Links to={"/books/sybca"} class="SYBCA" bgcolor="bg-green-500" color="text-green-500" />

                <Links to={"/books/tybca"} class="TYBCA" bgcolor="bg-green-500" color="text-green-500" />

            </section>

        </div>
    );
}
export default Books;