import { createContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";
//import AnimalGallery from "../Pages/Animalgallery/AnimalGallery";

export const AppContext = createContext();

const ApiProvider = ({ children }) => {
	const [data, setData] = useState({
		users: [],
		admins: [],
		services: [],
		veterinarians: [],
		messages: [],
		blogs: [],
		awards: [],
		travels: [],
		dogproducts: [],
		catproducts: [],
		birdproducts: [],
		horseproducts: [],
		FishAndAcquaticAnimalsProducts: [],
		animalGallery: [],
		contactUsInquiries: [],
		subscribers: [],
		pricings: [],
		loading: true,
		error: null,
		success: null,
		user: null,
		token: null,
		isLoggedIn: true,
		userData: JSON.parse(localStorage.getItem("userData")) || {},
	});

	const endpoints = useMemo(
		() => [
			{ key: "users", url: "http://localhost:5000/api/v1/getLogins" },
			{ key: "admins", url: "http://localhost:5000/api/v1/getAdminLogins" },
			{ key: "services", url: "http://localhost:5000/api/v1/getServices" },
			{
				key: "veterinarians",
				url: "http://localhost:5000/api/v1/getVeterinarians",
			},
			{ key: "contactUsInquiries", url: "http://localhost:5000/api/v1/getContactUsInquiries" },
			{key: "animalGallery", url: "http://localhost:5000/api/v1/getAnimalGroomings"},
			{key: "dogproducts", url: "http://localhost:5000/api/v1/getDogProducts"},
			{key: "catproducts", url: "http://localhost:5000/api/v1/getCatProducts"},
			{key: "birdproducts", url: "http://localhost:5000/api/v1/getBirdProducts"},
			{key: "horseproducts", url: "http://localhost:5000/api/v1/getHorseProducts"},
			{key: "FishAndAcquaticAnimalsProducts", url: "http://localhost:5000/api/v1/getFishAndAcquaticAnimalsProducts"},
			{ key: "messages", url: "http://localhost:5000/api/v1/getMessages" },
			{ key: "blogs", url: "http://localhost:5000/api/v1/getBlogs" },
			{ key: "subscribers", url: "http://localhost:5000/api/v1/getSubscribers" },
			{key: "pricings", url: "http://localhost:5000/api/v1/getPricings"},
			{ key: "awards", url: "http://localhost:5000/api/v1/getServices" },
			{ key: "travels", url: "http://localhost:5000/api/v1/getServices" },
		],
		[]
	);


	

	const fetchData = async (endpoint) => {
		console.log(`Attempting to fetch data from ${endpoint.url}...`);
		try {
			const response = await axios.get(endpoint.url);
			console.log(`Successfully fetched ${endpoint.key} data:`, response.data);
			setData((prevData) => ({
				...prevData,
				[endpoint.key]: response.data,
			}));
		} catch (error) {
			console.error(
				`Error fetching ${endpoint.key} data! URL: ${endpoint.url}`
			);
			
			if (error.response) {
				console.error("Response data:", error.response.data);
				console.error("Response status:", error.response.status);
				console.error("Response headers:", error.response.headers);
			} else if (error.request) {
				console.error("Request data:", error.request);
			} else {
				console.error("Error message:", error.message);
			}
			console.error("Error config:", error.config);

			setData((prevData) => ({
				...prevData,
				error: `Error fetching ${endpoint.key} data: ${error.message}`,
			}));
		}
	};

	useEffect(() => {
		const fetchAllData = async () => {
			console.log("Starting to fetch all data...");
			try {
				await Promise.all(endpoints.map((endpoint) => fetchData(endpoint)));
				console.log("All data fetched successfully");
			} catch (error) {
				console.error("Error fetching data", error);
			} finally {
				setData((prevData) => ({ ...prevData, loading: false }));
				console.log("Data fetching complete, loading state set to false");
			}
		};
		fetchAllData();
	}, [endpoints]);

	const setUserData = (userData) => {
		console.log("Setting user data:", userData);
		setData((prevData) => ({
			...prevData,
			userData,
			isLoggedIn: userData.isLoggedIn,
			token: userData.token,
		}));
		localStorage.setItem("userData", JSON.stringify(userData));
		console.log("User data saved to localStorage:", JSON.stringify(userData));
	};

	//console.log("Data:", data.birdproducts, data.catproducts, data.dogproducts, data.horseproducts, data.FishAndAcquaticAnimalsProducts);

	return (
		<AppContext.Provider value={{ ...data, setData, setUserData }}>
			{children}
		</AppContext.Provider>
	);
};

ApiProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ApiProvider;
