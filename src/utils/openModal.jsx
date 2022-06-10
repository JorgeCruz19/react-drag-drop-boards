import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const openModal = () => {
	const Modal = lazy(() => import("../pages/Projects/ProjectModal"));
	const modalDiv = document.createElement("div");
	modalDiv.id = "modal";
	document.body.appendChild(modalDiv);

	ReactDOM.render(
		<Suspense fallback={<p>Loading.</p>}>
			<Modal root={modalDiv} title="Registro de Proyectos"/>
		</Suspense>,
		modalDiv
	);
};

export default openModal;
