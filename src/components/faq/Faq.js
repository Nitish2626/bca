import Links from "../links/Links";
import "./Faq.css";

const Faq=()=>{
    return (
        <div id="faq">
            <Links fybca={"/faq/fybca"} sybca={"/faq/sybca"} tybca={"/faq/tybca"} color={"orange"} />
        </div>
    );
}
export default Faq;