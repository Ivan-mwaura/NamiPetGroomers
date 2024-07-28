import React from "react";
import "./DailyVisits.css";

const DailyVisits = () => {
	return (
		<div className="DailyVisits">
			<h2>User Visits by Day</h2>
			<div className="visit-bar">
				<span>Mon</span>
				<div className="bar">
					<div className="fill" style={{ width: "80%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Tue</span>
				<div className="bar">
					<div className="fill" style={{ width: "60%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Wed</span>
				<div className="bar">
					<div className="fill" style={{ width: "40%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Thu</span>
				<div className="bar">
					<div className="fill" style={{ width: "70%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Fri</span>
				<div className="bar">
					<div className="fill" style={{ width: "75%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Sat</span>
				<div className="bar">
					<div className="fill" style={{ width: "90%" }}></div>
				</div>
			</div>
			<div className="visit-bar">
				<span>Sun</span>
				<div className="bar">
					<div className="fill" style={{ width: "50%" }}></div>
				</div>
			</div>
			<div className="most-visited">
				<p>Most Visited Day</p>
				<p>Total 38.7k visits on Saturday</p>
			</div>
		</div>
	);
};

export default DailyVisits;
