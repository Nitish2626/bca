import { useState,useEffect,useContext} from "react";
import Context from "../../context/Context";
import Semester from "../../semesters/Semester";
import axios from "axios";

import web from "../../../books pdf/2nd year/Web Technologies.pdf";
import os from "../../../books pdf/2nd year/Operating system.pdf";
import dbms from "../../../books pdf/2nd year/RDBMS.pdf";

import software from "../../../books pdf/2nd year/Software engineering.pdf";
import java from "../../../books pdf/2nd year/Java Programming.pdf";
import investment from "../../../books pdf/2nd year/Financial and Investment Skills.pdf";
import architecture from "../../../books pdf/2nd year/Computer System Architecture.pdf";


const Sybca=()=>{

    const {setNavigate}=useContext(Context);
    setNavigate("/books");

    const {setShowLoader}=useContext(Context);

    const [sem3, setSem3] = useState([]);
    const [sem4, setSem4] = useState([]);

    useEffect(() => {
        const api3 = async () => {
            try {
                setShowLoader(true);
                let res = await axios.get("http://localhost:2000/sem3")
                let data = await res.data;
                Object.assign(await data.books[0], { url: web });
                Object.assign(await data.books[1], { url: os });
                Object.assign(await data.books[2], { url: dbms });
                setSem3(await data.books);
                setShowLoader(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        api3();
    }, [])

    useEffect(() => {
        const api4 = async () => {
            try {
                setShowLoader(true);
                let res = await axios.get("http://localhost:2000/sem4")
                let data = await res.data;
                Object.assign(await data.books[0], { url: software });
                Object.assign(await data.books[1], { url: java });
                Object.assign(await data.books[2], { url: investment });
                Object.assign(await data.books[3], { url: architecture });
                setSem4(await data.books);
                setShowLoader(false);
            }
            catch (err) {
                console.log(err);
            }
        };
        api4();
    }, []);

    return(
        <>
        <Semester sem1={"SEM 3"} sem2={"SEM 4"} book1={sem3} book2={sem4} textColor="text-green-500" />
        </>
    );
}
export default Sybca;