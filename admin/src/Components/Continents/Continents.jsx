import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Continents.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Continents = () => {
	const data = {
		labels: ["America", "Asia", "Europe", "Africa"],
		datasets: [
			{
				data: [27.7, 34.7, 9.2, 28.4],
				backgroundColor: ["#4BC0C0", "#FFCE56", "#36A2EB", "#FF6384"],
				hoverBackgroundColor: ["#4BC0C0", "#FFCE56", "#36A2EB", "#FF6384"],
			},
		],
	};

	const continentOptions = {
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
				backgroundColor: "rgba(255, 255, 255, 1.9)",
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
				titleColor: "#333",
				bodySpacing: 4,
				titleMarginBottom: 6,
				position: "nearest",
				zIndex: 9999,
			},
		},
	};

	// Custom plugin to display percentages inside the pie chart
	const percentagePlugin = {
		id: "percentagePlugin",
		afterDraw: (chart) => {
			const {
				ctx,
				chartArea: { width, height },
				data,
			} = chart;

			chart.data.datasets.forEach((dataset, i) => {
				const total = dataset.data.reduce((a, b) => a + b, 0);
				const meta = chart.getDatasetMeta(i);
				meta.data.forEach((element, index) => {
					const percent =
						((dataset.data[index] / total) * 100).toFixed(1) + "%";
					const { x, y } = element.tooltipPosition();
					ctx.fillStyle = "#fff";
					ctx.font = "bold 12px Arial";
					ctx.textAlign = "center";
					ctx.textBaseline = "middle";
					ctx.fillText(percent, x, y);
				});
			});
		},
	};

	return (
		<div className="Continents">
			<h3>Current Visits</h3>
			<div className="PieChartContainer">
				<Pie
					data={data}
					options={continentOptions}
					plugins={[percentagePlugin]}
				/>
			</div>
		</div>
	);
};

export default Continents;
