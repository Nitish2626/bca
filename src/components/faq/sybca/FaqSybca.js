import SemContainer from "../../sem container/SemContainer";
import { useContext } from "react";
import Context from "../../context/Context";

const FaqSybca = () => {

    const subject1 = [
        {
            name:"Python Programming",
            link:"/faq/sybca/python",
            bgcolor:"bg-red-600"
        },
        {
            name:"Web Technologies",
            link:"/faq/sybca/webtech",
            bgcolor:"bg-gray-700"
        },
        {
            name:"Operating System",
            link:"/faq/sybca/os",
            bgcolor:"bg-pink-500"
        },
        {
            name:"Introduction to RDBMS",
            link:"/faq/sybca/dbms",
            bgcolor:"bg-green-400"
        }
    ]

    const subject2=[
        {
            name:"Software Engineering",
            link:"/faq/sybca/se",
            bgcolor:"bg-blue-700",
        },
        {
            name:"Java Programming",
            link:"/faq/sybca/java",
            bgcolor:"bg-yellow-500",
        },
        {
            name:"Financial and Investment Skills",
            link:"/faq/sybca/fis",
            bgcolor:"bg-orange-500",
        },
        {
            name:"Computer System Architecture",
            link:"/faq/sybca/csa",
            bgcolor:"bg-blue-400",
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/faq");

    return (
        <div>
            <SemContainer sem1="Sem 3" sem2="Sem 4" text="SYBCA" sub1={subject1} sub2={subject2} textColor="text-orange-400" />
        </div>
    );
};

export default FaqSybca;