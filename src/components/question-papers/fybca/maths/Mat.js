import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import math2018 from "../../../../pyqs pdf/1st Year/math2018.pdf";
import math2019 from "../../../../pyqs pdf/1st Year/math2019.pdf";

const Mat = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/mat");
            const data = await pyqs.json();
            Object.assign(await data[1],{url:math2018});
            Object.assign(await data[2],{url:math2019});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Maths PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Mat;