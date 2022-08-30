import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";
import { removeCard, updateCardTitle } from "../../services/board";
import { useColumnsContext } from "../../hooks/useColumnsContext";

const CardItem = ({ column, card, index }) => {
	const projectId = window.location.pathname.split("/")[2];
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState(card.title);
	const { dispatch } = useColumnsContext();

	const handleFocus = (e) => {
		var temp_value = e.target.value;
		e.target.value = "";
		e.target.value = temp_value;
	};

	const handleOnBlur = () => {
		dispatch({
			type: "UPDATE_TITLE_CARD",
			payload: {
				title,
				id: column.id,
				cardId: card.id,
			},
		});
		updateCardTitle(title, projectId, column, card.id);
		setOpen(!open);
	};

	return (
		<Draggable draggableId={card.id} index={index} shouldRespectForceTouch={false}>
			{(provided, dragSnapshot) => (
				<div
					className={`card-container-board ${dragSnapshot.isDragging && "border"}`}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{open ? (
						<TextareaAutosize
							type="text"
							ref={textareaRef}
							className="card-input-title"
							value={title}
							onFocus={handleFocus}
							onChange={(e) => setTitle(e.target.value)}
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
						<div className="card-item" onClick={() => setOpen(!open)}>
							<p className={`card-item-title ${dragSnapshot.isDragging && "border"}`}>{card.title}</p>
							<button
								className="card-item-button"
								onClick={(e) => {
									e.stopPropagation();
									dispatch({ type: "DELETE_CARD", payload: { id: column.id, cardId: card.id } });
									removeCard(projectId, column, card.id);
								}}
							>
								<MdDelete />
							</button>
						</div>
					)}
				</div>
			)}
		</Draggable>
	);
};

export default CardItem;
