import React, { useState } from "react";
import "./UserRight.css";
import CustomTextField from "../../Utils/CustomTextField";
import {
	CircularProgress,
	Typography,
	MenuItem,
	Snackbar,
	Alert,
} from "@mui/material";
import CustomButton from "../../Utils/CustomButton";
import axios from "axios";

const UserRight = ({ user, setUser, loading, error }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [tempUser, setTempUser] = useState(user);
	const [notification, setNotification] = useState({
		open: false,
		message: "",
		severity: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTempUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const handleEditClick = () => {
		setIsEditable(true);
		setTempUser(user); // Make a copy of the user data to edit
	};

	const handleCancelClick = () => {
		setIsEditable(false);
		setTempUser(user); // Reset the temporary user data
	};

	const handleUpdateClick = async () => {
		try {
			const res = await axios.patch(
				`http://localhost:3008/users/${user._id}`,
				tempUser
			);
			if (res.status === 200) {
				setUser(res.data);
				setIsEditable(false);
				setNotification({
					open: true,
					message: "User updated successfully.",
					severity: "success",
				});
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} else {
				console.error("Unexpected response status:", res.status);
				setNotification({
					open: true,
					message: "Unexpected response status.",
					severity: "error",
				});
			}
		} catch (err) {
			console.error("Failed to update user:", err.message);
			setNotification({
				open: true,
				message: "Failed to update user.",
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
				<CircularProgress />
			</div>
		);
	}

	if (error) {
		return <Typography color="error">Error: {error}</Typography>;
	}

	return (
		<div className="UserRight DisplayFlex">
			<span>User Details</span>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="name"
					label="Name"
					name="name"
					type="text"
					variant="outlined"
					value={tempUser?.name || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					disabled={!isEditable}
				/>
				<CustomTextField
					id="phone"
					label="Phone"
					name="phone"
					type="text"
					variant="outlined"
					value={tempUser?.phone || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					disabled={!isEditable}
				/>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="email"
					label="Email"
					name="email"
					type="text"
					variant="outlined"
					value={tempUser?.email || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					disabled={!isEditable}
				/>
				<CustomTextField
					id="userType"
					label="Role"
					name="userType"
					variant="outlined"
					value={tempUser?.userType || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					select
					disabled={!isEditable}
				>
					<MenuItem value="admin">Admin</MenuItem>
					<MenuItem value="user">User</MenuItem>
					<MenuItem value="moderator">Moderator</MenuItem>
					<MenuItem value="subscriber">Subscriber</MenuItem>
					<MenuItem value="guest">Guest</MenuItem>
				</CustomTextField>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="status"
					label="Status"
					name="status"
					variant="outlined"
					value={tempUser?.verificationStatus || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					select
					disabled={!isEditable}
				>
					<MenuItem value="verified">Verified</MenuItem>
					<MenuItem value="pending">Pending</MenuItem>
					<MenuItem value="terminated">Terminated</MenuItem>
				</CustomTextField>
				<CustomTextField
					id="joined"
					label="Joined"
					variant="outlined"
					value={
						new Date(user?.created_at).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						}) || ""
					}
					disabled
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="description"
					label="Description"
					name="description"
					variant="outlined"
					value={tempUser?.description || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					multiline
					rows={4}
					disabled={!isEditable}
				/>
			</div>
			<div className="UserButtons DisplayFlex">
				{!isEditable ? (
					<CustomButton
						text="Edit User"
						variant="outlined"
						onClick={handleEditClick}
						sx={{
							marginRight: "10px",
							color: "var(--primary-dark)",
							border: "1.5px solid var(--primary-dark)",
							Transition: "all 0.3s ease-in-out",
							"&:hover": {
								backgroundColor: "transparent !important",
								color: "var(--primary-light)",
								border: "1.5px solid var(--primary-light)",
							},
						}}
						size="small"
					/>
				) : (
					<>
						<CustomButton
							text="Cancel"
							variant="outlined"
							onClick={handleCancelClick}
							size="small"
							sx={{
								marginRight: "10px",
								color: "var(--error-light)",
								border: "1.5px solid var(--error-light)",
								"&:hover": {
									backgroundColor: "transparent !important",
									color: "var(--error-dark)",
									border: "1.5px solid var(--error-dark)",
								},
							}}
						/>
						<CustomButton
							text="Update"
							variant="contained"
							onClick={handleUpdateClick}
							size="small"
							sx={{
								color: "#fff",
								backgroundColor: "var(--success-darker)",
								"&:hover": {
									backgroundColor: "var(--success-dark) !important",
									color: "var(--success-lighter)",
								},
							}}
						/>
					</>
				)}
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

export default UserRight;
