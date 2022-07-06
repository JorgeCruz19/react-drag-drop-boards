import { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import Tooltip from "../Tooltip/Tooltip";
import { updateColumnTitle } from "../../services/board";

const Title = ({ title, columnId }) => {
	const projectId = window.location.pathname.split("/")[2];
	const [open, setOpen] = useState(false);
	const [newTitle, setNewTitle] = useState(title);
	const handleOnBlur = () => {
		updateColumnTitle(newTitle, projectId, columnId);
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
					<Tooltip id={columnId}>
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
