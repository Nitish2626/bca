import { useContext,useState,useEffect } from "react";
import Backbtn from "../../../back button/Backbtn";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import Context from "../../../context/Context";
import axios from "axios";

const Android=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/faq/tybca");

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios.get("http://localhost:2000/android")
                .then((res) => {
                    const faq = res.data;
                    setFaqs(faq);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fetch();
    }, []);

    return(
        <div>
            <Backbtn />
            
            <h3 className="text-orange-400 text-center pt-10 text-lg mb-5 font-semibold">
                Android Programming FAQ
            </h3>

            {faqs.map((q, i) => {
                return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
            })}

        </div>
    );
};

export default Android;