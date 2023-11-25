import { useContext, useState, useEffect } from "react";
import Backbtn from "../../../back button/Backbtn";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import Context from "../../../context/Context";
import axios from "axios";
import Loader from "../../../Loader/Loader";

const Java = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/faq/sybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            setShowLoader(true);
            axios.get("http://localhost:2000/java")
                .then((res) => {
                    const faq = res.data;
                    setFaqs(faq);
                    setShowLoader(false);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fetch();
    }, []);

    return (
        <div>
            <Backbtn />

            <h3 className="text-orange-400 text-center pt-10 text-lg mb-5 font-semibold">
                Java Programming FAQ
            </h3>

            <section className="w-full flex flex-col items-center justify-center">
                {showLoader ? <Loader borderColor="border-orange-400" /> : faqs.map((q, i) => {
                    return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
                })}
            </section>

        </div>
    );
};

export default Java;