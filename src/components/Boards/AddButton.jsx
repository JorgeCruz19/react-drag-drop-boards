import { MdAdd } from "react-icons/md";
import { openModalBoard } from "../../utils/openModal";
import "./addbutton.css";

const AddButton = ({ list, type }) => {
	const handleOpenModal = (type, id) => {
		openModalBoard(type, id);
	};

	return (
		<div className="add-button-container">
			<button className="add-button-board" onClick={type == "card" ? () => handleOpenModal("card", list.id) : () => handleOpenModal("column")}>
				{type == "card" ? "Add another card" : "Add another column"}
				<MdAdd />
			</button>
		</div>
	);
};

export default AddButton;
