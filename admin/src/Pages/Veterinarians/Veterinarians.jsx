import { useState, useContext } from "react";
import "./Veterinarians.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Avatar } from "@mui/material";

const Veterinarians = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const veterinariansPerPage = 7;
	const { veterinarians } = useContext(AppContext);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	console.log("Veterinarians:", veterinarians);

	const veterinariansData = veterinarians.data.map((veterinarian) => {
		return {
			_id: veterinarian._id,
			veterinarianName: veterinarian.veterinarianName,
			veterinarianSpecialty: veterinarian.veterinarianSpecialty,
			veterinarianDescription: veterinarian.veterinarianDescription,
			veterinarianContactNumber: veterinarian.veterinarianContactNumber,
			veterinarianEmail: veterinarian.veterinarianEmail,
			veterinarianFacebook: veterinarian.veterinarianFacebook,
			veterinarianInstagram: veterinarian.veterinarianInstagram,
			veterinarianTwitter: veterinarian.veterinarianTwitter,
			veterinarianProfilePicture: veterinarian.veterinarianProfilePicture,
		};
	});
	const startIndex = (currentPage - 1) * veterinariansPerPage;
	const currentPageData = veterinariansData.slice(startIndex, startIndex + veterinariansPerPage);

	const getInitials = (name) => {
		if (!name) return "";
		const nameParts = name.split(" ");
		return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
	};

	const columns = [
		{
			label: "Vets Profile Picture",
			field: "veterinarianProfilePicture",
			render: (value, row) => {
				return value ? (
					<Avatar src={value} alt={row.veterinarianName} />
				) : (
					<Avatar>{getInitials(row.veterinarianName)}</Avatar>
				);
			},
		},
		{
			label: "Name",
			field: "veterinarianName",
		},
		{
			label: "Specialty",
			field: "veterinarianSpecialty",
		},
		{ label: "Vets Description", field: "veterinarianDescription" },
		{ label: "Email", field: "veterinarianEmail" },
		{ label: "Contact", field: "veterinarianContactNumber" },
		{ label: "Facebook", field: "veterinarianFacebook" },
		{ label: "Instagram", field: "veterinarianInstagram" },
		{ label: "Twitter", field: "veterinarianTwitter" },
	];

	return (
		<div className="Accomodations DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>Veterinarians</span>
			</div>
			<div className="AccomodationsContainer DisplayFlex">
				<div className="AccomodationsTop DisplayFlex">
					<div className="Filter DisplayFlex">
						<CustomTextField
							id="outlined-basic"
							placeholder="Search"
							inputProps={{ "aria-label": "search" }}
							adornmentPosition="start"
							adornmentContent={<i className="fas fa-search"></i>}
							sx={{ width: "100%", padding: "0" }}
						/>
						<CustomTextField
							id="outlined-basic"
							type="number"
							sx={{ width: "100%", padding: "0" }}
						/>
					</div>
					<div className="Edit">
						<CustomButton
							size="small"
							text="Add"
							customStyles={{ backgroundColor: "var(--green)" }}
							onClick={() => {
								window.location.href = "veterinarian/new ";
							}}
						/>
					</div>
				</div>
				<div className="AccomodationsBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						currentPage={currentPage}
						totalItems={veterinariansData?.length}
						usersPerPage={veterinariansPerPage}
						accomodationsPerPage={veterinariansPerPage}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
						context="veterinarians" 
					/>
				</div>
			</div>
		</div>
	);
};

export default Veterinarians;
