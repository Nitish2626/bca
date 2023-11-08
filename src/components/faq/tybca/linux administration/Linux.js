import "./Linux.css";
import { useContext,useState,useEffect } from "react";
import QuestionAndAnswer from "../../../qna/QuestionAndAnswer";
import Context from "../../../context/Context";
import Backbtn from "../../../back button/Backbtn";
import axios from "axios";

const Linux=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/faq/tybca");

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            axios.get("http://localhost:2000/linux")
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
        <div id="linux">
            <Backbtn />
            
            <h3>Linux Administration FAQ</h3>

            {faqs.map((q, i) => {
                return <QuestionAndAnswer key={i} question={q.question} answer={q.answer} year={q.year} />
            })}

        </div>
    );
};

export default Linux;