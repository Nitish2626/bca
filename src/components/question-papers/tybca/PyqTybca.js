import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";
import { useContext } from "react";

const PyqTybca=()=>{

    const subject1=[
        {
            name:"Ecommerce Technology",
            link:"/pyq/tybca/ecommerce",
            bgcolor:"bg-green-500"
        },
        {
            name:"Advance Java",
            link:"/pyq/tybca/advance",
            bgcolor:"bg-pink-600"
        },
        {
            name:"Quantitative Aptitude",
            link:"/pyq/tybca/qa",
            bgcolor:"bg-red-600"
        },
        {
            name:"Linux Administration",
            link:"/pyq/tybca/linux",
            bgcolor:"bg-orange-600"
        },
    ]

    const subject2=[
        {
            name:"Android Programming",
            link:"/pyq/tybca/android",
            bgcolor:"bg-green-700"
        },
        {
            name:"PHP Programming",
            link:"/pyq/tybca/php",
            bgcolor:"bg-blue-400"
        },
        {
            name:"Personality and Career Skills",
            link:"/pyq/tybca/pcs",
            bgcolor:"bg-pink-700"
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/pyq");

    return(
        <div>      
            <SemContainer sem1="Sem 5" sem2="Sem 6" text="TYBCA" sub1={subject1} sub2={subject2} textColor="text-blue-500" />
        </div>
    );
};

export default PyqTybca;