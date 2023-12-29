import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import python2023 from "../../../../pyqs pdf/2nd Year/python2023.pdf";
import pythonatkt2023 from "../../../../pyqs pdf/2nd Year/python12023.pdf";

const Pyt = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/sybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/pyt");
            const data = await pyqs.json();
            Object.assign(await data[3],{url:python2023});
            Object.assign(await data[4],{url:pythonatkt2023}); 
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Python Programming PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Pyt;