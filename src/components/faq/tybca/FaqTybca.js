import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";
import { useContext } from "react";

const FaqTybca=()=>{

    const subject1=[
        {
            name:"Ecommerce Technology",
            link:"/faq/tybca/ecommerce",
            bgcolor:"bg-green-500"
        },
        {
            name:"Advance Java",
            link:"/faq/tybca/advance",
            bgcolor:"bg-pink-600"
        },
        {
            name:"Quantitative Aptitude",
            link:"/faq/tybca/qa",
            bgcolor:"bg-red-600"
        },
        {
            name:"Linux Administration",
            link:"/faq/tybca/linux",
            bgcolor:"bg-orange-600"
        },
    ]

    const subject2=[
        {
            name:"Android Programming",
            link:"/faq/tybca/android",
            bgcolor:"bg-green-700"
        },
        {
            name:"PHP Programming",
            link:"/faq/tybca/php",
            bgcolor:"bg-blue-400"
        },
        {
            name:"Personality and Career Skills",
            link:"/faq/tybca/pcs",
            bgcolor:"bg-pink-700"
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/faq");

    return(
        <div>      
            <SemContainer sem1="Sem 5" sem2="Sem 6" text="TYBCA" sub1={subject1} sub2={subject2} />
        </div>
    );
};

export default FaqTybca;