import React from "react";
import { Chart } from "react-google-charts";

const Charts = () => {
	const data = [
		["Task", "Hours per Day"],
		["Work", 11],
		["Eat", 2],
		["Commute", 2],
		["Watch TV", 2],
		["Sleep", 7],
	];

	const options = {
		title: "Vote Stats.",
		is3D: true,
	};
	return <Chart chartType="PieChart" data={data} options={options} height={"400px"} width={"400px"} />;
};

export default Charts;
