import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import cpp2017 from "../../../../pyqs pdf/1st Year/cpp2017.pdf";
import cpp2018 from "../../../../pyqs pdf/1st Year/cpp2018.pdf";
import cpp2019 from "../../../../pyqs pdf/1st Year/cpp2019.pdf";
import cpp2023 from "../../../../pyqs pdf/1st Year/cpp2023.pdf";

const Oop = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/oop");
            const data = await pyqs.json();
            Object.assign(await data[0],{url:cpp2017});
            Object.assign(await data[1],{url:cpp2018});
            Object.assign(await data[2],{url:cpp2019});
            Object.assign(await data[3],{url:cpp2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Oops and C++ PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Oop;