import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdSpaceDashboard, MdFolderOpen } from "react-icons/md";
import "./sidebar.css";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
	const location = useLocation();
	const { pathname } = location;
	const sidebar = useRef(null);

	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current) return;
			if (!sidebarOpen || sidebar.current.contains(target)) return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	useEffect(() => {
		const keyHandler = ({ keycode }) => {
			if (!sidebarOpen || keycode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	return (
		<>
			<div
				className={`siderbar-backdrop  ${sidebarOpen && "is-show-backdrop"}`}
			></div>
			<aside ref={sidebar} className={`sidebar ${sidebarOpen && "is-show"}`}>
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
						<li
							className={`sidebar-item ${
								pathname.includes("/projects") && "isActive"
							}`}
						>
							<MdFolderOpen />
							<NavLink to="/projects" className="sidebar-link">
								Projects
							</NavLink>
						</li>
					</ul>
				</nav>
			</aside>
		</>
	);
};

export default Sidebar;
