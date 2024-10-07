import "./DashTop.css";

import "react-loading-skeleton/dist/skeleton.css";

import PropTypes from "prop-types";
import {AppContext} from "../../Context/ApiContext";
import { useContext } from "react";

//import {useNavigate} from "react-router-dom";

const DashTop = () => {

	//const navigate = useNavigate();
	const {isToggled, setIsToggled} = useContext(AppContext);

	const handleMenuToggler = () => {

		setIsToggled(!isToggled);

		{/*if(isToggled){
			document.querySelector('.Sidebar').style.width = "0px";
			document.querySelector('.Sidebar').style.display = "none";
			document.querySelector('.Main').style.marginLeft = "0px";


		}else{
			document.querySelector('.Sidebar').style.width = "250px";
			document.querySelector('.Sidebar').style.display = "block";
			document.querySelector('.Main').style.marginLeft = "250px";
		}*/}
	}


	const handleLogout = () => {
        localStorage.clear(); // Clear user session data from local storage
        window.location.href = '/login';// Redirect to the login page
    };

	return (

			<div className="DashTop">
				
					
						<div className="DashLeft">
							<div className="MenuToggler">
								<i className="fa fa-bars" onClick={handleMenuToggler}></i>
							</div>
							<p>
								Welcome 
								{/*<span>
									<Skeleton width={150} />
								</span>*/}
							</p>
						</div>

						<div
                                className="Logout"
                                onClick={handleLogout}
                                style={{ cursor: "pointer", marginLeft: "15px", color: "red" }}
                            >
                                <i className="fa fa-sign-out-alt" style={{ marginRight: "5px" }}></i>
                                <span>Logout</span>
                            </div>

			</div>			

						
	);
};

export default DashTop;

// props validation

DashTop.propTypes = {
	user: PropTypes.object,
};
