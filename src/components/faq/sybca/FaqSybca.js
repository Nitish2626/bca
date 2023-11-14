import SemContainer from "../../sem container/SemContainer";
import { useContext } from "react";
import Context from "../../context/Context";

const FaqSybca = () => {

    const subject1 = [
        {
            name:"Python Programming",
            link:"/faq/sybca/python",
            color:"red"
        },
        {
            name:"Web Technologies",
            link:"/faq/sybca/webtech",
            color:"grey"
        },
        {
            name:"Operating System",
            link:"/faq/sybca/os",
            color:"pink"
        },
        {
            name:"Introduction to RDBMS",
            link:"/faq/sybca/dbms",
            color:"lightseagreen"
        }
    ]

    const subject2=[
        {
            name:"Software Engineering",
            link:"/faq/sybca/se",
            color:"lightblue"
        },
        {
            name:"Java Programming",
            link:"/faq/sybca/java",
            color:"yellow"
        },
        {
            name:"Financial and Investment Skills",
            link:"/faq/sybca/fis",
            color:"orangered"
        },
        {
            name:"Computer System Architecture",
            link:"/faq/sybca/csa",
            color:"cornflowerblue"
        }
    ]

    const {setNavigate}=useContext(Context);
    setNavigate("/faq");

    return (
        <div>
            <SemContainer sem1="Sem 3" sem2="Sem 4" text="SYBCA" sub1={subject1} sub2={subject2} />
        </div>
    );
};

export default FaqSybca;