import Backbtn from "../back button/Backbtn";
import Sem from "../sem/Sem";

const SemContainer = (props) => {
    return (
        <section>

            <Backbtn text={props.text} />

            <Sem sem={props.sem1} sub={props.sub1} />

            <Sem sem={props.sem2} sub={props.sub2} mb="mb-20" />

        </section>
    );
};

export default SemContainer;