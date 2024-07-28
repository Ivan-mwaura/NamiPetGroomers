import React, { useState } from "react";
import "./ProductNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "axios";
import categories from "./categories"; // Adjust the import according to your file structure

const ProductNew = () => {
	const history = useHistory();

	const [formData, setFormData] = useState({
		productName: "",
		productPrice: "",
		productRating: "",
		productStock: "", // Added productStock
		productCategory: "",
		productSubCategory: "",
		productDescription: "",
		animalType: "",
	});
	const [productImage, setProductImage] = useState(null);
	const [errors, setErrors] = useState({});
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedSubCategory, setSelectedSubCategory] = useState("");

	const endpointMapping = {
		Dog: "http://localhost:5000/api/v1/dogProducts",
		Cat: "http://localhost:5000/api/v1/catProducts",
		Bird: "http://localhost:5000/api/v1/birdProducts",
		Horse: "http://localhost:5000/api/v1/horseProducts",
		FishAndAquaticPets: "http://localhost:5000/api/v1/fishAndAquaticPetsProducts"
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const newErrors = {};

		// Validate required fields
		if (!formData.productName) newErrors.productName = "Product name is required";
		if (!formData.productPrice) newErrors.productPrice = "Price is required";
		if (!formData.productRating) newErrors.productRating = "Rating is required";
		if (!formData.productStock) newErrors.productStock = "Stock is required"; // Added validation for productStock
		//if (!formData.productCategory) newErrors.productCategory = "Category is required";
		//if (!formData.productSubCategory) newErrors.productSubCategory = "Subcategory is required";
		if (!formData.productDescription) newErrors.productDescription = "Description is required";
		if (!formData.animalType) newErrors.animalType = "Animal type is required";

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const formDataToSend = new FormData();
			formDataToSend.append("productName", formData.productName);
			formDataToSend.append("productPrice", formData.productPrice);
			formDataToSend.append("productRating", formData.productRating);
			formDataToSend.append("productStock", formData.productStock); // Added productStock to formData
			formDataToSend.append("productCategory", formData.productCategory);
			formDataToSend.append("productSubCategory", formData.productSubCategory);
			formDataToSend.append("productDescription", formData.productDescription);
			formDataToSend.append("animalType", formData.animalType);
			if (productImage) {
				formDataToSend.append("productImage", productImage);
			}

			// Logging formDataToSend to check content
			for (let [key, value] of formDataToSend.entries()) {
				console.log(key, value);
			}

			const endpoint = endpointMapping[formData.animalType];

			try {
				await axios.post(endpoint, formDataToSend, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				console.log("Product created successfully");
				history.push("/products");
			} catch (error) {
				console.error("Error creating product:", error);
			}
		}
	};

	const handleFileChange = (event) => {
		setProductImage(event.target.files[0]);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		if (name === "animalType") {
			setSelectedCategory("");
			setSelectedSubCategory("");
		}

		if (name === "productCategory") {
			setSelectedCategory(value);
			setSelectedSubCategory("");
		}
	};

	const handleSubCategoryChange = (event) => {
		setSelectedSubCategory(event.target.value);
		setFormData((prevData) => ({ ...prevData, productSubCategory: event.target.value }));
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
		<div className="AwardNew DisplayFlex">
			<div className="Header DisplayFlex">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>
				<span>Products</span> <i className="fas fa-angle-right"></i>
				<span>Add</span>
			</div>
			<form onSubmit={onSubmit} className="AwardNewContainer DisplayFlex">
				<div className="AwardNewTop DisplayFlex">
					<div className="EventImages DisplayFlex">
						<div className="UploadBox DisplayFlex">
							<input
								type="file"
								id="file"
								name="file"
								style={{ display: "none" }}
								onChange={handleFileChange}
							/>
							<label htmlFor="file" className="upload-label">
								<i className="fa fa-cloud-upload-alt"></i>
								<p>Click here or drop file to upload product Image</p>
							</label>
							{productImage && <p>{productImage.name}</p>}
						</div>
					</div>
					<div className="EventDetails DisplayFlex">
						<h2>Product Details</h2>
						{renderCustomTextField("productName", "Product Name", "e.g Dog Food")}
						<div className="InputGroups DisplayFlex">
							{renderCustomTextField("productPrice", "Price", "e.g 4500")}
							{renderCustomTextField("productRating", "Rating", "eg 4.5")}
							{renderCustomTextField("productStock", "Stock", "e.g 100", "number")} {/* Added productStock */}
						</div>
						<div className="InputGroups DisplayFlex">
							<FormControl sx={{ minWidth: 200, marginLeft: 2 }}>
								<InputLabel id="animalType-select-label">Animal Type</InputLabel>
								<Select
									labelId="animalType-select-label"
									id="animalType-select"
									name="animalType"
									value={formData.animalType}
									onChange={handleChange}
									label="Animal Type"
								>
									<MenuItem value="">All</MenuItem>
									<MenuItem value="Dog">Dog</MenuItem>
									<MenuItem value="Cat">Cat</MenuItem>
									<MenuItem value="Bird">Bird</MenuItem>
									<MenuItem value="Horse">Horse</MenuItem>
									<MenuItem value="FishAndAquaticPets">FishAndAquaticPets</MenuItem>
								</Select>
							</FormControl>
						</div>
						<div className="InputGroups DisplayFlex">
							{formData.animalType && (
								<FormControl sx={{ minWidth: 200, marginLeft: 2 }}>
									<InputLabel id="category-select-label">Category</InputLabel>
									<Select
										labelId="category-select-label"
										id="category-select"
										name="productCategory"
										value={selectedCategory}
										onChange={handleChange}
										label="Category"
									>
										{categories[formData.animalType]?.map((category) => (
											<MenuItem key={category.name} value={category.name}>
												{category.name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							)}
						</div>
						<div className="InputGroups DisplayFlex">
							{selectedCategory && (
								<FormControl sx={{ minWidth: 200, marginLeft: 2 }}>
									<InputLabel id="subcategory-select-label">SubCategory</InputLabel>
									<Select
										labelId="subcategory-select-label"
										id="subcategory-select"
										name="productSubCategory"
										value={selectedSubCategory}
										onChange={handleSubCategoryChange}
										label="SubCategory"
									>
										{categories[formData.animalType]
											.find((cat) => cat.name === selectedCategory)
											?.subcategory.map((sub) => (
												<MenuItem key={sub} value={sub}>
													{sub}
												</MenuItem>
											))}
									</Select>
								</FormControl>
							)}
						</div>
						{renderCustomTextField("productDescription", "Description", "Enter product description here...", "text", true, 4)}
					</div>
				</div>
				<div className="BtnGroup DisplayFlex">
					<CustomButton text="Submit" type="submit" customStyles={{ backgroundColor: "var(--green)" }} />
				</div>
			</form>
		</div>
	);
};

export default ProductNew;
