import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import styled from "styled-components";
import CustomButton from "../Utils/CustomButton";
import PropTypes from "prop-types";
import { useHistory } from "react-router-use-history";
import axios from "axios";
import { toast } from "react-toastify";

const CustomTableContainer = styled(TableContainer)`
  color: #000;
  border-radius: 8px;
  min-height: 70vh;
`;

const CustomTableCell = styled(TableCell)`
  color: #000;
  padding: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f1f1f1;
    color: #000000;
  }
`;

const CustomTable = ({
  data,
  columns,
  currentPage,
  totalItems,
  usersPerPage,
  handleNextPage,
  handlePreviousPage,
  context,
  onReplyClick, // Add this prop for handling reply click
}) => {
  const history = useHistory();
  const totalPages = Math.ceil(totalItems / usersPerPage);
  const startRange = (currentPage - 1) * usersPerPage + 1;
  const endRange = Math.min(startRange + usersPerPage - 1, totalItems);

  const [selected, setSelected] = useState([]);
  const [clickTimer, setClickTimer] = useState(null);
  const [updatedData, setUpdatedData] = useState([]); // Initialize as empty array
  const [editMode, setEditMode] = useState({}); // Add state for edit mode
  const [displayType, setDisplayType] = useState("all"); // State to track display type

  useEffect(() => {
    filterData(displayType);
  }, [data, displayType]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelected(updatedData.map((item) => item._id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectOne = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleRowClick = (id) => {
    if (clickTimer) {
      clearTimeout(clickTimer);
      setClickTimer(null);
      if (context === "users") {
        history.push(`/user/${id}`);
      }
    } else {
      setClickTimer(
        setTimeout(() => {
          handleSelectOne(id);
          setClickTimer(null);
        }, 200)
      );
    }
  };

  const handleCheckboxClick = (id) => {
    handleSelectOne(id);
    setEditMode({ ...editMode, [id]: !editMode[id] }); // Toggle edit mode for the row
  };

  const handleInputChange = (id, field, value) => {
    const updatedRow = updatedData.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setUpdatedData(updatedRow);
  };

  const getApiEndpoints = (animalType, context, role) => {
    if (context === "users") {
      return role === "admin"
        ? {
            delete: `http://localhost:5000/api/v1/deleteAdminLogin/`,
            update: `http://localhost:5000/api/v1/updateAdminLogin/`,
          }
        : {
            delete: `http://localhost:5000/api/v1/deleteLogin/`,
            update: `http://localhost:5000/api/v1/updateLogin/`,
          };
    }

    {/*if (context === "products") {
      return {
        update: `http://localhost:5000/api/v1/updateProduct/`, // Adjust endpoint if necessary
        delete: `http://localhost:5000/api/v1/deleteProduct/`, // Adjust endpoint if necessary
      };
    }*/}



    if (context === "animalGallery") {
      return {
        update: `http://localhost:5000/api/v1/updateAnimalGrooming/`,
        delete: `http://localhost:5000/api/v1/deleteAnimalGrooming/`,
      };
    }

    if(context === "products") {
      
      
    switch (animalType) {

      case "Dog":
        return {
          update: `http://localhost:5000/api/v1/updateDogProduct/`,
          delete: `http://localhost:5000/api/v1/deleteDogProduct/`,
        };
      case "Cat":
        return {
          update: `http://localhost:5000/api/v1/updateCatProduct/`,
          delete: `http://localhost:5000/api/v1/deleteCatProduct/`,
        };
      case "Birds":
        return {
          update: `http://localhost:5000/api/v1/updateBirdProduct/`,
          delete: `http://localhost:5000/api/v1/deleteBirdProduct/`,
        };
      case "Horse":
        return {
          update: `http://localhost:5000/api/v1/updateHorseProduct/`,
          delete: `http://localhost:5000/api/v1/deleteHorseProduct/`,
        };
      case "FishAndAquaticPets":
        return {
          update: `http://localhost:5000/api/v1/updateFishAndAquaticAnimalsProduct/`,
          delete: `http://localhost:5000/api/v1/deleteFishAndAquaticAnimalsProduct/`,
        };
      case "services":
        return {
          update: `http://localhost:5000/api/v1/updateService/`,
          delete: `http://localhost:5000/api/v1/deleteService/`,
        };
      case "veterinarians":
        return {
          update: `http://localhost:5000/api/v1/updateVeterinarian/`,
          delete: `http://localhost:5000/api/v1/deleteVeterinarian/`,
        };
      case "messages":
        return {
          delete: `http://localhost:5000/api/v1/deleteMessage/`,
        };
      case "blogs":
        return {
          update: `http://localhost:5000/api/v1/updateBlog/`,
          delete: `http://localhost:5000/api/v1/deleteBlog/`,
        };
      case "subscribers":
        return {
          update: `http://localhost:5000/api/v1/updateSubscriber/`,
          delete: `http://localhost:5000/api/v1/deleteSubscriber/`,
        };
      case "pricings":
        return {
          update: `http://localhost:5000/api/v1/updatePricing/`,
          delete: `http://localhost:5000/api/v1/deletePricing/`,
        };
      default:
        return { update: "", delete: "" };
    }
  }
  }

  const handleUpdateClick = async (id, animalType, context) => {
    const { update } = getApiEndpoints(animalType, context);
    const updatedRow = updatedData.find((item) => item._id === id);

    try {
      const response = await axios.patch(`${update}${id}`, updatedRow);
      if (response.status === 200) {
        toast.success("Item updated successfully");
      } else {
        toast.error("Error updating item");
      }
      setEditMode({ ...editMode, [id]: false });
    } catch (error) {
      toast.error("Error updating item");
    }
  };

  const handleDeleteClick = async (id, animalType, context) => {
    console.log("animalType", animalType);
    const { delete: deleteEndpoint } = getApiEndpoints(animalType, context);
    try {
      const response = await axios.delete(`${deleteEndpoint}${id}`);
      if (response.status === 200) {
        toast.success("Item deleted successfully");
        setUpdatedData(updatedData.filter((item) => item._id !== id));
      } else {
        toast.error("Error deleting item");
      }
    } catch (error) {
      toast.error("Error deleting item");
    }
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const filterData = (type) => {
    let filteredData;
    if (type === "admins") {
      filteredData = data.filter((item) => item.Roles === "admin");
    } else if (type === "users") {
      filteredData = data.filter((item) => item.Roles === "user");
    } else {
      filteredData = data;
    }
    setUpdatedData(filteredData);
  };

  return (
    <Box sx={{ padding: ".5rem" }}>
      {context === "users" && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <Select
            value={displayType}
            onChange={(e) => setDisplayType(e.target.value)}
            displayEmpty
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="admins">Admins</MenuItem>
            <MenuItem value="users">Users</MenuItem>
          </Select>
        </Box>
      )}
      <CustomTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < updatedData.length}
                  checked={updatedData.length > 0 && selected.length === updatedData.length}
                  onChange={handleSelectAll}
                />
              </CustomTableCell>
              {columns.map((column, index) => (
                <CustomTableCell key={`col-${index}`}>{column.label}</CustomTableCell>
              ))}
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updatedData.length === 0 ? (
              <TableRow>
                <CustomTableCell colSpan={columns.length + 2} align="center">
                  <Typography variant="body1" color="textSecondary">
                    No data available
                  </Typography>
                </CustomTableCell>
              </TableRow>
            ) : (
              updatedData.map((row) => {
                const isItemSelected = isSelected(row._id);
                const isEditing = editMode[row._id];
                return (
                  <CustomTableRow
                    key={row._id}
                    selected={isItemSelected}
                    onClick={() => handleRowClick(row._id)}
                  >
                    <CustomTableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleCheckboxClick(row._id)}
                      />
                    </CustomTableCell>
                    {columns.map((column, colIndex) => (
                      <CustomTableCell key={`cell-${row._id}-${colIndex}`}>
                        {isEditing ? (
                          <TextField
                            value={row[column.field]}
                            onChange={(e) =>
                              handleInputChange(row._id, column.field, e.target.value)
                            }
                          />
                        ) : column.render ? (
                          column.render(row[column.field], row)
                        ) : (
                          row[column.field]
                        )}
                      </CustomTableCell>
                    ))}
                    <CustomTableCell>
                      {isEditing ? (
                        <CustomButton
                          size="small"
                          text="Update"
                          customStyles={{ backgroundColor: "var(--green)" }}
                          onClick={() => handleUpdateClick(row._id, row.animalType, context)}
                        />
                      ) : (
                        <CustomButton
                          size="small"
                          text="Delete"
                          customStyles={{ backgroundColor: "red" }}
                          onClick={() => handleDeleteClick(row._id, row.animalType, context)}
                        />
                      )}
                      {(context === "messages" || context === "contactUsInquiries" || row.daysRemaining === 0 && context === "subscribers") && (
                        <CustomButton
                          size="small"
                          text="Reply"
                          customStyles={{ backgroundColor: "var(--blue)" }}
                          onClick={() => onReplyClick(row)}
                        />
                      )}
                    </CustomTableCell>
                  </CustomTableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </CustomTableContainer>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            color: "#666",
          }}
        >
          Page {currentPage}, {startRange}-{endRange} of {totalItems}
        </span>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomButton
            size="small"
            text="Previous"
            variant="outlined"
            onClick={handlePreviousPage}
            customStyles={{
              color: "var(--green)",
              border: "1px solid var(--green)",
            }}
            disabled={currentPage === 1}
          />
          <CustomButton
            size="small"
            text="Next"
            customStyles={{ backgroundColor: "var(--green)" }}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomTable;

CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePreviousPage: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
  onReplyClick: PropTypes.func,
};
