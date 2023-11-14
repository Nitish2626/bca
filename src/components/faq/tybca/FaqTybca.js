import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";
import { useContext } from "react";

const FaqTybca=()=>{

    const subject1=[
        {
            name:"Ecommerce Technology",
            link:"/faq/tybca/ecommerce",
            color:"lightgreen"
        },
        {
            name:"Advance Java",
            link:"/faq/tybca/advance",
            color:"hotpink"
        },
        {
            name:"Quantitative Aptitude",
            link:"/faq/tybca/qa",
            color:"brown"
        },
        {
            name:"Linux Administration",
            link:"/faq/tybca/linux",
            color:"orange"
        },
    ]

    const subject2=[
        {
            name:"Android Programming",
            link:"/faq/tybca/android",
            color:"green"
        },
        {
            name:"PHP Programming",
            link:"/faq/tybca/php",
            color:"skyblue"
        },
        {
            name:"Personality and Career Skills",
            link:"/faq/tybca/pcs",
            color:"pink"
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