import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./User.css";
import UserRight from "../../Components/UserRight/UserRight";
import UserLeft from "../../Components/UserLeft/UserLeft";
import { Snackbar, Alert } from "@mui/material";

const User = () => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [showVerificationInput, setShowVerificationInput] = useState(false);
	const [verificationCode, setVerificationCode] = useState("");
	const [notification, setNotification] = useState({
		open: false,
		message: "",
		severity: "",
	});

	const fetchUser = async () => {
		try {
			const res = await axios.get(`http://localhost:3008/users/${id}`);
			setUser(res.data);
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, [id]);

	const handleVerificationToggle = async (event) => {
		if (!event.target.checked) return; // Prevent switching back

		// Show verification input
		setShowVerificationInput(true);

		try {
			const res = await axios.post(
				"http://localhost:3008/users/send-verification",
				{
					email: user.email,
				}
			);
			if (res.status === 200) {
				setNotification({
					open: true,
					message: "Verification link has been sent to your email.",
					severity: "success",
				});
			} else {
				setNotification({
					open: true,
					message: "Failed to send verification link.",
					severity: "error",
				});
			}
		} catch (err) {
			setNotification({
				open: true,
				message: "Failed to send verification link.",
				severity: "error",
			});
		}
	};

	const handleVerifyCode = async () => {
		try {
			const res = await axios.post("http://localhost:3008/users/verify-code", {
				email: user.email,
				code: verificationCode,
			});
			if (res.status === 200) {
				setUser((prevUser) => ({
					...prevUser,
					verificationStatus: "verified",
				}));
				setShowVerificationInput(false);
				setNotification({
					open: true,
					message: "Verification successful.",
					severity: "success",
				});
			} else {
				setNotification({
					open: true,
					message: "Verification failed.",
					severity: "error",
				});
			}
		} catch (err) {
			setNotification({
				open: true,
				message: "Verification failed.",
				severity: "error",
			});
		}
	};

	const handleCloseNotification = () => {
		setNotification({ ...notification, open: false });
	};

	if (loading) {
		return (
			<div className="Loading">
				<div className="Spinner"></div>
			</div>
		);
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!user) {
		return <div>No user data available</div>;
	}

	return (
		<div className="User">
			<div className="UserContainer">
				<UserLeft
					user={user}
					fetchUser={fetchUser}
					loading={loading}
					error={error}
					handleVerificationToggle={handleVerificationToggle}
					showVerificationInput={showVerificationInput}
					verificationCode={verificationCode}
					setVerificationCode={setVerificationCode}
					handleVerifyCode={handleVerifyCode}
				/>
				<UserRight
					user={user}
					setUser={setUser}
					loading={loading}
					error={error}
				/>
			</div>
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

export default User;
