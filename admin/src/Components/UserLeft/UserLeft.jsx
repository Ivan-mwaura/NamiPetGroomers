import React, { useState } from "react";
import {
	Avatar,
	FormControlLabel,
	Switch,
	CircularProgress,
	Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import "./UserLeft.css";
import "../../Pages/Users/Users.css";

// Define the IOS switch component
const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(16px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color:
				theme.palette.mode === "light"
					? theme.palette.grey[100]
					: theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 22,
		height: 22,
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}));

const UserLeft = ({
	user,
	loading,
	error,
	handleVerificationToggle,
	showVerificationInput,
	verificationCode,
	setVerificationCode,
	handleVerifyCode,
}) => {
	const [notification, setNotification] = useState({
		open: false,
		message: "",
		severity: "",
	});

	const handleCloseNotification = () => {
		setNotification({ ...notification, open: false });
	};

	if (loading) {
		return (
			<div className="Loading">
				<CircularProgress />
			</div>
		);
	}

	if (error) {
		return <Typography color="error">Error: {error}</Typography>;
	}

	if (!user) {
		return <div>No user data available</div>;
	}

	return (
		<div className="UserLeft DisplayFlex">
			<Avatar
				src={user.profilePicture}
				alt={user.name}
				style={{ width: "8rem", height: "8rem" }}
			/>
			<span>
				{user.name}{" "}
				{user.verificationStatus === "verified" && (
					<i className="fas fa-check-circle"></i>
				)}
			</span>
			<p>{user.email}</p>
			<p>
				<strong>Role:</strong> {user.userType}
			</p>
			<p>
				{new Date(user.lastLogin).toLocaleString("en-US", {
					month: "short",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
				})}
			</p>

			<FormControlLabel
				control={
					<IOSSwitch
						checked={user.verificationStatus === "verified"}
						onChange={handleVerificationToggle}
						disabled={user.verificationStatus === "verified"}
					/>
				}
				label={user.verificationStatus === "verified" ? "Verified" : "Verify"}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: "1rem",
					fontSize: "0.8rem !important",
					fontWeight: "400 !important",
				}}
			/>

			{showVerificationInput && (
				<div className="VerificationInput">
					<CustomTextField
						placeholder="Verification Code"
						value={verificationCode}
						onChange={(e) => setVerificationCode(e.target.value)}
						type="text"
						variant="outlined"
						InputProps={{
							endAdornment: (
								<CustomButton
									onClick={handleVerifyCode}
									variant="contained"
									color="primary"
									size="small"
									text="Verify"
									disabled={loading}
								/>
							),
						}}
					/>
				</div>
			)}

			<Snackbar
				open={notification.open}
				autoHideDuration={6000}
				onClose={handleCloseNotification}
			>
				<Alert
					onClose={handleCloseNotification}
					severity={notification.severity}
					sx={{ width: "100%" }}
				>
					{notification.message}
				</Alert>
			</Snackbar>
		</div>
	);
};

UserLeft.propTypes = {
	user: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.string,
	handleVerificationToggle: PropTypes.func,
	showVerificationInput: PropTypes.bool,
	verificationCode: PropTypes.string,
	setVerificationCode: PropTypes.func,
	handleVerifyCode: PropTypes.func,
};

export default UserLeft;
