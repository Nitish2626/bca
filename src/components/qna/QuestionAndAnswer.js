import { useState } from "react";
import da from "../../icons/down-arrow.png";

const QuestionAndAnswer = (props) => {

    const [show, setShow] = useState(false);
    const [rotate, setRotate] = useState(0);
    const s = () => {
        setShow((prev) => !prev);
        setRotate((prev) => prev - 180);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center mb-4">

            <section className="w-11/12 flex flex-col rounded-md shadow-[1px_1px_10px_0px_grey]" onClick={s}>

                <section className="flex items-center justify-between pt-1 px-2">

                    <h4 className="text-lg pr-1">{props.question}</h4>

                    <img src={da} style={{ rotate: `${rotate}deg` }} className="w-3 h-3 flex items-center justify-center transition-all duration-200">
                    </img>

                </section>

                <section className="px-2 pb-1">

                    <span>({props.year})</span>

                </section>

            </section>

            {show && <p className="w-11/12 bg-slate-200 rounded-md py-1 px-2 mt-1 shadow-[1px_1px_10px_0_grey] animate-[fade_0.2s_linear]">{props.answer}</p>}

        </div>
    );
};

export default QuestionAndAnswer;