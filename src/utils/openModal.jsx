import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const openModal = (isEdit, id) => {
	const Modal = lazy(() => import("../pages/Projects/ProjectModal"));
	document.body.style.overflow = "hidden";
	const modalDiv = document.createElement("div");
	modalDiv.id = "modal";
	document.body.appendChild(modalDiv);

	ReactDOM.render(
		<Suspense fallback={<p>Loading.</p>}>
			<Modal root={modalDiv} title={isEdit ? "Editar Proyecto" : "Registro de Proyecto"} isEdit={isEdit} id={id} />
		</Suspense>,
		modalDiv
	);
};

export default openModal;
