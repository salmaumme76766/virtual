import React from "react";
import { Link,Outlet } from "react-router-dom";

function HomeHeader() {

return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            
            </Link>
            <div className="collapse navbar-collapse justify-content-end"
            id="navbaNav"
            >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-link">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
        </nav>
        <div className="">
            <Outlet/>
            </div>
            </>
);
};
export default HomeHeader;