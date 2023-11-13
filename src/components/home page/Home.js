import { useLocation } from "react-router-dom";
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
            <nav className="w-full h-12 flex items-center justify-between sticky bg-black top-0">

                <img src={logo} className="w-20 h-15"></img>

                <div className="flex items-center justify-center gap-2">

                    <Link to="/login" className="w-20 h-9 flex items-center justify-center rounded-md text-md font-semibold bg-white text-green-500 hover:bg-green-500 hover:text-white">
                        Login
                    </Link>

                    <Link to="/signup" className="w-20 h-9 flex items-center justify-center rounded-md text-md font-semibold bg-white text-green-500 hover:bg-green-500 hover:text-white">
                        Sign Up
                    </Link>

                </div>

            </nav>

            <div className="text-center">
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