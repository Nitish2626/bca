import { useLocation, useNavigate } from "react-router-dom";
import mail from "../../icons/email.png";
import pw from "../../icons/password.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Section from "../section/Section";

const Login = (props) => {

    const location = useLocation();
    if (location.pathname == "/login") {
        props.val(false);
    }

    const navigate=useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailspan, setEmailspan] = useState("");
    const [passwordspan, setPasswordspan] = useState("");

    const emailChange = (e) => {
        setEmail(e.target.value);

        if (e.target.value.length == 1 || e.target.value.length > 1) {
            setEmailspan("");
            document.getElementById("email").style.outlineColor = "rgb(43, 196, 145)";
        }
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);

        if (e.target.value.length == 1 || e.target.value.length > 1) {
            setPasswordspan("");
            document.getElementById("password").style.outlineColor = "rgb(43, 196, 145)";
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (email.length == 0 || email.length == null) {
            setEmailspan("* Email cannot be blank");
            document.getElementById("email").style.outlineColor = "red";
        }
        if (password.length == 0 || password.length == null) {
            setPasswordspan("* Password cannot be blank");
            document.getElementById("password").style.outlineColor = "red";
        }

        try {
            axios.post("http://localhost:2000/login", { email, password })
            .then((res)=>{
                if(res.data=="not exists"){
                    alert("User doesn't exists please signup");
                }
                if(res.data=="Invalid" || res.data=="Unsuccessful"){
                    alert("Please enter valid Creditentials");
                }
                if(res.data=="Success"){
                    alert("Login Successful");
                    navigate("/books");
                }
            })
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">

            <form method="post" className="w-11/12 flex flex-col items-center justify-center rounded-lg shadow-[0px_0px_5px_0px_black] py-4" onSubmit={submit}>

                <Section src={mail} type="email" id="email" placeholder="Email" change={emailChange} value={email} span={emailspan} /> 

                <Section src={pw} type="password" id="password" placeholder="Password" change={passwordChange} value={password} span={passwordspan} />

                <button type="submit" className="w-28 h-9 flex items-center justify-evenly bg-blue-500 rounded-lg text-white mt-2 text-lg shadow-[2px_2px_10px_0px_grey] hover:bg-white hover:text-blue-500">

                    <img className="w-6 h-6"></img>

                    Login

                </button>

                <span className="my-2 text-gray-400">
                    OR
                </span>

                <Link to="/signup" className="text-blue-400 text-lg font-semibold">
                    Signup
                </Link>

            </form>
        </div>
    );
}
export default Login;