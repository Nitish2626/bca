import { useContext } from "react";
import SemContainer from "../../sem container/SemContainer";
import "./FaqFybca.css";
import Context from "../../context/Context";

const FaqFybca=()=>{

    const subject1=[
        {
            name:"English Communication",
            link:"/faq/fybca/english",
            color:"orange"
        },
        {
            name:"Maths",
            link:"/faq/fybca/maths",
            color:"blue"
        },
        {
            name:"Problem solving using Computer",
            link:"/faq/fybca/psc",
            color:"green"
        },
        {
            name:"Oops and C++",
            link:"/faq/fybca/oops",
            color:"skyblue"
        },
    ]

    const subject2=[
        {
            name:"Statistical Techniques",
            link:"/faq/fybca/statistics",
            color:"orange"
        },
        {
            name:"Computer Network",
            link:"/faq/fybca/cn",
            color:"blue"
        },
        {
            name:"Data Structures through C++",
            link:"/faq/fybca/dsa",
            color:"green"
        },
        {
            name:"EVS",
            link:"/faq/fybca/evs",
            color:"skyblue"
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/faq");

    return(
        <div>      
            <SemContainer sem1="Sem 1" sem2="Sem 2" text="FYBCA" sub1={subject1} sub2={subject2} />
        </div>
    );
};
export default FaqFybca;