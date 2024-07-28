import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	Tooltip,
	Legend,
	Filler,
} from "chart.js";
import "./Area.css";

// Register the necessary chart components
ChartJS.register(
	ArcElement,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	CategoryScale,
	Tooltip,
	Legend,
	Filler
);

const Area = () => {
	const [hoveredSegment, setHoveredSegment] = useState(null);

	const lineData = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Nairobi",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "#36A2EB",
				borderColor: "#36A2EB",
				pointBackgroundColor: "#36A2EB",
				pointBorderColor: "#36A2EB",
				data: [65, 59, 80, 81, 56, 55, 40, 60, 70, 90, 100, 110],
			},
			{
				label: "Overseas",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "#FFCE56",
				borderColor: "#FFCE56",
				pointBackgroundColor: "#FFCE56",
				pointBorderColor: "#FFCE56",
				data: [28, 48, 40, 19, 86, 27, 90, 100, 110, 120, 130, 140],
			},
		],
	};

	const lineOptions = {
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
				mode: "index",
				intersect: false,
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
						let label = context.dataset.label || "";
						if (context.parsed.y !== null) {
							label += ": " + context.parsed.y;
						}
						return label;
					},
					title: function (tooltipItems) {
						if (tooltipItems.length) {
							return tooltipItems[0].label;
						}
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
		interaction: {
			mode: "index",
			intersect: false,
		},
		hover: {
			mode: "index",
			intersect: false,
			onHover: (event, chartElement) => {
				if (chartElement.length) {
					const element = chartElement[0];
					setHoveredSegment({
						label: lineData.datasets[element.datasetIndex].label,
						value: lineData.datasets[element.datasetIndex].data[element.index],
						backgroundColor:
							lineData.datasets[element.datasetIndex].backgroundColor,
					});
				} else {
					setHoveredSegment(null);
				}
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				ticks: {
					beginAtZero: true,
				},
			},
		},
	};

	return (
		<div className="AreaContainer">
			<div className="Area">
				<h3>Geographical Summary</h3>
				<div className="DatesContainer">
					<p>(+43% than last year)</p>
					<select>
						<option>2019</option>
						<option>2020</option>
						<option>2021</option>
					</select>
				</div>
				<div className="chart-container">
					<Line data={lineData} options={lineOptions} />
				</div>
			</div>
		</div>
	);
};

export default Area;
