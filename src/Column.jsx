import { Draggable, Droppable } from "react-beautiful-dnd";
import CardItem from "./CardItem";
import AddButton from "./components/Boards/AddButton";
import Title from "./components/Title/Title";

const Column = ({ column, index }) => {
	return (
		<Draggable draggableId={column.id} index={index}>
			{(provided, snapshot) => (
				<article className="column" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<div className={`column-header ${snapshot.isDragging ? "is-active" : ""}`}>
						<Title title={column.title} columnId={column.id} />
					</div>
					<Droppable droppableId={column.id} type="CARD">
						{(dropProvided, dropSnapshot) => (
							<div
								ref={dropProvided.innerRef}
								{...dropProvided.droppableProps}
								className={`${
									dropSnapshot.isDraggingOver ? "is-draggingOver" : Boolean(dropSnapshot.draggingFromThisWith) ? "is-draggingFrom" : "gray"
								}`}
								style={{
									backgroundColor: snapshot.isDragging ? "rgb(227, 252, 239)" : "",
									paddingBottom: 8,
									marginBottom: 10,
								}}
							>
								<div className="inner-card">
									{column.cards.map((card, index) => (
										<CardItem key={card.id} card={card} column={column} index={index} />
									))}

									{dropProvided.placeholder}
								</div>
							</div>
						)}
					</Droppable>
					<AddButton list={column} type={"card"} />
				</article>
			)}
		</Draggable>
	);
};

export default Column;
