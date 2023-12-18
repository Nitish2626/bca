import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";

const ComSys = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/sybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/comsys");
            const data = await pyqs.json();
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Computer System Architecture PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default ComSys;