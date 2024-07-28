import React from "react";
import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	Title,
} from "chart.js";
import "./DashboadCards.css";

// Register the necessary chart components
ChartJS.register(
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
	Title
);

const DashboadCards = () => {
	const cardData = [
		{
			title: "Total Active Users",
			percentage: "+2.6%",
			value: "18,765",
			graphData: [12, 19, 3, 5, 2, 3, 12, 19],
			color: "#36A2EB",
		},
		{
			title: "Total Visits",
			percentage: "+0.2%",
			value: "4,876",
			graphData: [8, 11, 2, 6, 10, 3, 9, 15],
			color: "#4BC0C0",
		},
		{
			title: "Total Sales",
			percentage: "-0.1%",
			value: "678",
			graphData: [10, 13, 6, 8, 15, 9, 7, 11],
			color: "#FFCE56",
		},
	];

	const graphOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				display: false,
			},
			y: {
				display: false,
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
				caretPadding: 10,
				cornerRadius: 4,
				padding: 8,
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
				callbacks: {
					label: function (context) {
						let label = context.dataset.label || "";
						if (context.parsed.y !== null) {
							label += `: ${context.parsed.y}`;
						}
						return label;
					},
					title: function () {
						return "";
					},
				},
			},
		},
	};

	return (
		<div className="DashboadCards">
			<div className="DashboadCardsContainer DisplayFlex">
				{cardData.map((card, index) => (
					<div className="DashboadCard DisplayFlex" key={index}>
						<div className="CardLeft DisplayFlex">
							<span>{card.title}</span>
							<div className="CardPercentage DisplayFlex">
								<i
									className={`fas ${
										card.percentage.startsWith("+")
											? "fa-caret-up"
											: "fa-caret-down"
									}`}
								></i>
								<span
									className={
										card.percentage.startsWith("+") ? "Positive" : "Negative"
									}
								>
									{card.percentage}
								</span>
							</div>
							<div className="CardValue">
								<span>{card.value}</span>
							</div>
						</div>
						<div className="CardRight DisplayFlex">
							<div className="SmallGraph">
								<Bar
									data={{
										labels: Array(card.graphData.length).fill(""),
										datasets: [
											{
												data: card.graphData,
												backgroundColor: card.color,
												borderColor: card.color,
												borderWidth: 1,
											},
										],
									}}
									options={graphOptions}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboadCards;
