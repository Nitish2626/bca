import { useContext, useState, useEffect } from "react";
import Context from "../../../context/Context";
import axios from "axios";
import SubjectsContainer from "../../../subjects container/SubjectsContainer";

const Dsa = () => {

    const { setNavigate } = useContext(Context);
    setNavigate("/faq/fybca");

    const { setShowLoader } = useContext(Context);
    const { showLoader } = useContext(Context);

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetch = () => {
            setShowLoader(true);
            axios.get("http://localhost:2000/dsa")
                .then((res) => {
                    const faq = res.data;
                    setFaqs(faq);
                    setShowLoader(false);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fetch();
    }, []);

    return (
        <>
            <SubjectsContainer headingColor="text-orange-400" subjectName="Data Structures through C++ FAQ" loader={showLoader} loaderBorderColor="border-orange-400" subject={faqs} />
        </>
    );
};

export default Dsa;