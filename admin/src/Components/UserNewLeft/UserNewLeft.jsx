import React, { useRef } from "react";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import "./UserNewLeft.css";

const UserNewLeft = ({ userNewData, handleFileChange }) => {
	const fileInputRef = useRef(null);

	const handleUpdateProfilePic = () => {
		fileInputRef.current.click();
	};

	return (
		<div className="UserNewLeft UserLeft DisplayFlex">
			<Avatar
				src={userNewData.profilePicture}
				alt={userNewData.name}
				style={{ width: "8rem", height: "8rem" }}
			/>
			<div className="UpdatePhoto" onClick={handleUpdateProfilePic}>
				<i className="fa fa-camera"></i>
				<span>Upload photo</span>
			</div>
			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				style={{ display: "none" }}
				onChange={handleFileChange}
			/>
		</div>
	);
};

UserNewLeft.propTypes = {
	userNewData: PropTypes.object.isRequired,
	handleFileChange: PropTypes.func.isRequired,
};

export default UserNewLeft;
