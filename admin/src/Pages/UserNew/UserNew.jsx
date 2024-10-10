import React, { useState } from "react";
import "./UserNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import axios from "axios"; // Import axios for API calls
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress"; // Import the loading spinner component

const UserNew = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin", // Default role is admin
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); // State to manage the loading state

  const onSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true); // Show the loading spinner
      try {
        await axios.post("http://localhost:5000/api/v1/adminSignUp", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.success("Admin created successfully");
        console.log("Admin created successfully", formData);
        history.push("/users");
      } catch (error) {
        console.error("Error creating admin:", error);
        toast.error("Error creating admin. Please try again.");
      } finally {
        setIsLoading(false); // Hide the loading spinner after the request is complete
      }
    }
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
        <span>Users</span> <i className="fas fa-angle-right"></i>
        <span>Add Admin</span>
      </div>
      <form onSubmit={onSubmit} className="AccomodationNewContainer DisplayFlex">
        <div className="EventsTop DisplayFlex">
          <div className="EventDetails DisplayFlex">
            <h2>Admin Details</h2>
            {renderCustomTextField("email", "Email", "admin@example.com", "email")}
            {renderCustomTextField("password", "Password", "Set a password", "password")}
          </div>
        </div>
        <div className="BtnGroup DisplayFlex">
          {isLoading ? ( // Display the loading spinner if the request is in progress
            <CircularProgress />
          ) : (
            <CustomButton
              text="Submit"
              type="submit"
              customStyles={{ backgroundColor: "var(--green)" }}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default UserNew;
