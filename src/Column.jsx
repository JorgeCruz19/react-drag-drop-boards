import { Draggable } from "react-beautiful-dnd";
import CardList from "./CardList";
import AddButton from "./components/Boards/AddButton";
import { MdMoreHoriz } from "react-icons/md";

const Column = ({ list, index }) => {
	return (
		<Draggable draggableId={list.id} index={index}>
			{(provided, snapshot) => (
				<div className="column" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<div className={`column-header ${snapshot.isDragging ? "is-active" : ""}`}>
						<h4 className="column-title">{list.title}</h4>
						<MdMoreHoriz className="column-options" />
					</div>
					<CardList
						style={{
							backgroundColor: snapshot.isDragging ? "rgb(227, 252, 239)" : "",
							paddingBottom: 8,
							marginBottom: 10,
						}}
						listType="CARD"
						list={list}
					/>
					<AddButton list={list} type={"card"} />
				</div>
			)}
		</Draggable>
	);
};

export default Column;
