import Links from "../links/Links";

const QuestionPapers = () => {

    return (
        <div className="w-full h-96 flex flex-col items-center justify-center gap-6">

            <Links to="/pyq/fybca" class="FYBCA" bgcolor="bg-blue-500" color="text-blue-500" />

            <Links to="/pyq/sybca" class="SYBCA" bgcolor="bg-blue-500" color="text-blue-500" />

            <Links to="/pyq/tybca" class="TYBCA" bgcolor="bg-blue-500" color="text-blue-500" />

        </div>
    );
}
export default QuestionPapers;