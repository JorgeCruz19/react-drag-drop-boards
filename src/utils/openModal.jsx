import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

const openModalProject = (type, id) => {
	const Modal = lazy(() => import("../pages/Projects/ProjectModal"));
	document.body.style.overflow = "hidden";
	const modalDiv = document.createElement("div");
	modalDiv.id = "modal";
	document.body.appendChild(modalDiv);

	ReactDOM.render(
		<Suspense fallback={<p>Loading.</p>}>
			<Modal root={modalDiv} title={type == "edit" ? "Editar Proyecto" : "Registro de Proyecto"} type={type} id={id} />
		</Suspense>,
		modalDiv
	);
};

const openModalBoard = (type, id) => {
	/* const Modal = lazy(() => import("../pages/Board/BoardModal"));
	document.body.style.overflow = "hidden";
	const modalDiv = document.createElement("div");
	modalDiv.id = "modal";
	document.body.appendChild(modalDiv);

	ReactDOM.render(
		<Suspense fallback={<p>Loading.</p>}>
			<Modal root={modalDiv} title={type == "card" ? "Add Card" : "Add Column"} type={type} id={id} />
		</Suspense>,
		modalDiv
	); */
};

export { openModalProject, openModalBoard };
