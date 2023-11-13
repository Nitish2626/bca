import Links from "../links/Links";

const Faq=()=>{
    return (
        <div className="w-full h-96 flex items-center justify-center">

            <Links fybca={"/faq/fybca"} sybca={"/faq/sybca"} tybca={"/faq/tybca"} color={"orange"} />

        </div>
    );
}
export default Faq;