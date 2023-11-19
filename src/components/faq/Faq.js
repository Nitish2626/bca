import Links from "../links/Links";

const Faq = () => {
    return (
        <div className="w-full h-96 flex flex-col items-center justify-center gap-6">

            <Links to="/faq/fybca" class="FYBCA" color="text-orange-500" bgcolor="bg-orange-500" />

            <Links to="/faq/sybca" class="SYBCA" color="text-orange-500" bgcolor="bg-orange-500" />

            <Links to="/faq/tybca" class="TYBCA" color="text-orange-500" bgcolor="bg-orange-500" />

        </div>
    );
}
export default Faq;