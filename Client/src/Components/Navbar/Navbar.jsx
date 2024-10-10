import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from '../../assets/images/nami-logo.jpg';
import { toast } from "react-toastify";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [userInitial, setUserInitial] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("UserToken");
        const userEmail = localStorage.getItem("UserEmail");

        if (token) {
            setIsAuthenticated(true);
        }
        if (userEmail) {
            const initial = userEmail.charAt(0).toUpperCase();
            setUserInitial(initial);
            setUserName(userEmail.split('@')[0]);
        }
    }, []);

    const handleLogOut = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        setUserName("");
        setUserInitial("");
        toast("You have successfully logged out");
        window.location.href = "/login";
    };

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={() => window.location.href = "/"}>
                <img src={logo} alt="Nami Petgroomers logo" />
                <h1>Nami Petgroomers</h1>
            </div>

            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li className="essential" onClick={() => window.location.href = "/"}>HOME</li>
                    <li className="essential" onClick={() => window.location.href = "/AboutUs"}>ABOUT US</li>
                    <li className="important" onClick={() => window.location.href = "/Services"}>SERVICES</li>
                    <li className="critical" onClick={() => window.location.href = "/ContactUs"}>CONTACT</li>
                    <li className="important" onClick={() => window.location.href = "/Gallery"}>GALLERY</li>
                    <li onClick={() => window.location.href = "/Blogs"}>BLOGS</li>
                    <li onClick={() => window.location.href = "/Pricing"}>PRICING</li>
                    <li onClick={() => window.location.href = "/Veterinarians"}>VETERINARIANS</li>
                    <li className="critical">
                        <FaShoppingCart onClick={() => window.location.href = "/CustomerCart"} />
                    </li>
                    {isAuthenticated ? (
                        < div style={{display: "flex", alignItems:"center"}}>
                            <li className="essential">
                                <button className="login-btn" onClick={handleLogOut}>
                                    Log Out
                                </button>
                            </li>
                            <li className="essential user-display">
                                <div className="user-initial">{userInitial}</div>
                                {userName}
                            </li>
                        </div>
                    ) : (
                        <li className="essential">
                            <button className="login-btn" onClick={() => window.location.href = "/login"}>Log in</button>
                        </li>
                    )}
                </ul>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                <i className="fa fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
