import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";

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