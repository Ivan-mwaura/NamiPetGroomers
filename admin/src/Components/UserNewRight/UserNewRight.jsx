import React from "react";
import "./UserNewRight.css";
import CustomTextField from "../../Utils/CustomTextField";
import { MenuItem } from "@mui/material";
import CustomButton from "../../Utils/CustomButton";

const UserNewRight = ({
	userNewData,
	handleChange,
	handleSubmit,
	handleEditSubmit,
}) => {
	return (
		<div className="UserNewRight UserRight DisplayFlex">
			<span>User Details</span>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="name"
					label="Name"
					placeholder="Name"
					name="name"
					type="text"
					variant="outlined"
					value={userNewData?.name || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<CustomTextField
					id="phone"
					label="Phone"
					placeholder="Phone"
					name="phone"
					type="text"
					variant="outlined"
					value={userNewData?.phone || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="email"
					label="Email"
					placeholder="Email"
					name="email"
					type="text"
					variant="outlined"
					value={userNewData?.email || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<CustomTextField
					id="userType"
					label="Role"
					name="userType"
					variant="outlined"
					value={userNewData?.userType || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					select
				>
					<MenuItem value="admin">Admin</MenuItem>
					<MenuItem value="user">User</MenuItem>
					<MenuItem value="moderator">Moderator</MenuItem>
					<MenuItem value="subscriber">Subscriber</MenuItem>
					<MenuItem value="guest">Guest</MenuItem>
				</CustomTextField>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="username"
					label="Username"
					placeholder="Username"
					name="username"
					type="text"
					variant="outlined"
					value={userNewData?.username || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<CustomTextField
					id="location"
					label="Location"
					placeholder="Location"
					name="location"
					type="text"
					variant="outlined"
					value={userNewData?.location || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
			<div className="UserDetails DisplayFlex">
				<CustomTextField
					id="description"
					label="Description"
					placeholder="Description"
					name="description"
					variant="outlined"
					value={userNewData?.description || ""}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					multiline
					rows={4}
				/>
			</div>
			<div className="UserButtons DisplayFlex">
				<CustomButton
					text="Add User"
					variant="contained"
					customStyles={{ backgroundColor: "var(--green)" }}
					onClick={handleSubmit}
					size="small"
				/>
			</div>
		</div>
	);
};

export default UserNewRight;
