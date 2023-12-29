import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import psc2017 from "../../../../pyqs pdf/1st Year/psc2017.pdf";
import psc2018 from "../../../../pyqs pdf/1st Year/psc2018.pdf";
import psc2019 from "../../../../pyqs pdf/1st Year/psc2019.pdf";
import psc2023 from "../../../../pyqs pdf/1st Year/psc2023.pdf";

const P = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/p");
            const data = await pyqs.json();
            Object.assign(await data[0],{url:psc2017});
            Object.assign(await data[1],{url:psc2018});
            Object.assign(await data[2],{url:psc2019});
            Object.assign(await data[3],{url:psc2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Problem Solving using Computers PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default P;