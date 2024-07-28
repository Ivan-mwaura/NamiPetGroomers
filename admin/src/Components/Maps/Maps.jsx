import React from "react";
import "./Maps.css";

const countryData = [
	{
		country: "Kiambu",
		code: "de",
		data: [
			{ platform: "android", icon: "fab fa-android", value: "9.91k" },
			{ platform: "windows", icon: "fab fa-windows", value: "1.95k" },
			{ platform: "apple", icon: "fab fa-apple", value: "1.95k" },
		],
	},
	{
		country: "Nairobi",
		code: "gb",
		data: [
			{ platform: "android", icon: "fab fa-android", value: "1.95k" },
			{ platform: "windows", icon: "fab fa-windows", value: "9.12k" },
			{ platform: "apple", icon: "fab fa-apple", value: "9.12k" },
		],
	},
	{
		country: "Juja",
		code: "fr",
		data: [
			{ platform: "android", icon: "fab fa-android", value: "9.12k" },
			{ platform: "windows", icon: "fab fa-windows", value: "6.98k" },
			{ platform: "apple", icon: "fab fa-apple", value: "6.98k" },
		],
	},
	{
		country: "Kisumu",
		code: "kr",
		data: [
			{ platform: "android", icon: "fab fa-android", value: "6.98k" },
			{ platform: "windows", icon: "fab fa-windows", value: "8.49k" },
			{ platform: "apple", icon: "fab fa-apple", value: "8.49k" },
		],
	},
	{
		country: "Thika",
		code: "us",
		data: [
			{ platform: "android", icon: "fab fa-android", value: "8.49k" },
			{ platform: "windows", icon: "fab fa-windows", value: "2.03k" },
			{ platform: "apple", icon: "fab fa-apple", value: "2.03k" },
		],
	},
];

const Maps = () => {
	return (
		<div className="Maps">
			<h3>Visits per county</h3>
			<div className="CountriesContainer">
				{countryData.map((country, index) => (
					<div className="CountryRow" key={index}>
						<img
							src={`https://flagcdn.com/24x18/${country.code}.png`}
							alt={`${country.country} flag`}
							className="CountryFlag"
						/>
						<span className="CountryName">{country.country}</span>
						{country.data.map((platform, idx) => (
							<div className="PlatformData" key={idx}>
								<i className={platform.icon}></i>
								<span>{platform.value}</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Maps;
