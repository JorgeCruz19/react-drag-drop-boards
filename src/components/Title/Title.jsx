import { useContext, useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import Tooltip from "../Tooltip/Tooltip";
const Title = ({ title, listId }) => {
	const [open, setOpen] = useState(false);
	const [openOptions, setOpenOptions] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const handleOnBlur = () => {
		/* updateListTitle(newTitle, listId); */
		setOpen(!open);
	};
	return (
		<>
			{open ? (
				<input
					type="text"
					className="column-input-title"
					value={newTitle}
					onChange={(e) => {
						setNewTitle(e.target.value);
					}}
					onBlur={handleOnBlur}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							handleOnBlur();
						}
						return;
					}}
					autoFocus
				/>
			) : (
				<>
					<h4 onClick={() => setOpen(!open)} className="column-title">
						{title}
					</h4>
					<Tooltip id={listId}>
						<button
							className="tooltip-edit"
							onClick={() => {
								setOpen(!open);
							}}
						>
							<MdModeEditOutline className="tooltip-edit-icon" />
							Edit
						</button>
						<button className="tooltip-delete">
							<MdDelete className="tooltip-delete-icon" />
							Delete
						</button>
					</Tooltip>
				</>
			)}
		</>
	);
};

export default Title;
