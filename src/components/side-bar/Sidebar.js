import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {

    return (
        <div id="sidebar-div">

            <NavLink to="/about" className="link">
                <button className="sidebar-btn">
                    <svg
                        viewBox="0 0 1024 1024"
                    >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
                    </svg>
                    <h1 className="h1">About Us</h1>
                </button>
            </NavLink>

            <NavLink to="/contact" className="link">
                <button className="sidebar-btn">
                    <svg
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2m-8 2.75A2.25 2.25 0 0114.25 9 2.25 2.25 0 0112 11.25 2.25 2.25 0 019.75 9 2.25 2.25 0 0112 6.75M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
                    </svg>
                    <h1 className="h1">Contact Us</h1>
                </button>
            </NavLink>

            <NavLink to="/feedback" className="link">
                <button className="sidebar-btn">
                    <svg
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8 16A8 8 0 108 0a8 8 0 000 16zM4 5a1 1 0 011-1h6a1 1 0 011 1v5a1 1 0 01-1 1H8.707l-1.853 1.854A.5.5 0 016 12.5V11H5a1 1 0 01-1-1V5z"
                        />
                    </svg>
                    <h1 className="h1">Feedback</h1>
                </button>
            </NavLink>

        </div>
    );
}
export default Sidebar;