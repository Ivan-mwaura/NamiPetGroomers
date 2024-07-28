import { useState, useContext } from "react";
import "./Pricing.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";

const Pricing = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pricingsPerPage = 7;
    const { pricings } = useContext(AppContext);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    console.log("Pricings:", pricings);

    const pricingsData = pricings?.data.map((pricing) => {
        return {
            _id: pricing._id,
            pricingName: pricing.pricingName,
            pricingDescription: pricing.pricingDescription,
            pricingPrice: pricing.pricingPrice,
            PricingBenefits: pricing.PricingBenefits.join(', '), // Join benefits into a single string
        };
    });

    const startIndex = (currentPage - 1) * pricingsPerPage;
    const currentPageData = pricingsData.slice(startIndex, startIndex + pricingsPerPage);

    const columns = [
        { label: "Name", field: "pricingName" },
        { label: "Description", field: "pricingDescription" },
        { label: "Price", field: "pricingPrice" },
        { label: "Benefits", field: "PricingBenefits" },
    ];

    return (
        <div className="Accomodations DisplayFlex">
            <div className="Header">
                <span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
                <span>Pricing</span>
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
                                window.location.href = "pricing/new";
                            }}
                        />
                    </div>
                </div>
                <div className="AccomodationsBottom">
                    <CustomTable
                        data={currentPageData}
                        columns={columns}
                        currentPage={currentPage}
                        totalItems={pricingsData?.length}
                        usersPerPage={pricingsPerPage}
                        accomodationsPerPage={pricingsPerPage}
                        handleNextPage={handleNextPage}
                        handlePreviousPage={handlePreviousPage}
                        context="pricings" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Pricing;
