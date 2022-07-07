import { Droppable } from "react-beautiful-dnd";
import CardItem from "./CardItem";

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
