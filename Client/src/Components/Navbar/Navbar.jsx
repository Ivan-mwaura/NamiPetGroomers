import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import logo from '../../assets/images/nami-logo.jpg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [closingMenu, setClosingMenu] = useState(false);
    const [route, setRoute] = useState(null);
    const navigate = useNavigate();

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
        
        setTimeout(() => {
           setOpenMenu(false);         
        },200)
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

            <div className="collapsible-menu" onClick={handleClick}>
                <i className="fa fa-bars">&nbsp;&nbsp;</i>
            </div>
        </div>
    );
};

export default Navbar;
