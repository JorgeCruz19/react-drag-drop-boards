import { Link, NavLink, useLocation } from "react-router-dom";
import { MdSpaceDashboard, MdFolderOpen } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
	const location = useLocation();
	const { pathname } = location;

	return (
		<aside className="sidebar">
			<h1 className="sidebar-logo">
				Tasky<span className="logo-dot"></span>
			</h1>

			<nav className="sidebar-navigation">
				<ul className="sidebar-list">
					<li className={`sidebar-item ${pathname == "/" && "isActive"}`}>
						<MdSpaceDashboard />
						<Link to={"/"} className="sidebar-link">
							Dashboard
						</Link>
					</li>
					<li className={`sidebar-item ${pathname == "/kanban" && "isActive"}`}>
						<MdFolderOpen />
						<NavLink to="/kanban" className="sidebar-link">
							Projects
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
