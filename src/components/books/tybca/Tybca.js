import { useState,useEffect, useContext } from "react";
import Context from "../../context/Context";
import Semester from "../../semesters/Semester";
import axios from "axios";

import ecommerce from "../../../books pdf/3rd year/Ecommerce technology.pdf";
import advance from "../../../books pdf/3rd year/Advance Java.pdf";
import aptitude from "../../../books pdf/3rd year/Quantitative Aptitude.pdf";
import linux from "../../../books pdf/3rd year/Linux Administration.pdf";

import android from "../../../books pdf/3rd year/Android Programming.pdf";
import php from "../../../books pdf/3rd year/PHP Programming.pdf";
import personality from "../../../books pdf/3rd year/Personality and career skills.pdf";

const Tybca=()=>{

    const [sem5, setSem5] = useState([]);
    const [sem6, setSem6] = useState([]);

    useEffect(() => {
        const api5 = async () => {
            try {
                let res = await axios.get("http://localhost:2000/sem5")
                let data = await res.data;
                Object.assign(await data.books[0], { url: ecommerce });
                Object.assign(await data.books[1], { url: advance });
                Object.assign(await data.books[2], { url: aptitude });
                Object.assign(await data.books[3], { url: linux });
                setSem5(await data.books);
            }
            catch (err) {
                console.log(err);
            }
        };
        api5();
    }, []);

    useEffect(() => {
        const api6 = async () => {
            try {
                let res = await axios.get("http://localhost:2000/sem6")
                let data = await res.data;
                Object.assign(await data.books[0], { url: android });
                Object.assign(await data.books[1], { url: php });
                Object.assign(await data.books[2], { url: personality });
                setSem6(await data.books);
            }
            catch (err) {
                console.log(err);
            }
        };
        api6();
    }, []);

    const {setNavigate}=useContext(Context);
    setNavigate("/books");

    return(
        <>
        <Semester sem1={"SEM 5"} sem2={"SEM 6"} book1={sem5} book2={sem6} />
        </>
    );
}
export default Tybca;