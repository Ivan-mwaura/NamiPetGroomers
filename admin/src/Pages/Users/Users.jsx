import { useState, useContext, useEffect } from "react";
import "./Users.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Avatar } from "@mui/material";
import axios from 'axios';

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 7;
    const { users, admins} = useContext(AppContext);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const usersData = [...users.data, ...admins.data].map((user) => {
        return {
            _id: user._id,
            userName: user.name,
            userEmail: user.email,
			Roles: user.role,
        };
    });

    const startIndex = (currentPage - 1) * usersPerPage;
    const currentPageData = usersData.slice(startIndex, startIndex + usersPerPage);

    const getInitials = (name) => {
        if (!name) return "";
        const nameParts = name.split(" ");
        return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
    };

    const columns = [

        {
            label: "Name",
            field: "userName",
        },
        {
            label: "Email",
            field: "userEmail",
        },
		{
			label: "Role",
			field: "Roles",
		},
	]
		
    return (
        <div className="Users DisplayFlex">
            <div className="Header">
                <span>Dashboard</span> <i className="fas fa-angle-right"></i>{" "}
                <span>Users</span>
            </div>
            <div className="UsersContainer DisplayFlex">
                <div className="UsersTop DisplayFlex">
                    <div className="Filter DisplayFlex">

                    </div>
                    <div className="Edit">
                        <CustomButton
                            size="small"
                            text="Add"
                            customStyles={{ backgroundColor: "var(--green)" }}
                            onClick={() => {
                                window.location.href = "admin/user/new";
                            }}
                        />
                    </div>
                </div>
                <div className="UsersBottom">
                    <CustomTable
                        data={currentPageData}
                        columns={columns}
                        currentPage={currentPage}
                        totalItems={usersData?.length}
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
