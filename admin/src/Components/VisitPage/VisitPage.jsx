import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";
import "./VisitPage.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const VisitPage = () => {
	const data = {
		labels: ["Home", "Services", "Contact Us", "About Us", "Products"],
		datasets: [
			{
				label: "Page Visits",
				data: [1500, 1200, 900, 800, 700],
				backgroundColor: "#36A2EB",
				hoverBackgroundColor: "#36A2EB",
				borderWidth: 1,
				borderRadius: 10,
				barThickness: 20,
			},
		],
	};

	const options = {
		responsive: true,
		indexAxis: "y",
		scales: {
			x: {
				beginAtZero: true,
				ticks: {
					stepSize: 100,
				},
			},
			y: {
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				bodyFont: {
					size: 12,
					weight: "bold",
					family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
				},
				bodyColor: "#333",
				borderWidth: 1,
				borderColor: "#ddd",
				caretPadding: 1,
				cornerRadius: 8,
				padding: 8,
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
				callbacks: {
					label: function (context) {
						let label = context.label || "";
						if (context.raw !== null) {
							label += ": " + context.raw;
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
				position: "nearest",
				xAlign: "center",
				yAlign: "center",
				titleColor: "#333",
				bodySpacing: 4,
				titleMarginBottom: 6,
			},
		},
	};

	return (
		<div className="VisitPage">
			<h3>Pages Visited</h3>
			<p>(+43%) than last year</p>
			<div className="BarChartContainer">
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default VisitPage;
