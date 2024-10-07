import React, { useState } from "react";
import "./ServiceNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios
import {useNavigate} from 'react-router-dom';

const ServiceNew = () => {
	const history = useHistory();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		price: "",
	});
	const [startDate, setStartDate] = useState(
		new Date().toISOString().split("T")[0]
	);
	const [selectedFile, setSelectedFile] = useState(null);
	const [errors, setErrors] = useState({});

	const onSubmit = async (event) => {
		event.preventDefault();
		const newErrors = {};

		// Validate required fields
		if (!formData.title) newErrors.title = "Title is required";
		if (!formData.description) newErrors.description = "Description is required";
		if (!formData.price) newErrors.price = "Price is required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			try {
				const serviceData = {
					serviceName: formData.title,
					serviceDescription: formData.description,
					servicePrice: formData.price,
				};
				console.log("Submitting service data:", serviceData); // Debugging statement
				await axios.post("http://localhost:5000/api/v1/services", serviceData);
				toast.success("Service created successfully");
				navigate('admin/Services');
			} catch (error) {
				console.error("Error creating service:", error);
			}
		}
	};

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const renderCustomTextField = (
		name,
		label,
		placeholder,
		type = "text",
		multiline = false,
		rows = 1,
		selectOptions = null
	) => (
		<div className="InputGroup">
			<label htmlFor={name}>{label}</label>
			<CustomTextField
				id={name}
				name={name}
				placeholder={placeholder}
				size="medium"
				type={type}
				multiline={multiline}
				rows={rows}
				value={formData[name]}
				onChange={handleChange}
				error={!!errors[name]}
				helperText={errors[name] && errors[name]}
				select={!!selectOptions}
				SelectProps={selectOptions ? { native: true } : undefined}
			>
				{selectOptions &&
					selectOptions.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
			</CustomTextField>
		</div>
	);

	return (
		<div className="EventsNew DisplayFlex">
			<div className="Header DisplayFlex">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>
				<span>New Service</span> <i className="fas fa-angle-right"></i>
				<span>Add</span>
			</div>
			<form
				onSubmit={onSubmit}
				className="EventsNewContainer DisplayFlex"
			>
				<div className="EventsTop DisplayFlex">
					<div className="EventImages DisplayFlex">
						<div className="UploadBox DisplayFlex">
							
							Add a new  Service
						</div>
					</div>
					<div className="EventDetails DisplayFlex">
						<h2>Service Details</h2>
						{renderCustomTextField("title", "Title", "e.g Service name")}
						<div className="InputGroups DisplayFlex">
							{renderCustomTextField(
								"price",
								"Price",
								"e.g Ksh. 4,000",
								"number"
							)}
						</div>
						{renderCustomTextField(
							"description",
							"Description",
							"Enter event description here...",
							"text",
							true,
							4
						)}
					</div>
				</div>
				<div className="BtnGroup DisplayFlex">
					<CustomButton
						text="Submit"
						type="submit"
						customStyles={{ backgroundColor: "var(--green)" }}
					/>
				</div>
			</form>
		</div>
	);
};

export default ServiceNew;
