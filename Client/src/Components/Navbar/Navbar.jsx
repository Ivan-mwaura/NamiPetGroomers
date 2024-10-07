import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from '../../assets/images/nami-logo.jpg';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [route, setRoute] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [userInitial, setUserInitial] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("UserToken");
        const userEmail = localStorage.getItem("UserEmail");

        if (token) {
            setIsAuthenticated(true);
        }

        if (userEmail) {
            const nameFromEmail = userEmail.split('@')[0];
            setUserName(nameFromEmail);
            setUserInitial(nameFromEmail.charAt(0).toUpperCase());
        }
    }, []);

    const handleRouteTo = (route) => {
        setRoute(route);
    };

    useEffect(() => {
        if (route) {
           window.location.href = route;
        }
    }, [route]);

    const handleRouteToLogin = (route) => {
        localStorage.clear();
        if (isAuthenticated) {
            toast("You are already logged in");
        } else {
            setRoute(route);
        }
    };

    const handleRouteToLogOut = (route) => {
        if (isAuthenticated) {
            localStorage.clear();
            setIsAuthenticated(false);
            setUserName("");
            setUserInitial("");
            toast("You have successfully logged out");
            setRoute(route);
        } else {
            toast("You are not logged in");
        }
    };

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo" onClick={() => handleRouteTo("/")}>
                <img src={logo} alt="logo" />
                <h1>Nami Petgroomers</h1>
            </div>

            <div className={`navbar-links ${openMenu ? "open" : ""}`}>
                <ul>
                    <li onClick={() => handleRouteTo("/")}>HOME</li>
                    <li onClick={() => handleRouteTo("/AboutUs")}>ABOUT US</li>
                    <li onClick={() => handleRouteTo("/Veterinarians")}>VETERINARIAN</li>
                    <li onClick={() => handleRouteTo("/Services")}>SERVICES</li>
                    <li onClick={() => handleRouteTo("/Gallery")}>GALLERY</li>
                    <li onClick={() => handleRouteTo("/Pricing")}>PRICING</li>
                    <li onClick={() => handleRouteTo("/Blogs")}>BLOG</li>
                    <li onClick={() => handleRouteTo("/ContactUs")}>CONTACT</li>
                    <li>
                        <FaShoppingCart size={24} onClick={() => handleRouteTo("/CustomerCart")} />
                    </li>
                    <li>
                        <button className="login-btn" onClick={() => handleRouteToLogin("/login")}>
                            {isAuthenticated ? (
                                <span className="user-display">
                                    <div className="user-initial">{userInitial}</div>
                                    {userName}
                                </span>
                            ) : "Log in"}
                        </button>
                    </li>
                    <li>
                        {isAuthenticated && (
                            <button className="login-out-btn" onClick={() => handleRouteToLogOut("/login")}>Log Out</button>
                        )}
                    </li>
                </ul>
            </div>

            <div className="collapsible-menu" onClick={handleClick}>
                <i className="fa fa-bars">&nbsp;&nbsp;</i>
            </div>
        </div>
    );
};

export default Navbar;
