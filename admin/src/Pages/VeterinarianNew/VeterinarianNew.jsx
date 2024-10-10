import React, { useState } from "react";
import "./VeterinarianNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress"; // Importing CircularProgress from Material UI for the loading spinner

const VeterinarianNew = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [formData, setFormData] = useState({
        veterinarianName: "",
        veterinarianSpecialty: "",
        veterinarianDescription: "",
        veterinarianContactNumber: "",
        veterinarianEmail: "",
        veterinarianFacebook: "",
        veterinarianInstagram: "",
        veterinarianTwitter: "",
    });
    const [veterinarianProfilePicture, setVeterinarianProfilePicture] = useState(null);
    const [errors, setErrors] = useState({});

    const onSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};

        // Validate required fields
        if (!formData.veterinarianName) newErrors.veterinarianName = "Name is required";
        if (!formData.veterinarianSpecialty) newErrors.veterinarianSpecialty = "Specialty is required";
        if (!formData.veterinarianDescription) newErrors.veterinarianDescription = "Description is required";
        if (!formData.veterinarianContactNumber) newErrors.veterinarianContactNumber = "Contact is required";
        if (!formData.veterinarianEmail) newErrors.veterinarianEmail = "Email is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formDataToSend = new FormData();
            formDataToSend.append("veterinarianName", formData.veterinarianName);
            formDataToSend.append("veterinarianSpecialty", formData.veterinarianSpecialty);
            formDataToSend.append("veterinarianDescription", formData.veterinarianDescription);
            formDataToSend.append("veterinarianContactNumber", formData.veterinarianContactNumber);
            formDataToSend.append("veterinarianEmail", formData.veterinarianEmail);
            formDataToSend.append("veterinarianFacebook", formData.veterinarianFacebook);
            formDataToSend.append("veterinarianInstagram", formData.veterinarianInstagram);
            formDataToSend.append("veterinarianTwitter", formData.veterinarianTwitter);
            if (veterinarianProfilePicture) {
                formDataToSend.append("veterinarianProfilePicture", veterinarianProfilePicture);
            }

            try {
                setLoading(true); // Set loading to true when the request starts
                await axios.post("http://localhost:5000/api/v1/veterinarians", formDataToSend, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                toast.success("Veterinarian created successfully");
                console.log("Veterinarian created successfully", formDataToSend);
                history.push("/admin/Veterinarians");
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to create veterinarian");
            } finally {
                setLoading(false); // Set loading to false when the request is finished
            }
        }
    };

    const handleFileChange = (event) => {
        setVeterinarianProfilePicture(event.target.files[0]);
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
        rows = 1
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
            />
        </div>
    );

    return (
        <div className="AccomodationNew DisplayFlex">
            <div className="Header DisplayFlex">
                <span>Dashboard</span> <i className="fas fa-angle-right"></i>
                <span>Veterinarians</span> <i className="fas fa-angle-right"></i>
                <span>Add</span>
            </div>
            {loading ? ( // Display the loading indicator when the request is in progress
                <div className="loading-indicator">
                    <CircularProgress />
                    <p>Loading, please wait...</p>
                </div>
            ) : (
                <form onSubmit={onSubmit} className="AccomodationNewContainer DisplayFlex">
                    <div className="EventsTop DisplayFlex">
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
                                    <p>Click here or drop file to Profile Image</p>
                                </label>
                                {veterinarianProfilePicture && <p>{veterinarianProfilePicture.name}</p>}
                            </div>
                        </div>
                        <div className="EventDetails DisplayFlex">
                            <h2>Veterinarian Details</h2>
                            {renderCustomTextField("veterinarianName", "Name", "e.g Veterinarian name")}
                            <div className="InputGroups DisplayFlex">
                                {renderCustomTextField("veterinarianSpecialty", "Specialty", "e.g Veterinarian")}
                            </div>
                            <div className="InputGroups DisplayFlex">
                                {renderCustomTextField("veterinarianContactNumber", "Contact", "+254789....", "number")}
                                {renderCustomTextField("veterinarianEmail", "Email", "yahoo@gmail.com", "email")}
                                {renderCustomTextField("veterinarianFacebook", "Facebook", "Enter Facebook link here...")}
                            </div>
                            {renderCustomTextField("veterinarianInstagram", "Instagram", "Enter Instagram link here...")}
                            {renderCustomTextField("veterinarianTwitter", "Twitter", "Enter Twitter link here...")}
                            {renderCustomTextField("veterinarianDescription", "Description", "Enter description here...", "text", true, 4)}
                        </div>
                    </div>
                    <div className="BtnGroup DisplayFlex">
                        <CustomButton text="Submit" type="submit" customStyles={{ backgroundColor: "var(--green)" }} />
                    </div>
                </form>
            )}
        </div>
    );
};

export default VeterinarianNew;
