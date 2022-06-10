import "./projects.css";
import { MdAddBox } from "react-icons/md";
import openModal from "../../utils/openModal";
const Projects = () => {
	const handleOpenModal = () => {
		openModal();
	};

	return (
		<>
			<div className="project-container">
				<h1 className="project-title">Projects</h1>
				<MdAddBox onClick={handleOpenModal} className="project-add" />
			</div>
			<div className="card-container">
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<span className="card-date">9 jun 2022</span>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<span className="card-date">9 jun 2022</span>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<span className="card-date">9 jun 2022</span>
				</div>
			</div>
		</>
	);
};

export default Projects;
