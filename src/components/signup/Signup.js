import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Signup.css";
import user from "../../icons/user.png";
import mail from "../../icons/email.png";
import pw from "../../icons/password.png";
import cpw from "../../icons/cpassword.png";
import signup from "../../icons/signup.png";
import { useState } from "react";
import axios from "axios";

const Signup = (props) => {

    const location = useLocation();
    if (location.pathname == "/signup") {
        props.val(false);
    }
    else{
        props.val(true);
    }

    const navigate=useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const [userspan, setUserspan] = useState("");
    const [emailspan, setEmailspan] = useState("");
    const [passwordspan, setPasswordspan] = useState("");
    const [cpasswordspan, setCpasswordspan] = useState("");

    const usernameChange = (e) => {
        setUsername(e.target.value);

        if (e.target.value.length == 1 || e.target.value.length > 1) {
            setUserspan("");
            document.getElementById("username").style.outlineColor = "rgb(43, 196, 145)";
        }
    };

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
            if (e.target.value.length < 8) {
                setPasswordspan("* Password must be 8 characters long");
                document.getElementById("password").style.outlineColor = "red";
            }
            else {
                setPasswordspan("");
                document.getElementById("password").style.outlineColor = "rgb(43, 196, 145)";
            }
        }
    };

    const cpasswordChange = (e) => {
        setCpassword(e.target.value);

        if (e.target.value.length == 1 || e.target.value.length > 1) {
            setCpasswordspan("");
            document.getElementById("cpassword").style.outlineColor = "rgb(43, 196, 145)";
        }
    };

    const submit = (e) => {
        e.preventDefault();

        if (username.length == 0 || username.length == null) {
            setUserspan("* Username cannot be blank");
            document.getElementById("username").style.outlineColor = "red";
        }
        if (email.length == 0 || email.length == null) {
            setEmailspan("* Email cannot be blank");
            document.getElementById("email").style.outlineColor = "red";
        }
        if (password.length == 0 || password.length == null) {
            setPasswordspan("* Password cannot be blank");
            document.getElementById("password").style.outlineColor = "red";
        }
        if (cpassword.length == 0 || cpassword.length == null) {
            setCpasswordspan("* Confirm Password cannot be blank");
            document.getElementById("cpassword").style.outlineColor = "red";
        }
        if (cpassword.length == 1 || cpassword.length > 1) {
            if (cpassword !== password) {
                setCpasswordspan("* Password not matching");
                document.getElementById("cpassword").style.outlineColor = "red";
            }
            else {
                setCpasswordspan("");
                document.getElementById("cpassword").style.outlineColor = "rgb(43, 196, 145)";

                try {
                    axios.post("http://localhost:2000/signup", { username, email, password })
                        .then((res) => {
                            if (res.data == "exists") {
                                alert("User already exists please login");
                            }
                            if (res.data == "created") {
                                setUsername("");
                                setEmail("");
                                setPassword("");
                                setCpassword("");
                                alert("New User created Successfully");
                                navigate("/login");
                            }

                        })
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    };



    return (
        <div id="signup-div">
            <form method="post" id="signup-form" onSubmit={submit}>

                <section className="signup-section">
                    <img src={user} className="signup-icon"></img>
                    <input type="text" id="username" className="signup-input" placeholder="Username" onChange={usernameChange} value={username}></input>
                </section>
                <span className="span">{userspan}</span>

                <section className="signup-section">
                    <img src={mail} className="signup-icon"></img>
                    <input type="email" className="signup-input" id="email" placeholder="Email" onChange={emailChange} value={email}></input>
                </section>
                <span className="signup-span">{emailspan}</span>

                <section className="signup-section">
                    <img src={pw} className="signup-icon"></img>
                    <input type="password" className="signup-input" id="password" placeholder="Password" onChange={passwordChange} value={password}></input>
                </section>
                <span className="signup-signup-span">{passwordspan}</span>

                <section className="signup-section">
                    <img src={cpw} className="signup-icon"></img>
                    <input type="password" className="signup-input" id="cpassword" placeholder="Confirm Password" onChange={cpasswordChange} value={cpassword}></input>
                </section>
                <span className="signup-span">{cpasswordspan}</span>

                <button type="submit" id="signup-btn">
                    <img src={signup} id="signup-icon"></img>
                    Sign Up
                </button>

                <span>OR</span>

                <Link to="/login">Login</Link>

            </form>
        </div>
    );
}
export default Signup;