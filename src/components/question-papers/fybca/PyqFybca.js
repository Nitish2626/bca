import { useContext } from "react";
import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";

const PyqFybca=()=>{

    const subject1=[
        {
            name:"English Communication",
            link:"/pyq/fybca/english",
            bgcolor:"bg-orange-500"
        },
        {
            name:"Maths",
            link:"/pyq/fybca/maths",
            bgcolor:"bg-blue-500"
        },
        {
            name:"Problem solving using Computer",
            link:"/pyq/fybca/psc",
            bgcolor:"bg-green-500"
        },
        {
            name:"Oops and C++",
            link:"/pyq/fybca/oops",
            bgcolor:"bg-blue-400"
        }
    ]

    const subject2=[
        {
            name:"Statistical Techniques",
            link:"/pyq/fybca/statistics",
            bgcolor:"bg-orange-500"
        },
        {
            name:"Computer Network",
            link:"/pyq/fybca/cn",
            bgcolor:"bg-blue-500"
        },
        {
            name:"Data Structures through C++",
            link:"/pyq/fybca/dsa",
            bgcolor:"bg-green-500"
        },
        {
            name:"EVS",
            link:"/pyq/fybca/evs",
            bgcolor:"bg-blue-400"
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/pyq");

    return(
        <div>      
            <SemContainer sem1="Sem 1" sem2="Sem 2" text="FYBCA" sub1={subject1} sub2={subject2} textColor="text-blue-500" />
        </div>
    );
};
export default PyqFybca;