import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import eng2018 from "../../../../pyqs pdf/1st Year/eng2018.pdf";
import eng2019 from "../../../../pyqs pdf/1st Year/eng2019.pdf";
import eng2023 from "../../../../pyqs pdf/1st Year/eng2023.pdf";

const Eng = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/eng");
            const data = await pyqs.json();
            // Object.assign(await data[0],{url:});
            Object.assign(await data[1],{url:eng2018});
            Object.assign(await data[2],{url:eng2019});
            Object.assign(await data[3],{url:eng2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="English Communication PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Eng;