import { useState, useContext } from "react";
import "./Products.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Avatar, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedAnimalType, setSelectedAnimalType] = useState(""); // State for selected animal type
	const productsPerPage = 7;
	const {
		dogproducts,
		catproducts,
		birdproducts,
		horseproducts,
		FishAndAcquaticAnimalsProducts,
	} = useContext(AppContext);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	// Merge all product arrays into one
	const allProducts = [
		...dogproducts.data,
		...catproducts.data,
		...birdproducts.data,
		...horseproducts.data,
		...FishAndAcquaticAnimalsProducts.data,
	];

	// Filter products based on selected animal type
	const filteredProducts = selectedAnimalType
		? allProducts.filter((product) => product.animalType === selectedAnimalType)
		: allProducts;

	const startIndex = (currentPage - 1) * productsPerPage;
	const currentPageData = filteredProducts.slice(startIndex, startIndex + productsPerPage);

	const getInitials = (name) => {
		if (!name) return "";
		const nameParts = name.split(" ");
		return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
	};

	const columns = [
		{
			label: "Product image",
			field: "productImage",
			render: (value, row) => {
				return value ? (
					<Avatar src={value} alt={row.veterinarianName} />
				) : (
					<Avatar>{getInitials(row.veterinarianName)}</Avatar>
				);
			},
		},
		{ label: "Animal Type", field: "animalType" },
		{
			label: "Product Name",
			field: "productName",
		},
		{ label: "Price", field: "productPrice" },
		{ label: "Category", field: "productCategory" },
		{ label: "Subcategory", field: "productSubCategory" },
		{ label: "Rating", field: "productRating" },
	];

	return (
		<div className="Awards DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>Products</span>
			</div>
			<div className="AwardsContainer DisplayFlex">
				<div className="AwardsTop DisplayFlex">
					<div className="Filter DisplayFlex">

						<FormControl sx={{ minWidth: 200, marginLeft: 2 }}>
							<InputLabel id="animalType-select-label">Animal Type</InputLabel>
							<Select
								labelId="animalType-select-label"
								id="animalType-select"
								value={selectedAnimalType}
								onChange={(e) => setSelectedAnimalType(e.target.value)}
								label="Animal Type"
							>
								<MenuItem value="">All</MenuItem>
								<MenuItem value="Dog">Dog</MenuItem>
								<MenuItem value="Cat">Cat</MenuItem>
								<MenuItem value="Birds">Birds</MenuItem>
								<MenuItem value="Horse">Horse</MenuItem>
								<MenuItem value="FishAndAquaticPets">FishAndAquaticPets</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="Edit">
						<CustomButton
							size="small"
							text="Add"
							customStyles={{ backgroundColor: "var(--green)" }}
							onClick={() => {
								window.location.href = "product/new";
							}}
						/>
					</div>
				</div>
				<div className="AwardsBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						currentPage={currentPage}
						totalItems={filteredProducts.length}
						usersPerPage={productsPerPage}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
						context="products"
					/>
				</div>
			</div>
		</div>
	);
};

export default Products;
