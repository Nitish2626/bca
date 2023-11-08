import Backbtn from "../back button/Backbtn";
import CourseCard from "../course card/CourseCard";
import "./SemContainer.css";

const SemContainer = (props) => {
    return (
        <section id="sem-container">

            <Backbtn text={props.text} />

            <h2 className="sem-h2">{props.sem1}</h2>
            <section className="sem-container-section1">

                {props.sub1.map((i,index) => {
                    return <CourseCard key={index} link={i.link} name={i.name} color={i.color} />
                })}

            </section>

            <h2 className="sem-h2">{props.sem2}</h2>
            <section className="sem-container-section2">

                {props.sub2.map((i,index) => {
                    return <CourseCard key={index} link={i.link} name={i.name} color={i.color} />
                })}

            </section>

        </section>
    );
};

export default SemContainer;