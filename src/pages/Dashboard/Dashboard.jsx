import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
const Dashboard = () => {
	return (
		<div className="dashboard">
			<Sidebar />

			<main className="main-container">
				<Outlet />
			</main>
		</div>
	);
};

export default Dashboard;
