import { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import "./modal.css";

const dropIn = {
	hidden: {
		opacity: 0,
		transform: "scale(0.9)",
	},
	visible: {
		transform: "scale(1)",
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		transform: "scale(0.9)",
		opacity: 0,
	},
};
const Modal = ({ children, title, root }) => {
	const ref = useRef(null);
	const handleCloseModal = () => {
		unmountComponentAtNode(root);
		document.querySelector("#modal").remove();
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				ref={ref}
				className="modal-container"
			>
				<motion.div
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="modal-inner-container"
				>
					<div className="modal-header">
						<h3 className="modal-title">{title}</h3>
						<button onClick={handleCloseModal} className="modal-close">
							<MdOutlineClose />
						</button>
					</div>
					<div className="modal-content">{children}</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
