import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from './components/books/Books';
import Fybca from "./components/books/fybca/Fybca";
import Sybca from "./components/books/sybca/Sybca";
import Tybca from './components/books/tybca/Tybca';
import QuestionPapers from './components/question-papers/QuestionPapers';
import PyqFybca from "./components/question-papers/fybca/PyqFybca";
import PyqSybca from "./components/question-papers/sybca/PyqSybca";
import PyqTybca from "./components/question-papers/tybca/PyqTybca";
import Faq from './components/faq/Faq';
import Videos from './components/videos/Videos';
import Feedback from './components/feedback/Feedback';
import Home from './components/home page/Home';
import Bottom from "./components/bottom-bar/Bottom";
import Top from './components/top-bar/Top';
import { useState } from 'react';
import NotFound from './components/Page Not Found/NotFound';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import State from './components/context/State';
import FaqFybca from './components/faq/fybca/FaqFybca';
import FaqSybca from './components/faq/sybca/FaqSybca';
import FaqTybca from './components/faq/tybca/FaqTybca';
import English from './components/faq/fybca/english/English';
import Maths from './components/faq/fybca/maths/Maths';
import Psc from './components/faq/fybca/psc/Psc';
import Oops from './components/faq/fybca/oops and c++/Oops';
import Statistic from './components/faq/fybca/statistics/Statistic';
import Cn from './components/faq/fybca/computer network/Cn';
import Dsa from './components/faq/fybca/dsa/Dsa';
import Evs from './components/faq/fybca/evs/Evs';
import Python from './components/faq/sybca/python/Python';
import Webtech from './components/faq/sybca/webtech/Webtech';
import Os from './components/faq/sybca/operating system/Os';
import Dbms from './components/faq/sybca/dbms/Dbms';
import Se from './components/faq/sybca/software engineering/Se';
import Java from './components/faq/sybca/java programming/Java';
import Fis from './components/faq/sybca/financial and investment skills/Fis';
import Csa from './components/faq/sybca/computer system architecture/Csa';
import Ecommerce from './components/faq/tybca/ecommerce technology/Ecommerce';
import Advance from './components/faq/tybca/advance java/Advance';
import Qa from './components/faq/tybca/quantitative aptitude/Qa';
import Linux from './components/faq/tybca/linux administration/Linux';
import Android from './components/faq/tybca/android programming/Android';
import Php from './components/faq/tybca/php programming/Php';
import Pcs from './components/faq/tybca/personality and career skills/Pcs';
import Eng from "./components/question-papers/fybca/english/Eng";
import Mat from "./components/question-papers/fybca/maths/Mat";
import P from "./components/question-papers/fybca/psc/P";
import Oop from "./components/question-papers/fybca/oops and c++/Oop";
import Statis from "./components/question-papers/fybca/statistics/Statis";
import ComNet from "./components/question-papers/fybca/computer networks/ComNet";
import Ds from "./components/question-papers/fybca/dsa/Ds";
import EnvStu from "./components/question-papers/fybca/evs/EnvStu";
import Pyt from "./components/question-papers/sybca/python/Pyt";

function App() {

  const [hideButton, setHideButton] = useState(true);
  const [hideTop,setHideTop]=useState(true);

  const hide = (h) => {
    setHideButton(h);
    setHideTop(h);
  }

  return (
    <>
      <State>
        <Router>
          {hideButton && <Bottom />}
          {hideTop && <Top />}

          <Routes>

            <Route path="/" element={<Home val={hide} />}></Route>
            <Route path="/signup" element={<Signup val={hide} />}></Route>
            <Route path="/login" element={<Login val={hide} />}></Route>

            <Route path="/books" element={<Books val={hide} />}></Route>
            <Route path="/books/fybca" element={<Fybca />}></Route>
            <Route path="/books/sybca" element={<Sybca />}></Route>
            <Route path="/books/tybca" element={<Tybca />}></Route>

            <Route path="/pyq" element={<QuestionPapers />}></Route>
            <Route path="/pyq/fybca" element={<PyqFybca />}></Route>
            <Route path="/pyq/fybca/english" element={<Eng />}></Route>
            <Route path="/pyq/fybca/maths" element={<Mat />}></Route>
            <Route path="/pyq/fybca/psc" element={<P />}></Route>
            <Route path="/pyq/fybca/oops" element={<Oop />}></Route>
            <Route path="/pyq/fybca/statistics" element={<Statis />}></Route>
            <Route path="/pyq/fybca/cn" element={<ComNet />}></Route>
            <Route path="/pyq/fybca/dsa" element={<Ds />}></Route>
            <Route path="/pyq/fybca/evs" element={<EnvStu />}></Route>

            <Route path="/pyq/sybca" element={<PyqSybca />}></Route>
            <Route path="/pyq/sybca/python" element={<Pyt />}></Route>

            <Route path="/pyq/tybca" element={<PyqTybca />}></Route>

            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/faq/fybca" element={<FaqFybca />}></Route>
            <Route path="/faq/fybca/english" element={<English />}></Route>  
            <Route path="/faq/fybca/maths" element={<Maths />}></Route> 
            <Route path="/faq/fybca/psc" element={<Psc />}></Route>
            <Route path="/faq/fybca/oops" element={<Oops />}></Route>
            <Route path="/faq/fybca/statistics" element={<Statistic />}></Route>
            <Route path="/faq/fybca/cn" element={<Cn />}></Route>
            <Route path="/faq/fybca/dsa" element={<Dsa />}></Route>
            <Route path="/faq/fybca/evs" element={<Evs />}></Route>

            <Route path="/faq/sybca" element={<FaqSybca />}></Route>
            <Route path="/faq/sybca/python" element={<Python />}></Route>
            <Route path="/faq/sybca/webtech" element={<Webtech />}></Route>
            <Route path="/faq/sybca/os" element={<Os />}></Route>
            <Route path="/faq/sybca/dbms" element={<Dbms />}></Route>
            <Route path="/faq/sybca/se" element={<Se />}></Route>
            <Route path="/faq/sybca/java" element={<Java />}></Route>
            <Route path="/faq/sybca/fis" element={<Fis />}></Route>
            <Route path="/faq/sybca/csa" element={<Csa />}></Route>

            <Route path="/faq/tybca" element={<FaqTybca />}></Route>
            <Route path="/faq/tybca/ecommerce" element={<Ecommerce />}></Route>
            <Route path="/faq/tybca/advance" element={<Advance />}></Route>
            <Route path="/faq/tybca/qa" element={<Qa />}></Route>
            <Route path="/faq/tybca/linux" element={<Linux/>}></Route>
            <Route path="/faq/tybca/android" element={<Android />}></Route>
            <Route path="/faq/tybca/php" element={<Php />}></Route>
            <Route path="/faq/tybca/pcs" element={<Pcs />}></Route>

            <Route path="/videos" element={<Videos />}></Route>
            
            <Route path="/feedback" element={<Feedback />}></Route>

            <Route path="*" element={<NotFound val={hide} />}></Route>

          </Routes>

        </Router>
      </State>
    </>
  );
}

export default App;
