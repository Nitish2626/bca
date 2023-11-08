import "./Semester.css";
import ShowBooks from "../show-books/ShowBooks";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Backbtn from "../back button/Backbtn";

const Semester=(props)=>{

    const [load,setLoad]=useState(props.load);

    return(
        <div id="semester-div">

            <Backbtn  text={"Books"} />

            <h2 className="h2">{props.sem1}</h2>
            <section className="semester-section1">
                {load ? <Loader /> : props.book1.map((item,index)=>{
                   return <ShowBooks key={index} subject={item.subject} size={item.size} storage={item.storage} url={item.url} image={item.image_url} />
                })}
            </section>
            <h2 className="h2">{props.sem2}</h2>
            <section className="semester-section2">
                {load ? <Loader /> : props.book2.map((item,index)=>{
                    return <ShowBooks key={index} subject={item.subject} size={item.size} storage={item.storage} url={item.url} image={item.image_url} />
                })}
            </section>

        </div>
    );
}
export default Semester;