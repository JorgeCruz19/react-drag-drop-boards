import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
const Dashboard = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	return (
		<div className="dashboard">
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			<main className="main-container">
				<Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
				<div className="inner-container">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Dashboard;
