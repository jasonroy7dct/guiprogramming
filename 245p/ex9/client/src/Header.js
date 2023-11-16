import "./Header.css";

// External Libraries
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <a href="#default" className="logo">
                    Jason Hsieh
                </a>
                <div className="headerRight">
                    <Link to="/">Landing View</Link>
                    <Link to="exampledataview">Example Data View</Link>
                </div>
            </div>
        </>
    );
}

export default Header;