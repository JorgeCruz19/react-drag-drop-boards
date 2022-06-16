import ReactTooltip from "react-tooltip";
import { MdMoreVert, MdModeEditOutline, MdDelete } from "react-icons/md";

import "./tooltip.css";
const Tooltip = ({ id, handleOpenModal, deleteProject }) => {
	const stopDefault = (e) => {
		e.stopPropagation();
	};
	const hide = (e) => {
		ReactTooltip.hide();
	};
	return (
		<div className="tooltip-container">
			<button
				className="tooltip-button"
				data-tip
				data-for={id}
				data-event="click"
				onMouseDown={hide}
			>
				<MdMoreVert />
			</button>
			<ReactTooltip
				id={id}
				place="bottom"
				effect="solid"
				clickable
				globalEventOff="click"
				offset={{ bottom: -5 }}
				className="tooltip"
				arrowColor="#fff"
			>
				<div role="tab">
					<button
						className="tooltip-edit"
						onClick={() => handleOpenModal("edit", id)}
					>
						<MdModeEditOutline className="tooltip-edit-icon" />
						Edit
					</button>
					<button className="tooltip-delete" onClick={() => deleteProject(id)}>
						<MdDelete className="tooltip-delete-icon" />
						Delete
					</button>
				</div>
			</ReactTooltip>
		</div>
	);
};

export default Tooltip;
