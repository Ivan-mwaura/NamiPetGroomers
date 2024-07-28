import {
	Button,
	FormControl,
	FormControlLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const LoginStep = ({
	selectedOption,
	setSelectedOption,
	emailOrPhone,
	setEmailOrPhone,
	handleRequestCode,
	loading,
}) => {
	return (
		<div className="LoginStep">
			<h3>Login</h3>
			<Typography variant="body1">
				Please input your email or phone number then request for a verification
				code to authenticate your login.
			</Typography>
			<FormControl component="fieldset" className="LoginWith">
				<Typography variant="span">Login with?</Typography>
				<RadioGroup
					row
					aria-label="login-option"
					name="loginOption"
					value={selectedOption}
					onChange={(e) => setSelectedOption(e.target.value)}
				>
					<FormControlLabel
						value="email"
						control={<Radio sx={{ color: "var(--green) !important" }} />}
						label="Email"
					/>
					<FormControlLabel
						value="phone"
						control={<Radio sx={{ color: "var(--green) !important" }} />}
						label="Phone"
					/>
				</RadioGroup>
			</FormControl>
			<TextField
				placeholder={selectedOption === "email" ? "Email" : "Phone Number"}
				variant="outlined"
				value={emailOrPhone}
				onChange={(e) => setEmailOrPhone(e.target.value)}
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
				sx={{
					"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
						{
							borderColor: "var(--green)",
						},
				}}
			/>
			<Button
				variant="contained"
				onClick={handleRequestCode}
				className="RequestButton"
				disabled={loading}
				sx={{
					background: "var(--green)",
					"&:hover": { backgroundColor: "var(--green)" },
				}}
			>
				{loading ? "Requesting..." : "Request Verification Code"}
			</Button>
		</div>
	);
};

export default LoginStep;

LoginStep.propTypes = {
	selectedOption: PropTypes.string.isRequired,
	setSelectedOption: PropTypes.func.isRequired,
	emailOrPhone: PropTypes.string.isRequired,
	setEmailOrPhone: PropTypes.func.isRequired,
	handleRequestCode: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};
