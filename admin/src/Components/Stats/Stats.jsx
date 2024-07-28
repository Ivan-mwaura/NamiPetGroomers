import React, { useState } from "react";
import "./Stats.css";
import Donut from "../Donut/Donut";
import Area from "../Area/Area";

const Stats = () => {
	return (
		<div className="StatsContainer">
			<Donut />
			<Area />
		</div>
	);
};

export default Stats;
