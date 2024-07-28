import Continents from "../../Components/Continents/Continents";
import DashboadCards from "../../Components/DashboadCards/DashboadCards";
import Maps from "../../Components/Maps/Maps";
import SalesGender from "../../Components/SalesGender/SalesGender";
import Stats from "../../Components/Stats/Stats";
import VisitPage from "../../Components/VisitPage/VisitPage";
import "./Dashboard.css";
import PropTypes from "prop-types";

const Dashboard = () => {
	return (
		<div className="Dashboard DisplayFlex">
			<div className="DashBottom DisplayFlex">
				<div className="Header">
					<h3>Dashboard</h3>
				</div>
				<div className="DashboadCards">
					<DashboadCards />
				</div>
				<div className="Stats">
					<Stats />
				</div>
				<div className="Visits">
					<Maps />
					<Continents />
				</div>
				<div className="VisitPages">
					<SalesGender />
					<VisitPage />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

// props validation

Dashboard.propTypes = {
	user: PropTypes.object.isRequired,
};
