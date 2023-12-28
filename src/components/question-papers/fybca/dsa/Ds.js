import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import dsa2018 from "../../../../pyqs pdf/1st Year/dsa2018.pdf";
import dsa2023 from "../../../../pyqs pdf/1st Year/dsa2023.pdf";

const Ds = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/ds");
            const data = await pyqs.json();
            Object.assign(await data[1],{url:dsa2018});
            Object.assign(await data[3],{url:dsa2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Data Structures through C++ PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Ds;