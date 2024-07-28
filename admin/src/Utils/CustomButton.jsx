import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
	size = "small",
	text,
	customStyles = {},
	...props
}) => {
	return (
		<Button
			variant="contained"
			color="primary"
			size={size}
			sx={{ width: "100%", textTransform: "none", ...customStyles }}
			{...props}
		>
			{text}
		</Button>
	);
};

CustomButton.propTypes = {
	size: PropTypes.oneOf(["small", "medium", "large"]),
	text: PropTypes.string.isRequired,
	customStyles: PropTypes.object,
};

export default CustomButton;
