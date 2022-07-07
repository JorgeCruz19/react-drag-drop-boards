import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdDelete } from "react-icons/md";
import { removeCard } from "./services/board";

const CardItem = ({ dropProvided, cards }) => {
	console.log(cards);
	const projectId = window.location.pathname.split("/")[2];
	const [openTitleCard, setOpenTitleCard] = useState(false);
	const [title, setTitle] = useState();

	const handleOnBlur = () => {
		/* updateColumnTitle(newTitle, projectId, columnId); */
		setOpenTitleCard(!openTitleCard);
	};

	return (
		<div className="inner-card" ref={dropProvided.innerRef}>
			{cards.cards.map((card, index) => (
				<Draggable key={card.id} draggableId={card.id} index={index} shouldRespectForceTouch={false}>
					{(provided, dragSnapshot) => (
						<div
							className={`card-container ${dragSnapshot.isDragging && "border"}`}
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
						>
							{openTitleCard ? (
								<input
									type="text"
									className="card-input-title"
									value={title}
									onChange={(e) => {
										setTitle(e.target.value);
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
								<div className="card-item" onClick={() => setOpenTitleCard(!openTitleCard)}>
									<p className={`card-item-title ${dragSnapshot.isDragging && "border"}`}>{card.title}</p>
									<button className="card-item-button" onClick={() => removeCard(index, projectId, cards, card.id)}>
										<MdDelete />
									</button>
								</div>
							)}
						</div>
					)}
				</Draggable>
			))}
			{dropProvided.placeholder}
		</div>
	);
};

export default CardItem;
