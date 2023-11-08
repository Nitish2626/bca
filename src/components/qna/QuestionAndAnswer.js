import { useState } from "react";
import "./QuestionAndAnswer.css";

const QuestionAndAnswer = (props) => {

    const [show, setShow] = useState(false);
    const [rotate, setRotate] = useState(0);
    const s = () => {
        setShow((prev) => !prev);
        setRotate((prev) => prev - 180);
    };

    return (
        <div id="qna">
            
            <section id="qna-section" onClick={s}>

                <section id="qna-section1">
                    <h4>{props.question}</h4>
                    <span style={{ rotate: `${rotate}deg` }}><b>&or;</b></span>
                </section>

                <section id="qna-section2">
                    <span>({props.year})</span>
                </section>

            </section>
            {show && <p>{props.answer}</p>}
        </div>
    );
};

export default QuestionAndAnswer;