import { Link, useLocation, useNavigate } from "react-router-dom";
import user from "../../icons/user.png";
import mail from "../../icons/email.png";
import pw from "../../icons/password.png";
import cpw from "../../icons/cpassword.png";
import signup from "../../icons/signup.png";
import { useState } from "react";
import axios from "axios";
import Section from "../section/Section";

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
        <div className="w-full h-screen flex items-center justify-center">

            <form method="post" className="w-11/12 flex flex-col items-center justify-center rounded-md py-3 shadow-[0px_0px_5px_0px_black]" onSubmit={submit}>

                <Section src={user} type="text" id="username" placeholder="Username" change={usernameChange} value={username} span={userspan} />

                <Section src={mail} type="email" id="email" placeholder="Email" change={emailChange} value={email} span={emailspan} />

                <Section src={pw} type="password" id="password" placeholder="Password" change={passwordChange} value={password} span={passwordspan} />

                <Section src={cpw} type="password" id="cpassword" placeholder="Confirm Password" change={cpasswordChange} value={cpassword} span={cpasswordspan} />

                <button type="submit" className="w-28 h-9 flex items-center justify-evenly bg-blue-600 text-white rounded-lg text-lg my-3 shadow-[2px_2px_10px_0px_grey] hover:bg-white hover:text-blue-600">

                    <img src={signup} className="w-6 h-6"></img>

                    Sign Up

                </button>

                <span className="my-2 text-gray-400">
                    OR
                </span>

                <Link to="/login" className="text-blue-400 text-lg font-semibold">
                    Login
                </Link>

            </form>
        </div>
    );
}
export default Signup;