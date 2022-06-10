import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const openModal = () => {
	const Modal = lazy(() => import("../components/Modal/Modal"));
	const modalDiv = document.createElement("div");
	modalDiv.id = "modal";
	document.body.appendChild(modalDiv);

	ReactDOM.render(
		<Suspense fallback={<p>Loading.</p>}>
			<Modal root={modalDiv} title="Modal">
				Hola
			</Modal>
		</Suspense>,
		modalDiv
	);
};

export default openModal;
