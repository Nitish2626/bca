import Backbtn from "../back button/Backbtn";
import SemSection from "../semester section/SemSection";

const Semester=(props)=>{

    return(
        <div>

            <Backbtn  text={"Books"} />

            <SemSection sem={props.sem1} book={props.book1} />

            <SemSection sem={props.sem2} book={props.book2} mb="mb-20" />

        </div>
    );
}
export default Semester;