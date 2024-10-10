import React, { useState } from "react";
import "./PricingNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import axios from "axios"; // Import axios for API calls
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress"; // Importing CircularProgress for the loading spinner

const PricingNew = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [formData, setFormData] = useState({
    pricingName: "",
    pricingDescription: "",
    pricingPrice: "",
    PricingBenefits: [],
  });
  const [errors, setErrors] = useState({});
  const [benefitInput, setBenefitInput] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.pricingName) newErrors.pricingName = "Name is required";
    if (!formData.pricingDescription) newErrors.pricingDescription = "Description is required";
    if (!formData.pricingPrice) newErrors.pricingPrice = "Price is required";
    if (formData.PricingBenefits.length === 0) newErrors.PricingBenefits = "At least one benefit is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setLoading(true); // Set loading to true when the request starts
        await axios.post("http://localhost:5000/api/v1/pricing", formData);
        toast.success("Pricing created successfully");
        history.push("/admin/pricings");
      } catch (error) {
        console.error("Error creating pricing:", error);
        toast.error("Error creating pricing");
      } finally {
        setLoading(false); // Set loading to false when the request is finished
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBenefitChange = (event) => {
    setBenefitInput(event.target.value);
  };

  const handleAddBenefit = () => {
    if (benefitInput.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        PricingBenefits: [...prevData.PricingBenefits, benefitInput.trim()],
      }));
      setBenefitInput("");
    }
  };

  const handleRemoveBenefit = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      PricingBenefits: prevData.PricingBenefits.filter((_, i) => i !== index),
    }));
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
    <div className="PricingNew DisplayFlex">
      <div className="Header DisplayFlex">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i>
        <span>Pricing</span> <i className="fas fa-angle-right"></i>
        <span>Add</span>
      </div>
      {loading ? ( // Display the loading indicator when the request is in progress
        <div className="loading-indicator DisplayFlex">
          <CircularProgress />
          <p>Loading, please wait...</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="PricingNewContainer DisplayFlex">
          <div className="PricingDetails DisplayFlex">
            <h2>Pricing Details</h2>
            {renderCustomTextField("pricingName", "Name", "e.g. Gold")}
            {renderCustomTextField("pricingDescription", "Description", "e.g. Best for business")}
            {renderCustomTextField("pricingPrice", "Price", "e.g. 1000", "number")}
            <div className="InputGroup">
              <label htmlFor="benefitInput">Benefits</label>
              <CustomTextField
                id="benefitInput"
                name="benefitInput"
                placeholder="Enter a benefit and click Add"
                size="medium"
                type="text"
                value={benefitInput}
                onChange={handleBenefitChange}
                helperText={errors.PricingBenefits && errors.PricingBenefits}
              />
              <CustomButton text="Add" customStyles={{ backgroundColor: "var(--green)" }} onClick={handleAddBenefit} />
              <ul>
                {formData.PricingBenefits.map((benefit, index) => (
                  <li key={index}>
                    {benefit} <button type="button" onClick={() => handleRemoveBenefit(index)}>Remove</button>
                  </li>
                ))}
              </ul>
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

export default PricingNew;
