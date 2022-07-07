import { Draggable } from "react-beautiful-dnd";
import CardList from "./CardList";
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
					<CardList
						style={{
							backgroundColor: snapshot.isDragging ? "rgb(227, 252, 239)" : "",
							paddingBottom: 8,
							marginBottom: 10,
						}}
						listType="CARD"
						list={column}
					/>
					<AddButton list={column} type={"card"} />
				</article>
			)}
		</Draggable>
	);
};

export default Column;
