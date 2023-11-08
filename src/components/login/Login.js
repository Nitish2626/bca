import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import mail from "../../icons/email.png";
import pw from "../../icons/password.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <div id="login-div">
            <form method="post" id="login-form" onSubmit={submit}>

                <section className="login-section">
                    <img src={mail} className="login-icon"></img>
                    <input type="email" className="login-input" id="email" placeholder="Email" onChange={emailChange} value={email}></input>
                </section>
                <span className="login-span">{emailspan}</span>

                <section className="login-section">
                    <img src={pw} className="login-icon"></img>
                    <input type="password" className="login-input" id="password" placeholder="Password" onChange={passwordChange} value={password}></input>
                </section>
                <span className="login-span">{passwordspan}</span>

                <button type="submit" id="login-btn">
                    <img id="login-icon"></img>
                    Login
                </button>

                <span>OR</span>

                <Link to="/signup">Signup</Link>

            </form>
        </div>
    );
}
export default Login;