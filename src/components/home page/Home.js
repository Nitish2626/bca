import { useLocation } from "react-router-dom";
import "./Home.css";
import logo from "../../icons/logo.png";
import { Link } from "react-router-dom";

const Home = (props) => {

    const location=useLocation();
    if(location.pathname=="/"){
        props.val(false);
    }
    else{
        props.val(true);
    }

    return (
        <>
            <nav id="nav-bar">
                <img src={logo} id="logo"></img>
                <div id="home-btn-div">
                    <Link to="/login" className="home-btn">Login</Link>
                    <Link to="/signup" className="home-btn">Sign Up</Link>
                </div>
            </nav>

            <div id="home-div">
                <p>
                    lorem ipsufirygihrugy jrigygutrih uhfgrgiugrih greiyhuyjghtiutrjhh gkjrfkthgoith thtlhihogpweroier efirowaeoiww feegiorgr spjhfuifg uisfuiweaoef fuieuiewoewt feuieguie hjbcuefiuefg efuieguiugrejkuig fhjguguiefioaw fuieeiuefowf wiowffuf fwuififewaiaefbegjekfejgieogiegh uieugiegiug
                </p>
                <p>
                    lorem ipsufirygihrugy jrigygutrih uhfgrgiugrih greiyhuyjghtiutrjhh gkjrfkthgoith thtlhihogpweroier efirowaeoiww feegiorgr spjhfuifg uisfuiweaoef fuieuiewoewt feuieguie hjbcuefiuefg efuieguiugrejkuig fhjguguiefioaw fuieeiuefowf wiowffuf fwuififewaiaefbegjekfejgieogiegh uieugiegiug
                </p>
                <p>
                    lorem ipsufirygihrugy jrigygutrih uhfgrgiugrih greiyhuyjghtiutrjhh gkjrfkthgoith thtlhihogpweroier efirowaeoiww feegiorgr spjhfuifg uisfuiweaoef fuieuiewoewt feuieguie hjbcuefiuefg efuieguiugrejkuig fhjguguiefioaw fuieeiuefowf wiowffuf fwuififewaiaefbegjekfejgieogiegh uieugiegiug
                </p>
                <p>
                    lorem ipsufirygihrugy jrigygutrih uhfgrgiugrih greiyhuyjghtiutrjhh gkjrfkthgoith thtlhihogpweroier efirowaeoiww feegiorgr spjhfuifg uisfuiweaoef fuieuiewoewt feuieguie hjbcuefiuefg efuieguiugrejkuig fhjguguiefioaw fuieeiuefowf wiowffuf fwuififewaiaefbegjekfejgieogiegh uieugiegiug
                </p>
                <p>
                    lorem ipsufirygihrugy jrigygutrih uhfgrgiugrih greiyhuyjghtiutrjhh gkjrfkthgoith thtlhihogpweroier efirowaeoiww feegiorgr spjhfuifg uisfuiweaoef fuieuiewoewt feuieguie hjbcuefiuefg efuieguiugrejkuig fhjguguiefioaw fuieeiuefowf wiowffuf fwuififewaiaefbegjekfejgieogiegh uieugiegiug
                </p>
            </div>
        </>
    );
}
export default Home;