import "./Se.css";
import Backbtn from "../../../back button/Backbtn";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import { useContext,useState,useEffect } from "react";
import Context from "../../../context/Context";
import axios from "axios";

const Se=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/faq/sybca");

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios.get("http://localhost:2000/se")
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
        <div id="se">
            <Backbtn />

            <h3>Software Engineerimg FAQ</h3>

            {faqs.map((q, i) => {
                return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
            })}

        </div>
    );
};

export default Se;