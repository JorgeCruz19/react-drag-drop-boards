import ReactTooltip from "react-tooltip";
import { MdMoreHoriz } from "react-icons/md";

import "./tooltip.css";
const Tooltip = ({ id, children }) => {
	const stopDefault = (e) => {
		e.stopPropagation();
	};
	const hide = (e) => {
		ReactTooltip.hide();
	};
	return (
		<div className="tooltip-container">
			<button className="tooltip-button" data-tip data-for={id} data-event="click" onMouseDown={hide}>
				<MdMoreHoriz />
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
				<div role="tab">{children}</div>
			</ReactTooltip>
		</div>
	);
};

export default Tooltip;
