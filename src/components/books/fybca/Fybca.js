import "./Fybca.css";
import { useState,useEffect,useContext } from "react";
import Context from "../../context/Context";
import Semester from "../../semesters/Semester";
import axios from "axios";

import english from "../../../books pdf/1st year/English Communication.pdf";
import oops from "../../../books pdf/1st year/Oops and C++.pdf";
import maths from "../../../books pdf/1st year/Maths.pdf";

import network from "../../../books pdf/1st year/Computer Network.pdf";
import dsa from "../../../books pdf/1st year/Data Structures book.pdf";
import statistic from "../../../books pdf/1st year/Statistical Techniques.pdf";
import evs from "../../../books pdf/1st year/EVS.pdf";


const Fybca=()=>{

    const [sem1, setSem1] = useState([]);
    const [sem2, setSem2] = useState([]);

    useEffect(() => {
        const api1 = async () => {
            try {
                let res = await axios.get("http://localhost:2000/sem1")
                let data = await res.data;
                Object.assign(await data.books[0], { url: english });
                Object.assign(await data.books[1], { url: oops });
                Object.assign(await data.books[2], { url: maths });
                setSem1(await data.books);
            }
            catch (err) {
                console.log(err);
            }
        };
        api1();
    }, []);

    useEffect(() => {
        const api2 = async () => {
            try {
                let res = await axios.get("http://localhost:2000/sem2")
                let data = await res.data;
                Object.assign(await data.books[0], { url: network });
                Object.assign(await data.books[1], { url: dsa });
                Object.assign(await data.books[2], { url: statistic });
                Object.assign(await data.books[3], { url: evs });
                setSem2(await data.books);
            }
            catch (err) {
                console.log(err);
            }
        };
        api2();
    }, []);

    const {setNavigate}=useContext(Context);
    setNavigate("/books");

    return (
        <>
        <Semester sem1={"SEM 1"} sem2={"SEM 2"} book1={sem1} book2={sem2} />
        </>
    );
}
export default Fybca;