import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./SalesGender.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesGender = () => {
	const [centerText, setCenterText] = useState({ label: "Total", value: 2324 });

	const data = {
		labels: ["Male", "Female"],
		datasets: [
			{
				data: [1324, 1000],
				backgroundColor: ["#4BC0C0", "#FFCE56"],
				hoverBackgroundColor: ["#4BC0C0", "#FFCE56"],
				borderWidth: 3,
				cutout: "90%",
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
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
			hover: {
				onHover: function (event, elements) {
					if (elements.length > 0) {
						const element = elements[0];
						const dataset = data.datasets[element.datasetIndex];
						const label = data.labels[element.index];
						const value = dataset.data[element.index];
						setCenterText({ label, value });
					} else {
						setCenterText({ label: "Total", value: 2324 });
					}
				},
			},
		},
	};

	return (
		<div className="SalesGender">
			<h3>Sale By Gender</h3>
			<div className="DoughnutContainer">
				<Doughnut data={data} options={options} />
				<div className="ChartOverlay">
					<p>{centerText.label}</p>
					<h2>{centerText.value.toLocaleString()}</h2>
				</div>
			</div>
		</div>
	);
};

export default SalesGender;
