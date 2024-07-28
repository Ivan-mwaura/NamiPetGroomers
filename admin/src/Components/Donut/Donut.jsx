import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
import UAParser from "ua-parser-js"; // Import ua-parser-js
import "./Donut.css";

// Register the necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Donut = () => {
	const [hoveredSegment, setHoveredSegment] = useState(null);
	const [deviceInfo, setDeviceInfo] = useState({
		platform: "",
		publicIpAddress: "",
		privateIpAddress: "",
		os: "", // Add 'os' field to store the operating system
		browser: "", // Add 'browser' field to store the browser
		location: "", // Add 'location' field to store the location
	});

	const doughnutData = {
		labels: ["Mac", "Windows", "iOS", "Android"],
		datasets: [
			{
				data: [300, 50, 100, 75],
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
				hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384", "#4BC0C0"],
				borderWidth: 2,
				cutout: "90%", // Make the donut thinner
			},
		],
	};

	const doughnutOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "bottom",
				align: "center",
				labels: {
					usePointStyle: true,
				},
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				bodyFont: {
					size: 14,
					weight: "bold",
					family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				},
				bodyColor: "#333",
				borderWidth: 1,
				borderColor: "#ddd",
				caretPadding: 10,
				cornerRadius: 8,
				padding: 8,
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
				callbacks: {
					label: function (context) {
						let label = context.label || "";
						if (context.parsed) {
							label += ": " + context.parsed;
						}
						return label;
					},
					title: function () {
						return "";
					},
				},
				displayColors: true,
				usePointStyle: true,
				pointStyle: "circle",
				position: "nearest", // Ensure tooltip follows cursor
				xAlign: "center", // Align the tooltip in the center
				yAlign: "center",
				titleColor: "#333",
				bodySpacing: 4,
				titleMarginBottom: 6,
			},
		},
		hover: {
			mode: "nearest",
			intersect: true,
			onHover: (event, chartElement) => {
				if (chartElement.length) {
					const element = chartElement[0];
					setHoveredSegment({
						label: doughnutData.labels[element.index],
						value: doughnutData.datasets[0].data[element.index],
						backgroundColor:
							doughnutData.datasets[0].backgroundColor[element.index],
					});
				} else {
					setHoveredSegment(null);
				}
			},
		},
	};

	// function to get the current device
	useEffect(() => {
		const fetchDeviceInfo = async () => {
			// Get user agent
			const userAgent = navigator.userAgent;

			// Parse user agent string
			const parser = new UAParser();
			const result = parser.getResult(userAgent);
			const os = result.os.name || "Unknown OS";
			const browser = result.browser.name || "Unknown Browser";

			// Get public IP address from an external API
			try {
				const response = await axios.get("https://api.ipify.org?format=json");
				const publicIpAddress = response.data.ip;

				// Get location based on public IP address
				const locationResponse = await axios.get(
					`https://ipapi.co/${publicIpAddress}/json/`
				);
				const location = `${locationResponse.data.city}, ${locationResponse.data.region}, ${locationResponse.data.country}`;

				setDeviceInfo((prevState) => ({
					...prevState,
					os,
					browser,
					publicIpAddress,
					location,
				}));
			} catch (error) {
				console.error("Error fetching public IP address or location:", error);
			}
		};

		fetchDeviceInfo();
	}, []);

	return (
		<div className="Donut">
			<div className="Devices">
				<h3>Devices Summary</h3>
				<div className="chart-container">
					<Doughnut data={doughnutData} options={doughnutOptions} />
					<div className="chart-overlay">
						<div className="total-value">
							<p className="hovered-label">
								{hoveredSegment ? hoveredSegment.label : "Total"}
							</p>
							<span className="hovered-value">
								{hoveredSegment
									? hoveredSegment.value
									: doughnutData.datasets[0].data.reduce(
											(acc, curr) => acc + curr,
											0
									  )}
							</span>
						</div>
					</div>
				</div>
				<p>
					<strong>Operating System:</strong> {deviceInfo.os}
				</p>
				<p>
					<strong>Browser:</strong> {deviceInfo.browser}
				</p>
				<p>
					<strong>Public IP Address:</strong> {deviceInfo.publicIpAddress}
				</p>
				<p>
					<strong>Location:</strong> {deviceInfo.location}
				</p>
			</div>
		</div>
	);
};

export default Donut;
