import { MdMenu } from "react-icons/md";

import "./navbar.css";
const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
	return (
		<header className="navbar">
			<MdMenu
				aria-expanded={sidebarOpen}
				className="navbar-icon"
				onClick={() => setSidebarOpen(!sidebarOpen)}
			/>
		</header>
	);
};

export default Navbar;
