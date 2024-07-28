import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";

const CustomTextField = ({
	id,
	placeholder,
	variant = "outlined",
	size = "medium",
	type = "text",
	adornmentPosition,
	adornmentContent,
	inputProps,
	sx,
	multiline,
	rows,
	select,
	SelectProps,
	...props
}) => {
	const inputAdornment =
		adornmentPosition && adornmentContent ? (
			<InputAdornment position={adornmentPosition}>
				{adornmentContent}
			</InputAdornment>
		) : null;

	const inputPropsWithAdornment = {
		...inputProps,
		...(adornmentPosition === "start" && { startAdornment: inputAdornment }),
		...(adornmentPosition === "end" && { endAdornment: inputAdornment }),
	};

	return (
		<TextField
			id={id}
			placeholder={placeholder}
			variant={variant}
			size={size}
			type={type}
			multiline={multiline}
			rows={rows}
			select={select}
			SelectProps={SelectProps}
			InputProps={inputPropsWithAdornment}
			sx={{
				...sx,
				width: "100%",
				padding: "0 .5rem",
				margin: "0 !important",
				".MuiInputBase-root": {
					height: multiline ? "auto" : "2rem",
					padding: multiline ? "0.5rem" : "0 .5rem",
					"& input": {
						padding: type === "date" ? "0.5rem" : "0 !important",
						fontSize: "1rem",
					},
				},
				".MuiOutlinedInput-root": {
					"& fieldset": {
						padding: "0 !important",
						borderColor: "gray",
					},
					"&:hover fieldset": {
						borderColor: "var(--green)",
					},
					"&.Mui-focused fieldset": {
						borderColor: "var(--green)",
					},
				},
			}}
			{...props}
		/>
	);
};

CustomTextField.propTypes = {
	id: PropTypes.string,
	placeholder: PropTypes.string,
	variant: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	adornmentPosition: PropTypes.string,
	adornmentContent: PropTypes.node,
	inputProps: PropTypes.object,
	sx: PropTypes.object,
	multiline: PropTypes.bool,
	rows: PropTypes.number,
	select: PropTypes.bool,
	SelectProps: PropTypes.object,
};

export default CustomTextField;
