import { useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { data, data2 } from "../../data";
import Column from "../../Column";
import AddButton from "../../components/Boards/AddButton";

const Board = () => {
	const params = useParams();
	const [ordered, setOrdered] = useState(data2.columns);
	const [columns, setColumns] = useState(data2.columns);
	return (
		<div className="App">
			<DragDropContext onDragEnd={null}>
				<Droppable droppableId="board" type="COLUMN" direction="horizontal">
					{(provided) => (
						<div className="columns" {...provided.droppableProps} ref={provided.innerRef}>
							{columns.map((column, index) => (
								<Column key={column.id} index={index} list={column} />
							))}
							{<AddButton type={"column"} />}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Board;
