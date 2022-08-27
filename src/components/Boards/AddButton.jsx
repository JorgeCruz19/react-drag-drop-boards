import { useState } from "react";
import { MdAdd } from "react-icons/md";
import BoardModal from "../../pages/Board/BoardModal";
import { openModalBoard } from "../../utils/openModal";
import "./addbutton.css";

const AddButton = ({ list, type }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true)
	};

	return (
		<div className="add-button-container">
			<button className="add-button-board" onClick={handleOpenModal}>
				{type == "card" ? "Add another card" : "Add another column"}
				<MdAdd />
			</button>
			{isOpen && (<BoardModal type={type} id={list?.id} setIsOpen={setIsOpen} />)}
		</div>
	);
};

export default AddButton;
