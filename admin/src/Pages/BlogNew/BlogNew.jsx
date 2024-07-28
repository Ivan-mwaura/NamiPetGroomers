import React, { useState } from "react";
import "./BlogNew.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import { useHistory } from "react-router-use-history";
import axios from "axios";
import { toast } from "react-toastify";

const BlogNew = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    datePosted: "",
    content: "",
    image: "",
  });
  const [blogImage, setBlogImage] = useState(null);
  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate required fields
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.author) newErrors.author = "Author is required";
    if (!formData.datePosted) newErrors.datePosted = "Date is required";
    if (!formData.content) newErrors.content = "Content is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("datePosted", formData.datePosted);
      formDataToSend.append("content", formData.content);
      if (blogImage) {
        formDataToSend.append("image", blogImage);
      }

      try {
        await axios.post("http://localhost:5000/api/v1/blogs", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
			if (res.status === 200) {
				toast.success("Blog created successfully");
				history.push("/blogs");
			}
		});

        console.log("Blog created successfully", formDataToSend);
        history.push("/blogs");
      } catch (error) {
        console.error("Error creating blog:", error);
      }
    }
  };

  const handleFileChange = (event) => {
    setBlogImage(event.target.files[0]);
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
    <div className="BlogNew DisplayFlex">
      <div className="Header DisplayFlex">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i>
        <span>Blogs</span> <i className="fas fa-angle-right"></i>
        <span>Add</span>
      </div>
      <form onSubmit={onSubmit} className="BlogNewContainer DisplayFlex">
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
                <p>Click here or drop file to upload Image</p>
              </label>
              {blogImage && <p>{blogImage.name}</p>}
            </div>
          </div>
          <div className="EventDetails DisplayFlex">
            <h2>Blog Details</h2>
            {renderCustomTextField("title", "Title", "e.g Blog Title")}
            <div className="InputGroups DisplayFlex">
              {renderCustomTextField("author", "Author", "e.g Author Name")}
            </div>
            <div className="InputGroups DisplayFlex">
              {renderCustomTextField("datePosted", "Date Posted", "YYYY-MM-DD", "date")}
            </div>
            {renderCustomTextField("content", "Content", "Enter content here...", "text", true, 6)}
          </div>
        </div>
        <div className="BtnGroup DisplayFlex">
          <CustomButton text="Submit" type="submit" customStyles={{ backgroundColor: "var(--green)" }} />
        </div>
      </form>
    </div>
  );
};

export default BlogNew;
