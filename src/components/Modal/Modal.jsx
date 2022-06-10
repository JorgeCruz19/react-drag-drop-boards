import { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import "./modal.css";

const Modal = ({ children, title, root }) => {
	const ref = useRef(null);
	const handleCloseModal = () => {
		unmountComponentAtNode(root);
		document.querySelector("#modal").remove();
	};

	return (
		<div ref={ref} className="modal-container">
			<div className="modal-inner-container">
				<div className="modal-header">
					<h3 className="modal-title">{title}</h3>
					<button onClick={handleCloseModal} className="modal-close">
						<MdOutlineClose />
					</button>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
