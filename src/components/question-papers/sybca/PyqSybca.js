import { useContext } from "react";
import SemContainer from "../../sem container/SemContainer";
import Context from "../../context/Context";

const PyqSybca = () => {

    const subject1 = [
        {
            name:"Python Programming",
            link:"/pyq/sybca/python",
            bgcolor:"bg-red-600"
        },
        {
            name:"Web Technologies",
            link:"/pyq/sybca/webtech",
            bgcolor:"bg-gray-700"
        },
        {
            name:"Operating System",
            link:"/pyq/sybca/os",
            bgcolor:"bg-pink-500"
        },
        {
            name:"Introduction to RDBMS",
            link:"/pyq/sybca/dbms",
            bgcolor:"bg-green-400"
        }
    ]

    const subject2=[
        {
            name:"Software Engineering",
            link:"/pyq/sybca/se",
            bgcolor:"bg-blue-700",
        },
        {
            name:"Java Programming",
            link:"/pyq/sybca/java",
            bgcolor:"bg-yellow-500",
        },
        {
            name:"Financial and Investment Skills",
            link:"/pyq/sybca/fis",
            bgcolor:"bg-orange-500",
        },
        {
            name:"Computer System Architecture",
            link:"/pyq/sybca/csa",
            bgcolor:"bg-blue-400",
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/pyq");

    return (
        <div>
            <SemContainer sem1="Sem 3" sem2="Sem 4" text="SYBCA" sub1={subject1} sub2={subject2} textColor="text-blue-500" />
        </div>
    );
};

export default PyqSybca;