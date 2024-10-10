import React, { useState } from "react";
import "./AnimalGroomingNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import axios from "axios"; // Import axios for API calls
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress"; // Importing CircularProgress for the loading spinner

const AnimalGroomingNew = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [formData, setFormData] = useState({
    animalName: "",
    animalBreed: "",
    animalType: "",
  });
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);
  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.animalName) newErrors.animalName = "Name is required";
    if (!formData.animalBreed) newErrors.animalBreed = "Breed is required";
    if (!formData.animalType) newErrors.animalType = "Type is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append("animalName", formData.animalName);
      formDataToSend.append("animalBreed", formData.animalBreed);
      formDataToSend.append("animalType", formData.animalType);
      if (beforeImage) {
        formDataToSend.append("beforeImage", beforeImage);
      }
      if (afterImage) {
        formDataToSend.append("afterImage", afterImage);
      }

      try {
        setLoading(true); // Set loading to true when the request starts
        await axios.post("http://localhost:5000/api/v1/addAnimalGrooming", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Animal Grooming created successfully");
        history.push("/admin/animalGallery");
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to create Animal Grooming");
      } finally {
        setLoading(false); // Set loading to false when the request is finished
      }
    }
  };

  const handleFileChange = (event, type) => {
    if (type === "before") {
      setBeforeImage(event.target.files[0]);
    } else {
      setAfterImage(event.target.files[0]);
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
        <span>Animal Groomings</span> <i className="fas fa-angle-right"></i>
        <span>Add</span>
      </div>
      {loading ? ( // Display the loading indicator when the request is in progress
        <div className="loading-indicator DisplayFlex">
          <CircularProgress />
          <p>updating, please wait...</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="AccomodationNewContainer DisplayFlex">
          <div className="EventsTop DisplayFlex">
            <div className="EventImages DisplayFlex">
              <div className="UploadBox DisplayFlex">
                <input
                  type="file"
                  id="beforeImage"
                  name="beforeImage"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "before")}
                />
                <label htmlFor="beforeImage" className="upload-label">
                  <i className="fa fa-cloud-upload-alt"></i>
                  <p>Click here or drop file for Before Image</p>
                </label>
                {beforeImage && <p>{beforeImage.name}</p>}
              </div>
              <div className="UploadBox DisplayFlex">
                <input
                  type="file"
                  id="afterImage"
                  name="afterImage"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, "after")}
                />
                <label htmlFor="afterImage" className="upload-label">
                  <i className="fa fa-cloud-upload-alt"></i>
                  <p>Click here or drop file for After Image</p>
                </label>
                {afterImage && <p>{afterImage.name}</p>}
              </div>
            </div>
            <div className="EventDetails DisplayFlex">
              <h2>Animal Grooming Details</h2>
              {renderCustomTextField("animalName", "Name", "e.g Animal name")}
              {renderCustomTextField("animalBreed", "Breed", "e.g Animal breed")}
              {renderCustomTextField("animalType", "Type", "e.g Dog, Cat, etc.")}
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

export default AnimalGroomingNew;
