import { MdAdd } from "react-icons/md";
import "./addbutton.css";

const AddButton = ({ list, type }) => {
	return (
		<div className="add-button-container">
			<button className="add-button-board">
				{type == "card" ? "Add another card" : "Add another column"}
				<MdAdd />
			</button>
		</div>
	);
};

export default AddButton;
