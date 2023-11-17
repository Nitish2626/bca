import { useContext } from "react";
import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";

const FaqFybca=()=>{

    const subject1=[
        {
            name:"English Communication",
            link:"/faq/fybca/english",
            bgcolor:"bg-orange-500"
        },
        {
            name:"Maths",
            link:"/faq/fybca/maths",
            bgcolor:"bg-blue-500"
        },
        {
            name:"Problem solving using Computer",
            link:"/faq/fybca/psc",
            bgcolor:"bg-green-500"
        },
        {
            name:"Oops and C++",
            link:"/faq/fybca/oops",
            bgcolor:"bg-blue-400"
        },
    ]

    const subject2=[
        {
            name:"Statistical Techniques",
            link:"/faq/fybca/statistics",
            bgcolor:"bg-orange-500"
        },
        {
            name:"Computer Network",
            link:"/faq/fybca/cn",
            bgcolor:"bg-blue-500"
        },
        {
            name:"Data Structures through C++",
            link:"/faq/fybca/dsa",
            bgcolor:"bg-green-500"
        },
        {
            name:"EVS",
            link:"/faq/fybca/evs",
            bgcolor:"bg-blue-400"
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