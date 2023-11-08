import Links from "../links/Links";
import "./QuestionPapers.css";

const QuestionPapers = () => {

    return (
        <div id="pyq-btn-div">
            <Links fybca={"/pyq/fybca"} sybca={"/pyq/sybca"} tybca={"/pyq/tybca"} color={"rgb(66, 184, 231)"} />
        </div>
    );
}
export default QuestionPapers;