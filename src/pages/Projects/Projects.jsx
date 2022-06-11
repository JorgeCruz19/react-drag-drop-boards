import { useEffect } from "react";
import {
	collection,
	getDocs,
	onSnapshot,
	query,
	orderBy,
} from "firebase/firestore";
import db from "../../firebase.config";

import "./projects.css";
import { MdAddBox, MdModeEditOutline } from "react-icons/md";
import openModal from "../../utils/openModal";

const Projects = () => {
	useEffect(() => {
		let isMounted = true;
		getAllProjects();
		return () => {
			isMounted = false;
		};
	}, []);

	const getAllProjects = async () => {
		const q = query(collection(db, "projects"), orderBy("date", "asc"));
		onSnapshot(q, (snapShot) => {
			const a = snapShot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});
			console.log(a);
		});
		/* const querySnapshot = await getDocs(collection(db, "projects"));
		querySnapshot.forEach((item) => {
			console.log(item.data());
		}); */
	};
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
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
				<div className="card">
					<h2 className="card-title">Mobile App</h2>
					<p className="card-description">
						Aplicación mobile para llevar el control de lotificaciones{" "}
					</p>
					<div className="card-footer">
						<span className="card-date">9 jun 2022</span>
						<MdModeEditOutline className="card-edit" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Projects;
