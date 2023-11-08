import { NavLink } from "react-router-dom";
import "./Bottom.css";
import book from "../../icons/books.png";
import pyq from "../../icons/pages.png";
import faq from "../../icons/faq.png";
import quiz from "../../icons/quiz.png";

const Bottom = () => {
  return (
    <>
      <footer>
        <NavLink to="/books" className="navlink">
          <img src={book} className="img"></img>
        </NavLink>

        <NavLink to="/pyq" className="navlink">
            <img src={pyq} className="img"></img>
        </NavLink>

        <NavLink to="/faq" className="navlink">
            <img src={faq} className="img"></img>
        </NavLink>

        <NavLink to="/videos" className="navlink">
            <img src={quiz} className="img"></img>
        </NavLink>
      </footer>
    </>
  );
};
export default Bottom;
