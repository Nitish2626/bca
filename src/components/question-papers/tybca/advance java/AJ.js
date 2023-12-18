import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";

const AJ = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/tybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/advance");
            const data = await pyqs.json();
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Advance Java PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default AJ;