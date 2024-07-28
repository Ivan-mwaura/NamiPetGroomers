import { useState, useContext } from "react";
import "./Payments.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";

const Payments = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const eventsPerPage = 7;
	//const { events } = useContext(AppContext);
	const events = [];

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const startIndex = (currentPage - 1) * eventsPerPage;
	const currentPageData = events?.slice(startIndex, startIndex + eventsPerPage);

	const columns = [
		{
			label: "Title",
			field: "title",
		},
		{
			label: "Venue",
			field: "venue",
		},
		{ label: "Price", field: "price" },
		{ label: "Packages", field: "packages" },
		{ label: "Status", field: "status" },
		{ label: "Posted", field: "createdAt" },
		{ label: "Bought", field: "bought" },
	];

	return (
		<div className="Payments DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>Payments</span>
			</div>
			<div className="PaymentsContainer DisplayFlex">
				<div className="PaymentsTop DisplayFlex">
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
				</div>
				<div className="PaymentsBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						currentPage={currentPage}
						totalItems={events?.length}
						eventsPerPage={eventsPerPage}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Payments;
