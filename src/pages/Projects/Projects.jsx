import { useEffect, useState } from "react";
import { MdAddBox, MdModeEditOutline, MdDelete } from "react-icons/md";
import openModal from "../../utils/openModal";
import { formatDateTime } from "../../utils/formatDates";
import {
	getAllProjects,
	editProject,
	deleteProject,
} from "../../services/projects";

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

	const handleOpenModal = (isEdit, id) => {
		openModal(isEdit, id);
	};

	return (
		<>
			<div className="project-container">
				<h1 className="project-title">Projects</h1>
				<MdAddBox
					onClick={() => handleOpenModal(false)}
					className="project-add"
				/>
			</div>
			<div className="card-container">
				{boards.map((board) => (
					<div key={board.id} className="card">
						<h2 className="card-title">{board.name}</h2>
						<p className="card-description">{board.description}</p>
						<div className="card-footer">
							<span className="card-date">
								{formatDateTime(board.date.seconds)}
							</span>
							<div>
								<MdModeEditOutline
									onClick={() => handleOpenModal(true, board.id)}
									className="card-edit"
								/>
								<MdDelete
									onClick={() => deleteProject(board.id)}
									className="card-delete"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
