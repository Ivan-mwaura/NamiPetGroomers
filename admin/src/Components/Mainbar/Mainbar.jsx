import React from "react";
import PropTypes from "prop-types";
import "./Mainbar.css";
import SidebarPages from "../../SidebarPages";
import DashTop from "../DashTop/DashTop";

const Mainbar = () => {
	return (
		<React.Fragment>
			<div className="MainbarContainer">
				<DashTop />
				<div className="MainBottom">
					<SidebarPages />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Mainbar;
