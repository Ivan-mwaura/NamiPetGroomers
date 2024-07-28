import { useState, useContext } from "react";
import "./Blogs.css";
import CustomTextField from "../../Utils/CustomTextField";
import CustomButton from "../../Utils/CustomButton";
import CustomTable from "../../Components/CustomTable";
import { AppContext } from "../../Context/ApiContext";
import { Avatar } from "@mui/material";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;
  const { blogs } = useContext(AppContext);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const blogsData = blogs.data.map((blog) => {
    return {
      _id: blog._id,
      title: blog.title,
      author: blog.author,
      datePosted: blog.datePosted,
      content: blog.content,
      image: blog.image,
    };
  });

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentPageData = blogsData.slice(startIndex, startIndex + blogsPerPage);

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0);
  };

  const columns = [
    {
      label: "Blog Image",
      field: "image",
      render: (value, row) => {
        return value ? (
          <Avatar src={value} alt={row.title} />
        ) : (
          <Avatar>{getInitials(row.title)}</Avatar>
        );
      },
    },
    {
      label: "Title",
      field: "title",
    },
    {
      label: "Author",
      field: "author",
    },
    { label: "Date Posted", field: "datePosted" },
    { label: "Content", field: "content" },
  ];

  return (
    <div className="Blogs DisplayFlex">
      <div className="Header">
        <span>Dashboard</span> <i className="fas fa-angle-right"></i> <span>Blogs</span>
      </div>
      <div className="BlogsContainer DisplayFlex">
        <div className="BlogsTop DisplayFlex">
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
                window.location.href = "blog/new";
              }}
            />
          </div>
        </div>
        <div className="BlogsBottom">
          <CustomTable
            data={currentPageData}
            columns={columns}
            currentPage={currentPage}
            totalItems={blogsData?.length}
            usersPerPage={blogsPerPage}
            accomodationsPerPage={blogsPerPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            context="blogs"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
