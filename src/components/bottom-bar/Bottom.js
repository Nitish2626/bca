import { NavLink } from "react-router-dom";
import "./Bottom.css";
import book from "../../icons/books.png";
import pyq from "../../icons/pages.png";
import faq from "../../icons/faq.png";
import quiz from "../../icons/quiz.png";

const Bottom = () => {
  return (
    <footer className="w-full flex justify-evenly bg-slate-200 fixed rounded-tl-2xl rounded-tr-2xl">

      <NavLink to="/books" className="w-11 flex items-center justify-center bg-transparent rounded-full py-1">
        <img src={book} className="w-8 h-8"></img>
      </NavLink>

      <NavLink to="/pyq" className="w-11 flex items-center justify-center bg-transparent rounded-full">
        <img src={pyq} className="w-8 h-8"></img>
      </NavLink>

      <NavLink to="/faq" className="w-11 flex items-center justify-center bg-transparent rounded-full">
        <img src={faq} className="w-8 h-8"></img>
      </NavLink>

      <NavLink to="/videos" className="w-11 flex items-center justify-center bg-transparent rounded-full">
        <img src={quiz} className="w-8 h-8"></img>
      </NavLink>

    </footer>
  );
};
export default Bottom;
