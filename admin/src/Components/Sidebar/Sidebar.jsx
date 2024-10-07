import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { sidebardata } from "../../Data";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import logo from "../../assets/nami-logo.jpg";
import { Badge } from "@mui/material";
import { AppContext } from "../../Context/ApiContext";
import { useContext } from "react";

const Sidebar = () => {
	const [loading, setLoading] = useState(true);
	const {isToggled} = useContext(AppContext)

	console.log(isToggled)

	useEffect(() => {
		// Simulate data fetching or processing delay
		const loadData = async () => {
			// Simulating a delay for loading data
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setLoading(false);
		};

		loadData();
	}, []);

	return (
		<SkeletonTheme
			baseColor="rgba(255, 255, 255, 0.1)"
			highlightColor="rgba(255, 255, 255, 0.05)"
			animationSpeed={1}
		>
			<div className="SidebarContainer">
				<div className="SidebarTop">
					<div className="ProfilePic">
						<img src={logo} alt="logo" />
					</div>
					<div className="ProfileName">
						<span>Nami PetGroomers</span>
						<small>Admin Panel</small>
						<p>{loading ? <Skeleton width={100} /> : null}</p>
					</div>
				</div>
				<div className="SidebarBottom">
					<div className="SidebarItems">
						{sidebardata?.map((item) => (
							<Link key={item.id} to={item.path} className="SidebarItemLink">
								<motion.div
									className="SidebarItem"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{loading ? (
										<Skeleton width={160} height={20} />
									) : (
										<>

											{
												isToggled ?<> <span>{item.icon}</span> <span>{item.title}</span></>  : <><span>{item.icon}</span>  <span>{item.title}</span></>
											}
											
											
										</>
									)}
								</motion.div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</SkeletonTheme>
	);
};

export default Sidebar;
