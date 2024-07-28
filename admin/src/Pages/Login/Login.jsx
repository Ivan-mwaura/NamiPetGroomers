import { useState, useContext } from "react";
import axios from "axios";
import Logo from "../../assets/Logo.png";
import "./Login.css";
import { AppContext } from "../../Context/ApiContext";
import LoginStep from "../../Components/LoginStep/LoginStep";
import VerifyStep from "../../Components/VerifyStep/VerifyStep";
import { Snackbar, Alert } from "@mui/material";

const Login = () => {
	const { setUserData } = useContext(AppContext);
	const [step, setStep] = useState(1);
	const [emailOrPhone, setEmailOrPhone] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [selectedOption, setSelectedOption] = useState("email");
	const [message, setMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleRequestCode = async () => {
		if (!emailOrPhone) {
			setMessage({
				type: "error",
				text: "Please enter your email or phone number.",
			});
			return;
		}
		setLoading(true);
		try {
			const response = await axios.post("http://localhost:3008/users/login", {
				[selectedOption]: emailOrPhone,
			});
			console.log(response.data);
			setStep(2);
			setMessage({ type: "success", text: response.data.message });
		} catch (err) {
			setMessage({
				type: "error",
				text:
					err.response?.data?.message ||
					"Failed to send verification code. Please try again.",
			});
			console.error(
				"Request code error:",
				err.response?.data?.message || err.message
			);
		} finally {
			setLoading(false);
		}
	};

	const handleVerifyCode = async () => {
		if (!verificationCode) {
			setMessage({
				type: "error",
				text: "Please enter the verification code.",
			});
			return;
		}
		setLoading(true);
		const verificationData = {
			[selectedOption]: emailOrPhone,
			code: verificationCode,
		};

		console.log("Sending verification code:", verificationData);
		try {
			const response = await axios.post(
				"http://localhost:3008/users/verify-login",
				verificationData
			);
			console.log(response.data);
			const userData = { isLoggedIn: true, ...response.data.user };
			setUserData(userData);
			localStorage.setItem("userData", JSON.stringify(userData));
			console.log("User data saved to localStorage:", JSON.stringify(userData));
			setMessage({ type: "success", text: response.data.message });

			setTimeout(() => {
				window.location.href = "/";
			}, 2000);
		} catch (err) {
			setMessage({
				type: "error",
				text:
					err.response?.data?.message ||
					"Failed to verify code. Please try again.",
			});
			console.error(
				"Verification code error:",
				err.response?.data?.message || err.message
			);
		} finally {
			setLoading(false);
		}
	};

	const handleCloseNotification = () => {
		setMessage(null);
	};

	return (
		<div className="Login">
			<div className="LoginContainer">
				<div className="LoginLeft">
					<h3>Welcome Back!</h3>
					<img src={Logo} alt="Logo" />
				</div>
				<div className="LoginRight">
					{step === 1 && (
						<LoginStep
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
							emailOrPhone={emailOrPhone}
							setEmailOrPhone={setEmailOrPhone}
							handleRequestCode={handleRequestCode}
							loading={loading}
						/>
					)}
					{step === 2 && (
						<VerifyStep
							selectedOption={selectedOption}
							emailOrPhone={emailOrPhone}
							verificationCode={verificationCode}
							setVerificationCode={setVerificationCode}
							handleVerifyCode={handleVerifyCode}
							loading={loading}
							setStep={setStep}
						/>
					)}
				</div>
			</div>
			<Snackbar
				open={Boolean(message)}
				autoHideDuration={6000}
				onClose={handleCloseNotification}
			>
				{message && (
					<Alert
						onClose={handleCloseNotification}
						severity={message.type}
						sx={{ width: "100%" }}
					>
						{message.text}
					</Alert>
				)}
			</Snackbar>
		</div>
	);
};

export default Login;
