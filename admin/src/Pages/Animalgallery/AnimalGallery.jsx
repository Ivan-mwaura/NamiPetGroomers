import { useState, useContext} from "react";
import "./AnimalGallery.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";

const AnimalGallery = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const eventsPerPage = 7;
	const { animalGallery } = useContext(AppContext);

	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const animalGalleryData = animalGallery.data.map((item) => {
		return {
			_id: item._id,
			animalName: item.animalName,
			animalBreed: item.animalBreed,
			animalType: item.animalType,
			beforeImage: item.groomingImages.before,
			afterImage: item.groomingImages.after,
		};
	});

	const startIndex = (currentPage - 1) * eventsPerPage;
	const currentPageData = animalGalleryData.slice(startIndex, startIndex + eventsPerPage);

	const columns = [
		{
			label: "Animal ID",
			field: "_id",
		},
		{
			label: "Animal Name",
			field: "animalName",
		},
		{
			label: "Breed",
			field: "animalBreed",
		},
		{
			label: "Type",
			field: "animalType",
		},
		{
			label: "Before Grooming",
			field: "beforeImage",
			render: (url) => <img src={url} alt="Before Grooming" style={{ width: '50px', height: '50px' }} />,
		},
		{
			label: "After Grooming",
			field: "afterImage",
			render: (url) => <img src={url} alt="After Grooming" style={{ width: '50px', height: '50px' }} />,
		},
	];

	return (
		<div className="AnimalGallery DisplayFlex">
			<div className="Header">
				<span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
				<span>AnimalGallery</span>
			</div>
			<div className="AnimalGalleryContainer DisplayFlex">
				<div className="AnimalGalleryTop DisplayFlex">
					<div className="Filter DisplayFlex">

					</div>
					<div className="Edit">
						<CustomButton
							size="small"
							text="Add"
							customStyles={{ backgroundColor: "var(--green)" }}
							onClick={() => {
								window.location.href = "animalGallery/new";
							}}
						/>
					</div>
				</div>
				<div className="AnimalGalleryBottom">
					<CustomTable
						data={currentPageData}
						columns={columns}
						usersPerPage={eventsPerPage}
						currentPage={currentPage}
						totalItems={animalGallery.data?.length}
						handleNextPage={handleNextPage}
						handlePreviousPage={handlePreviousPage}		
						context="animalGallery" // Pass the context
					/>
				</div>
			</div>
		</div>
	);
};

export default AnimalGallery;
