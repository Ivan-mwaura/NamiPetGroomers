import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from '../../assets/images/nami-logo.jpg';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [closingMenu, setClosingMenu] = useState(false);
    const [route, setRoute] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("UserToken");
        const userName = localStorage.getItem("UserEmail");

        if (token) {
            setIsAuthenticated(true);
        }
        if (userName) {
            setUserName(userName);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpenMenu(false);
                setClosingMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (route) {
           window.location.href = route;
        }
    }, [route, navigate]);

    const handleClick = () => {
        if (openMenu) {
            setClosingMenu(true);
            setTimeout(() => {
                setOpenMenu(false);
                setClosingMenu(false);
            }, 500); // Duration of the slide up animation
        } else {
            setOpenMenu(true);
        }
    };

    const handleRouteTo = (route) => {
        setRoute(route);
    }

    const handleRouteToLogin = (route) => {
        if (isAuthenticated) {
            toast("You are already logged in");
        } else {
            setRoute(route);
        }
    }

    const handleRouteToLogOut = (route) => {
        if (isAuthenticated) {
            localStorage.clear();
            setIsAuthenticated(false);
            setUserName("");
            toast("You have successfully logged out");
            setRoute(route);
        } else {
            toast("You are not logged in");
        }
    }

    return (
        <div className="navbar">

            <div className="navbar-logo" onClick={() => handleRouteTo("/")}>
                <img src={logo} alt="logo" />
                <h1>Nami Petgroomers</h1>
            </div>

            <div className={`${openMenu ? "openSidenav" : ""} ${closingMenu ? "closingSidenav" : ""} ${!openMenu && !closingMenu ? "navbar-links" : ""}`}>
                <ul>
                    <li className="link-1" onClick={() => handleRouteTo("/")}>HOME</li>
                    <li onClick={() => handleRouteTo("/AboutUs")}>ABOUT US</li>
                    <li onClick={() => handleRouteTo("/Veterinarians")}>VETERINARIAN</li>
                    <li onClick={() => handleRouteTo("/Services")}>SERVICES</li>
                    <li onClick={() => handleRouteTo("/Gallery")}>GALLERY</li>
                    <li onClick={() => handleRouteTo("/Pricing")}>PRICING</li>
                    <li onClick={() => handleRouteTo("/Blogs")}>BLOG</li>
                    <li onClick={() => handleRouteTo("/ContactUs")}>CONTACT</li>
                </ul>
            </div>

            <div className="cart-icon">
                <FaShoppingCart size={24} onClick={() => handleRouteTo("/CustomerCart")} />
            </div>

            <div className="login">
                <button className="login-btn" onClick={() => handleRouteToLogin("/login")}>{ isAuthenticated ? `Logged in as : ${userName} `:  "Log in"}</button>
                <button className="login-btn" onClick={() => handleRouteToLogOut("/login")}>Log Out</button>
            </div>

            <div className="collapsible-menu" onClick={handleClick}>
                <i className="fa fa-bars">&nbsp;&nbsp;</i>
            </div>
        </div>
    );
};

export default Navbar;
