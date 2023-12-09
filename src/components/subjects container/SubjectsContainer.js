import Backbtn from "../back button/Backbtn";
import QuestionAndAnswer from "../qna/QuestionAndAnswer";
import Loader from "../Loader/Loader";

const SubjectsContainer=(props)=>{
    return(
        <div>
            <Backbtn />

            <h3 className={`${props.headingColor} text-center pt-10 text-lg mb-5 font-semibold`}>
                {props.subjectName}
            </h3>

            <section className="w-full flex flex-col items-center justify-center">
                {props.loader ? <Loader borderColor={props.loaderBorderColor} /> : props.subject.map((q, i) => {
                    return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
                })}
            </section>

        </div>
    );
};

export default SubjectsContainer;