import book from "../../icons/books.png";
import pyq from "../../icons/pages.png";
import faq from "../../icons/faq.png";
import quiz from "../../icons/quiz.png";
import Navlinks from "../navlinks/Navlinks";

const Bottom = () => {
  return (
    <footer className="w-full flex justify-evenly bg-slate-200 fixed rounded-tl-2xl rounded-tr-2xl bottom-0">

      <Navlinks to="/books" src={book} />

      <Navlinks to="/pyq" src={pyq} />

      <Navlinks to="/faq" src={faq} />

      <Navlinks to="/videos" src={quiz} />

    </footer>
  );
};
export default Bottom;
