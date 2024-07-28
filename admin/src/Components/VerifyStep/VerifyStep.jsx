import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import PinInput from "react-pin-input";
import Logo from "../../assets/Logo.png";
import PropTypes from "prop-types";

const VerifyStep = ({
	selectedOption,
	emailOrPhone,
	setVerificationCode,
	handleVerifyCode,
	loading,
	setStep,
}) => {
	return (
		<div className="VerifyStep">
			<img src={Logo} alt="Logo" className="Logo" />
			<h3>Please check your {selectedOption}!</h3>
			<Typography variant="body1">
				We've emailed a 6-digit confirmation code to {emailOrPhone}, please
				enter the code below to verify your {selectedOption}.
			</Typography>
			<TextField
				placeholder={selectedOption === "email" ? "Email" : "Phone"}
				variant="outlined"
				value={emailOrPhone}
				disabled
				fullWidth
				className="InputField"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							{selectedOption === "email" ? (
								<i className="far fa-envelope"></i>
							) : (
								<i className="fas fa-phone-alt"></i>
							)}
						</InputAdornment>
					),
				}}
			/>
			<Typography variant="body1">Verification Code</Typography>
			<PinInput
				length={6}
				initialValue=""
				onChange={(value) => setVerificationCode(value)}
				type="numeric"
				inputMode="number"
				style={{ display: "flex", justifyContent: "space-between" }}
				inputStyle={{
					width: "40px",
					height: "40px",
					borderRadius: "8px",
					border: "1px solid #ccc",
				}}
				inputFocusStyle={{ borderColor: "var(--green)" }}
				onComplete={(value) => setVerificationCode(value)}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={handleVerifyCode}
				className="VerifyButton"
				disabled={loading}
				sx={{
					background: "var(--green)",
					"&:hover": { backgroundColor: "var(--green)" },
				}}
			>
				{loading ? "Verifying..." : "Verify"}
			</Button>
			<Typography variant="body2" className="ResendCode">
				Don't have a code? <span onClick={() => setStep(1)}>Resend code</span>
			</Typography>
		</div>
	);
};

export default VerifyStep;

VerifyStep.propTypes = {
	selectedOption: PropTypes.string.isRequired,
	emailOrPhone: PropTypes.string.isRequired,
	setVerificationCode: PropTypes.func.isRequired,
	handleVerifyCode: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	setStep: PropTypes.func.isRequired,
};
