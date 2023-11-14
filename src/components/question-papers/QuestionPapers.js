import Links from "../links/Links";

const QuestionPapers = () => {

    return (
        <div className="w-full h-96 flex items-center justify-center">

            <Links fybca={"/pyq/fybca"} sybca={"/pyq/sybca"} tybca={"/pyq/tybca"} color={"rgb(66, 184, 231)"} />

        </div>
    );
}
export default QuestionPapers;