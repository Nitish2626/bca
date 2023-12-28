import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import cn2018 from "../../../../pyqs pdf/1st Year/cn2018.pdf";
import cn2023 from "../../../../pyqs pdf/1st Year/cn2023.pdf";

const ComNet = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/comnet");
            const data = await pyqs.json();
            Object.assign(await data[1],{url:cn2018});
            Object.assign(await data[3],{url:cn2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Computer Networks PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default ComNet;