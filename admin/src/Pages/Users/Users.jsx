import { useState, useContext } from "react";
import "./Users.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { Avatar } from "@mui/material";
import { AppContext } from "../../Context/ApiContext";

const Users = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 7;
	//const { users } = useContext(AppContext);

	const users = []

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const startIndex = (currentPage - 1) * usersPerPage;
	const currentPageData = users.slice(startIndex, startIndex + usersPerPage);

	const getInitials = (name) => {
		if (!name) return "";
		const nameParts = name.split(" ");
		return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
	};

	const columns = [
		{
			label: "Image",
			field: "profilePicture",
			render: (value, row) =>
				value ? (
					<Avatar src={value} alt={row.name} />
				) : (
					<Avatar>{getInitials(row.name)}</Avatar>
				),
		},
		{ label: "Name", field: "name" },
		{ label: "Email", field: "email" },
		{ label: "Phone Number", field: "phone" },
		{ label: "Address", field: "location" },
		{ label: "Type", field: "userType" },
		{
			label: "Verified",
			field: "verificationStatus",
		},
		{
			label: "Last Login",
			field: "lastLogin",
			render: (date) =>
				new Date(date).toLocaleDateString("en-GB", {
					month: "short",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
					second: "numeric",
				}),
		},
	];

	return (
		<div className="Users DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>Users</span>
			</div>
			<div className="UsersContainer DisplayFlex">
				<div className="UserTop DisplayFlex">
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
							text="New"
							customStyles={{ backgroundColor: "var(--green)" }}
							onClick={() => {
								window.location.href = "/user/new";
							}}
						/>
					</div>
				</div>
				<div className="UserBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						currentPage={currentPage}
						totalItems={users.length}
						usersPerPage={usersPerPage}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
						context="users"
					/>
				</div>
			</div>
		</div>
	);
};

export default Users;
