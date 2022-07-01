import { Droppable, Draggable } from "react-beautiful-dnd";

const CardItem = ({ dropProvided, cards }) => {
	return (
		<div className="inner-list">
			<div style={{ minHeight: 250 }} ref={dropProvided.innerRef}>
				{cards.cards.map((card, index) => (
					<Draggable key={card.id} draggableId={card.id} index={index} shouldRespectForceTouch={false}>
						{(provided, dragSnapshot) => (
							<p
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								className={`card-quote ${dragSnapshot.isDragging && "border"}`}
							>
								{card.title}
							</p>
						)}
					</Draggable>
				))}
				{dropProvided.placeholder}
			</div>
		</div>
	);
};

const CardList = ({ style, listType, list }) => {
	return (
		<Droppable droppableId={list.id} type={listType}>
			{(dropProvided, dropSnapshot) => (
				<div
					{...dropProvided.droppableProps}
					className={`${dropSnapshot.isDraggingOver ? "is-draggingOver" : Boolean(dropSnapshot.draggingFromThisWith) ? "is-draggingFrom" : "gray"}`}
					style={style}
				>
					<CardItem cards={list} dropProvided={dropProvided} />
				</div>
			)}
		</Droppable>
	);
};

export default CardList;
