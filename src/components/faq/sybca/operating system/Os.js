import "./Os.css";
import { useContext,useState,useEffect } from "react";
import Backbtn from "../../../back button/Backbtn";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import Context from "../../../context/Context";
import axios from "axios";

const Os=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/faq/sybca");

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios.get("http://localhost:2000/os")
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
        <div id="os">
            <Backbtn />
            
            <h3>Operating System FAQ</h3>

            {faqs.map((q, i) => {
                return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
            })}

        </div>
    );
};

export default Os;