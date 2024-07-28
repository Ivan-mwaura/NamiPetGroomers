import { useState, useContext, useEffect } from "react";
import "./Services.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";

const Events = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const eventsPerPage = 7;
	const { services } = useContext(AppContext);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const servicesData = services.data.map((service) => {
		return {
			_id: service._id,
			serviceName: service.serviceName,
			serviceDescription: service.serviceDescription,
			servicePrice: service.servicePrice,
		};
	});

	console.log("servicesData: ", servicesData);

	const startIndex = (currentPage - 1) * eventsPerPage;
	const currentPageData = servicesData.slice(startIndex, startIndex + eventsPerPage);

	const columns = [
		{
			label: "Service ID",
			field: "_id",
		},
		{
			label: "Title",
			field: "serviceName",
		},
		{
			label: "Description of Service",
			field: "serviceDescription",
		},
		{ label: "Service Price", field: "servicePrice" },
	];

	return (
		<div className="Events DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>Services</span>
			</div>
			<div className="EventsContainer DisplayFlex">
				<div className="EventsTop DisplayFlex">
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
								window.location.href = "/service/new";
							}}
						/>
					</div>
				</div>
				<div className="EventsBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						usersPerPage={eventsPerPage}
						currentPage={currentPage}
						totalItems={services.data?.length}
						eventsPerPage={eventsPerPage}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}
						context="services" // Pass the context
					/>
				</div>
			</div>
		</div>
	);
};

export default Events;
