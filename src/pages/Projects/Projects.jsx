import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAddBox, MdModeEditOutline, MdDelete } from "react-icons/md";
import openModal from "../../utils/openModal";
import { formatDateTime } from "../../utils/formatDates";
import { getAllProjects, deleteProject } from "../../services/projects";
import Tooltip from "../../components/Tooltip/Tooltip";

import "./projects.css";

const Projects = () => {
	const [boards, setBoards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;
		getAllProjects(setBoards);
		return () => {
			isMounted = false;
		};
	}, []);

	const handleOpenModal = (type, id) => {
		openModal(type, id);
	};

	return (
		<>
			<div className="project-container">
				<h1 className="project-title">Projects boards</h1>
				<button onClick={() => handleOpenModal(false)} className="project-add">
					<MdAddBox />
				</button>
			</div>
			<div className="card-container">
				{boards.map((board) => (
					<div key={board.id} className="card">
						<div className="card-header">
							<h2 className="card-title">{board.name}</h2>
							<Tooltip id={board.id}>
								<button className="tooltip-edit" onClick={() => handleOpenModal("edit", board.id)}>
									<MdModeEditOutline className="tooltip-edit-icon" />
									Edit
								</button>
								<button className="tooltip-delete" onClick={() => deleteProject(board.id)}>
									<MdDelete className="tooltip-delete-icon" />
									Delete
								</button>
							</Tooltip>
						</div>
						<p className="card-description">{board.description}</p>
						<div className="card-footer">
							<span className="card-date">{formatDateTime(board.date.seconds)}</span>
							<Link to={`/projects/${board.id}`} className="card-link">
								Ver más
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
