import { useEffect, useState, useContext } from "react";
import Context from "../../../context/Context";
import PyqContainer from "../../../pyq container/PyqContainer";
import stats2018 from "../../../../pyqs pdf/1st Year/stats2018.pdf";
import statsatkt2018 from "../../../../pyqs pdf/1st Year/stats12018.pdf";
import stats2023 from "../../../../pyqs pdf/1st Year/stats2023.pdf";

const Statis = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/pyq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [pyqs, setPyq] = useState([]);

    useEffect(() => {
        const fetchPyq = async () => {
            setShowLoader(true);
            const pyqs = await fetch("http://localhost:2000/statis");
            const data = await pyqs.json();
            Object.assign(await data[1],{url:stats2018});
            Object.assign(await data[2],{url:statsatkt2018});
            Object.assign(await data[4],{url:stats2023});
            setPyq(data);
            setShowLoader(false);
        }
        fetchPyq();
    }, []);

    return (
        <PyqContainer
            headingColor="text-blue-500"
            subjectName="Statistical Techniques PYQ's"
            loader={showLoader}
            loaderBorderColor="border-blue-500"
            subject={pyqs}
        />
    );
}

export default Statis;