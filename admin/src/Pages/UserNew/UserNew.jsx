import React, { useState } from "react";
import axios from "axios";
import "./UserNew.css";
import UserNewRight from "../../Components/UserNewRight/UserNewRight";
import UserNewLeft from "../../Components/UserNewLeft/UserNewLeft";
import { Snackbar, Alert } from "@mui/material";

const UserNew = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [userNewData, setUserNewData] = useState({
		name: "",
		email: "",
		phone: "",
		username: "",
		location: "",
		userType: "",
		description: "",
		profilePicture: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserNewData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileChange = async (event) => {
		const file = event.target.files[0];
		const CLOUD_NAME = "agrisolve";
		const UPLOAD_PRESET = "agrisolve";

		setLoading(true);

		try {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", UPLOAD_PRESET);

			const uploadResponse = await axios.post(
				`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
				formData
			);

			setUserNewData((prevData) => ({
				...prevData,
				profilePicture: uploadResponse.data.secure_url,
			}));
		} catch (err) {
			setError("Failed to upload image");
		} finally {
			setLoading(false);
		}
	};

	const addUser = async (userData) => {
		try {
			const response = await axios.post(
				"http://localhost:3008/users",
				userData
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				console.error("Error response data:", error.response.data);
				throw new Error(error.response.data.message);
			} else {
				console.error("Error:", error.message);
				throw new Error("Failed to add user");
			}
		}
	};

	const handleSubmit = async () => {
		try {
			setLoading(true);
			await addUser(userNewData);
			setUserNewData({
				name: "",
				email: "",
				phone: "",
				username: "",
				location: "",
				userType: "",
				description: "",
				profilePicture: "",
			});
			setSuccess("User added successfully!");
			setError(null);
		} catch (err) {
			setError(err.message);
			setSuccess(null);
		} finally {
			setLoading(false);
		}
	};

	const editUser = async (userData) => {
		try {
			const response = await axios.patch(
				`http://localhost:3008/users/${userData.id}`,
				userData
			);
			return response.data;
		} catch (error) {
			if (error.response) {
				console.error("Error response data:", error.response.data);
				throw new Error(error.response.data.message);
			} else {
				console.error("Error:", error.message);
				throw new Error("Failed to edit user");
			}
		}
	};

	const handleEditSubmit = async () => {
		try {
			setLoading(true);
			await editUser(userNewData);
			setSuccess("User edited successfully!");
			setError(null);
		} catch (err) {
			setError(err.message);
			setSuccess(null);
		} finally {
			setLoading(false);
		}
	};

	const handleCloseSnackbar = () => {
		setError(null);
		setSuccess(null);
	};

	console.log(userNewData);
	if (loading) {
		return (
			<div className="Loading">
				<div className="Spinner">
					
				</div>
			</div>
		);
	}

	return (
		<div className="UserNew User">
			<div className="UserNewContainer UserContainer">
				<UserNewLeft
					userNewData={userNewData}
					handleFileChange={handleFileChange}
				/>
				<UserNewRight
					userNewData={userNewData}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					handleEditSubmit={handleEditSubmit}
				/>
			</div>
			<Snackbar
				open={Boolean(error)}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity="error"
					sx={{ width: "100%" }}
				>
					{error}
				</Alert>
			</Snackbar>
			<Snackbar
				open={Boolean(success)}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity="success"
					sx={{ width: "100%" }}
				>
					{success}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default UserNew;
