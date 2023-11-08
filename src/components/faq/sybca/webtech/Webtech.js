import "./Webtech.css";
import { useContext,useState,useEffect } from "react";
import Backbtn from "../../../back button/Backbtn";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import Context from "../../../context/Context";
import axios from "axios";

const Webtech=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/faq/sybca");

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios.get("http://localhost:2000/webtech")
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
        <div id="webtech">
            <Backbtn />

            <h3>Web Technologies FAQ</h3>

            {faqs.map((q, i) => {
                return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
            })}

        </div>
    );
};

export default Webtech;